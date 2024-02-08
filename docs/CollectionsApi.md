# CollectionsApi

All URIs are relative to *https://in.staging.decentro.tech*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generatePaymentLink**](CollectionsApi.md#generatePaymentLink) | **POST** /v2/payments/upi/link | Generate payment link
[**getTransactionStatus**](CollectionsApi.md#getTransactionStatus) | **GET** /v2/payments/transaction/{transaction_id}/status | Get transaction status
[**issueCollectRequest**](CollectionsApi.md#issueCollectRequest) | **POST** /v2/payments/collection | Issue collect request
[**issueUpiRefund**](CollectionsApi.md#issueUpiRefund) | **POST** /v2/payments/upi/refund | Issue UPI Refund
[**validateUpiHandle**](CollectionsApi.md#validateUpiHandle) | **POST** /v2/payments/vpa/validate | Validate UPI handle


# **generatePaymentLink**

#### **POST** /v2/payments/upi/link


### Example


```typescript
import { Decentro } from "decentro-in-collections-typescript-sdk";

const decentro = new Decentro({
  // Defining the base path is optional and defaults to https://in.staging.decentro.tech
  // basePath: "https://in.staging.decentro.tech",
  client_id: "API_KEY",
  client_secret: "API_KEY",
  module_secret: "API_KEY",
  provider_secret: "API_KEY",
});

const generatePaymentLinkResponse =
  await decentro.collections.generatePaymentLink({
    reference_id: "ABCDEF12345",
    payee_account: "00000000000000000",
    amount: 4,
    purpose_message: "Welcome to Decentro",
    generate_qr: 0,
    expiry_time: 10,
    customized_qr_with_logo: 0,
    generate_uri: 0,
  });

console.log(generatePaymentLinkResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generatePaymentLinkRequest** | **GeneratePaymentLinkRequest**|  |


### Return type

**GeneratePaymentLinkResponse**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **getTransactionStatus**

#### **GET** /v2/payments/transaction/{transaction_id}/status


### Example


```typescript
import { Decentro } from "decentro-in-collections-typescript-sdk";

const decentro = new Decentro({
  // Defining the base path is optional and defaults to https://in.staging.decentro.tech
  // basePath: "https://in.staging.decentro.tech",
  client_id: "API_KEY",
  client_secret: "API_KEY",
  module_secret: "API_KEY",
  provider_secret: "API_KEY",
});

const getTransactionStatusResponse =
  await decentro.collections.getTransactionStatus({
    transactionId: "transactionId_example",
  });

console.log(getTransactionStatusResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionId** | [**string**] |  | defaults to undefined


### Return type

**GetTransactionStatusResponse**

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Failure |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **issueCollectRequest**

#### **POST** /v2/payments/collection


### Example


```typescript
import { Decentro } from "decentro-in-collections-typescript-sdk";

const decentro = new Decentro({
  // Defining the base path is optional and defaults to https://in.staging.decentro.tech
  // basePath: "https://in.staging.decentro.tech",
  client_id: "API_KEY",
  client_secret: "API_KEY",
  module_secret: "API_KEY",
  provider_secret: "API_KEY",
});

const issueCollectRequestResponse =
  await decentro.collections.issueCollectRequest({
    reference_id: "ABCDEF12345",
    payer_upi: "test001@abc",
    payee_account: "00000000000000000",
    amount: 1,
    purpose_message: "Welcome to Decentro",
    expiry_time: 30,
  });

console.log(issueCollectRequestResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issueCollectRequestRequest** | **IssueCollectRequestRequest**|  |


### Return type

**IssueCollectRequestResponse**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **issueUpiRefund**

#### **POST** /v2/payments/upi/refund


### Example


```typescript
import { Decentro } from "decentro-in-collections-typescript-sdk";

const decentro = new Decentro({
  // Defining the base path is optional and defaults to https://in.staging.decentro.tech
  // basePath: "https://in.staging.decentro.tech",
  client_id: "API_KEY",
  client_secret: "API_KEY",
  module_secret: "API_KEY",
  provider_secret: "API_KEY",
});

const issueUpiRefundResponse = await decentro.collections.issueUpiRefund({
  reference_id: "ABCDEF12345",
  transaction_id: "4CE9587AE3D143CDAC72E7D0CF14D028",
  bank_reference_number: "111111111111",
  purpose_message: "Welcome to Decentro",
});

console.log(issueUpiRefundResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issueUpiRefundRequest** | **IssueUpiRefundRequest**|  |


### Return type

**IssueUpiRefundResponse**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **validateUpiHandle**

#### **POST** /v2/payments/vpa/validate


### Example


```typescript
import { Decentro } from "decentro-in-collections-typescript-sdk";

const decentro = new Decentro({
  // Defining the base path is optional and defaults to https://in.staging.decentro.tech
  // basePath: "https://in.staging.decentro.tech",
  client_id: "API_KEY",
  client_secret: "API_KEY",
  module_secret: "API_KEY",
  provider_secret: "API_KEY",
});

const validateUpiHandleResponse = await decentro.collections.validateUpiHandle({
  reference_id: "ABCDEF12345",
  upi_id: "test001@abc",
  type: "BASIC",
});

console.log(validateUpiHandleResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **validateUpiHandleRequest** | **ValidateUpiHandleRequest**|  |


### Return type

**ValidateUpiHandleResponse**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


