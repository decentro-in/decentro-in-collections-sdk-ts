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
import { GetTransactionStatusResponseData } from './get-transaction-status-response-data';
// May contain unused imports in some cases
// @ts-ignore
import { GetTransactionStatusResponseError } from './get-transaction-status-response-error';

/**
 * 
 * @export
 * @interface GetTransactionStatusResponse
 */
export interface GetTransactionStatusResponse {
    /**
     * 
     * @type {string}
     * @memberof GetTransactionStatusResponse
     */
    'decentroTxnId'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetTransactionStatusResponse
     */
    'status'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetTransactionStatusResponse
     */
    'responseCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetTransactionStatusResponse
     */
    'message'?: string;
    /**
     * 
     * @type {GetTransactionStatusResponseData}
     * @memberof GetTransactionStatusResponse
     */
    'data'?: GetTransactionStatusResponseData;
    /**
     * 
     * @type {GetTransactionStatusResponseError}
     * @memberof GetTransactionStatusResponse
     */
    'error'?: GetTransactionStatusResponseError;
}

