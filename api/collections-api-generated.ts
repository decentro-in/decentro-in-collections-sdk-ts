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

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { GeneratePaymentLink400Response } from '../models';
// @ts-ignore
import { GeneratePaymentLinkRequest } from '../models';
// @ts-ignore
import { GeneratePaymentLinkResponse } from '../models';
// @ts-ignore
import { GetTransactionStatusResponse } from '../models';
// @ts-ignore
import { IssueCollectRequest400Response } from '../models';
// @ts-ignore
import { IssueCollectRequestRequest } from '../models';
// @ts-ignore
import { IssueCollectRequestResponse } from '../models';
// @ts-ignore
import { IssueUpiRefund400Response } from '../models';
// @ts-ignore
import { IssueUpiRefundRequest } from '../models';
// @ts-ignore
import { IssueUpiRefundResponse } from '../models';
// @ts-ignore
import { ValidateUpiHandle400Response } from '../models';
// @ts-ignore
import { ValidateUpiHandleRequest } from '../models';
// @ts-ignore
import { ValidateUpiHandleResponse } from '../models';
import { paginate } from "../pagination/paginate";
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * CollectionsApi - axios parameter creator
 * @export
 */
export const CollectionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Generate payment link
         * @param {GeneratePaymentLinkRequest} generatePaymentLinkRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        generatePaymentLink: async (generatePaymentLinkRequest: GeneratePaymentLinkRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'generatePaymentLinkRequest' is not null or undefined
            assertParamExists('generatePaymentLink', 'generatePaymentLinkRequest', generatePaymentLinkRequest)
            const localVarPath = `/v2/payments/upi/link`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication client_id required
            await setApiKeyToObject({ object: localVarHeaderParameter, keyParamName: "client_id", configuration })
            // authentication client_secret required
            await setApiKeyToObject({ object: localVarHeaderParameter, keyParamName: "client_secret", configuration })
            // authentication module_secret required
            await setApiKeyToObject({ object: localVarHeaderParameter, keyParamName: "module_secret", configuration })
            // authentication provider_secret required
            await setApiKeyToObject({ object: localVarHeaderParameter, keyParamName: "provider_secret", configuration })

    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: generatePaymentLinkRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration
            });
            localVarRequestOptions.data = serializeDataIfNeeded(generatePaymentLinkRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get transaction status
         * @param {string} transactionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTransactionStatus: async (transactionId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'transactionId' is not null or undefined
            assertParamExists('getTransactionStatus', 'transactionId', transactionId)
            const localVarPath = `/v2/payments/transaction/{transaction_id}/status`
                .replace(`{${"transaction_id"}}`, encodeURIComponent(String(transactionId !== undefined ? transactionId : `-transaction_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication client_id required
            await setApiKeyToObject({ object: localVarHeaderParameter, keyParamName: "client_id", configuration })
            // authentication client_secret required
            await setApiKeyToObject({ object: localVarHeaderParameter, keyParamName: "client_secret", configuration })
            // authentication module_secret required
            await setApiKeyToObject({ object: localVarHeaderParameter, keyParamName: "module_secret", configuration })
            // authentication provider_secret required
            await setApiKeyToObject({ object: localVarHeaderParameter, keyParamName: "provider_secret", configuration })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Issue collect request
         * @param {IssueCollectRequestRequest} issueCollectRequestRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        issueCollectRequest: async (issueCollectRequestRequest: IssueCollectRequestRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'issueCollectRequestRequest' is not null or undefined
            assertParamExists('issueCollectRequest', 'issueCollectRequestRequest', issueCollectRequestRequest)
            const localVarPath = `/v2/payments/collection`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication client_id required
            await setApiKeyToObject({ object: localVarHeaderParameter, keyParamName: "client_id", configuration })
            // authentication client_secret required
            await setApiKeyToObject({ object: localVarHeaderParameter, keyParamName: "client_secret", configuration })
            // authentication module_secret required
            await setApiKeyToObject({ object: localVarHeaderParameter, keyParamName: "module_secret", configuration })
            // authentication provider_secret required
            await setApiKeyToObject({ object: localVarHeaderParameter, keyParamName: "provider_secret", configuration })

    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: issueCollectRequestRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration
            });
            localVarRequestOptions.data = serializeDataIfNeeded(issueCollectRequestRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Issue UPI Refund
         * @param {IssueUpiRefundRequest} issueUpiRefundRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        issueUpiRefund: async (issueUpiRefundRequest: IssueUpiRefundRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'issueUpiRefundRequest' is not null or undefined
            assertParamExists('issueUpiRefund', 'issueUpiRefundRequest', issueUpiRefundRequest)
            const localVarPath = `/v2/payments/upi/refund`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication client_id required
            await setApiKeyToObject({ object: localVarHeaderParameter, keyParamName: "client_id", configuration })
            // authentication client_secret required
            await setApiKeyToObject({ object: localVarHeaderParameter, keyParamName: "client_secret", configuration })
            // authentication module_secret required
            await setApiKeyToObject({ object: localVarHeaderParameter, keyParamName: "module_secret", configuration })
            // authentication provider_secret required
            await setApiKeyToObject({ object: localVarHeaderParameter, keyParamName: "provider_secret", configuration })

    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: issueUpiRefundRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration
            });
            localVarRequestOptions.data = serializeDataIfNeeded(issueUpiRefundRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Validate UPI handle
         * @param {ValidateUpiHandleRequest} validateUpiHandleRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        validateUpiHandle: async (validateUpiHandleRequest: ValidateUpiHandleRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'validateUpiHandleRequest' is not null or undefined
            assertParamExists('validateUpiHandle', 'validateUpiHandleRequest', validateUpiHandleRequest)
            const localVarPath = `/v2/payments/vpa/validate`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication client_id required
            await setApiKeyToObject({ object: localVarHeaderParameter, keyParamName: "client_id", configuration })
            // authentication client_secret required
            await setApiKeyToObject({ object: localVarHeaderParameter, keyParamName: "client_secret", configuration })
            // authentication module_secret required
            await setApiKeyToObject({ object: localVarHeaderParameter, keyParamName: "module_secret", configuration })
            // authentication provider_secret required
            await setApiKeyToObject({ object: localVarHeaderParameter, keyParamName: "provider_secret", configuration })

    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: validateUpiHandleRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration
            });
            localVarRequestOptions.data = serializeDataIfNeeded(validateUpiHandleRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CollectionsApi - functional programming interface
 * @export
 */
export const CollectionsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CollectionsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Generate payment link
         * @param {CollectionsApiGeneratePaymentLinkRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async generatePaymentLink(requestParameters: CollectionsApiGeneratePaymentLinkRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GeneratePaymentLinkResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.generatePaymentLink(requestParameters, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get transaction status
         * @param {CollectionsApiGetTransactionStatusRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTransactionStatus(requestParameters: CollectionsApiGetTransactionStatusRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetTransactionStatusResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTransactionStatus(requestParameters.transactionId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Issue collect request
         * @param {CollectionsApiIssueCollectRequestRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async issueCollectRequest(requestParameters: CollectionsApiIssueCollectRequestRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IssueCollectRequestResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.issueCollectRequest(requestParameters, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Issue UPI Refund
         * @param {CollectionsApiIssueUpiRefundRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async issueUpiRefund(requestParameters: CollectionsApiIssueUpiRefundRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IssueUpiRefundResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.issueUpiRefund(requestParameters, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Validate UPI handle
         * @param {CollectionsApiValidateUpiHandleRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async validateUpiHandle(requestParameters: CollectionsApiValidateUpiHandleRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ValidateUpiHandleResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.validateUpiHandle(requestParameters, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CollectionsApi - factory interface
 * @export
 */
export const CollectionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CollectionsApiFp(configuration)
    return {
        /**
         * 
         * @summary Generate payment link
         * @param {CollectionsApiGeneratePaymentLinkRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        generatePaymentLink(requestParameters: CollectionsApiGeneratePaymentLinkRequest, options?: AxiosRequestConfig): AxiosPromise<GeneratePaymentLinkResponse> {
            return localVarFp.generatePaymentLink(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get transaction status
         * @param {CollectionsApiGetTransactionStatusRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTransactionStatus(requestParameters: CollectionsApiGetTransactionStatusRequest, options?: AxiosRequestConfig): AxiosPromise<GetTransactionStatusResponse> {
            return localVarFp.getTransactionStatus(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Issue collect request
         * @param {CollectionsApiIssueCollectRequestRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        issueCollectRequest(requestParameters: CollectionsApiIssueCollectRequestRequest, options?: AxiosRequestConfig): AxiosPromise<IssueCollectRequestResponse> {
            return localVarFp.issueCollectRequest(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Issue UPI Refund
         * @param {CollectionsApiIssueUpiRefundRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        issueUpiRefund(requestParameters: CollectionsApiIssueUpiRefundRequest, options?: AxiosRequestConfig): AxiosPromise<IssueUpiRefundResponse> {
            return localVarFp.issueUpiRefund(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Validate UPI handle
         * @param {CollectionsApiValidateUpiHandleRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        validateUpiHandle(requestParameters: CollectionsApiValidateUpiHandleRequest, options?: AxiosRequestConfig): AxiosPromise<ValidateUpiHandleResponse> {
            return localVarFp.validateUpiHandle(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for generatePaymentLink operation in CollectionsApi.
 * @export
 * @interface CollectionsApiGeneratePaymentLinkRequest
 */
export type CollectionsApiGeneratePaymentLinkRequest = {
    
} & GeneratePaymentLinkRequest

/**
 * Request parameters for getTransactionStatus operation in CollectionsApi.
 * @export
 * @interface CollectionsApiGetTransactionStatusRequest
 */
export type CollectionsApiGetTransactionStatusRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof CollectionsApiGetTransactionStatus
    */
    readonly transactionId: string
    
}

/**
 * Request parameters for issueCollectRequest operation in CollectionsApi.
 * @export
 * @interface CollectionsApiIssueCollectRequestRequest
 */
export type CollectionsApiIssueCollectRequestRequest = {
    
} & IssueCollectRequestRequest

/**
 * Request parameters for issueUpiRefund operation in CollectionsApi.
 * @export
 * @interface CollectionsApiIssueUpiRefundRequest
 */
export type CollectionsApiIssueUpiRefundRequest = {
    
} & IssueUpiRefundRequest

/**
 * Request parameters for validateUpiHandle operation in CollectionsApi.
 * @export
 * @interface CollectionsApiValidateUpiHandleRequest
 */
export type CollectionsApiValidateUpiHandleRequest = {
    
} & ValidateUpiHandleRequest

/**
 * CollectionsApiGenerated - object-oriented interface
 * @export
 * @class CollectionsApiGenerated
 * @extends {BaseAPI}
 */
export class CollectionsApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Generate payment link
     * @param {CollectionsApiGeneratePaymentLinkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CollectionsApiGenerated
     */
    public generatePaymentLink(requestParameters: CollectionsApiGeneratePaymentLinkRequest, options?: AxiosRequestConfig) {
        return CollectionsApiFp(this.configuration).generatePaymentLink(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get transaction status
     * @param {CollectionsApiGetTransactionStatusRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CollectionsApiGenerated
     */
    public getTransactionStatus(requestParameters: CollectionsApiGetTransactionStatusRequest, options?: AxiosRequestConfig) {
        return CollectionsApiFp(this.configuration).getTransactionStatus(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Issue collect request
     * @param {CollectionsApiIssueCollectRequestRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CollectionsApiGenerated
     */
    public issueCollectRequest(requestParameters: CollectionsApiIssueCollectRequestRequest, options?: AxiosRequestConfig) {
        return CollectionsApiFp(this.configuration).issueCollectRequest(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Issue UPI Refund
     * @param {CollectionsApiIssueUpiRefundRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CollectionsApiGenerated
     */
    public issueUpiRefund(requestParameters: CollectionsApiIssueUpiRefundRequest, options?: AxiosRequestConfig) {
        return CollectionsApiFp(this.configuration).issueUpiRefund(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Validate UPI handle
     * @param {CollectionsApiValidateUpiHandleRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CollectionsApiGenerated
     */
    public validateUpiHandle(requestParameters: CollectionsApiValidateUpiHandleRequest, options?: AxiosRequestConfig) {
        return CollectionsApiFp(this.configuration).validateUpiHandle(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
