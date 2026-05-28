class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        map<int, int> seen; //<elt, index>

        for (int i = 0; i < nums.size(); i++) {
            int diff = target - nums[i];
            auto it = seen.find(diff);

            if (it != seen.end()) {
                vector<int> result = {it->second, i};
                return result;
            }

            else {
                seen[nums[i]] = i;
            }

        }
    }
};
