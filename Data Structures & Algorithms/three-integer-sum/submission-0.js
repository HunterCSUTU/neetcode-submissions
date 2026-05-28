class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

    let result = [];
    nums.sort((a,b) => a - b);

    for (let i = 0; i <= nums.length-3; i++) {
        if (nums[i] > 0) { break; } //nums is sorted. how would you add positives to equal zero.
        if (i>0 && nums[i] === nums[i-1]) { continue; } //nums is sorted. prevent [this, , ] from being the same value. Avoids duplicates.

        let l = i+1;
        let r = nums.length-1;

        //this is the twoSumII-like part
        while (l<r) {
            const sum = nums[i] + nums[l] + nums[r];

            if (sum > 0) { r--; }
            else if (sum < 0) { l++; }
            else {
                result.push([nums[i], nums[l], nums[r]]);
                l++;
                r--; //prevents duplicates. if the old i, l, and r equaled 0, then you can't move just one of l or r and have another 0. It would be a duplicate.
                
                while (l<r && nums[l] === nums[l-1]) {
                    l++; //same logic as the previous comment. but what about the different r? if l was the same as the old l, and r was different, it would not sum to a zero anyways. This makes sure of an edge case that the new r is the same as the old r.
                }
            }


        }

    }

    return result;

}
}
