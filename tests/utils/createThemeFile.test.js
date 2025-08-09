// const fs = require('fs');
// const path = require('path');
// const { createThemeFile } = require('../../src/utils/createThemeFile');

// Mock the entire fs module
jest.mock('fs');

// const generateFileHeader = (fileName, themeName, isMain = false) => {
//   const name = path.basename(fileName, '.php');
//   const description = isMain
//     ? `The main template file for the ${themeName} theme.`
//     : `The template for displaying the ${name}.`;

//   return `<?php
// /**
//  * ${description}
//  * @package ${themeName}
//  */
// ?>\n`;
// };

describe('createThemeFile', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should throw an error if the source file does not exist', () => {
    fs.readFileSync.mockImplementation(() => {
      const error = new Error(`ENOENT: no such file or directory`);
      error.code = 'ENOENT';
      throw error;
    });

    expect(() => {
      createThemeFile('nonexistent.html', {});
    }).toThrow('Source file not found: nonexistent.html');
  });

  const fs = require('fs');
  const path = require('path');
  const { createThemeFile } = require('../../src/utils/createThemeFile');

  // Mock the entire fs module
  jest.mock('fs');

  const generateFileHeader = (fileName, themeName, isMain = false) => {
    const name = path.basename(fileName, '.php');
    const description = isMain
      ? `The main template file for the ${themeName} theme.`
      : `The template for displaying the ${name}.`;

    return `<?php
/**
 * ${description}
 * @package ${themeName}
 */
?>\n`;
  };

  describe('createThemeFile', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    test('should throw an error if the source file does not exist', () => {
      fs.readFileSync.mockImplementation(() => {
        const error = new Error(`ENOENT: no such file or directory`);
        error.code = 'ENOENT';
        throw error;
      });

      expect(() => {
        createThemeFile('nonexistent.html', {});
      }).toThrow('Source file not found: nonexistent.html');
    });

    test('should create main php file, style.css, and functions.php if no wp:file tags are present', () => {
      const sourceFile = 'index.html';
      const sourceContent = '<html><body>Hello</body></html>';
      const options = { output: 'dist', themeName: 'TestTheme' };
      fs.readFileSync.mockReturnValue(sourceContent);
      fs.existsSync.mockReturnValue(true);

      createThemeFile(sourceFile, options);

      const expectedPhpPath = path.join('dist', 'index.php');
      const expectedHeader = generateFileHeader(
        'index.php',
        options.themeName,
        true,
      );
      expect(fs.writeFileSync).toHaveBeenCalledWith(
        expectedPhpPath,
        expectedHeader + sourceContent,
      );

      const expectedCssPath = path.join('dist', 'style.css');
      expect(fs.writeFileSync).toHaveBeenCalledWith(
        expectedCssPath,
        expect.stringContaining(`Theme Name: ${options.themeName}`),
      );

      const expectedFunctionsPath = path.join('dist', 'functions.php');
      expect(fs.writeFileSync).toHaveBeenCalledWith(
        expectedFunctionsPath,
        expect.stringContaining(`@package ${options.themeName}`),
      );
      expect(fs.writeFileSync).toHaveBeenCalledWith(
        expectedFunctionsPath,
        expect.stringContaining(
          `function ${options.themeName.toLowerCase().replace(/\s+/g, '-')}_setup()`,
        ),
      );

      expect(fs.writeFileSync).toHaveBeenCalledTimes(3);
    });

    test('should create part files, main file, style.css, and functions.php with all headers', () => {
      const sourceFile = 'template.html';
      const options = {
        output: 'my-theme',
        themeName: 'MyAwesomeTheme',
        author: 'Test Author',
      };
      const sourceContent = `
      <!-- wp:file name="header" -->
      <head><title>My Theme</title></head>
      <!-- /wp:file -->
      <!-- wp:file name="footer" -->
      <footer>&copy; 2025</footer>
      <!-- /wp:file -->
    `;
      const expectedMainContent = `
      <?php get_header(); ?>
      <?php get_footer(); ?>
    `;

      fs.readFileSync.mockReturnValue(sourceContent);
      fs.existsSync.mockReturnValue(false);

      createThemeFile(sourceFile, options);

      expect(fs.mkdirSync).toHaveBeenCalledWith(options.output, {
        recursive: true,
      });

      // Check header.php
      const headerPath = path.join(options.output, 'header.php');
      const headerContent = '<head><title>My Theme</title></head>';
      const headerHeader = generateFileHeader('header.php', options.themeName);
      expect(fs.writeFileSync).toHaveBeenCalledWith(
        headerPath,
        headerHeader + headerContent,
      );

      // Check footer.php
      const footerPath = path.join(options.output, 'footer.php');
      const footerContent = '<footer>&copy; 2025</footer>';
      const footerHeader = generateFileHeader('footer.php', options.themeName);
      expect(fs.writeFileSync).toHaveBeenCalledWith(
        footerPath,
        footerHeader + footerContent,
      );

      // Check main theme file (template.php)
      const mainThemePath = path.join(options.output, 'template.php');
      const mainHeader = generateFileHeader(
        'template.php',
        options.themeName,
        true,
      );
      expect(fs.writeFileSync).toHaveBeenCalledWith(
        mainThemePath,
        mainHeader + expectedMainContent,
      );

      // Check style.css
      const styleCssPath = path.join(options.output, 'style.css');
      expect(fs.writeFileSync).toHaveBeenCalledWith(
        styleCssPath,
        expect.stringContaining(`Theme Name: ${options.themeName}`),
      );
      expect(fs.writeFileSync).toHaveBeenCalledWith(
        styleCssPath,
        expect.stringContaining(`Author: ${options.author}`),
      );

      // Check functions.php
      const functionsPhpPath = path.join(options.output, 'functions.php');
      expect(fs.writeFileSync).toHaveBeenCalledWith(
        functionsPhpPath,
        expect.stringContaining(`@package ${options.themeName}`),
      );
      expect(fs.writeFileSync).toHaveBeenCalledWith(
        functionsPhpPath,
        expect.stringContaining(
          `function ${options.themeName.toLowerCase().replace(/\s+/g, '-')}_setup()`,
        ),
      );

      expect(fs.writeFileSync).toHaveBeenCalledTimes(5);
    });
  });
});
