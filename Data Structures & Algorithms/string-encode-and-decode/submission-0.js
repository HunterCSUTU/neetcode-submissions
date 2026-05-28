class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let word_string = "";
        let delimiter_string = "";

        for (let elt of strs) {   //use of. in  is for indexes
            word_string += elt;
            delimiter_string += String(elt.length) + "#";
        }

        return delimiter_string + "?" + word_string;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let lens_arr = [];
        let words_arr = [];
        let temp_num_str = "";
        
        let i = 0;

        for (i; str[i] != '?'; i++) {

            if (str[i] == '#') {
                temp_num_str = "";
                continue;
            }
            else {
                temp_num_str += str[i];
                
                if (str[i+1] == '#' || str[i+1] == '?') {
                    lens_arr.push(Number(temp_num_str));
                }
            }

        }
        i++;
        
        for (let num of lens_arr) {
            let word = "";
            for (let j=0; j < num; j++) {
                word += str[i];
                i++;
            }
            words_arr.push(word);
        }

        return words_arr;
    }
}