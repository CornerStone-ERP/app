/*!
 * Copyright (C) 2020 Ioan CHIRIAC (GPL 3.0 License)
 * This file is part of CornerStone ERP
 * See LICENSE file for full copyright and licensing details.
 * @authors https://github.com/CornerStone-ERP/model/graphs/contributors
 * @url https://cornerstone-erp.com
 */
/**
 * Controls the way to access on objects
 */
module.exports = {
  canCreate: function(record) {
    return true;
  },
  canRead: function(record) {
    return true;
  },
  canUpdate: function(record) {
    return true;
  },
  canDelete: function(record) {
    return true;
  },
  getRequest: function(model) {
    return true;
  }
};