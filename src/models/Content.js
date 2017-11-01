/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2017 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

/* eslint-disable dot-notation */
/**
 * Shop API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 17.8
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
import ApiClient from '../ApiClient'

/**
* The Content model module.
* @module models/Content
* @version 17.8
*/
export default class Content {
    /**
    * Constructs a new <code>Content</code>.
    * Document representing a content asset.
    * @alias module:models/Content
    * @class
    * @param id {String} The id of the content asset.
    */
    constructor(id) {
        /**
        * The localized content asset description.
        * @member {String} description
        */
        this.description = undefined

        /**
        * The id of the content asset.
        * @member {String} id
        */
        this.id = id

        /**
        * The localized content asset name.
        * @member {String} name
        */
        this.name = undefined

        /**
        * The localized content asset page description.
        * @member {String} page_description
        */
        this.page_description = undefined

        /**
        * The localized content asset page description.
        * @member {String} page_keywords
        */
        this.page_keywords = undefined

        /**
        * The localized content asset page title.
        * @member {String} page_title
        */
        this.page_title = undefined
    }

    /**
    * Constructs a <code>Content</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/Content} obj Optional instance to populate.
    * @return {module:models/Content} The populated <code>Content</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Content()

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String')
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String')
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String')
            }
            if (data.hasOwnProperty('page_description')) {
                obj['page_description'] = ApiClient.convertToType(data['page_description'], 'String')
            }
            if (data.hasOwnProperty('page_keywords')) {
                obj['page_keywords'] = ApiClient.convertToType(data['page_keywords'], 'String')
            }
            if (data.hasOwnProperty('page_title')) {
                obj['page_title'] = ApiClient.convertToType(data['page_title'], 'String')
            }
        }

        return obj
    }
}