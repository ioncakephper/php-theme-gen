const { main } = require('../src/index');
const { run } = require('../src/cli');

// Mock the cli module
jest.mock('../src/cli', () => ({
  run: jest.fn(),
}));

// Mock process.exit and console.error
const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
const mockConsoleError = jest
  .spyOn(console, 'error')
  .mockImplementation(() => {});

describe('main function in index.js', () => {
  beforeEach(() => {
    // Clear mocks before each test
    jest.clearAllMocks();
  });

  test('should call the run function with process arguments', async () => {
    // Set up process.argv for the test
    const testArgs = ['arg1', 'arg2'];
    process.argv = ['node', 'script.js', ...testArgs];

    await main();

    expect(run).toHaveBeenCalledWith(testArgs);
  });

  test('should call process.exit(1) if run function throws an error', async () => {
    const errorMessage = 'Something went wrong';
    run.mockRejectedValue(new Error(errorMessage));

    await main();

    expect(mockConsoleError).toHaveBeenCalledWith('Error:', errorMessage);
    expect(mockExit).toHaveBeenCalledWith(1);
  });
});
