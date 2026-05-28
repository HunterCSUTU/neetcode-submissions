class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        //get frequencies
        unordered_map<int, int> countFreq; //<num , freq>
        for (int n : nums) {
                countFreq[n] += 1;
        }

        //make buckets and fill
        vector<vector<int>> buckets(nums.size()+1);

        for (const auto& pair : countFreq) {
                buckets[pair.second].push_back(pair.first);
        }

        //get top k freq from last buckets
        vector<int> result;
        for (int i = buckets.size()-1; i>=0 && result.size() < k; i--) {
                for (int num : buckets[i]) {
                        result.push_back(num);
                        if (result.size() == k)
                                break;
                }
        }
        return result;
    }
};
