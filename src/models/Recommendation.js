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
import Image from './Image'
import RecommendationType from './RecommendationType'

/**
* The Recommendation model module.
* @module models/Recommendation
* @version 17.8
*/
export default class Recommendation {
    /**
    * Constructs a new <code>Recommendation</code>.
    * Document representing a product recommendation.
    * @alias module:models/Recommendation
    * @class
    */
    constructor() {
        /**
        * The localized callout message of the recommendation.
        * @member {String} callout_msg
        */
        this.callout_msg = undefined

        /**
        * The image of the recommendation.
        * @member {module:models/Image} image
        */
        this.image = undefined

        /**
        * The localized long description of the recommendation.
        * @member {String} long_description
        */
        this.long_description = undefined

        /**
        * The localized name of the recommendation.
        * @member {String} name
        */
        this.name = undefined

        /**
        * The recommendation type of the recommendation.
        * @member {module:models/RecommendationType} recommendation_type
        */
        this.recommendation_type = undefined

        /**
        * The recommended item id of the recommendation.
        * @member {String} recommended_item_id
        */
        this.recommended_item_id = undefined

        /**
        * The recommended item link of the recommendation.
        * @member {String} recommended_item_link
        */
        this.recommended_item_link = undefined

        /**
        * The localized short description of the recommendation.
        * @member {String} short_description
        */
        this.short_description = undefined
    }

    /**
    * Constructs a <code>Recommendation</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/Recommendation} obj Optional instance to populate.
    * @return {module:models/Recommendation} The populated <code>Recommendation</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Recommendation()

            if (data.hasOwnProperty('callout_msg')) {
                obj['callout_msg'] = ApiClient.convertToType(data['callout_msg'], 'String')
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = Image.constructFromObject(data['image'])
            }
            if (data.hasOwnProperty('long_description')) {
                obj['long_description'] = ApiClient.convertToType(data['long_description'], 'String')
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String')
            }
            if (data.hasOwnProperty('recommendation_type')) {
                obj['recommendation_type'] = RecommendationType.constructFromObject(data['recommendation_type'])
            }
            if (data.hasOwnProperty('recommended_item_id')) {
                obj['recommended_item_id'] = ApiClient.convertToType(data['recommended_item_id'], 'String')
            }
            if (data.hasOwnProperty('recommended_item_link')) {
                obj['recommended_item_link'] = ApiClient.convertToType(data['recommended_item_link'], 'String')
            }
            if (data.hasOwnProperty('short_description')) {
                obj['short_description'] = ApiClient.convertToType(data['short_description'], 'String')
            }
        }

        return obj
    }
}