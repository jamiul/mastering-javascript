/* Input:
arr1 = [
    {"id": 1, "x": 1},
    {"id": 2, "x": 9}
],
arr2 = [{"id": 3, "x": 5}]
Output:
[
    {"id": 1, "x": 1},
    {"id": 2, "x": 9},
    {"id": 3, "x": 5}
] */


/*     arr1 = [
        {"id": 1, "x": 2, "y": 3}, {"id": 2, "x": 3, "y": 6}
    ],
    arr2 = [
        {"id": 2, "x": 10, "y": 20}, {"id": 3, "x": 0, "y": 0}
    ]
    Output:
    [
        {"id": 1, "x": 2, "y": 3},
        {"id": 2, "x": 10, "y": 20},
        {"id": 3, "x": 0, "y": 0}
    ] */
/* Input:
arr1 = [{"id": 1, "b": {"b": 94},"v": [4, 3], "y": 48}]
arr2 = [ {"id": 1, "b": {"c": 84}, "v": [1, 3]}]
Output: [
    {"id": 1, "b": {"c": 84}, "v": [1, 3], "y": 48}
] */

let arr1 = [ {"id": 1, "b": {"b": 94},"v": [4, 3], "y": 48} ];
let arr2 = [ {"id": 1, "b": {"c": 84}, "v": [1, 3]} ];

function mergeJson(arr1, arr2) {
    const res = {};
    for(let i = 0; i < arr1.length; i++) {
        res[arr1[i].id] = arr1[i];
    }

    for(let i = 0; i < arr2.length; i++) {
        if(res[arr2[i].id]) {
            // override the previous key values
            for(let key in arr2[i])
                res[arr2[i].id][key] = arr2[i][key];
        } else {
            res[arr2[i].id] = arr2[i];
        }
    }

    return Object.values(res);
}

console.log(mergeJson(arr1, arr2));