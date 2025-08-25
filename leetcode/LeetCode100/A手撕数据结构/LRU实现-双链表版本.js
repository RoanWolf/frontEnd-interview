class LRUCache {
  /**
   * @param {number} capacity
   */
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
    this.head = { next: null }; // 双向链表的虚拟头节点
    this.tail = { prev: null }; // 双向链表的虚拟尾节点
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  // 将节点移到链表头部
  moveToHead(node) {
    this.remove(node);
    this.add(node);
  }

  // 从链表中移除节点
  remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  // 将节点添加到链表头部
  add(node) {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
  }

  get(key) {
    if (this.cache.has(key)) {
      let node = this.cache.get(key);
      this.moveToHead(node);
      return node.value;
    }
    return -1; // 缓存未命中
  }

  put(key, value) {
    if (this.cache.has(key)) {
      // 更新现有节点的值
      let node = this.cache.get(key);
      node.value = value;
      this.moveToHead(node);
    } else {
      // 创建新的节点
      let newNode = { key, value, prev: null, next: null };
      this.cache.set(key, newNode);
      this.add(newNode);

      // 如果缓存超过容量，移除尾部节点
      if (this.cache.size > this.capacity) {
        let tailNode = this.tail.prev;
        this.remove(tailNode);
        this.cache.delete(tailNode.key);
      }
    }
  }
}
