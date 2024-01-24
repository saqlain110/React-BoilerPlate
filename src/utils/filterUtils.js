export const getFilters = (facetData) => {
    if (!facetData) return []
    delete facetData.totalResults
    const filters = Object.keys(facetData).map((item) => {
        return {
            title: getFilterLabel(item),
            key: item,
            options: facetData[item],
            searchKey: `${item}Query`
        }
    })
    return filters
}


export const filterLabelEnum = {
    userId: "Users",
    companyId: "Company",
}

export const getFilterLabel = (key) => {
    return filterLabelEnum[key] || key || "Unrecognized Filter"
}