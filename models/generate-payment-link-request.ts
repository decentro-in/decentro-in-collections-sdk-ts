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


/**
 * 
 * @export
 * @interface GeneratePaymentLinkRequest
 */
export interface GeneratePaymentLinkRequest {
    /**
     * 
     * @type {string}
     * @memberof GeneratePaymentLinkRequest
     */
    'reference_id': string;
    /**
     * 
     * @type {string}
     * @memberof GeneratePaymentLinkRequest
     */
    'payee_account': string;
    /**
     * 
     * @type {number}
     * @memberof GeneratePaymentLinkRequest
     */
    'amount': number;
    /**
     * 
     * @type {string}
     * @memberof GeneratePaymentLinkRequest
     */
    'purpose_message': string;
    /**
     * 
     * @type {number}
     * @memberof GeneratePaymentLinkRequest
     */
    'generate_qr': number;
    /**
     * 
     * @type {number}
     * @memberof GeneratePaymentLinkRequest
     */
    'expiry_time'?: number;
    /**
     * 
     * @type {number}
     * @memberof GeneratePaymentLinkRequest
     */
    'customized_qr_with_logo'?: number;
    /**
     * 
     * @type {number}
     * @memberof GeneratePaymentLinkRequest
     */
    'generate_uri'?: number;
}

