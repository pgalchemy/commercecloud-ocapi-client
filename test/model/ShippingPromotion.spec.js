/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2017 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

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

import expect from 'expect.js'
import ShopApi from '../../src/index'

let instance

beforeEach(() => {
    instance = new ShopApi.ShippingPromotion()
})

const getProperty = (object, getter, property) => {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function') {
        return object[getter]()
    } else {
        return object[property]
    }
}

const setProperty = (object, setter, property, value) => {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function') {
        object[setter](value)
    } else {
        object[property] = value
    }
}

describe('ShippingPromotionModel', () => {
    it('should create an instance of ShippingPromotionModel', () => {
        // uncomment below and update the code to test ShippingPromotionModel
        // var instane = new ShopApi.ShippingPromotion()
        // expect(instance).to.be.a(ShopApi.ShippingPromotion);
    })

    it('should have the property calloutMsg (base name: "callout_msg")', () => {
        // uncomment below and update the code to test the property calloutMsg
        // var instane = new ShopApi.ShippingPromotion()
        // expect(instance).to.be();
    })

    it('should have the property link (base name: "link")', () => {
        // uncomment below and update the code to test the property link
        // var instane = new ShopApi.ShippingPromotion()
        // expect(instance).to.be();
    })

    it('should have the property promotionId (base name: "promotion_id")', () => {
        // uncomment below and update the code to test the property promotionId
        // var instane = new ShopApi.ShippingPromotion()
        // expect(instance).to.be();
    })

    it('should have the property promotionName (base name: "promotion_name")', () => {
        // uncomment below and update the code to test the property promotionName
        // var instane = new ShopApi.ShippingPromotion()
        // expect(instance).to.be();
    })

})