const { createThemeFile } = require('../utils/createThemeFile');
const path = require('path');

module.exports = (program) => {
  program
    .command('build [sourceFile]')
    .alias('b')
    .description('Builds the WordPress theme from a source HTML file.')
    .option('-o, --output <dir>', 'The output directory for the theme.', 'dist')
    .option('--themeName <name>', 'The name of the theme.', 'MyTheme')
    .option('--themeURI <uri>', 'The theme URI.')
    .option('--author <name>', 'The author of the theme.')
    .option('--authorURI <uri>', 'The author URI.')
    .option('--description <text>', 'The theme description.')
    .option('--tags <tags>', 'Comma-separated tags for the theme.')

    .configureHelp({
      sortSubcommands: true,
      sortOptions: true,
    })
    .action((sourceFile, options) => {
      try {
        const absoluteSourcePath = path.resolve(sourceFile);
        console.log(`Starting theme generation from: ${absoluteSourcePath}`);
        createThemeFile(absoluteSourcePath, options);
        console.log('\nTheme generated successfully! ✨');
        console.log(`Output directory: ${path.resolve(options.output)}`);
      } catch (error) {
        console.error(`\n❌ Error generating theme: ${error.message}`);
        process.exit(1);
      }
    });
};
