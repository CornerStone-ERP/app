const Sequelize = require('sequelize');

module.exports = function(options, console) {
  const logger = console.child({ label: 'db' });
  const dbLog = function(msg) {
    logger.verbose(msg);
  };
  logger.info('Connecting to database');
  if (options.db) {
    db = new Sequelize(options.db, { logging: dbLog });
  } else {
    db = new Sequelize(
      options.dbName, options.dbUser, options.dbPwd, {
        host: options.dbHost,
        dialect: options.dbDialect,
        logging: dbLog
      }
    );
  }
  return db.authenticate().then(function() {
    return db;
  });
};