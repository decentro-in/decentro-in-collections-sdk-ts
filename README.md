# decentro-in-collections-typescript-sdk@1.1.0

Collections
## Installing

### npm
```
npm install decentro-in-collections-typescript-sdk --save
```

### yarn
```
yarn add decentro-in-collections-typescript-sdk
```

**Important note: this library can be used in both the client-side or server-side, but using it
in client-side browser code is not recommended as you would expose security credentials.**



## Getting Started

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

## Documentation for API Endpoints

All URIs are relative to *https://in.staging.decentro.tech*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CollectionsApi* | [**generatePaymentLink**](docs/CollectionsApi.md#generatePaymentLink) | **POST** /v2/payments/upi/link | Generate payment link
*CollectionsApi* | [**getTransactionStatus**](docs/CollectionsApi.md#getTransactionStatus) | **GET** /v2/payments/transaction/{transaction_id}/status | Get transaction status
*CollectionsApi* | [**issueCollectRequest**](docs/CollectionsApi.md#issueCollectRequest) | **POST** /v2/payments/collection | Issue collect request
*CollectionsApi* | [**issueUpiRefund**](docs/CollectionsApi.md#issueUpiRefund) | **POST** /v2/payments/upi/refund | Issue UPI Refund
*CollectionsApi* | [**validateUpiHandle**](docs/CollectionsApi.md#validateUpiHandle) | **POST** /v2/payments/vpa/validate | Validate UPI handle

