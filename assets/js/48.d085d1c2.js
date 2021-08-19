(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{406:function(t,a,_){"use strict";_.r(a);var v=_(44),e=Object(v.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"字符串处理-正则表达式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#字符串处理-正则表达式"}},[t._v("#")]),t._v(" 字符串处理-正则表达式")]),t._v(" "),_("p",[t._v("Regular Expression （正则表达式）是由字符和元字符组成的一种有特定规则的特殊字符串，该字符串定义了一个特殊的模式，被用于字符串查找、匹配。")]),t._v(" "),_("h2",{attrs:{id:"_1-语法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-语法"}},[t._v("#")]),t._v(" 1. 语法")]),t._v(" "),_("h3",{attrs:{id:"_1-1-常用元字符"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-常用元字符"}},[t._v("#")]),t._v(" 1.1 常用元字符")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("元字符")]),t._v(" "),_("th",[t._v("含义")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("^")]),t._v(" "),_("td",[t._v("开始")])]),t._v(" "),_("tr",[_("td",[t._v("$")]),t._v(" "),_("td",[t._v("结束")])]),t._v(" "),_("tr",[_("td",[t._v("\\")]),t._v(" "),_("td",[t._v("转义紧跟在后面的字符")])]),t._v(" "),_("tr",[_("td",[t._v("{n}")]),t._v(" "),_("td",[t._v("n为非负整数，前一个子表达式匹配确定的 n 次")])]),t._v(" "),_("tr",[_("td",[t._v("{n,}")]),t._v(" "),_("td",[t._v("n为非负整数，前一个子表达式匹配至少 n 次")])]),t._v(" "),_("tr",[_("td",[t._v("{n,m}")]),t._v(" "),_("td",[t._v("n、m 均为非负整数且 n <= m，前一个子表达式匹配至少 n 次，最多 m 次")])]),t._v(" "),_("tr",[_("td",[t._v("+")]),t._v(" "),_("td",[t._v("前一个子表达式匹配至少 1 次，相当于 "),_("code",[t._v("{1,}")])])]),t._v(" "),_("tr",[_("td",[t._v("*")]),t._v(" "),_("td",[t._v("前一个子表达式匹配至少 0 次，相当于 "),_("code",[t._v("{0,}")])])]),t._v(" "),_("tr",[_("td",[t._v("?")]),t._v(" "),_("td",[t._v("前一个子表达式匹配至少 0 次，至多 1 次，相当于 "),_("code",[t._v("{0,1}")])])]),t._v(" "),_("tr",[_("td",[t._v("|")]),t._v(" "),_("td",[t._v("表示或，前后子表达式匹配其中一种")])])])]),t._v(" "),_("h3",{attrs:{id:"_1-2-java-中使用-regex"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-java-中使用-regex"}},[t._v("#")]),t._v(" 1.2 java 中使用 regex")]),t._v(" "),_("p",[t._v("使用 JDK 原生的 "),_("code",[t._v("java.util.regex.Matcher")]),t._v(" 类和 "),_("code",[t._v("java.util.regex.Pattern")]),t._v(" 类，JDK 8 中仍采用 NFA 引擎。")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('Pattern pattern = Pattern.complie("正则表达式");\nMatcher matcher = pattern.matcher("待搜索的内容");\nmatcher.matches(); // 有匹配内容返回 true，没有则返回 false\nmatcher.find(); // 返回是否找到下一个匹配内容，通常和group(int)一起使用\nmatcher.group(int); // 根据 index 返回匹配的组，0 处是整个输入字符串，从 1 开始是从左往右依次排列的所有匹配的子字符串\n')])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br"),_("span",{staticClass:"line-number"},[t._v("5")]),_("br")])]),_("h2",{attrs:{id:"_2-正则表达式引擎"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-正则表达式引擎"}},[t._v("#")]),t._v(" 2. 正则表达式引擎")]),t._v(" "),_("h3",{attrs:{id:"_2-1-nfa"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-nfa"}},[t._v("#")]),t._v(" 2.1 NFA")]),t._v(" "),_("p",[t._v("The Nondeterministic Finite Automaton （非确定性有穷自动机），特点是包含了回溯的过程，可能对输入字符串中的每个字符进行多次重复计算，最坏情况时间复杂度可能是指数级的。")]),t._v(" "),_("p",[t._v("传统的 NFA 在匹配到一个串后直接返回结果。")]),t._v(" "),_("h3",{attrs:{id:"_2-2-dfa"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-dfa"}},[t._v("#")]),t._v(" 2.2 DFA")]),t._v(" "),_("p",[t._v("The Deterministic Finite Automaton（确定性有穷自动机），不会回溯，不支持捕获括号，特点是会花较长的时间对表达式进行预处理，搜索时只扫描目标字符串一次。")]),t._v(" "),_("p",[t._v("DFA 会返回目标串中最长的匹配串。")]),t._v(" "),_("h3",{attrs:{id:"_2-3-posix-nfa"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-posix-nfa"}},[t._v("#")]),t._v(" 2.3 POSIX NFA")]),t._v(" "),_("p",[t._v("原理类似 NFA，但是在匹配过程中会记录匹配到的字符串，最后返回最长的匹配字符串，与传统的 NFA 的区别是当匹配到一个字符串时还会继续尝试搜索更长的匹配串。")]),t._v(" "),_("h3",{attrs:{id:"_2-4-hybrid-nfa-dfa"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-hybrid-nfa-dfa"}},[t._v("#")]),t._v(" 2.4 Hybrid NFA/DFA")]),t._v(" "),_("h2",{attrs:{id:"_3-常用正则表达式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-常用正则表达式"}},[t._v("#")]),t._v(" 3. 常用正则表达式")]),t._v(" "),_("ul",[_("li",[t._v("IPV4 地址：")])]),t._v(" "),_("blockquote",[_("p",[t._v("((?😦?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))")])]),t._v(" "),_("ul",[_("li",[t._v("邮箱：")])]),t._v(" "),_("blockquote",[_("p",[t._v("^\\w+([-+.]\\w+)"),_("em",[t._v("@\\w+([-.]\\w+)")]),t._v(".\\w+([-.]\\w+)*$")])]),t._v(" "),_("ul",[_("li",[t._v("国内手机号：")])]),t._v(" "),_("blockquote",[_("p",[t._v("^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\\d{8}$")])]),t._v(" "),_("ul",[_("li",[t._v("国内身份证号：")])]),t._v(" "),_("blockquote",[_("p",[t._v("^\\d{15}$)|(^\\d{18}$)|(^\\d{17}(\\d|X|x)$")])])])}),[],!1,null,null,null);a.default=e.exports}}]);