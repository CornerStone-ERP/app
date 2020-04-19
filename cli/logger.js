const winston = require('winston');
const printer = function(info) {
  if (!info.label) {
    info.label = 'sys';
  }
  info.label = '[' + info.label + ']';
  if (info.label.length < 10) {
    info.label += ' '.repeat(10 - info.label.length);
  } else {
    info.label = info.label.substring(0, 4) + '…' + info.label.substring(info.label.length - 5);
  }
  let spacer = ' ';
  let size = info.level[0] == '\u001b' ? 18 : 8;
  if (info.level.length < size) {
    spacer += ' '.repeat(size - info.level.length);
  }
  if (info.durationMs) {
    if (info.durationMs < 2000) {
      info.message += ' (🕑 ' + info.durationMs + 'ms)';
    } else {
      let duration = Math.round(info.durationMs / 100) / 10;
      if (duration < 60) {
        info.message += ' (🕑 ' + duration + 's)';
      } else {
        durationSec = Math.round(duration % 60);
        duration = Math.round(duration / 60);
        info.message += ' (🕑 ' + duration + 'm'+durationSec+'s)';
      }
    }
  }
  if (info.stack) {
    info.message = info.stack;
  }
  return `${info.timestamp} - ${info.level}${spacer}${info.label} ${info.message}`;
};
module.exports = function(level, target) {
  return winston.createLogger({
    level: level,
    format: winston.format.timestamp(),
    transports: [
      new winston.transports.Console({
        format: winston.format.combine(
          winston.format.colorize(),
          winston.format.printf(printer)
        )
      }),
      new winston.transports.File({ 
        filename: target,
        format: winston.format.printf(printer)
      })
    ]
  });
};