(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{359:function(t,_,a){t.exports=a.p+"assets/img/prototype.drawio.20cc8285.png"},360:function(t,_,a){t.exports=a.p+"assets/img/prototyperegistry.drawio.1f91ce82.png"},424:function(t,_,a){"use strict";a.r(_);var r=a(44),s=Object(r.a)({},(function(){var t=this,_=t.$createElement,r=t._self._c||_;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"原型模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#原型模式"}},[t._v("#")]),t._v(" 原型模式")]),t._v(" "),r("h2",{attrs:{id:"_1-概念"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-概念"}},[t._v("#")]),t._v(" 1. 概念")]),t._v(" "),r("p",[t._v("Prototype 又称 Clone，顾名思义是复制已有对象生成新对象的创建型模式。")]),t._v(" "),r("h2",{attrs:{id:"_2-意图"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-意图"}},[t._v("#")]),t._v(" 2. 意图")]),t._v(" "),r("p",[t._v("当已有一个现成的对象，可以用原型创建一个和当前对象完全相同的新对象。")]),t._v(" "),r("h2",{attrs:{id:"_3-类图示例"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-类图示例"}},[t._v("#")]),t._v(" 3. 类图示例")]),t._v(" "),r("p",[t._v("基础原型：")]),t._v(" "),r("p",[r("img",{attrs:{src:a(359),alt:"prototype"}})]),t._v(" "),r("p",[t._v("原型注册表：")]),t._v(" "),r("p",[r("img",{attrs:{src:a(360),alt:"registryprototype"}})]),t._v(" "),r("p",[t._v("原型注册表更符合原型模式的使用场景：")]),t._v(" "),r("ul",[r("li",[t._v("预先创建一些对象原型并存储在哈希表中。")]),t._v(" "),r("li",[t._v("如果需要创建对象直接通过 Type 查询对应的原型 clone 就可以获取和原型完全一样的新对象。")])]),t._v(" "),r("h2",{attrs:{id:"_4-适用场景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-适用场景"}},[t._v("#")]),t._v(" 4. 适用场景")]),t._v(" "),r("h3",{attrs:{id:"_4-1-业务场景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-业务场景"}},[t._v("#")]),t._v(" 4.1 业务场景")]),t._v(" "),r("ul",[r("li",[t._v("需要创建大量相同对象时，不用重复调用构造器，可以使用原型模式：\n"),r("ul",[r("li",[t._v("预置一个原型对象")]),t._v(" "),r("li",[t._v("clone这个原型对象生成新的对象")])])]),t._v(" "),r("li",[t._v("对象深拷贝")])]),t._v(" "),r("h3",{attrs:{id:"_4-2-开源实例"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-开源实例"}},[t._v("#")]),t._v(" 4.2 开源实例")]),t._v(" "),r("p",[t._v("JDK 中：")]),t._v(" "),r("ul",[r("li",[t._v("java 语言的顶层类中就有 clone 方法，可以说天生就支持原型模式")])]),t._v(" "),r("h2",{attrs:{id:"_5-实现细节和技巧"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-实现细节和技巧"}},[t._v("#")]),t._v(" 5. 实现细节和技巧")]),t._v(" "),r("ul",[r("li",[t._v("一般是重载一个以当前类对象本身为参数的构造函数，在构造函数中复制对象数据。")]),t._v(" "),r("li",[t._v("clone 方法中用 new 操作符创建新对象，但是调用的是重载的构造函数，同时注意需要显式调用本类的构造函数。")]),t._v(" "),r("li",[t._v("如果需要创建的原型很多可以中心化原型注册表，通过一个哈希表管理可以使用的原型。")])]),t._v(" "),r("h2",{attrs:{id:"_6-优缺点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6-优缺点"}},[t._v("#")]),t._v(" 6. 优缺点")]),t._v(" "),r("p",[t._v("优点：")]),t._v(" "),r("ul",[r("li",[t._v("可以预置原型对象，避免反复初始化。")]),t._v(" "),r("li",[t._v("如果对象本身很复杂，初始化步骤很多，也可以通过层层clone简化生成对象的操作。")])]),t._v(" "),r("p",[t._v("缺点：")]),t._v(" "),r("ul",[r("li",[t._v("原型模式很难处理复杂对象内部存在循环引用。")])]),t._v(" "),r("h2",{attrs:{id:"_7-与其他设计模式的关系"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_7-与其他设计模式的关系"}},[t._v("#")]),t._v(" 7. 与其他设计模式的关系")])])}),[],!1,null,null,null);_.default=s.exports}}]);