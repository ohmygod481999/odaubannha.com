import { fetchAPI } from "../utils/api";
import { createQueryString } from "../utils/common";

/**
 *
 * @param {Object} params {_limit, _start}
 */
export async function getRegions(params) {
    const queryString = createQueryString(params);
    const regions = await fetchAPI("/regions" + queryString);
    return regions;
}
