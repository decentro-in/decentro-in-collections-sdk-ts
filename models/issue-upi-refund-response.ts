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
import { IssueUpiRefundResponseData } from './issue-upi-refund-response-data';

/**
 * 
 * @export
 * @interface IssueUpiRefundResponse
 */
export interface IssueUpiRefundResponse {
    /**
     * 
     * @type {string}
     * @memberof IssueUpiRefundResponse
     */
    'decentroTxnId'?: string;
    /**
     * 
     * @type {string}
     * @memberof IssueUpiRefundResponse
     */
    'status'?: string;
    /**
     * 
     * @type {string}
     * @memberof IssueUpiRefundResponse
     */
    'responseCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof IssueUpiRefundResponse
     */
    'message'?: string;
    /**
     * 
     * @type {IssueUpiRefundResponseData}
     * @memberof IssueUpiRefundResponse
     */
    'data'?: IssueUpiRefundResponseData;
}

