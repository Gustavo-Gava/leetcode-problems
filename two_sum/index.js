// O(n2) complexity
function twoSum(nums, target) {
    var indexes = [];
    for (var i = 0; i <= nums.length; i++) {
        for (var j = 0; j <= nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                if (j !== i) {
                    indexes = [i, j];
                    return indexes;
                }
            }
        }
    }
    return indexes;
}
var numbers = [2, 7, 11, 15];
// console.log("result: ", twoSum(numbers, 9));
// console.log("result: ", twoSum([3, 2, 4], 6));
// console.log("result: ", twoSum([3, 3], 6));
function twoSumOptimized(nums, target) {
    var seen = {};
    var indexes = [];
    nums.forEach(function (num, index) {
        var diff = target - num;
        if (seen[diff]) {
            indexes = [seen[diff], index];
            return;
        }
        seen[num] = index;
    });
    return indexes;
}
console.log("result optimized: ", twoSumOptimized([2, 7, 11, 15], 9));
console.log("result optimized: ", twoSumOptimized([3, 2, 4], 6));
console.log("result optimized: ", twoSumOptimized([3, 3], 6));
