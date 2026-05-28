class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
    //iterative style
    //if arr.length === 1 and midpoint is not the target return -1.

    let l = 0;
    let r = nums.length-1;
    
    while (l <= r) {
        let m = Math.floor( (l+r) / 2);

        if (nums[m] === target) { return m; }

        if (nums[m] < target) { l = m + 1; }
        else { r = m - 1; }
        
    }

    return -1;
        
}
}
