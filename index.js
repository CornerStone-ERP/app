#!/usr/bin/node

const pkg = require('./package.json');
const commander = require('commander');
const colors = require('colors');

const program = new commander.Command();

program.version(pkg.version);
program.option('--debug', 'Enable the debug mode');
program.option('--db <uri>', 'Database uri');
program.option('--db-name <name>', 'Database name', 'erp');
program.option('--db-user <user>', 'Database username', 'root');
program.option('--db-pwd <pwd>', 'Database password', '');
program.option('--db-host <host>', 'Database address', '127.0.0.1');
program.option('--db-port <port>', 'Database port', 3306);
// @todo : mariadb, postgres
program.option('--db-dialect <dialect>', 'Database type (mysql, sqlite3)', 'mysql');
program.option('--http-port <port>', 'HTTP server port', 1978);
program.option('--http-hostname <host>', 'HTTP hostname (inet)', '127.0.0.1');
program.requiredOption('--modules <list>', 'List of modules path', function(value) {
  return value.split(',');
});


/**
 * The start command
 */
program
  .command('start')
  .description('Starts the server (master)')
  .action(function() {
    require('./cli/start')(program);
  });

program
  .command('slave')
  .description('Starts the in slave mode')
  .action(function() {
    require('./cli/start')(program);
  });

/**
 * The installer command
 */
program
  .command('deploy')
  .description('Launch the installer')
  .action(function() {
    require('./cli/install')(program);
  });

program
  .command('enable <module>')
  .description('Enables a module')
  .action(function(module) {
    throw new Error('@todo');
  });

program
  .command('disable <module>')
  .description('Disables a module')
  .action(function(module) {
    throw new Error('@todo');
  });

program
  .command('install <module>')
  .description('Installs the specified module')
  .action(function(module) {
    throw new Error('@todo');
  });


// error on unknown commands
program.on('command:*', function () {
  console.error(
    "\n" +
    colors.red(
`ERROR : Invalid command: ${program.args.join(' ')}.  
Please you must use a command (start, install, ...)`
    ) + "\n"
  );
  program.outputHelp();
  process.exit(1);
});

// start to run

program.parse(process.argv);
