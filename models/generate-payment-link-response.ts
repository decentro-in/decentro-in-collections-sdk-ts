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
import { GeneratePaymentLinkResponseData } from './generate-payment-link-response-data';

/**
 * 
 * @export
 * @interface GeneratePaymentLinkResponse
 */
export interface GeneratePaymentLinkResponse {
    /**
     * 
     * @type {string}
     * @memberof GeneratePaymentLinkResponse
     */
    'decentroTxnId'?: string;
    /**
     * 
     * @type {string}
     * @memberof GeneratePaymentLinkResponse
     */
    'status'?: string;
    /**
     * 
     * @type {string}
     * @memberof GeneratePaymentLinkResponse
     */
    'responseCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof GeneratePaymentLinkResponse
     */
    'message'?: string;
    /**
     * 
     * @type {GeneratePaymentLinkResponseData}
     * @memberof GeneratePaymentLinkResponse
     */
    'data'?: GeneratePaymentLinkResponseData;
    /**
     * 
     * @type {string}
     * @memberof GeneratePaymentLinkResponse
     */
    'responseKey'?: string;
}

