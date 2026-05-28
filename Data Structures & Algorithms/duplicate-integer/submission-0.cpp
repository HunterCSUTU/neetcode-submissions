class Solution {
public:
    bool hasDuplicate(vector<int>& nums) {
        set<int> seen;

        for (int n : nums) {
            if (seen.count(n) == 0)
                seen.insert(n);
            else
                return true;
        }
        return false;
    }
    
};