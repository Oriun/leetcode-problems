/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let k = 0, l = 0, m = nums1.length, n = nums2.length, o = (m + n) / 2, p = Math.ceil(o), q;
    for (let i = 0; i < p; i++) {
        if (k >= m) {
            q = nums2[l]
            l++
        } else if (l >= n) {
            q = nums1[k]
            k++
        }
        else if (nums1[k] <= nums2[l]) {
            q = nums1[k]
            k++
        } else {
            q = nums2[l]
            l++
        }
    }
    if (Number.isInteger(o)) {
        let r = 0
        if (k >= m) r = nums2[l]
        else if (l >= n) r = nums1[k]
        else r = Math.min(nums1[k], nums2[l])
        return (q + r) / 2
    }
    return q
};