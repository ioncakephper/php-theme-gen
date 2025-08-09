// Gemini: export the loadCommands function which loads commands from the commands directory and its subdirectories recursively.
const fs = require('fs');
const path = require('path');
const { Command } = require('commander');
/**
 * Loads commands from the commands directory and its subdirectories recursively.
 * @param {Command} program The Commander program instance.
 * @param {string} commandsDir The directory containing command files.
 * @returns {void}
 */
function loadCommands(program, commandsDir) {
  //   const commandsDir = path.join(__dirname, 'commands');

  // Gemini: Read all files in the commands directory
  fs.readdirSync(commandsDir).forEach((file) => {
    const filePath = path.join(commandsDir, file);
    const stat = fs.statSync(filePath);

    // Gemini: If the file is a directory, recursively load commands from it
    if (stat.isDirectory()) {
      loadCommands(program);
    } else if (file.endsWith('.js')) {
      // Gemini: If the file is a JavaScript file, require it and invoke the exported function with the program instance
      const commandModule = require(filePath);
      commandModule(program);
    }
  });
}

module.exports = {
  loadCommands,
};
