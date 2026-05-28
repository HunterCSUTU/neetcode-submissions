class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        let arr = [];

        for (let ch of s) {
            if (['(', '{', '['].includes(ch)) {
                arr.push(ch);
            }

            if (ch == ')') {
                if (arr.pop() != '(') {  //it looks like arr.pop() needs to be in a variable. But it doesn't
                    return false;
                }
                else {continue;}
            }

            if (ch == '}') {
                if (arr.pop() != '{') {  
                    return false;
                }
                else {continue;}
            }            

            if (ch == ']') {
                if (arr.pop() != '[') {  
                    return false;
                }
                else {continue;}
            }         

        }

        if (arr.length != 0) {
            return false;
        }

        return true;




    }
}
