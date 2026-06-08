let a = [1, 2, 3, 4];
let matrix_grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

//print all the elements
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(matrix_grid[i][j]);
    }
    console.log("\n")
}
console.log();
//same row and same column is called grid
// length==row

let grid = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];
console.log(grid[0][0])
console.log(grid[0][2])
console.log(grid[0].length); //no. of cols in row 0
console.log(grid.length);  //no. of rows

