class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
    let left_arr = new Array(heights.length).fill(-1);
    let right_arr = new Array(heights.length).fill(heights.length);

    //left boundries. boundries are shorter bars. because you can use taller bars in your width.
    let stack = [];
    for (let i = 0; i < heights.length; i++) {

        while (stack.length>0 && heights[stack[stack.length-1]]>=heights[i]) {
            stack.pop();
        }

        if (stack.length>0 && heights[stack[stack.length-1]]<heights[i]) {
            left_arr[i] = stack[stack.length-1];
        }

        stack.push(i);
    }

    stack = [];
    for (let i=heights.length-1; i>=0; i--) {

        while (stack.length>0 && heights[stack[stack.length-1]]>=heights[i]) {
            stack.pop();
        }

        if (stack.length>0 && heights[stack[stack.length-1]] < heights[i]) {
            right_arr[i] = stack[stack.length-1];
        }

        stack.push(i)
    }

    let max_area = 0;
    for (let i=0; i < heights.length; i++) {
        left_arr[i] += 1; //so we can get them on actual indexes. Remember they were filled with indexes just outside of the index range: -1, heights.length
        right_arr[i] -= 1;

        let height = heights[i]
        let width = right_arr[i] - left_arr[i] + 1  //index 0 to index 2.  2-0+1 = 3. index 0 to 2 is length 3.
        let area = height * width;

        max_area = Math.max(max_area, area);
    }

    return max_area;
    }
}


