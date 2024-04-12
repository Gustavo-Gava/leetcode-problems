function merge(nums1: number[], m: number, nums2: number[], n: number): void {
	// nums1.length === m + n
	// nums2.length === n
	// m = number of elements that should be merged of the nums 1 array

	nums1 = [...nums1, ...nums2];

	function findSmaller(nums: number[]) {
		let smallNumber = nums[0];

		for (let i = 0; i <= m; i++) {
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
