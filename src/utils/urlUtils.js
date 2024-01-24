export const makeUrl = (url) => {
    if (!url) return ""
    url = url.replace("+", "%2B")
    return url
}