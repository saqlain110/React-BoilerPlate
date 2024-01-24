const appendQueryParams = (paramsObj = {}, useArray = true) => {
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
export default appendQueryParams