/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    // 拓扑排序判环
    const adjTable = Array.from({length:numCourses} , ()=>[]);
    const indegree = new Array(numCourses).fill(0);
    for(let [a,b] of prerequisites){
        adjTable[a].push(b);
        indegree[b]++;
    }
    let q = [];
    for(let i=0;i<indegree.length;++i){
        if(indegree[i] === 0){
            q.push(i);
        }
    }
    let cnt = 0;
    while(q.length){
        const cur = q.shift();
        cnt++;
        for(let val of adjTable[cur]){
            if(--indegree[val] === 0){
                q.push(val);
            }
        }
    }
    return cnt === numCourses;
};