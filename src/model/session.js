/*!
 * Copyright (C) 2020 Ioan CHIRIAC (GPL 3.0 License)
 * This file is part of CornerStone ERP
 * See LICENSE file for full copyright and licensing details.
 * @authors https://github.com/CornerStone-ERP/model/graphs/contributors
 * @url https://cornerstone-erp.com
 */
const Material = require('@cornerstone-erp/material');

class Session extends Material.Session {
  /**
   * Defines a session used during the request :
   * 
   * - acl
   * - user_id
   * - structure_id
   * - lang
   * - currency
   * - date
   * - ip
   * - browser
   * 
   * The acl is the level of access granted to the user, see acl object for more details
   */
  constructor(acl, user_id, structure_id, lang, currency, date, ip, browser) {
    this._acl = acl;
    this._user_id = user_id || 1;
    this._structure_id = structure_id || 1;
    this._lang = lang || 'en_US';
    this._currency = currency || 'USD';
    this._date = date || new Date();
    this._ip = ip || '0.0.0.0';
    this._browser = browser || 'unknown';
  }

  model(name) {

  }

  
}

/**
 * Expose the new class
 */
module.exports = Material.Session = Session;