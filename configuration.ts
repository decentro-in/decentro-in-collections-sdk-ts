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


type ApiKey =
  | string
  | ((keyParamName: string) => string)
  | ((keyParamName: string) => Promise<string>)
  | { [apiKeyName: string]: string | undefined };

export interface ConfigurationParameters {
    client_id?: string;
    client_secret?: string;
    module_secret?: string;
    provider_secret?: string;
    apiKey?: ApiKey;
    username?: string;
    password?: string;
    accessToken?: string | Promise<string> | ((name?: string, scopes?: string[]) => string) | ((name?: string, scopes?: string[]) => Promise<string>);
    basePath?: string;
    baseOptions?: any;
    userAgent?: string;
    formDataCtor?: new () => any;
}

export class Configuration {
    /**
     * parameter for apiKey security
     * @param name security name
     * @memberof Configuration
     */
    apiKey?: ApiKey;
    /**
     * parameter for basic security
     *
     * @type {string}
     * @memberof Configuration
     */
    username?: string;
    /**
     * parameter for basic security
     *
     * @type {string}
     * @memberof Configuration
     */
    password?: string;
    /**
     * parameter for oauth2 security
     * @param name security name
     * @param scopes oauth2 scope
     * @memberof Configuration
     */
    accessToken?: string | Promise<string> | ((name?: string, scopes?: string[]) => string) | ((name?: string, scopes?: string[]) => Promise<string>);
    /**
     * override base path
     *
     * @type {string}
     * @memberof Configuration
     */
    basePath?: string;
    /**
     * base options for axios calls
     *
     * @type {any}
     * @memberof Configuration
     */
    baseOptions?: any;
    /**
     * The FormData constructor that will be used to create multipart form data
     * requests. You can inject this here so that execution environments that
     * do not support the FormData class can still run the generated client.
     *
     * @type {new () => FormData}
     */
    formDataCtor?: new () => any;
    /**
     * Default User-Agent header
     */
    userAgent: string;

    constructor(param: ConfigurationParameters = {}) {
        this.apiKey = param.apiKey
        if (this.apiKey === undefined) {
            this.apiKey = {}
            if (param.client_id !== undefined)
                this.apiKey["client_id"] = param.client_id
            if (param.client_secret !== undefined)
                this.apiKey["client_secret"] = param.client_secret
            if (param.module_secret !== undefined)
                this.apiKey["module_secret"] = param.module_secret
            if (param.provider_secret !== undefined)
                this.apiKey["provider_secret"] = param.provider_secret
        }
        this.username = param.username;
        this.password = param.password;
        this.accessToken = param.accessToken;
        this.basePath = param.basePath;
        this.baseOptions = param.baseOptions ?? {};
        this.userAgent = param.userAgent === undefined ? "Decentro/1.1.0/typescript" : param.userAgent;
        this.formDataCtor = param.formDataCtor;
    }

    /**
     * Check if the given MIME is a JSON MIME.
     * JSON MIME examples:
     *   application/json
     *   application/json; charset=UTF8
     *   APPLICATION/JSON
     *   application/vnd.company+json
     * @param mime - MIME (Multipurpose Internet Mail Extensions)
     * @return True if the given MIME is JSON, false otherwise.
     */
    public isJsonMime(mime: string): boolean {
        const jsonMime: RegExp = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime !== null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    }
}
