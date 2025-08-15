/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams1 = function(s, p) {
    if(p.length > s.length) return [];
    if(p.length === s.length) return p === s ? [0] : [];
    const ans = [];

    p = [...p].sort().join('');

    for(let i = 0; i + p.length - 1 < s.length;++i){
        const str = s.slice(i,i + p.length);
        const item = [...str].sort().join('');

        item === p && ans.push(i);
    }

    return ans; // TLE

};

var findAnagrams = function(s, p) {
    const ans = [];
    const cntP = new Array(26).fill(0);
    const cntS = new Array(26).fill(0);

    for(const c of p) cntP[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;

    for(let r = 0; r < s.length; ++r) {
        cntS[s[r].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        let l = r - p.length + 1;
        if(l < 0) continue;

        if(arraysEqual(cntP, cntS)) {
            ans.push(l);
        }
        cntS[s[l].charCodeAt(0) - 'a'.charCodeAt(0)]--;
    }

    return ans;
}

function arraysEqual(arr1, arr2) {
    for (let i = 0; i < 26; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}