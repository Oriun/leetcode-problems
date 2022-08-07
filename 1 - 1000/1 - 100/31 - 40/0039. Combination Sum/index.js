/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target, p = [], sum = 0) {
  const path = p;
  if (sum > target) return [];
  if (sum == target) return [path];
  const maxNext = target - sum;
  const output = [];
  for (const candidate of candidates)
    if (candidate <= maxNext && candidate >= (path.at(-1) ?? 0)) {
      const tmp = combinationSum(
        candidates,
        target,
        path.concat(candidate),
        sum + candidate
      );
      output.push(...tmp);
    }
  return output;
};
