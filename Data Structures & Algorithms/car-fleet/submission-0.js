class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        //distance = speed * time
        //time = distance / speed

        //find the ETAs. Evaluate from front of cars to back to make fleets.
        let n = position.length;
        let stack = [];
        let cars = [];
        //the cars are not already sorted in order! :(
        for (let i=0; i<n; i++) {
            cars.push([position[i], speed[i]]);
        }
        cars.sort((a,b) => b[0] - a[0]);

        for (let i=0; i<n; i++) {
            let time = (target - cars[i][0]) / cars[i][1]; 
            
            if (stack.length>0 && time <= stack[stack.length-1]) {
            //the if means that it's going to make every element a 'car fleet' with value the fleet will arive at.
            //and if a car is faster than the last time, it merges with the last time as a fleet
                continue;
            }
            //if it is slower, then it wont catch up to the last fleet and it will become its own fleet
            else { 
                stack.push(time);
            }
        }

        return stack.length;
    }
}
