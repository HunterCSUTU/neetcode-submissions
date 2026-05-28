class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];

        //all of the tokens will be valid postfix. no need to validate stuff.
        for (let i = 0; i < tokens.length; i++) {
            if (['+','-','*','/'].includes(tokens[i])) {
                if (tokens[i] === '+') {
                    let rhs = stack.pop();
                    let lhs = stack.pop();
                    stack.push(lhs + rhs);
                }
                if (tokens[i] === '-') {
                    let rhs = stack.pop();
                    let lhs = stack.pop();
                    stack.push(lhs - rhs);
                }
                if (tokens[i] === '*') {
                    let rhs = stack.pop();
                    let lhs = stack.pop();
                    stack.push(lhs * rhs);                   
                }
                if (tokens[i] === '/') {
                    let rhs = stack.pop();
                    let lhs = stack.pop();
                    let div = lhs / rhs;
                    if (div < 0) {
                        div = Math.ceil(div);
                    }
                    else {
                        div = Math.floor(div);
                    }
                    stack.push(div);
                }
            }

            else { //it's a number
                stack.push(Number(tokens[i]));
            }
        }

        return stack.pop();
    }
}
