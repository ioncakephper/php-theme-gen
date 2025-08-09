const { Command } = require('commander');
const path = require('path');

/**
 * Creates and configures the Commander program.
 * @returns {Command} The configured Commander program instance.
 */
function createProgram() {
  const program = new Command();

  program
    .name('php-theme-gen')
    .description('CLI to generate PHP theme files')
    .version('0.0.1');

  // Gemini: invoke loadCommands function passing it the program instance. The loadCommands
  // function loads commands for the CLI from the commands directory. In the commands directory,
  // each file exports a function that takes the program instance as an argument and adds commands to
  // the program. The loadCommands looks at javascript files in the commands directory and its subdirectories recursively.
  // the loadCommands is a module defined in the src/utils/loadCommands.js file.
  const { loadCommands } = require('./utils/loadCommands');
  loadCommands(program, path.join(__dirname, 'commands'));

  program.configureHelp({
    sortSubcommands: true,
    sortOptions: true,
  });

  // Define commands and options here
  // Example:
  // program.command('generate')
  //   .description('Generate theme files')
  //   .action(() => {
  //     console.log('Generating theme files...');
  //   });

  return program;
}

module.exports = {
  createProgram,
};
