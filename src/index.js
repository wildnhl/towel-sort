// You should implement your task here.

module.exports = function towelSort(matrix) {
   let finalArr = [];
   if (matrix == null) {
      return [];
   }
   for (let i = 0; i < matrix.length; i++) {
      if (i % 2 == 0) {
         for (let j = 0; j < matrix[i].length; j++) {
            finalArr.push(matrix[i][j]);
         }
      }
      if (i % 2 != 0) {
         for (let j = matrix[i].length - 1; j >= 0; j--) {
            finalArr.push(matrix[i][j]);
         }
      }
   }
   return finalArr;
};
