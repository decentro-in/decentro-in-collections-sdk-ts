/**
 * decentro-in-collections
 * Collections
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: admin@decentro.tech
 *
 * Do not edit the class manually.
 */

import { PageBase, PageInfo, PageParameters } from "./page-types";
import { Page } from "./page";
import { PageRequest } from "./pageable";

export const paginate = <
  Data extends PageInfo,
  Parameters extends PageParameters
>({
  request,
  initialParameters,
}: {
  request: PageRequest<Data, Parameters>;
  initialParameters: Parameters;
}): Promise<PageBase<Data, Parameters>> => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await request(initialParameters);
      resolve(
        new Page({
          data: data.data,
          initialParameters,
          request: (parameters) => request(parameters),
        })
      );
    } catch (error) {
      reject(error);
    }
  });
};
