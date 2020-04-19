const logger = require('./logger');
const db = require('./database');
const App = require('../src/app');


module.exports = function(options, logFile) {
  let console = logger(
    options.debug ? 'debug': 'info', logFile
  );
  const app = new App(options.modules, console);
  const wait = app.load().then(function() {
    return db(options, console);
  }).then((conn) => {
    app.database(conn);
  }).catch((err) => {
    console.log({ 
      level: "error", 
      message: err.message,
      stack: err.stack 
    });
  });
  return [app, wait];
}