class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        
        #create a hashmap with keys of O(26)
        hash_map = {}

        for word in strs:
            freq_list = [0]*26
            for char in word:
                char_index = ord(char) - ord('a') #built in python thing
                freq_list[char_index] += 1
            freq_tuple = tuple(freq_list) #hashset keys must be immutable

            if freq_tuple in hash_map:
                hash_map[freq_tuple].append(word)
            else:
                hash_map[freq_tuple] = [word]
        
        #return a list of hashmaps values
        result = []
        for key in hash_map:
            result.append(hash_map[key])
        return result

