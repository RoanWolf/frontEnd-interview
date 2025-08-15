/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams1 = function (strs) {
  const map = new Map();
  for (const str of strs) {
    const item = [...str].sort().join();
    map.has(item) ? map.get(item).push(str) : map.set(item, [str]);
  }
  return [...map.values()];
};
var groupAnagrams2 = function (strs) {
  const map = new Map();
  strs.forEach((str) => {
    const item = str.split("").sort().join("");
    map.has(item) ? map.get(item).push(str) : map.set(item, [str]);
  });
  return [...map.values()];
};
