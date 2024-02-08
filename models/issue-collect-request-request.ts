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
 * @interface IssueCollectRequestRequest
 */
export interface IssueCollectRequestRequest {
    /**
     * 
     * @type {string}
     * @memberof IssueCollectRequestRequest
     */
    'reference_id': string;
    /**
     * 
     * @type {string}
     * @memberof IssueCollectRequestRequest
     */
    'payer_upi': string;
    /**
     * 
     * @type {string}
     * @memberof IssueCollectRequestRequest
     */
    'payee_account': string;
    /**
     * 
     * @type {number}
     * @memberof IssueCollectRequestRequest
     */
    'amount': number;
    /**
     * 
     * @type {string}
     * @memberof IssueCollectRequestRequest
     */
    'purpose_message': string;
    /**
     * 
     * @type {number}
     * @memberof IssueCollectRequestRequest
     */
    'expiry_time'?: number;
}

