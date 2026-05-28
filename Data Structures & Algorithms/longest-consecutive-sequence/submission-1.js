class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
    const mySet = new Set();
    let longest = 0;

    for (const val of nums) {
        mySet.add(val);
    }

    for (const val of nums) {
        if (!mySet.has(val-1)) {
            let next = val + 1;
            let currentSequenceLength = 1; 
            while (mySet.has(next)) {
                currentSequenceLength++;
                next++;
            }
            longest = Math.max(longest, currentSequenceLength);
        }
    }

    return longest;

}
}
