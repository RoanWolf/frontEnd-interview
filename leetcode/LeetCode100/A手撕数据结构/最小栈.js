let MinStack = function () {
  this._stack = [];
  this.minStack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this._stack.push(val);

  if (this.minStack.length === 0 || this.minStack.at(-1) >= val) {
    this.minStack.push(val);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this._stack.length === 0) return;
  if (this._stack.at(-1) === this.minStack.at(-1)) this.minStack.pop();
  this._stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this._stack.at(-1);
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack.at(-1);
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
