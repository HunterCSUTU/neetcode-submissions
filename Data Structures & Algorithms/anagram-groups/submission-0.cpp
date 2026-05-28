class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        unordered_map<string, vector<string>> findAnagrams;
        for (string& s : strs) {
            vector<int> sLetterFreq(26,0); //in pythong[0,0,0,0,0,0..]
            for (char c : s){
                sLetterFreq[c-'a']++;
            }
            //create the key
            string xKey = to_string(sLetterFreq[0]);
            for (int i =1; i < 26; i++){
                xKey += ',' + to_string(sLetterFreq[i]);
            }
            //add the actual string example "tea"
            findAnagrams[xKey].push_back(s);
        }

        vector<vector<string>> result;
        for (const auto& pair : findAnagrams) {
            result.push_back(pair.second);
        }

        return result; 
    }
};
