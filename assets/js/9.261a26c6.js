(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{367:function(a,t,e){"use strict";e.r(t);var n=e(44),s=Object(n.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"摩尔投票算法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#摩尔投票算法"}},[a._v("#")]),a._v(" 摩尔投票算法")]),a._v(" "),e("p",[a._v("Boyer-Moore Majority Vote 算法，中文称多数投票算法、摩尔投票算法，是一种用来寻找一组元素中占多数元素的"),e("code",[a._v("常数级")]),a._v("空间复杂度算法，也是处理数据流的一种典型算法。")]),a._v(" "),e("p",[a._v("算法基本思想是：")]),a._v(" "),e("ul",[e("li",[a._v("每一轮投票从集合中删除两个互不相同的元素，直到集合为空或者集合元素全部相等。")]),a._v(" "),e("li",[a._v("如果集合为空，则不存在主要元素。")]),a._v(" "),e("li",[a._v("如果剩下元素全部相等，则剩下元素可能为主要元素。")])]),a._v(" "),e("h2",{attrs:{id:"_1-算法实现思路"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-算法实现思路"}},[a._v("#")]),a._v(" 1. 算法实现思路")]),a._v(" "),e("p",[a._v("根据基本思想，算法实现思路如下：")]),a._v(" "),e("p",[a._v("1、维护两个变量，一个为候选主要元素 "),e("code",[a._v("candidate")]),a._v("，另一个为该主要元素出现的次数 "),e("code",[a._v("count")]),a._v("；其中 "),e("code",[a._v("candidate")]),a._v(" 初始为任意值，"),e("code",[a._v("count")]),a._v(" 初始为 0。")]),a._v(" "),e("p",[a._v("2、遍历所有元素，遍历到任意元素 x 时：")]),a._v(" "),e("ul",[e("li",[a._v("如果 count = 0，则 candidate = x，否则不改变 candidate。")]),a._v(" "),e("li",[a._v("如果 x == candidate，则 count += 1，否则 count -= 1。")])]),a._v(" "),e("p",[a._v("3、遍历结束，如果该集合中存在主要元素，则 "),e("code",[a._v("candidate")]),a._v(" 为主要元素；否则 "),e("code",[a._v("candidate")]),a._v(" 为任意元素。")]),a._v(" "),e("h2",{attrs:{id:"_2-伪代码表示"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-伪代码表示"}},[a._v("#")]),a._v(" 2. 伪代码表示")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("m = x;\ni = 0;\nfor n in Array\n  if i == 0;\n    m = n;\n    i = 1;\n  else if m == x;\n    i = i + 1;\n  else\n    i = i - 1;\nreturn m;\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br")])]),e("h2",{attrs:{id:"_3-习题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-习题"}},[a._v("#")]),a._v(" 3. 习题")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://leetcode-cn.com/problems/find-majority-element-lcci/",target:"_blank",rel:"noopener noreferrer"}},[a._v("面试题 17.10. 主要元素"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=s.exports}}]);