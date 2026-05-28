class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let max = 0;
        let mySet = new Set(nums);
        for (const num of mySet) {
            if (!mySet.has(num-1)) {
                let localMax = 1;
                let current = num;
                while (mySet.has(current+1)) {
                    current = current +1;
                    localMax += 1;
                }
                if (localMax > max) {
                    max = localMax;
                }
            }
        }
        return max;
    }
}
