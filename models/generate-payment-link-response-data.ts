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
import { GeneratePaymentLinkResponseDataPspUri } from './generate-payment-link-response-data-psp-uri';

/**
 * 
 * @export
 * @interface GeneratePaymentLinkResponseData
 */
export interface GeneratePaymentLinkResponseData {
    /**
     * 
     * @type {string}
     * @memberof GeneratePaymentLinkResponseData
     */
    'generatedLink'?: string;
    /**
     * 
     * @type {string}
     * @memberof GeneratePaymentLinkResponseData
     */
    'transactionId'?: string;
    /**
     * 
     * @type {string}
     * @memberof GeneratePaymentLinkResponseData
     */
    'transactionStatus'?: string;
    /**
     * 
     * @type {string}
     * @memberof GeneratePaymentLinkResponseData
     */
    'encodedDynamicQrCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof GeneratePaymentLinkResponseData
     */
    'upiUri'?: string;
    /**
     * 
     * @type {GeneratePaymentLinkResponseDataPspUri}
     * @memberof GeneratePaymentLinkResponseData
     */
    'pspUri'?: GeneratePaymentLinkResponseDataPspUri;
}

