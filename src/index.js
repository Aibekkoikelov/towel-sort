const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [10, 9, 11, 12],
    [13, 14, 15, 16],
];
function towelSort(matrix) {
    if (towelSort.arguments.length !== 0) {
        return matrix.length != 0
            ? matrix.reduce((acc, val, index) => {
                  return index % 2 !== 1
                      ? acc.concat(val.sort((a, b) => a - b))
                      : acc.concat(val.sort((a, b) => b - a));
              }, [])
            : [];
    } else return [];
        
    
}
module.exports = towelSort;