(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{368:function(_,v,e){"use strict";e.r(v);var a=e(44),s=Object(a.a)({},(function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h1",{attrs:{id:"位运算"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#位运算"}},[_._v("#")]),_._v(" 位运算")]),_._v(" "),e("h2",{attrs:{id:"_1-进制的基本概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-进制的基本概念"}},[_._v("#")]),_._v(" 1. 进制的基本概念")]),_._v(" "),e("h3",{attrs:{id:"_1-1-进位计数制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-进位计数制"}},[_._v("#")]),_._v(" 1.1 进位计数制")]),_._v(" "),e("p",[_._v("任何一种进位计数制都有一个基数，基数为 "),e("code",[_._v("X")]),_._v(" 的进位计数制称为 "),e("code",[_._v("X")]),_._v(" 进制，意味着每个数位上运算时都是逢 "),e("code",[_._v("X")]),_._v(" 进 "),e("code",[_._v("1")]),_._v("。")]),_._v(" "),e("h3",{attrs:{id:"_1-2-进制间转换"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-进制间转换"}},[_._v("#")]),_._v(" 1.2 进制间转换")]),_._v(" "),e("h4",{attrs:{id:"_1-2-1-非十进制转十进制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-非十进制转十进制"}},[_._v("#")]),_._v(" 1.2.1 非十进制转十进制")]),_._v(" "),e("p",[_._v("计算每个数位的加权和即可。\n例如将16进制数 "),e("code",[_._v("1A60.5")]),_._v(" 转换为十进制：")]),_._v(" "),e("blockquote",[e("p",[_._v("1A60.5 = 1 * 16^3 + 10 * 16^2 + 6 * 16^1 + 0 * 16^0 + 5 * 16^-1 =  6752.3125")])]),_._v(" "),e("h4",{attrs:{id:"_1-2-2-十进制转非十进制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-十进制转非十进制"}},[_._v("#")]),_._v(" 1.2.2 十进制转非十进制")]),_._v(" "),e("p",[_._v("一般将整数部分和小数部分分开计算。")]),_._v(" "),e("ul",[e("li",[e("p",[_._v("整数部分\n将整数部分每次除以 "),e("code",[_._v("X")]),_._v("，记录每次计算的余数，直到被除数变为0。然后反向遍历余数结果就可以得到 "),e("code",[_._v("X")]),_._v(" 进制数。")]),_._v(" "),e("p",[_._v("以 "),e("code",[_._v("2")]),_._v(" 进制为例，将十进制数 "),e("code",[_._v("100")]),_._v(" 转换为 "),e("code",[_._v("2")]),_._v(" 进制：")]),_._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v("100 / 2 = 50 余 0\n50 / 2 = 25 余 0\n25 / 2 = 12 余 1\n12 / 2 = 6 余 0\n6 / 2 = 3 余 0\n3 / 2 = 1 余 1\n1 / 2 = 0 余 1\n")])]),_._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[_._v("1")]),e("br"),e("span",{staticClass:"line-number"},[_._v("2")]),e("br"),e("span",{staticClass:"line-number"},[_._v("3")]),e("br"),e("span",{staticClass:"line-number"},[_._v("4")]),e("br"),e("span",{staticClass:"line-number"},[_._v("5")]),e("br"),e("span",{staticClass:"line-number"},[_._v("6")]),e("br"),e("span",{staticClass:"line-number"},[_._v("7")]),e("br")])]),e("p",[_._v("得到 "),e("code",[_._v("2")]),_._v(" 进制表示为 "),e("code",[_._v("1100100")]),_._v("。")])]),_._v(" "),e("li",[e("p",[_._v("小数部分\n将小数部分每次乘以 "),e("code",[_._v("X")]),_._v(" 直到变为 0，记录每次结果的整数部分，正序遍历整数结果即可得到 "),e("code",[_._v("X")]),_._v(" 进制表示的小数。")]),_._v(" "),e("p",[_._v("以 "),e("code",[_._v("2")]),_._v(" 进制为例，将十进制数 "),e("code",[_._v("0.7235")]),_._v(" 转换为 "),e("code",[_._v("2")]),_._v(" 进制：")]),_._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v("0.375 * 2 = 0.75 整数部分为 0\n0.75 * 2 = 1.5 整数部分为 1\n0.5 * 2 = 1 整数部分为1\n")])]),_._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[_._v("1")]),e("br"),e("span",{staticClass:"line-number"},[_._v("2")]),e("br"),e("span",{staticClass:"line-number"},[_._v("3")]),e("br")])]),e("p",[_._v("得到 "),e("code",[_._v("2")]),_._v(" 进制表示为 "),e("code",[_._v("0.011")]),_._v("。\n由于乘法的结果最后不一定总能将小数位清 0，所以很多时候一种进制下的有限小数转换为其他进制时会变成无限循环小数。例如十进制的 "),e("code",[_._v("0.9")]),_._v(" 转换为二进制结果为\n"),e("code",[_._v("0.1[1100]")]),_._v(" 后四位无限循环。")])])]),_._v(" "),e("h3",{attrs:{id:"_1-2-3-其他进制间的转换"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3-其他进制间的转换"}},[_._v("#")]),_._v(" 1.2.3 其他进制间的转换")]),_._v(" "),e("p",[_._v("一般的思路是转换为十进制再转换到目标进制。")]),_._v(" "),e("p",[_._v("如果要转换的进制间存在对数关系，可以直接转换，比如二进制转换到八进制，因为 "),e("code",[_._v("8 = 2^3")]),_._v("，可以每3位一组计算得到对应位数上的值。例如二进制 "),e("code",[_._v("110010011")]),_._v(" 转换为八进制，先分组：")]),_._v(" "),e("blockquote",[e("p",[_._v("110|010|011")])]),_._v(" "),e("p",[_._v("再分别计算得到对应位数的八进制数字：")]),_._v(" "),e("blockquote",[e("p",[_._v("6|2|3")])]),_._v(" "),e("h2",{attrs:{id:"_2-java-中的二进制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-java-中的二进制"}},[_._v("#")]),_._v(" 2. java 中的二进制")]),_._v(" "),e("h3",{attrs:{id:"_2-1-原码和反码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-原码和反码"}},[_._v("#")]),_._v(" 2.1 原码和反码")]),_._v(" "),e("p",[_._v("原码由两部分组成：")]),_._v(" "),e("ul",[e("li",[_._v("符号位，最高的一位，"),e("code",[_._v("0")]),_._v(" 表示正数，"),e("code",[_._v("1")]),_._v(" 表示负数。")]),_._v(" "),e("li",[_._v("数值，其余位置正常表示一个数的真值。")])]),_._v(" "),e("p",[_._v("反码则是在表示负数时将除符号位以外的位置取反。")]),_._v(" "),e("p",[_._v("例如：")]),_._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v("+11 的原码是 0000 0000 0000 0000 0000 0000 0000 1011\n    反码也是 0000 0000 0000 0000 0000 0000 0000 1011\n-11 的原码是 1000 0000 0000 0000 0000 0000 0000 1011\n    反码则是 1111 1111 1111 1111 1111 1111 1111 0100\n")])]),_._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[_._v("1")]),e("br"),e("span",{staticClass:"line-number"},[_._v("2")]),e("br"),e("span",{staticClass:"line-number"},[_._v("3")]),e("br"),e("span",{staticClass:"line-number"},[_._v("4")]),e("br")])]),e("h3",{attrs:{id:"_2-2-补码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-补码"}},[_._v("#")]),_._v(" 2.2 补码")]),_._v(" "),e("p",[_._v("补码中 "),e("code",[_._v("0")]),_._v("/正数表示与原码和反码一致，负数是在反码的基础上加1得到的。\n例如：")]),_._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v("-11 的原码是 1000 0000 0000 0000 0000 0000 0000 1011\n    反码则是 1111 1111 1111 1111 1111 1111 1111 0100\n    补码则是 1111 1111 1111 1111 1111 1111 1111 0101\n")])]),_._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[_._v("1")]),e("br"),e("span",{staticClass:"line-number"},[_._v("2")]),e("br"),e("span",{staticClass:"line-number"},[_._v("3")]),e("br")])]),e("p",[_._v("这样做有两个好处：")]),_._v(" "),e("ul",[e("li",[_._v("不会有 "),e("code",[_._v("+0")]),_._v(" 和 "),e("code",[_._v("-0")]),_._v(", "),e("code",[_._v("0")]),_._v("统一属于正数表示。")]),_._v(" "),e("li",[_._v("减法运算可以直接将一个正数和一个负数对应的位数相加即可，不用采用更复杂的逻辑判断。")])]),_._v(" "),e("p",[_._v("因此 java 中的整形采用补码进行表示。")]),_._v(" "),e("h3",{attrs:{id:"_2-3-无符号整形"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-无符号整形"}},[_._v("#")]),_._v(" 2.3 无符号整形")]),_._v(" "),e("p",[_._v("java 语言本身不支持无符号整形。")]),_._v(" "),e("p",[_._v("但是 jdk 8 之后添加了很多无符号整形的 API 来执行无符号的一些操作，这些 API 中使用一个正常的 int 表示一个无符号整形，使用诸如 "),e("code",[_._v("compareUnsigned")]),_._v("/"),e("code",[_._v("divideUnsigned")]),_._v(" 之类的 API 进行无符号的计算/比较。")]),_._v(" "),e("h2",{attrs:{id:"_3-位运算常用公式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-位运算常用公式"}},[_._v("#")]),_._v(" 3. 位运算常用公式")]),_._v(" "),e("ul",[e("li",[e("p",[_._v("计算只包含最后一位1的二进制数")]),_._v(" "),e("p",[_._v("x&-x")])]),_._v(" "),e("li",[e("p",[_._v("计算消除了最后一位1的二进制数")]),_._v(" "),e("p",[_._v("x&（x-1）")])])]),_._v(" "),e("ul",[e("li",[e("p",[_._v("计算最大公约数")]),_._v(" "),e("p",[_._v("x % y 一直递归下去，直到x＝＝y就是最大公约数。")])]),_._v(" "),e("li",[e("p",[_._v("查找重复数字")]),_._v(" "),e("p",[_._v("x^x == 0")]),_._v(" "),e("p",[_._v("x^x^x == x")]),_._v(" "),e("p",[_._v("奇数次异或可以得到原数字，偶数次异或得到0，可以用来区分重复次数分别为奇数和偶数的两组数字。")])])]),_._v(" "),e("h2",{attrs:{id:"_4-应用方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-应用方案"}},[_._v("#")]),_._v(" 4. 应用方案")]),_._v(" "),e("ul",[e("li",[e("p",[_._v("二进制压缩")]),_._v(" "),e("p",[_._v("当问题有一系列不同的元素只有有限种状态时，可以用二进制表示状态，称为二进制压缩。")])])]),_._v(" "),e("ul",[e("li",[e("p",[_._v("二进制归并")]),_._v(" "),e("p",[_._v("0x55555555")]),_._v(" "),e("p",[_._v("0x33333333")]),_._v(" "),e("p",[_._v("0x0f0f0f0f")]),_._v(" "),e("p",[_._v("0x00ff00ff")]),_._v(" "),e("p",[_._v("0x0000ffff")]),_._v(" "),e("p",[_._v("经常用于二进制位上的二路归并，可用于排序（比如二进制位反转），也可用于计数（比如计算二进制位中1的个数）")])]),_._v(" "),e("li",[e("p",[_._v("hash表和位运算配合可以大幅降低时间复杂度和空间复杂度")])]),_._v(" "),e("li",[e("p",[_._v("状态机用位运算可以在有限内存下表示更多状态")])])]),_._v(" "),e("h2",{attrs:{id:"_5-习题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-习题"}},[_._v("#")]),_._v(" 5. 习题")]),_._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://leetcode-cn.com/problems/single-number/",target:"_blank",rel:"noopener noreferrer"}},[_._v("136. 只出现一次的数字"),e("OutboundLink")],1)]),_._v(" "),e("li",[e("a",{attrs:{href:"https://leetcode-cn.com/problems/reverse-bits/",target:"_blank",rel:"noopener noreferrer"}},[_._v("190. 颠倒二进制位"),e("OutboundLink")],1)]),_._v(" "),e("li",[e("a",{attrs:{href:"https://leetcode-cn.com/problems/single-number-ii/",target:"_blank",rel:"noopener noreferrer"}},[_._v("137. 只出现一次的数字 II"),e("OutboundLink")],1)]),_._v(" "),e("li",[e("a",{attrs:{href:"https://leetcode-cn.com/problems/single-number-iii/",target:"_blank",rel:"noopener noreferrer"}},[_._v("260. 只出现一次的数字 III"),e("OutboundLink")],1)]),_._v(" "),e("li",[e("a",{attrs:{href:"https://leetcode-cn.com/problems/power-of-two/",target:"_blank",rel:"noopener noreferrer"}},[_._v("231. 2 的幂"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);v.default=s.exports}}]);