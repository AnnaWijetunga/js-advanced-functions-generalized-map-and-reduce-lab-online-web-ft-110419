// Add your functions here
function map(sourceArray, callback) {
    let r = []

    for (let i = 0; i < sourceArray.length; i++) {
        let theElement = sourceArray[i]
        r.push(callback(theElement))
    }
    return r;
}

function reduce( sourceArray, callback, starting) {
    let r = (!!starting) ? starting : sourceArray[0]
    let i = (!!starting) ? 0:1

    for (; i < sourceArray.length; i++) {
        r = callback(sourceArray[i], r)
    }

    return r;
}