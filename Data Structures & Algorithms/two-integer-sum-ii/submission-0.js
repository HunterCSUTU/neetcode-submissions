class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
    let i = 0;
    let j = numbers.length - 1;

    while (i<j) {
        if (numbers[i] + numbers[j] > target) {
            j--;
        }
        else if (numbers[i] + numbers[j] < target) {
            i++;
        }
        else if (numbers[i] + numbers[j] === target) {
            return [i+1,j+1]; //I think this has to do with readability
        }
    }


    }
}
