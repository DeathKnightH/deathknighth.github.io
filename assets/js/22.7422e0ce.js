(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{380:function(t,a,s){"use strict";s.r(a);var n=s(44),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"插入排序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插入排序"}},[t._v("#")]),t._v(" 插入排序")]),t._v(" "),s("p",[t._v("插入排序（Insertion Sort）是一种简单直观的排序算法，将序列划分为未排序部分和排序部分，每次操作将1个未排序元素"),s("code",[t._v("插入")]),t._v("到已排序部分，因此叫做插入排序。")]),t._v(" "),s("h2",{attrs:{id:"_1-原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-原理"}},[t._v("#")]),t._v(" 1. 原理")]),t._v(" "),s("p",[t._v("外层遍历时当前索引作为'分界线'，前半部分属于已排序部分，后半部分作为未排序部分。内层遍历将当前值和前半部分的每个值进行比较，选择合适的位置插入，并且将后续元素整体后移。")]),t._v(" "),s("h2",{attrs:{id:"_2-性质"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-性质"}},[t._v("#")]),t._v(" 2. 性质")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("性质")]),t._v(" "),s("th"),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("稳定性")]),t._v(" "),s("td",[t._v("稳定")]),t._v(" "),s("td",[t._v("因为可以在插入时比较元素，选择插入的位置，可以保证是稳定的")])]),t._v(" "),s("tr",[s("td",[t._v("最坏时间复杂度")]),t._v(" "),s("td",[t._v("O(n^2)")]),t._v(" "),s("td",[t._v("最坏情况需要执行 (n - 1)*n/2 次交换操作")])]),t._v(" "),s("tr",[s("td",[t._v("最好时间复杂度")]),t._v(" "),s("td",[t._v("O(n)")]),t._v(" "),s("td",[t._v("完全有序的序列只需要扫描一次全序列就可以完成排序")])]),t._v(" "),s("tr",[s("td",[t._v("平均时间复杂度")]),t._v(" "),s("td",[t._v("O(n^2)")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("空间复杂度")]),t._v(" "),s("td",[t._v("O(1)")]),t._v(" "),s("td",[t._v("可以只用 1 个额外空间存储交换时的临时元素，某些特殊情况甚至可以不使用额外空间")])])])]),t._v(" "),s("h2",{attrs:{id:"_3-伪代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-伪代码"}},[t._v("#")]),t._v(" 3. 伪代码")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Input:一个包含n个可排序元素的序列 A[n]。\nOutput:把输入序列按非递减排序的序列 A[n]。\nMethod:\nfor i <- 1 to n - 1\n  temp = A[i]\n  j <- i - 1\n  while j >= 0 And A[j] > temp\n      A[j + 1] <- A[j]\n      j <- j - 1\n  A[j + 1] <- temp \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("h2",{attrs:{id:"_4-java-实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-java-实现"}},[t._v("#")]),t._v(" 4. Java 实现")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("public void insertionSort(int[] array){\n  for(int i = 1; i < array.length; ++i){\n    int temp = array[i];\n    int j = i - 1;\n    while(j >= 0 && array[j] > temp){\n      array[j + 1] = array[j];\n      j --;\n    }\n    array[j + 1] = temp;\n  }\n}\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);