(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{371:function(t,a,_){t.exports=_.p+"assets/img/iterator.drawio.9dc11da2.png"},446:function(t,a,_){"use strict";_.r(a);var r=_(44),v=Object(r.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"迭代器模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#迭代器模式"}},[t._v("#")]),t._v(" 迭代器模式")]),t._v(" "),r("h2",{attrs:{id:"_1-概念"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-概念"}},[t._v("#")]),t._v(" 1.概念")]),t._v(" "),r("p",[t._v("是一种行为设计模式，又称 Iterator。")]),t._v(" "),r("h2",{attrs:{id:"_2-意图"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-意图"}},[t._v("#")]),t._v(" 2.意图")]),t._v(" "),r("p",[t._v("目的是提供一种外部可用的按顺序访问聚合对象内部成员的方法，但是不暴露聚合对象的内部实现。常见于集合操作。")]),t._v(" "),r("h2",{attrs:{id:"_3-类图示例"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-类图示例"}},[t._v("#")]),t._v(" 3.类图示例")]),t._v(" "),r("p",[r("img",{attrs:{src:_(371),alt:"iterator"}})]),t._v(" "),r("p",[t._v("如图所示，其中：")]),t._v(" "),r("ul",[r("li",[t._v("client 先持有 Collection，在需要迭代访问内部元素时调用该 Collection 的 getIterator 方法获取/创建 Iterator 来使用。")])]),t._v(" "),r("h2",{attrs:{id:"_4-适用场景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-适用场景"}},[t._v("#")]),t._v(" 4.适用场景")]),t._v(" "),r("h3",{attrs:{id:"_4-1-业务场景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-业务场景"}},[t._v("#")]),t._v(" 4.1 业务场景")]),t._v(" "),r("ul",[r("li",[t._v("如果可以预见业务场景会使用不同的内部数据结构，可以使用迭代器模式，以计费为例：\n"),r("ul",[r("li",[t._v("一个聚合计费项内部可能是数组/树等不同的数据结构。")]),t._v(" "),r("li",[t._v("想这个聚合计费项收取税费时需要遍历判断每个子元素是否需要收取税费，这时如果使用了迭代器就会很容易遍历。")])])])]),t._v(" "),r("h3",{attrs:{id:"_4-2-开源实例"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-开源实例"}},[t._v("#")]),t._v(" 4.2 开源实例")]),t._v(" "),r("p",[t._v("jdk 中的集合类和枚举类就是典型的迭代器实现。")]),t._v(" "),r("ul",[r("li",[t._v("java.util.Iterator")]),t._v(" "),r("li",[t._v("java.util.Enumeration")])]),t._v(" "),r("h2",{attrs:{id:"_5-实现细节与技巧"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-实现细节与技巧"}},[t._v("#")]),t._v(" 5.实现细节与技巧")]),t._v(" "),r("ul",[r("li",[t._v("如果有需要双向迭代，可以在 Iterator 接口中添加 prev 方法，访问前一个元素。")]),t._v(" "),r("li",[t._v("在聚合类内部创建 Iterator 时可以每调用一次方法创建一个，这样可以隔绝迭代器之间的影响。")]),t._v(" "),r("li",[t._v("如果要更灵活地遍历，可以再添加一个 getIndex 方法，每一步迭代都可以记录当前迭代的位置，方便暂停和继续。")])]),t._v(" "),r("h2",{attrs:{id:"_6-优缺点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6-优缺点"}},[t._v("#")]),t._v(" 6.优缺点")]),t._v(" "),r("p",[t._v("优点：")]),t._v(" "),r("ul",[r("li",[t._v("符合单一职责原则。")]),t._v(" "),r("li",[t._v("符合开闭原则。")]),t._v(" "),r("li",[t._v("可以并行遍历而不会互相影响顺序。")])]),t._v(" "),r("p",[t._v("缺点：")]),t._v(" "),r("ul",[r("li",[t._v("如果遍历对象是可以确定内部数据结构的聚合类，增加 Iterator 可能毫无帮助，且会增加不必要的冗余。")]),t._v(" "),r("li",[t._v("有的集合直接遍历可能比使用迭代器效率更高。")])]),t._v(" "),r("h2",{attrs:{id:"_7-与其他设计模式的关系"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_7-与其他设计模式的关系"}},[t._v("#")]),t._v(" 7.与其他设计模式的关系")])])}),[],!1,null,null,null);a.default=v.exports}}]);