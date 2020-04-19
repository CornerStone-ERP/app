/*!
 * Copyright (C) 2020 (GPL 3.0 License)
 * This file is part of CornerStone ERP
 * See LICENSE file for full copyright and licensing details.
 * @authors https://github.com/CornerStone-ERP/model/graphs/contributors
 * @url https://cornerstone-erp.com
 */
const Material = require('@cornerstone-erp/material');

class Model extends Material.Model {
  request() {
    const request = super.request();
    
    const transaction = this.transaction();
    return new Session(this, transaction);
  }
}

/**
 * Expose the new class
 */
module.exports = Material.Model = Model;