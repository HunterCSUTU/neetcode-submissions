class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
	//rows
	function rowSearch (arr, target, left, right) {
		let mid;
		while (left <= right) {
			
			mid = Math.floor( (left+right) / 2);


			if (arr[mid][0] <= target && target <= arr[mid][ arr[mid].length -1 ]) {
				return mid;
			}
			
			else if (arr[mid][0] < target) {
				 left = mid+1;
			}
			else {
				right = mid-1;
			}
		}
		return mid;
	}

	let left = 0;
	let right = matrix.length-1;
	const targetRowIndex = rowSearch(matrix, target, left, right);




	//columns
	function columnSearch (arr, rowIndex, target, left, right) {
		while (left <= right) {
			let mid = Math.floor( (left+right) / 2);
			if (arr[rowIndex][mid] === target) {
				return true;
			}
			else if (arr[rowIndex][mid] < target) {
				left = mid + 1;
			}
			else {
				right = mid - 1;
			}	
		}
		
		return false;
	}
	left = 0;
	right = matrix[targetRowIndex].length - 1;
	const result = columnSearch(matrix, targetRowIndex, target, left, right);

	return result;
}
}
