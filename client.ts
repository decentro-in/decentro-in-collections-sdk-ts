/**
 * decentro-in-collections
 * Collections
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: admin@decentro.tech
 *
 * Do not edit the class manually.
 */

import { AxiosRequestConfig } from "axios";
import {
  CollectionsApi,
} from "./api";
import { Configuration, ConfigurationParameters } from "./configuration";
import { DecentroCustom } from "./client-custom";

export class Decentro extends DecentroCustom {
  readonly collections: CollectionsApi;

  constructor(configurationParameters: ConfigurationParameters = {}) {
    super(configurationParameters);
    const configuration = new Configuration(configurationParameters);
    this.collections = new CollectionsApi(configuration);
  }

}
