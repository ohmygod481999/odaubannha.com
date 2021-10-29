import showdown from "showdown";
import { config } from "../config";

export const getDayInMonth = (dateString) => {
    const date = new Date(dateString);
    let result = date.getDate().toString();
    if (result.length === 1) {
        result = "0" + result;
    }
    return result;
};

export const getMonthName = (dateString) => {
    const date = new Date(dateString);
    const month = date.getMonth();
    return `Th ${month + 1}`;
};

export const formatDate = (dateString) => {
    const date = new Date(dateString);
    let day = date.getDate();
    if (day.length === 1) day = "0" + day;
    let month = (date.getMonth() + 1).toString();
    if (month.length === 1) month = "0" + month;
    let year = date.getFullYear();
    return `${day}/${month}/${year}`;
};

export const convertMarkdownToHtml = (markdownString) => {
    const converter = new showdown.Converter();
    return converter.makeHtml(markdownString);
};

export const formatMoney = (money) => {
    let formatter = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",

        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });

    return formatter.format(parseInt(money)); /* $2,500.00 */
};

export const createQueryString = (params = {}) => {
    if (Object.keys(params).length === 0) return "";
    let queryString = "?";
    console.log("params", params);
    for (let key of Object.keys(params)) {
        if (key === "_category_id") {
            queryString +=
                `_where[0][article_categories.id_eq]=${params[key]}` + "&";
        } else {
            queryString += key + "=" + params[key] + "&";
        }
    }
    queryString = queryString.substring(0, queryString.length - 1); // remove last '&' charactor
    return queryString;
};

// convert limit, start to number
export const formatQueryParams = (params = {}) => {
    const newParams = {};
    for (let key of Object.keys(params)) {
        newParams[key] = params[key];
    }
    newParams["_limit"] = newParams["_limit"]
        ? parseInt(newParams["_limit"])
        : config.DEFAULT_LIMIT_PAGE;
    newParams["_start"] = newParams["_start"]
        ? parseInt(newParams["_start"])
        : 0;

    return newParams;
};
