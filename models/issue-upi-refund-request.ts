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
 * @interface IssueUpiRefundRequest
 */
export interface IssueUpiRefundRequest {
    /**
     * 
     * @type {string}
     * @memberof IssueUpiRefundRequest
     */
    'reference_id': string;
    /**
     * 
     * @type {string}
     * @memberof IssueUpiRefundRequest
     */
    'transaction_id'?: string;
    /**
     * 
     * @type {string}
     * @memberof IssueUpiRefundRequest
     */
    'bank_reference_number'?: string;
    /**
     * 
     * @type {string}
     * @memberof IssueUpiRefundRequest
     */
    'purpose_message'?: string;
}

