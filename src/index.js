const { run } = require('./cli');

/**
 * The main entry point for the application.
 * It parses command-line arguments and runs the corresponding command.
 */
async function main() {
  try {
    await run(process.argv.slice(2));
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  main,
};
