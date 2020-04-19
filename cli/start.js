const App = require('./bootstrap');

module.exports = function(options) {
  const [app, ready] = App(options, 'server.log');
  app.console.info("** Starting the ERP **");
  const profiler = app.console.startTimer();    
  ready.then(function() {
    profiler.done({ message: 'App is ready' });
    app.http.listen(options.httpPort, options.httpHostname, function() {
      app.console.info(
        `Server is running on http://${options.httpHostname}:${options.httpPort}/`
      );
    });
  }).catch(function(err) {
    app.console.error(err);
  })
};