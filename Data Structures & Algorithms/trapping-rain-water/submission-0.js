class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(heights) {
    let leftMaxArray = Array(heights.length);
    let rightMaxArray = Array(heights.length);
    let minBoundryArray = Array(heights.length);
    let sum = 0;

    //find leftMax's
    leftMaxArray[0] = 0;
    let leftMax = 0;
    for (let i = 1; i < heights.length; i++) {
        leftMax = Math.max(leftMax, heights[i-1]);
        leftMaxArray[i] = leftMax;
    }

    //find rightMax's
    rightMaxArray[heights.length-1] = 0;
    let rightMax = 0;
    for (let i = heights.length-2; i>=0; i--) {
        rightMax = Math.max(rightMax, heights[i+1]);
        rightMaxArray[i] = rightMax;
    }

    //find minBoundry's
    for (let i = 0; i < heights.length; i++) {
        minBoundryArray[i] = Math.min(leftMaxArray[i], rightMaxArray[i]);
    }


    //find water
    for (let i = 0; i < heights.length; i++) {
        let difference = minBoundryArray[i] - heights[i];
        if (difference>0) {
            sum += difference;
        }
    }

    return sum;

}
}
