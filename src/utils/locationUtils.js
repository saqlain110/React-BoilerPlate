export const getDefaultCoordinates = () => {
    return {
        lat: 57.7316917091633,
        lng: -101.94623828125
    }
}

export const getRandomCoordinates = () => {
    return [
        { "lat": 52.520008, "lng": 13.404954 },
        { "lat": 52.5236, "lng": 13.4115 },
        { "lat": 52.516275, "lng": 13.377704 },
        { "lat": 52.523741, "lng": 13.390793 },
        { "lat": 52.498623, "lng": 13.391799 },
        { "lat": 52.530858, "lng": 13.384748 },
        { "lat": 52.506761, "lng": 13.284128 },
        { "lat": 52.497032, "lng": 13.473979 },
        { "lat": 52.478056, "lng": 13.438333 },
        { "lat": 52.529629, "lng": 13.401803 }
    ]
}

export const getShortAddressFromAddressComponents = (formated_address, address_components) => {
    let name = formated_address;
    if (address_components?.length && address_components?.length > 1)
        name =
            address_components?.at(0)?.short_name +
            ' ' +
            address_components?.at(1)?.short_name +
            ' ' +
            address_components?.at(2)?.short_name

    return name;
};