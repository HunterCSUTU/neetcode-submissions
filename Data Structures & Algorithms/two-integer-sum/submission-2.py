class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        
        my_set = set(nums)

        #target - nums[i] = nums[j]

        for i in range(len(nums)):
            diff = target - nums[i]
            if ((diff in my_set)):
                for j in range(i+1, len(nums)):
                    if (diff == nums[j]):
                        return [i, j]
                
