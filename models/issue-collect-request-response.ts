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
import { IssueCollectRequestResponseData } from './issue-collect-request-response-data';

/**
 * 
 * @export
 * @interface IssueCollectRequestResponse
 */
export interface IssueCollectRequestResponse {
    /**
     * 
     * @type {string}
     * @memberof IssueCollectRequestResponse
     */
    'decentroTxnId'?: string;
    /**
     * 
     * @type {string}
     * @memberof IssueCollectRequestResponse
     */
    'status'?: string;
    /**
     * 
     * @type {string}
     * @memberof IssueCollectRequestResponse
     */
    'responseCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof IssueCollectRequestResponse
     */
    'message'?: string;
    /**
     * 
     * @type {IssueCollectRequestResponseData}
     * @memberof IssueCollectRequestResponse
     */
    'data'?: IssueCollectRequestResponseData;
}

