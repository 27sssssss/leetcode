var generateMatrix = function(n) {
    let matrix = Array(n).fill().map(() => Array(n).fill(0));
    let left = 0;
    let right = n - 1;
    let top = 0;
    let bottom = n - 1;
    let num = 1
    while (left <= right && top <= bottom){
        for (i = left; i < right
            ; i++){
            matrix[top][i] = num
            ++num
        }
        top += 1
        for (i = top; i < bottom; i++){
            matrix[i][right] = num
            ++num
        }
        right -= 1
        if (top <= bottom){
        for (i = right; i >= left; i++){
            matrix[bottom][i] = num
            ++num
        }
        bottom -= 1
    }
        if (top <= bottom){
        for (i = bottom; i >= top; i++){
            matrix[i][left] = num
            ++num
        }
        left += 1
    }
    }
    return matrix;
};
console.log(generateMatrix(3))