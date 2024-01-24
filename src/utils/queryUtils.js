import sortOrders from "../constants/sortOrders";

export const queryStringToObject = () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    return params
}

export const fetchQueryString = () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    return urlSearchParams
}

export const appendQueryParams = (paramsObj = {}, useArray = true) => {
    const paramsArr = []
    Object.keys(paramsObj).forEach(key => {
        if (Array.isArray(paramsObj[key])) {
            paramsObj[key].forEach(paramsVal => {
                if (useArray) {
                    paramsArr.push(`${key}[]=${paramsVal}`)
                }
                else {
                    paramsArr.push(`${key}=${paramsVal}`)
                }
            })
        } else {
            if (paramsObj[key] !== "" && paramsObj[key] !== null && paramsObj[key] !== undefined) {
                paramsArr.push(`${key}=${paramsObj[key]}`)
            }
        }
    })
    return paramsArr.join("&")
}

export const makeInitialQueryObject = (injectParams) => {
    let params = {
        page: 1,
        limit: 20,
        Sort: "lastModifiedOn",
        SortOrder: sortOrders.DESC,
    }
    if (injectParams) {
        params = { ...params, ...injectParams }
    }
    return params
}

export const updateUrl = ({ queryString, pageTitle }) => {
    window.history.replaceState(null, pageTitle, `?${queryString}`)
}