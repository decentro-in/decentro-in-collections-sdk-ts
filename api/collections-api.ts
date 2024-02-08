import { CollectionsApiGenerated, CollectionsApiGetTransactionStatusRequest, CollectionsApiFp} from "./collections-api-generated";
import { GetTransactionStatusResponse } from '../models';
import { AxiosRequestConfig } from 'axios';

export class CollectionsApi extends CollectionsApiGenerated {

    /**
     * @summary Poll status of the transaction with the given transactionId.
     * @param {CollectionsApiGetTransactionStatusRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CollectionsApi
     */
    public pollTransactionStatus(requestParameters: CollectionsApiGetTransactionStatusRequest, options?: AxiosRequestConfig): TransactionStatusPoller {
        const poll = async (poller: TransactionStatusPoller) => {
            await this.sleep(poller.getNextTimeout());
            poller.mostRecentResponse = (await this.getTransactionStatus(requestParameters, options)).data;
            poller.numRequestsSent++;
            if (!poller.hasTerminalStatus())
                poll(poller);
        }
        const poller: TransactionStatusPoller = new TransactionStatusPoller();
        poll(poller);
        return poller;
    }

    /**
     * Sleep for {@param s} seconds
     */
    private sleep(s: number): Promise<void> {
        return new Promise((resolve) => setTimeout(resolve, s * 1000));
    }
}

/**
 * Return type of {@link CollectionsApi#pollTransactionStatus}. 
 * Holds most recent {@link GetTransactionStatusResponse} and can be queried for {@link GetTransactionStatusResponseData#status}.
 */
class TransactionStatusPoller {

    mostRecentResponse: GetTransactionStatusResponse;
    numRequestsSent: number = 0;

    // Edit here to configure the amount of delay you would like
    // key = request number, value = delay in seconds
    delayForRequest: { [key: number]: number } = {
        0: 0,
        1: 2,
        2: 5,
        3: 7,
        4: 14,
        5: 30,
        6: 50,
        7: 80,
        8: 240,
        9: 37,
        10: 60
    };

    /**
     * @returns the status field of the most recent response
     */
    public getStatus(): string {
        // First response has not yet come back -> pending
        if (this.mostRecentResponse == null)
            return TransactionStatus.Pending;
        
        const isExpired = this.isExpired();
        // The most recent response from the server was an error
        // If we have not yet expired, we will try again -> pending
        // If we have expired, due to last response being an error -> error
        if (this.mostRecentResponse.status == TransactionStatus.Failure)
            return isExpired ? TransactionStatus.Error : TransactionStatus.Pending;

        const status = this.mostRecentResponse.data.transactionStatus;
        // The poller has sent the max number of requests and has not received a terminal response
        if (isExpired && status == TransactionStatus.Pending)
            return TransactionStatus.Expired;
        // Otherwise, return the status from the most recent response
        return status;
    }

    public getNextTimeout(): number {
        return this.delayForRequest[this.numRequestsSent];
    }

    public isExpired(): boolean {
        return this.numRequestsSent >= Object.keys(this.delayForRequest).length;
    }

    public hasTerminalStatus(): boolean {
        return this.getStatus() !== TransactionStatus.Pending;
    }
}

enum TransactionStatus {
    Success = "SUCCESS",
    Failure = "FAILURE",
    Pending = "PENDING",
    Expired = "EXPIRED",
    Error = "ERROR"
}
