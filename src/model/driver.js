/*!
 * Copyright (C) 2020 Ioan CHIRIAC (GPL 3.0 License)
 * This file is part of CornerStone ERP
 * See LICENSE file for full copyright and licensing details.
 * @authors https://github.com/CornerStone-ERP/model/graphs/contributors
 * @url https://cornerstone-erp.com
 */
const Material = process.env.PROPHET ? require('@cornerstone-erp/prophet') : require('@cornerstone-erp/material');
const Session = require('./session');
class Driver extends Material.Driver {
  session() {
    const transaction = this.transaction();
    return new Session(this, transaction);
  }
}

/**
 * Expose the new class
 */
module.exports = Material.Driver = Driver;