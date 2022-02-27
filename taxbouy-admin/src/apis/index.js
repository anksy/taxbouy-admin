import { http } from "../services/http";
import { httpVerbs } from "../constants";
import * as url from "./endpoint";

export const loginApi = (payload) => http({ method: httpVerbs.POST, url: url.loginApiUrl, payload });

/* Shop & Store */
export const getMyShop = () => http({ method: httpVerbs.GET, url: url.myShopUrl });
export const getMyShopStores = () => http({ method: httpVerbs.GET, url: url.myShopStoresUrl });
export const openMyShop = (payload) => {
    return http({ method: payload.shopId ? httpVerbs.PUT : httpVerbs.POST, url: url.openMyShopUrl, payload })
};
export const openMyStore = (payload) => http({ method: httpVerbs.POST, url: url.openMyStoreUrl, payload });


/* eCommerce */
export const getCategories = () => http({ method: httpVerbs.GET, url: url.categoryUrl });
export const postCategory = (payload) => http({ method: httpVerbs.POST, url: url.categoryUrl, payload });
export const putCategory = (payload) => http({ method: httpVerbs.PUT, url: url.categoryUrl, payload });
export const patchCategory = (payload) => http({ method: httpVerbs.PATCH, url: url.categoryUrl, payload });
export const fetchCategory = (resourceId) => http({ method: httpVerbs.GET, url: `${url.categoryUrl}/${resourceId}` });


export const getProducts = () => http({ method: httpVerbs.GET, url: url.productUrl });
export const postProduct = (payload) => http({ method: httpVerbs.POST, url: url.productUrl, payload });
export const putProduct = (payload) => http({ method: httpVerbs.PUT, url: url.productUrl, payload });
export const patchProduct = (payload) => http({ method: httpVerbs.PATCH, url: url.productUrl, payload });
export const fetchProduct = (resourceId) => http({ method: httpVerbs.GET, url: `${url.productUrl}/${resourceId}` });
