class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
    //     let stack = [];
    //     let return_temps = Array(temperatures.length).fill(0);

    //     for (let i=0; i<temperatures.length; i++) { 

    //         //you cant access the end of the stack with [-1] like you could python.
    //         while (stack.length>1 && (stack[stack.length-1][0] > stack[stack.length-2][0])){

    //             let input_index = stack[stack.length-1][1] - stack[stack.length-2][1];
    //             let temp_pop = stack.pop(stack.length-2); //pop() can't take a specific index like it could in python
    //             return_temps[temp_pop[1]] = input_index;
    //         }

    //         stack.push([temperatures[i], i]) //js does not have tuples

    //     }

    //     return return_temps;

        let stack = [];
        let temps = temperatures;
        let returnArr = Array(temps.length).fill(0);

        for (let i = 0; i < temps.length; i++) {

            while (stack.length>0 && temps[i]>stack[stack.length-1][0]) {
                let returnArr_value = i - stack[stack.length-1][1];
                returnArr[stack[stack.length-1][1]] = returnArr_value;
                stack.pop();
            }

            stack.push([temps[i], i])

        }


        return returnArr;
    }
}
