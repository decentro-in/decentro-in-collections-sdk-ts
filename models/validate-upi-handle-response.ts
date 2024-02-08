/* tslint:disable */
/* eslint-disable */
/**
 * decentro-in-collections
 * Collections
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: admin@decentro.tech
 *
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { ValidateUpiHandleResponseData } from './validate-upi-handle-response-data';

/**
 * 
 * @export
 * @interface ValidateUpiHandleResponse
 */
export interface ValidateUpiHandleResponse {
    /**
     * 
     * @type {string}
     * @memberof ValidateUpiHandleResponse
     */
    'decentroTxnId'?: string;
    /**
     * 
     * @type {string}
     * @memberof ValidateUpiHandleResponse
     */
    'status'?: string;
    /**
     * 
     * @type {string}
     * @memberof ValidateUpiHandleResponse
     */
    'responseCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ValidateUpiHandleResponse
     */
    'message'?: string;
    /**
     * 
     * @type {ValidateUpiHandleResponseData}
     * @memberof ValidateUpiHandleResponse
     */
    'data'?: ValidateUpiHandleResponseData;
}

