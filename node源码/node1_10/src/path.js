import path from 'node:path'

// 常见的 path 方法示例：

// 1. 路径拼接 - path.join()
const fullPath = path.join('users', 'david', 'documents', 'file.txt')
console.log(fullPath) // 输出: users/david/documents/file.txt (在 Unix 系统上)

// 2. 获取文件名 - path.basename()
const fileName = path.basename('/Users/david/documents/index.js')
console.log(fileName) // 输出: index.js

// 3. 获取文件扩展名 - path.extname()
const extName = path.extname('index.html')
console.log(extName) // 输出: .html

// 4. 解析路径 - path.parse()
const pathObject = path.parse('/Users/david/documents/index.js')
console.log(pathObject)
// 输出: {
//   root: '/',
//   dir: '/Users/david/documents',
//   base: 'index.js',
//   ext: '.js',
//   name: 'index'
// }

// 5. 获取目录名 - path.dirname()
const dirName = path.dirname('/Users/david/documents/index.js')
console.log(dirName) // 输出: /Users/david/documents

// 6. 路径规范化 - path.normalize()
const normalizedPath = path.normalize('/Users/david/../david/documents/./file.txt')
console.log(normalizedPath) // 输出: /Users/david/documents/file.txt

// 7. 判断是否为绝对路径 - path.isAbsolute()
console.log(path.isAbsolute('/Users/david')) // 输出: true
console.log(path.isAbsolute('david/documents')) // 输出: false