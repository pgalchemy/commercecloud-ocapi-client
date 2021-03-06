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
import Order from './Order'

/**
* The OrderSearchHit model module.
* @module models/OrderSearchHit
* @version 17.8
*/
export default class OrderSearchHit {
    /**
    * Constructs a new <code>OrderSearchHit</code>.
    * Document representing an order search hit.
    * @alias module:models/OrderSearchHit
    * @class
    */
    constructor() {
        /**
        *
        * @member {module:models/Order} data
        */
        this.data = undefined

        /**
        * The hit's relevance score.
        * @member {Number} relevance
        */
        this.relevance = undefined
    }

    /**
    * Constructs a <code>OrderSearchHit</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/OrderSearchHit} obj Optional instance to populate.
    * @return {module:models/OrderSearchHit} The populated <code>OrderSearchHit</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderSearchHit()

            if (data.hasOwnProperty('data')) {
                obj['data'] = Order.constructFromObject(data['data'])
            }
            if (data.hasOwnProperty('relevance')) {
                obj['relevance'] = ApiClient.convertToType(data['relevance'], 'Number')
            }
        }

        return obj
    }
}
