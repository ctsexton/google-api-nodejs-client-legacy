/**
 * Copyright 2014 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* jshint maxlen: false */

'use strict';

var createAPIRequest = require('../../lib/apirequest');

/**
 * Fusion Tables API
 *
 * @classdesc API for working with Fusion Tables data.
 * @namespace fusiontables
 * @version  v2
 * @variation v2
 * @this Fusiontables
 * @param {object=} options Options for Fusiontables
 */
function Fusiontables(options) {

  var self = this;
  this._options = options || {};

  this.column = {

    /**
     * fusiontables.column.delete
     *
     * @desc Deletes the specified column.
     *
     * @alias fusiontables.column.delete
     * @memberOf! fusiontables(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.columnId - Name or identifier for the column being deleted.
     * @param  {string} params.tableId - Table from which the column is being deleted.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v2/tables/{tableId}/columns/{columnId}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['tableId', 'columnId'],
        pathParams: ['columnId', 'tableId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * fusiontables.column.get
     *
     * @desc Retrieves a specific column by its ID.
     *
     * @alias fusiontables.column.get
     * @memberOf! fusiontables(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.columnId - Name or identifier for the column that is being requested.
     * @param  {string} params.tableId - Table to which the column belongs.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v2/tables/{tableId}/columns/{columnId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['tableId', 'columnId'],
        pathParams: ['columnId', 'tableId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * fusiontables.column.insert
     *
     * @desc Adds a new column to the table.
     *
     * @alias fusiontables.column.insert
     * @memberOf! fusiontables(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.tableId - Table for which a new column is being added.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v2/tables/{tableId}/columns',
          method: 'POST'
        },
        params: params,
        requiredParams: ['tableId'],
        pathParams: ['tableId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * fusiontables.column.list
     *
     * @desc Retrieves a list of columns.
     *
     * @alias fusiontables.column.list
     * @memberOf! fusiontables(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer=} params.maxResults - Maximum number of columns to return. Default is 5.
     * @param  {string=} params.pageToken - Continuation token specifying which result page to return.
     * @param  {string} params.tableId - Table whose columns are being listed.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v2/tables/{tableId}/columns',
          method: 'GET'
        },
        params: params,
        requiredParams: ['tableId'],
        pathParams: ['tableId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * fusiontables.column.patch
     *
     * @desc Updates the name or type of an existing column. This method supports patch semantics.
     *
     * @alias fusiontables.column.patch
     * @memberOf! fusiontables(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.columnId - Name or identifier for the column that is being updated.
     * @param  {string} params.tableId - Table for which the column is being updated.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v2/tables/{tableId}/columns/{columnId}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['tableId', 'columnId'],
        pathParams: ['columnId', 'tableId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * fusiontables.column.update
     *
     * @desc Updates the name or type of an existing column.
     *
     * @alias fusiontables.column.update
     * @memberOf! fusiontables(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.columnId - Name or identifier for the column that is being updated.
     * @param  {string} params.tableId - Table for which the column is being updated.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v2/tables/{tableId}/columns/{columnId}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['tableId', 'columnId'],
        pathParams: ['columnId', 'tableId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.query = {

    /**
     * fusiontables.query.sql
     *
     * @desc Executes a Fusion Tables SQL statement, which can be any of  - SELECT - INSERT - UPDATE - DELETE - SHOW - DESCRIBE - CREATE statement.
     *
     * @alias fusiontables.query.sql
     * @memberOf! fusiontables(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {boolean=} params.hdrs - Whether column names are included in the first row. Default is true.
     * @param  {string} params.sql - A Fusion Tables SQL statement, which can be any of  - SELECT - INSERT - UPDATE - DELETE - SHOW - DESCRIBE - CREATE
     * @param  {boolean=} params.typed - Whether typed values are returned in the (JSON) response: numbers for numeric values and parsed geometries for KML values. Default is true.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    sql: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v2/query',
          method: 'POST'
        },
        params: params,
        requiredParams: ['sql'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * fusiontables.query.sqlGet
     *
     * @desc Executes a SQL statement which can be any of  - SELECT - SHOW - DESCRIBE
     *
     * @alias fusiontables.query.sqlGet
     * @memberOf! fusiontables(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {boolean=} params.hdrs - Whether column names are included (in the first row). Default is true.
     * @param  {string} params.sql - A SQL statement which can be any of  - SELECT - SHOW - DESCRIBE
     * @param  {boolean=} params.typed - Whether typed values are returned in the (JSON) response: numbers for numeric values and parsed geometries for KML values. Default is true.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    sqlGet: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v2/query',
          method: 'GET'
        },
        params: params,
        requiredParams: ['sql'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.style = {

    /**
     * fusiontables.style.delete
     *
     * @desc Deletes a style.
     *
     * @alias fusiontables.style.delete
     * @memberOf! fusiontables(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer} params.styleId - Identifier (within a table) for the style being deleted
     * @param  {string} params.tableId - Table from which the style is being deleted
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v2/tables/{tableId}/styles/{styleId}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['tableId', 'styleId'],
        pathParams: ['styleId', 'tableId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * fusiontables.style.get
     *
     * @desc Gets a specific style.
     *
     * @alias fusiontables.style.get
     * @memberOf! fusiontables(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer} params.styleId - Identifier (integer) for a specific style in a table
     * @param  {string} params.tableId - Table to which the requested style belongs
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v2/tables/{tableId}/styles/{styleId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['tableId', 'styleId'],
        pathParams: ['styleId', 'tableId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * fusiontables.style.insert
     *
     * @desc Adds a new style for the table.
     *
     * @alias fusiontables.style.insert
     * @memberOf! fusiontables(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.tableId - Table for which a new style is being added
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v2/tables/{tableId}/styles',
          method: 'POST'
        },
        params: params,
        requiredParams: ['tableId'],
        pathParams: ['tableId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * fusiontables.style.list
     *
     * @desc Retrieves a list of styles.
     *
     * @alias fusiontables.style.list
     * @memberOf! fusiontables(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer=} params.maxResults - Maximum number of styles to return. Optional. Default is 5.
     * @param  {string=} params.pageToken - Continuation token specifying which result page to return. Optional.
     * @param  {string} params.tableId - Table whose styles are being listed
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v2/tables/{tableId}/styles',
          method: 'GET'
        },
        params: params,
        requiredParams: ['tableId'],
        pathParams: ['tableId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * fusiontables.style.patch
     *
     * @desc Updates an existing style. This method supports patch semantics.
     *
     * @alias fusiontables.style.patch
     * @memberOf! fusiontables(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer} params.styleId - Identifier (within a table) for the style being updated.
     * @param  {string} params.tableId - Table whose style is being updated.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v2/tables/{tableId}/styles/{styleId}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['tableId', 'styleId'],
        pathParams: ['styleId', 'tableId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * fusiontables.style.update
     *
     * @desc Updates an existing style.
     *
     * @alias fusiontables.style.update
     * @memberOf! fusiontables(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer} params.styleId - Identifier (within a table) for the style being updated.
     * @param  {string} params.tableId - Table whose style is being updated.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v2/tables/{tableId}/styles/{styleId}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['tableId', 'styleId'],
        pathParams: ['styleId', 'tableId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.table = {

    /**
     * fusiontables.table.copy
     *
     * @desc Copies a table.
     *
     * @alias fusiontables.table.copy
     * @memberOf! fusiontables(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {boolean=} params.copyPresentation - Whether to also copy tabs, styles, and templates. Default is false.
     * @param  {string} params.tableId - ID of the table that is being copied.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    copy: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v2/tables/{tableId}/copy',
          method: 'POST'
        },
        params: params,
        requiredParams: ['tableId'],
        pathParams: ['tableId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * fusiontables.table.delete
     *
     * @desc Deletes a table.
     *
     * @alias fusiontables.table.delete
     * @memberOf! fusiontables(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.tableId - ID of the table to be deleted.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v2/tables/{tableId}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['tableId'],
        pathParams: ['tableId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * fusiontables.table.get
     *
     * @desc Retrieves a specific table by its ID.
     *
     * @alias fusiontables.table.get
     * @memberOf! fusiontables(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.tableId - Identifier for the table being requested.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v2/tables/{tableId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['tableId'],
        pathParams: ['tableId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * fusiontables.table.importRows
     *
     * @desc Imports more rows into a table.
     *
     * @alias fusiontables.table.importRows
     * @memberOf! fusiontables(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.delimiter - The delimiter used to separate cell values. This can only consist of a single character. Default is ,.
     * @param  {string=} params.encoding - The encoding of the content. Default is UTF-8. Use auto-detect if you are unsure of the encoding.
     * @param  {integer=} params.endLine - The index of the line up to which data will be imported. Default is to import the entire file. If endLine is negative, it is an offset from the end of the file; the imported content will exclude the last endLine lines.
     * @param  {boolean=} params.isStrict - Whether the imported CSV must have the same number of values for each row. If false, rows with fewer values will be padded with empty values. Default is true.
     * @param  {integer=} params.startLine - The index of the first line from which to start importing, inclusive. Default is 0.
     * @param  {string} params.tableId - The table into which new rows are being imported.
     * @param  {object} params.media - Media object
     * @param  {string} params.media.mimeType - Media mime-type
     * @param  {string|object} params.media.body - Media body contents
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    importRows: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v2/tables/{tableId}/import',
          method: 'POST'
        },
        params: params,
        mediaUrl: 'https://www.googleapis.com/upload/fusiontables/v2/tables/{tableId}/import',
        requiredParams: ['tableId'],
        pathParams: ['tableId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * fusiontables.table.importTable
     *
     * @desc Imports a new table.
     *
     * @alias fusiontables.table.importTable
     * @memberOf! fusiontables(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.delimiter - The delimiter used to separate cell values. This can only consist of a single character. Default is ,.
     * @param  {string=} params.encoding - The encoding of the content. Default is UTF-8. Use auto-detect if you are unsure of the encoding.
     * @param  {string} params.name - The name to be assigned to the new table.
     * @param  {object} params.media - Media object
     * @param  {string} params.media.mimeType - Media mime-type
     * @param  {string|object} params.media.body - Media body contents
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    importTable: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v2/tables/import',
          method: 'POST'
        },
        params: params,
        mediaUrl: 'https://www.googleapis.com/upload/fusiontables/v2/tables/import',
        requiredParams: ['name'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * fusiontables.table.insert
     *
     * @desc Creates a new table.
     *
     * @alias fusiontables.table.insert
     * @memberOf! fusiontables(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v2/tables',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * fusiontables.table.list
     *
     * @desc Retrieves a list of tables a user owns.
     *
     * @alias fusiontables.table.list
     * @memberOf! fusiontables(v2)
     *
     * @param  {object=} params - Parameters for request
     * @param  {integer=} params.maxResults - Maximum number of tables to return. Default is 5.
     * @param  {string=} params.pageToken - Continuation token specifying which result page to return.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v2/tables',
          method: 'GET'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * fusiontables.table.patch
     *
     * @desc Updates an existing table. Unless explicitly requested, only the name, description, and attribution will be updated. This method supports patch semantics.
     *
     * @alias fusiontables.table.patch
     * @memberOf! fusiontables(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {boolean=} params.replaceViewDefinition - Whether the view definition is also updated. The specified view definition replaces the existing one. Only a view can be updated with a new definition.
     * @param  {string} params.tableId - ID of the table that is being updated.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v2/tables/{tableId}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['tableId'],
        pathParams: ['tableId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * fusiontables.table.replaceRows
     *
     * @desc Replaces rows of an existing table. Current rows remain visible until all replacement rows are ready.
     *
     * @alias fusiontables.table.replaceRows
     * @memberOf! fusiontables(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.delimiter - The delimiter used to separate cell values. This can only consist of a single character. Default is ,.
     * @param  {string=} params.encoding - The encoding of the content. Default is UTF-8. Use 'auto-detect' if you are unsure of the encoding.
     * @param  {integer=} params.endLine - The index of the line up to which data will be imported. Default is to import the entire file. If endLine is negative, it is an offset from the end of the file; the imported content will exclude the last endLine lines.
     * @param  {boolean=} params.isStrict - Whether the imported CSV must have the same number of column values for each row. If true, throws an exception if the CSV does not have the same number of columns. If false, rows with fewer column values will be padded with empty values. Default is true.
     * @param  {integer=} params.startLine - The index of the first line from which to start importing, inclusive. Default is 0.
     * @param  {string} params.tableId - Table whose rows will be replaced.
     * @param  {object} params.media - Media object
     * @param  {string} params.media.mimeType - Media mime-type
     * @param  {string|object} params.media.body - Media body contents
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    replaceRows: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v2/tables/{tableId}/replace',
          method: 'POST'
        },
        params: params,
        mediaUrl: 'https://www.googleapis.com/upload/fusiontables/v2/tables/{tableId}/replace',
        requiredParams: ['tableId'],
        pathParams: ['tableId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * fusiontables.table.update
     *
     * @desc Updates an existing table. Unless explicitly requested, only the name, description, and attribution will be updated.
     *
     * @alias fusiontables.table.update
     * @memberOf! fusiontables(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {boolean=} params.replaceViewDefinition - Whether the view definition is also updated. The specified view definition replaces the existing one. Only a view can be updated with a new definition.
     * @param  {string} params.tableId - ID of the table that is being updated.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v2/tables/{tableId}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['tableId'],
        pathParams: ['tableId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.task = {

    /**
     * fusiontables.task.delete
     *
     * @desc Deletes a specific task by its ID, unless that task has already started running.
     *
     * @alias fusiontables.task.delete
     * @memberOf! fusiontables(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.tableId - Table from which the task is being deleted.
     * @param  {string} params.taskId - The identifier of the task to delete.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v2/tables/{tableId}/tasks/{taskId}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['tableId', 'taskId'],
        pathParams: ['tableId', 'taskId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * fusiontables.task.get
     *
     * @desc Retrieves a specific task by its ID.
     *
     * @alias fusiontables.task.get
     * @memberOf! fusiontables(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.tableId - Table to which the task belongs.
     * @param  {string} params.taskId - The identifier of the task to get.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v2/tables/{tableId}/tasks/{taskId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['tableId', 'taskId'],
        pathParams: ['tableId', 'taskId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * fusiontables.task.list
     *
     * @desc Retrieves a list of tasks.
     *
     * @alias fusiontables.task.list
     * @memberOf! fusiontables(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer=} params.maxResults - Maximum number of tasks to return. Default is 5.
     * @param  {string=} params.pageToken - Continuation token specifying which result page to return.
     * @param  {integer=} params.startIndex - Index of the first result returned in the current page.
     * @param  {string} params.tableId - Table whose tasks are being listed.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v2/tables/{tableId}/tasks',
          method: 'GET'
        },
        params: params,
        requiredParams: ['tableId'],
        pathParams: ['tableId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.template = {

    /**
     * fusiontables.template.delete
     *
     * @desc Deletes a template
     *
     * @alias fusiontables.template.delete
     * @memberOf! fusiontables(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.tableId - Table from which the template is being deleted
     * @param  {integer} params.templateId - Identifier for the template which is being deleted
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v2/tables/{tableId}/templates/{templateId}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['tableId', 'templateId'],
        pathParams: ['tableId', 'templateId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * fusiontables.template.get
     *
     * @desc Retrieves a specific template by its id
     *
     * @alias fusiontables.template.get
     * @memberOf! fusiontables(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.tableId - Table to which the template belongs
     * @param  {integer} params.templateId - Identifier for the template that is being requested
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v2/tables/{tableId}/templates/{templateId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['tableId', 'templateId'],
        pathParams: ['tableId', 'templateId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * fusiontables.template.insert
     *
     * @desc Creates a new template for the table.
     *
     * @alias fusiontables.template.insert
     * @memberOf! fusiontables(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.tableId - Table for which a new template is being created
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v2/tables/{tableId}/templates',
          method: 'POST'
        },
        params: params,
        requiredParams: ['tableId'],
        pathParams: ['tableId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * fusiontables.template.list
     *
     * @desc Retrieves a list of templates.
     *
     * @alias fusiontables.template.list
     * @memberOf! fusiontables(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer=} params.maxResults - Maximum number of templates to return. Optional. Default is 5.
     * @param  {string=} params.pageToken - Continuation token specifying which results page to return. Optional.
     * @param  {string} params.tableId - Identifier for the table whose templates are being requested
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v2/tables/{tableId}/templates',
          method: 'GET'
        },
        params: params,
        requiredParams: ['tableId'],
        pathParams: ['tableId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * fusiontables.template.patch
     *
     * @desc Updates an existing template. This method supports patch semantics.
     *
     * @alias fusiontables.template.patch
     * @memberOf! fusiontables(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.tableId - Table to which the updated template belongs
     * @param  {integer} params.templateId - Identifier for the template that is being updated
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v2/tables/{tableId}/templates/{templateId}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['tableId', 'templateId'],
        pathParams: ['tableId', 'templateId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * fusiontables.template.update
     *
     * @desc Updates an existing template
     *
     * @alias fusiontables.template.update
     * @memberOf! fusiontables(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.tableId - Table to which the updated template belongs
     * @param  {integer} params.templateId - Identifier for the template that is being updated
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/fusiontables/v2/tables/{tableId}/templates/{templateId}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['tableId', 'templateId'],
        pathParams: ['tableId', 'templateId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * Exports Fusiontables object
 * @type Fusiontables
 */
module.exports = Fusiontables;