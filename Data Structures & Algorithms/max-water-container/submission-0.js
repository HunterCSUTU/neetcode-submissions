class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
    let l = 0;
    let r = heights.length-1;
    let maxWaterArea = 0;
    let height;
    let shorter;
    let width;

    while (l<r) {
        if (heights[r] <= heights[l]) {
            height = heights[r];
            // for height :  
            // let is block-scoped, not flow-scoped

            // if (true) {
            //     let height = 10;
            // } 
            // console.log(height);     //  ReferenceError


            // The engine creates a new scope for the { } block.

            // height only exists inside that block, regardless of whether the block actually runs.

            // Even if the if condition is true and the line executes, outside the block, height is invisible.
            shorter = 'r';
        }
        else {
            height = heights[l];
            shorter = 'l';
        }

        //let width = (r - l) + 1;   its not measuring bars width like in the last one. Just the container that can form.
        width = r-l;
        maxWaterArea = Math.max(maxWaterArea, height * width);

        if (shorter === 'r') { r--; }
        else { l++; }
    }

    return maxWaterArea;
}
}
