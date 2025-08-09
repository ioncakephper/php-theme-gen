const fs = require('fs');
const path = require('path');

module.exports = (program) => {
  program
    .command('new')
    .alias('n')
    .argument('<templateName>', 'The name of the new template.')
    .description(
      'Generates a new HTML template file with WordPress theme tags.',
    )
    .option(
      '-o, --output <dir>',
      'The output directory for the new template.',
      '.',
    )
    .action((templateName, options) => {
      try {
        const outputDir = options.output || '.';
        if (!fs.existsSync(outputDir)) {
          fs.mkdirSync(outputDir, { recursive: true });
        }

        const templateContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${templateName}</title>
</head>
<body>

    <!-- wp:file name="header" -->
    <header>
        <h1>${templateName} Header</h1>
    </header>
    <!-- /wp:file -->

    <main>
        <h2>Welcome to ${templateName}</h2>
        <p>This is the main content area.</p>
    </main>

    <!-- wp:file name="footer" -->
    <footer>
        <p>&copy; ${new Date().getFullYear()} ${templateName}</p>
    </footer>
    <!-- /wp:file -->

</body>
</html>
`;

        const outputPath = path.join(outputDir, `${templateName}.html`);
        fs.writeFileSync(outputPath, templateContent);
        console.log(`Successfully created new template: ${outputPath}`);
      } catch (error) {
        console.error(`❌ Error creating new template: ${error.message}`);
        process.exit(1);
      }
    });
};
