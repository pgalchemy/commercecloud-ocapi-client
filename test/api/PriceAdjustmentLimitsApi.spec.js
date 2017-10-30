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

import {clientId, proxyUrl, baseUrl} from '../config.json'
import * as utils from '../utils'

let instance
let client
let newCustomer

before(() => {
    client = new ShopApi.ApiClient({
        basePath: `${baseUrl}`,
        defaultHeaders: { 'x-dw-client-id': clientId }
    })

    return utils.getNewRegisteredUser(client)
        .then((customer) => {
            newCustomer = customer
            return Promise.resolve()
        })
})

beforeEach(() => {
    instance = new ShopApi.PriceAdjustmentLimitsApi(client)
})

var getProperty = (object, getter, property) => {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
        return object[getter]()
    else
        return object[property]
}

var setProperty = (object, setter, property, value) => {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
        object[setter](value)
    else
        object[property] = value
}

describe('PriceAdjustmentLimitsApi', () => {
    describe('getPriceAdjustmentLimits', () => {
        it('should call getPriceAdjustmentLimits successfully', () => {
            //uncomment below and update the code to test getPriceAdjustmentLimits
            //instance.getPriceAdjustmentLimits(function(error) {
            //  if (error) throw error;
            //expect().to.be();
            //});
            instance.getPriceAdjustmentLimits()
                .then((thing) => {
                    console.log('thing: ', thing)
                })
                .catch((fault) => {
                    console.log('fault: ', fault)
                })
            return Promise.resolve()
        })
    })
})
