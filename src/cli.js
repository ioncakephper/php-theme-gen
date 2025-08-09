const { createProgram } = require('./program');

/**
 * The main function for the CLI.
 * @param {string[]} args The command-line arguments.
 */
async function run(args) {
  const program = createProgram();
  await program.parseAsync(args, { from: 'user' });
}

module.exports = {
  run,
};
