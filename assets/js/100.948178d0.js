(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{489:function(t,a,e){"use strict";e.r(a);var v=e(44),r=Object(v.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"volatile-关键字"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#volatile-关键字"}},[t._v("#")]),t._v(" volatile 关键字")]),t._v(" "),e("h2",{attrs:{id:"_1-实现原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-实现原理"}},[t._v("#")]),t._v(" 1. 实现原理")]),t._v(" "),e("p",[t._v("volatile 关键字主要有两个作用，"),e("strong",[t._v("防止指令重排")]),t._v("和"),e("strong",[t._v("保证变量可见性")]),t._v("。")]),t._v(" "),e("h3",{attrs:{id:"_1-1-保证可见性的原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-保证可见性的原理"}},[t._v("#")]),t._v(" 1.1 保证可见性的原理")]),t._v(" "),e("p",[t._v("一句话概括：通过内存栅格（Memory Barrier）实现。\n参考资料："),e("a",{attrs:{href:"https://juejin.cn/post/6876395693854949389",target:"_blank",rel:"noopener noreferrer"}},[t._v("volatile内存屏障及实现原理分析(JMM和MESI)"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("CPU层面有三种内存栅格：")]),t._v(" "),e("ul",[e("li",[t._v("Load Barrier")]),t._v(" "),e("li",[t._v("Store Barrier")]),t._v(" "),e("li",[t._v("Full Barrier")])]),t._v(" "),e("p",[t._v("通过查看汇编代码，可以看到在对 volatile 修饰的变量进行写操作时，多了一个 lock 前缀的指令。\n这个 lock 前缀的指令相对于一个完全的内存屏障指令，这个指令有两个效果：")]),t._v(" "),e("ul",[e("li",[t._v("将当前处理器缓存里缓存变量数据的缓存行（Cache Line）写回主存。")]),t._v(" "),e("li",[t._v("使其他缓存里对应的缓存行失效，需要重新从主存读取。")])]),t._v(" "),e("h3",{attrs:{id:"_1-2-防止重排的原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-防止重排的原理"}},[t._v("#")]),t._v(" 1.2 防止重排的原理")]),t._v(" "),e("p",[t._v("还是通过内存栅格（Memory Barrier）实现。\n不过这里要提到的是编译器层面的内存栅格（上一节主要是处理器层面的内存栅格）。\nJMM 层面的内存栅格分为四种：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Memory Barrier")]),t._v(" "),e("th",[t._v("作用")]),t._v(" "),e("th",[t._v("插入位置")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("StoreStore")]),t._v(" "),e("td",[t._v("禁止上方普通写和下方 volatile 写重排")]),t._v(" "),e("td",[t._v("volatile 写操作前")])]),t._v(" "),e("tr",[e("td",[t._v("StoreLoad")]),t._v(" "),e("td",[t._v("禁止上方 volatile 写和下方可能的 volatile 读/写重排")]),t._v(" "),e("td",[t._v("volatile 写操作后")])]),t._v(" "),e("tr",[e("td",[t._v("LoadLoad")]),t._v(" "),e("td",[t._v("禁止下方所有的普通读和上方的 volatile 读重排")]),t._v(" "),e("td",[t._v("volatile 读操作后")])]),t._v(" "),e("tr",[e("td",[t._v("LoadStore")]),t._v(" "),e("td",[t._v("禁止下方所有普通写和上方的 volatile 读重排")]),t._v(" "),e("td",[t._v("volatile 读操作后")])])])]),t._v(" "),e("p",[t._v("如上的4种 Memory Barrier 同时也保证了 Happens-Before 原则中关于 volatile 的原则：\n"),e("RouterLink",{attrs:{to:"/java/thread/base/happensbefore.html"}},[t._v("对一个 volatile 变量的写操作 happens-before 于后续对这个 volatile 变量的读操作")])],1),t._v(" "),e("h2",{attrs:{id:"_2-应用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-应用场景"}},[t._v("#")]),t._v(" 2. 应用场景")]),t._v(" "),e("p",[t._v("要正确使用"),e("code",[t._v("volatile")]),t._v("关键字要满足3个条件：")]),t._v(" "),e("ul",[e("li",[t._v("对当前变量的写操作不依赖当前变量值。")]),t._v(" "),e("li",[t._v("该变量没有包含在具有其他变量的不变式中。")]),t._v(" "),e("li",[t._v("该变量的状态独立于其他内容。")])]),t._v(" "),e("h3",{attrs:{id:"_2-1-一次性安全发布"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-一次性安全发布"}},[t._v("#")]),t._v(" 2.1 一次性安全发布")]),t._v(" "),e("p",[t._v("保证类似：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Instance something = new Instance();\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("这样new对象并赋值的操作线程安全，防止未初始化的对象被赋值，即防止初始化操作和赋值操作重排。\n常用于单例模式的双重检查写法。")]),t._v(" "),e("h3",{attrs:{id:"_2-2-实现简单读-写锁"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-实现简单读-写锁"}},[t._v("#")]),t._v(" 2.2 实现简单读-写锁")]),t._v(" "),e("p",[t._v("用 volatile 修饰变量，用 synchronized 锁变量写操作，但是不对读操作加锁。")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("volatile int count = 0;\n\nprivate void increase(){\n\tsynchronized(this){\n\t\tcount ++;\n\t}\n}\n\nprivate int getCount(){\n\treturn count;\n}\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br")])]),e("p",[t._v("适用于读多，写少的多线程场景。")]),t._v(" "),e("h3",{attrs:{id:"_2-3-独立观察"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-独立观察"}},[t._v("#")]),t._v(" 2.3 独立观察")]),t._v(" "),e("p",[t._v("类似一个简单的观察者模式，一个线程用于更新 volatile 变量，其他线程实时观察 volatile 变量的值。\n一个线程只写，其他线程只读。")]),t._v(" "),e("h3",{attrs:{id:"_2-4-volatile-bean"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-volatile-bean"}},[t._v("#")]),t._v(" 2.4 volatile bean")]),t._v(" "),e("p",[t._v("线程安全的简单 java bean，所有类成员都用 volatile 修饰，只包含基本的 get/set 方法。")])])}),[],!1,null,null,null);a.default=r.exports}}]);