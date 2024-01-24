import Config from "../config";

export const trimLargeString = (value = "", length = 0) => {
    value = value.replace(/<[^>]+>/g, "");
    if (value.length <= length) return value
    return value.substring(0, length) + "..."
}

export const getPageTitle = (title = "Home") => {
    title = title.replace(/-/g, " ")
    return `${title?.charAt(0).toUpperCase() + title?.slice(1)} | ${Config.env().APP_NAME}`
}

export const pluralize = (noun, suffix = "s") => `${noun}${suffix}`;

export const singularize = (noun) => {
    if (noun.endsWith("ies")) {
        return noun.replace("ies", "y");
    }
    if (noun.endsWith("s")) {
        return noun.slice(0, -1);
    }
    return noun;
}

export const accessValue = (object, path) => {
    if (typeof object !== 'object' || typeof path !== 'string') {
        throw new Error('Invalid input');
    }
    const properties = path.split('.');
    let value = object;
    for (let i = 0; i < properties.length; i++) {
        const property = properties[i];
        value = value?.[property];

        if (value === undefined) {
            return undefined;
        }
    }
    return value;
}

export const breakWithCaps = (str) => {
    if (!str) return ""
    return String(str).replace(/([a-z])([A-Z])/g, '$1 $2');
}

export const formatAmount = (amount, fallBackText = "$0.00") => {
    if (!amount) return fallBackText
    return amount?.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
}

export const breakCamelCase = (key) => {
    const words = key.split(/(?=[A-Z])/);
    return words.join(" ");
}

export const removePlusSign = (value) => {
    return value?.replace("+", "%2B")
}

export const getPageName = (pathItem, splitPath, index) => {
    if (!isNaN(pathItem)) {
        pathItem = singularize(splitPath[index - 1].replace("-", " "))
        pathItem = `${pathItem} Details`
    }
    pathItem = pathItem.replace(/-/g, " ")
    return pathItem
}

export const extractTextInSquareBrackets = (input) => {
    const match = input.match(/\[(.*?)\]/);
    if (match && match[1]) {
        return match[1];
    }
    return null;
}

export const formatDistance = (value) => {
    if (!value) return "0 km"
    return `${value} km`
}

export const formatPercentage = (value) => {
    if (!value) return "0%"
    return `${value}%`
}

export const capitalizeFirstLetter = (str) => {
    // Check if the input is a valid string
    if (typeof str !== 'string' || str.length === 0) {
       return ''
    }
    // Capitalize the first letter and concatenate with the rest of the string
    return str.charAt(0).toUpperCase() + str.slice(1);
}
