class Solution {

        //You cannot use function inside a class
        //In JavaScript classes, methods are defined without the function keyword.

        isPalindrome(s) {
                let i = 0;
                let j = s.length - 1;

                while (i < j) {
                        while (i<j && !this.validChar(s[i])) {
                                //we are just saying 'this.' because neetcode uses creates an instance of the solution class.
                                //We cant really write a global function. Maybe we could make a local function inside
                                //the function though.
                                i++;
                        }
                        while (i<j && !this.validChar(s[j])) {
                                j--;
                        }

                        if (s[i].toLowerCase() !== s[j].toLowerCase()) {return false;}
                        //case-insensitive. (doesn't care if it is a capitol or not)

                        i++;
                        j--;
                }
                return true;
        }

        validChar(c) {
                return (
                        ('A'<=c && c<='Z') ||
                        ('a'<=c && c<='z') ||
                        ('0'<=c && c<='9')   //in js you cant say 'A' <= c <= 'Z'
                );

        }
}