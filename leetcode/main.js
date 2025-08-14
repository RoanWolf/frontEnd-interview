const fs = require('fs');
const path = require('path');

// LeetCode 100 题分类和题目列表
const categories = {
  "Array": [
    { num: 1, title: "两数之和" },
    { num: 167, title: "两数之和 II - 输入有序数组" },
    { num: 121, title: "买卖股票的最佳时机" },
    { num: 122, title: "买卖股票的最佳时机 II" },
    { num: 53, title: "最大子序和" },
    { num: 56, title: "合并区间" },
    { num: 283, title: "移动零" },
    { num: 238, title: "除自身以外数组的乘积" },
    { num: 35, title: "搜索插入位置" },
    { num: 215, title: "数组中的第K个最大元素" },
    { num: 912, title: "排序数组" },
    { num: 300, title: "最长递增子序列" },
    { num: 561, title: "数组拆分" },
    { num: 48, title: "旋转图像" },
  ],
  "LinkedList": [
    { num: 206, title: "反转链表" },
    { num: 19, title: "删除链表的倒数第N个节点" },
    { num: 21, title: "合并两个有序链表" },
    { num: 2, title: "两数相加" },
    { num: 141, title: "环形链表" },
    { num: 142, title: "环形链表 II" },
    { num: 138, title: "复制带随机指针的链表" },
    { num: 160, title: "链表相交" },
    { num: 234, title: "回文链表" },
    { num: 142, title: "链表中环的入口节点" },
  ],
  "BinaryTree": [
    { num: 104, title: "二叉树的最大深度" },
    { num: 111, title: "二叉树的最小深度" },
    { num: 101, title: "对称二叉树" },
    { num: 102, title: "二叉树的层序遍历" },
    { num: 112, title: "路径总和" },
    { num: 105, title: "从前序与中序遍历序列构造二叉树" },
    { num: 106, title: "从中序与后序遍历序列构造二叉树" },
    { num: 226, title: "翻转二叉树" },
    { num: 701, title: "二叉搜索树的插入操作" },
    { num: 543, title: "二叉树的直径" },
  ],
  "DynamicProgramming": [
    { num: 70, title: "爬楼梯" },
    { num: 1143, title: "最长公共子序列" },
    { num: 322, title: "零钱兑换" },
    { num: 62, title: "不同路径" },
    { num: 72, title: "编辑距离" },
    { num: 131, title: "分割回文串" },
    { num: 198, title: "打家劫舍" },
    { num: 213, title: "打家劫舍 II" },
    { num: 53, title: "最大子序列和" },
    { num: 416, title: "背包问题" },
  ],
  "SortingAndSearching": [
    { num: 704, title: "二分查找" },
    { num: 153, title: "寻找旋转排序数组中的最小值" },
    { num: 162, title: "查找峰值" },
    { num: 912, title: "归并排序" },
    { num: 88, title: "合并两个有序数组" },
    { num: 215, title: "寻找第K大的元素" },
    { num: 33, title: "搜索旋转排序数组" },
    { num: 169, title: "求众数" },
    { num: 4, title: "寻找两个正序数组的中位数" },
    { num: 208, title: "实现 Trie.js" },
  ],
  "Backtracking": [
    { num: 46, title: "全排列" },
    { num: 78, title: "子集" },
    { num: 784, title: "字母大小写全排列" },
    { num: 39, title: "组合总和" },
    { num: 40, title: "组合总和 II" },
    { num: 79, title: "单词搜索" },
    { num: 131, title: "分割回文串" },
    { num: 22, title: "括号生成" },
    { num: 51, title: "求解 N 皇后问题" },
    { num: 52, title: "求解 N 皇后 II" },
  ],
  "Math": [
    { num: 9, title: "回文数" },
    { num: 13, title: "罗马数字转整数" },
    { num: 7, title: "整数反转" },
    { num: 16, title: "最接近的三数之和" },
    { num: 204, title: "计数质数" },
    { num: 73, title: "矩阵置零" },
    { num: 812, title: "三角形的最大面积" },
    { num: 69, title: "求解平方根" },
    { num: 476, title: "数字的补码" },
    { num: 205, title: "最大公约数和最小公倍数" },
  ],
  "Stack": [
    { num: 20, title: "有效的括号" },
    { num: 155, title: "最小栈" },
    { num: 84, title: "柱状图中最大的矩形" },
    { num: 739, title: "每日温度" },
    { num: 150, title: "逆波兰表达式求值" },
    { num: 946, title: "栈的压入、弹出序列" },
    { num: 232, title: "用栈实现队列" },
    { num: 225, title: "用队列实现栈" },
    { num: 394, title: "解码字符串" },
    { num: 32, title: "最长有效括号" },
  ]
};

// 创建文件夹和文件的函数
function createLeetCodeFolders(categories) {
  for (let category in categories) {
    // 创建每个分类文件夹
    const categoryPath = path.join(__dirname, "LeetCode100", category);
    if (!fs.existsSync(categoryPath)) {
      fs.mkdirSync(categoryPath, { recursive: true });
    }

    // 创建每道题目的 JS 文件
    categories[category].forEach((item) => {
      const filePath = path.join(categoryPath, `${item.num}-${item.title}.js`);
      fs.writeFileSync(filePath, "", (err) => {
        if (err) throw err;
      });
    });
  }
  console.log("文件夹和文件创建完成！");
}

// 执行创建文件夹和文件的操作
createLeetCodeFolders(categories);
