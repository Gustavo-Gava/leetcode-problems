var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function merge(nums1, m, nums2, n) {
    // nums1.length === m + n
    // nums2.length === n
    // m = number of elements that should be merged of the nums 1 array
    nums1 = __spreadArray(__spreadArray([], nums1, true), nums2, true);
    function findSmaller(nums) {
        var smallNumber = nums[0];
        for (var i = 0; i <= m; i++) {
            if (nums1[i] < smallNumber) {
                smallNumber = nums1[i];
            }
        }
        console.log(smallNumber);
    }
    findSmaller(nums1);
    console.log("nums1: ", nums1);
}
merge([1, 2, 3], 3, [2, 5, 6], 3);
