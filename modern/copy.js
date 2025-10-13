import _ from 'lodash'

const obj = { a: 1 };
const copy = _.cloneDeep(obj);
console.log(copy);