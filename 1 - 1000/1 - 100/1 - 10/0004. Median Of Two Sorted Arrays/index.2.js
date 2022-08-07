/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let k = 0, l = 0, m = nums1.length, n = nums2.length, o = (m + n) / 2, q;
    for (let i = 0; i < o; i++) {
        if (k >= m || nums1[k] >= nums2[l]) {
            q = nums2[l]
            l++
        } else {
            q = nums1[k]
            k++
        }
    }
    if (Number.isInteger(o)) {
        let r;
        if (k >= m) r = nums2[l]
        else if (l >= n) r = nums1[k]
        else r = Math.min(nums1[k], nums2[l])
        return (q + r) / 2
    }
    return q
};