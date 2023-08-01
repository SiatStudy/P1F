export const findWidthObject = (width, widthObject) => {
    const sortedKeys = Object.keys(widthObject).map(Number).sort((a, b) => a - b);

    if (width <= sortedKeys[0]) {
        return widthObject[sortedKeys[0]];
    }

    let left = 0;
    let right = sortedKeys.length - 1;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (sortedKeys[mid] < width) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    const nearestKey = sortedKeys[left];
    return widthObject[nearestKey];
}