const App = require('./bootstrap');

module.exports = function(options) {
  const [app, ready] = App(options, 'server.log');
  app.console.info("** Installing the ERP **");
  ready.then(function() {
    app.console.warn('-> Creating the database');
    return app.conn.sync({
      force: true,
      hooks: true
    });
  }).then(function() {
    app.console.info('App is ready');
  }).catch(function(err) {
    app.console.error(err);
    process.exit(1);
  });
};