function searchMatrix(matrix: number[][], target: number): boolean {
    let i: number = 0,
        j: number = 0;

    while (i < matrix.length) {
        if (matrix[i][j] == target) return true;

        j++;
        if (j >= matrix[i].length) {
            i++;
            j = 0;
        }
    }

    return false;
}
