/**
 * 自定义事件类，模拟 Node.js EventEmitter 的基本功能
 */
class MyEvent{
    /**
     * 构造函数，初始化事件存储对象
     */
    constructor(){
        this.events = {}  // 存储所有事件监听器的对象
    }
    
    /**
     * 注册事件监听器
     * @param {string} eventName - 事件名称
     * @param {Function} callback - 事件回调函数
     */
    on(eventName, callback){
        // 如果事件名称不存在，则初始化为空数组
        if(!this.events[eventName]){
            this.events[eventName] = []
        }
        // 将回调函数添加到事件监听器数组中
        this.events[eventName].push(callback)
    }
    
    /**
     * 触发事件，执行所有注册的监听器
     * @param {string} eventName - 要触发的事件名称
     * @param {...any} args - 传递给回调函数的参数
     */
    emit(eventName, ...args){
        // 如果事件存在，则执行所有回调函数
        if(this.events[eventName]){
            this.events[eventName].forEach(callback => callback(...args))
        }
    }

    /**
     * 移除指定的事件监听器
     * @param {string} eventName - 事件名称
     * @param {Function} callback - 要移除的回调函数
     */
    off(eventName, callback){
        // 如果事件存在，则过滤掉指定的回调函数
        if(this.events[eventName]){
            this.events[eventName] = this.events[eventName].filter(item => item !== callback)
        }
    }

    /**
     * 注册一次性事件监听器，触发一次后自动移除
     * @param {string} eventName - 事件名称
     * @param {Function} callback - 事件回调函数
     */
    once(eventName, callback){
        // 创建包装函数，执行原回调后自动移除自身
        const one = (...args) => {
            callback(...args)
            this.off(eventName, one)  // 执行后移除监听器
        }
        this.on(eventName, one)  // 注册包装函数
    }
}