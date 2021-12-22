(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{358:function(t,r,a){t.exports=a.p+"assets/img/factorymethod.drawio.c4e07da4.png"},419:function(t,r,a){"use strict";a.r(r);var _=a(44),e=Object(_.a)({},(function(){var t=this,r=t.$createElement,_=t._self._c||r;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"工厂方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#工厂方法"}},[t._v("#")]),t._v(" 工厂方法")]),t._v(" "),_("h2",{attrs:{id:"_1-概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-概念"}},[t._v("#")]),t._v(" 1. 概念")]),t._v(" "),_("p",[t._v("工厂方法（Factory Method）又称虚拟构造函数，是一种"),_("code",[t._v("创建型模式")]),t._v("。")]),t._v(" "),_("h2",{attrs:{id:"_2-意图"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-意图"}},[t._v("#")]),t._v(" 2. 意图")]),t._v(" "),_("p",[t._v("在父类中提供一个创建对象的接口，由子类决定创建什么类型的对象，即把实例化推迟到子类进行。")]),t._v(" "),_("h2",{attrs:{id:"_3-类图示例"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-类图示例"}},[t._v("#")]),t._v(" 3. 类图示例")]),t._v(" "),_("p",[_("img",{attrs:{src:a(358),alt:"FactoryMethod"}})]),t._v(" "),_("p",[t._v("如图所示：")]),t._v(" "),_("ul",[_("li",[t._v("Product：产品类的顶层接口，是工厂方法的返回类型，其中定义了所有业务相关的操作接口，供 "),_("code",[t._v("Creator")]),t._v(" 业务逻辑使用。")]),t._v(" "),_("li",[t._v("Concrete Products：具体的产品类实现。")]),t._v(" "),_("li",[_("strong",[t._v("Creator")]),t._v("：\n"),_("ul",[_("li",[t._v("工厂方法声明的地方，图中 "),_("code",[t._v("createProduct()")]),t._v(" 方法就是工厂方法，这个方法通常是 "),_("code",[t._v("abstract")]),t._v(" 的，返回的类型必须是 "),_("code",[t._v("Product")]),t._v(" 的顶层接口类型。")]),t._v(" "),_("li",[_("code",[t._v("Creator")]),t._v(" 本身一般不负责创建 "),_("code",[t._v("Product")]),t._v("，而是由 "),_("code",[t._v("Creator")]),t._v(" 的不同子类通过实现不同的 "),_("code",[t._v("createProduct()")]),t._v(" 方法来创建具体的 "),_("code",[t._v("Product")]),t._v("。而 "),_("code",[t._v("Creator")]),t._v(" 自身通常是实现具体 "),_("code",[t._v("Product")]),t._v(" 相关业务操作的地方。")])])]),t._v(" "),_("li",[t._v("Concrete Creators：具体的工厂方法实现类，通常只负责创建具体的产品实例。在实际开发中，不用每次调用都创建新的实例，可以用缓存/对象池/单例来实现。")])]),t._v(" "),_("h2",{attrs:{id:"_4-和其他模式的关系"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-和其他模式的关系"}},[t._v("#")]),t._v(" 4. 和其他模式的关系")]),t._v(" "),_("h3",{attrs:{id:"_4-1-和其他-工厂-对比"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-和其他-工厂-对比"}},[t._v("#")]),t._v(" 4.1 和其他“工厂”对比")]),t._v(" "),_("p",[_("RouterLink",{attrs:{to:"/design/design_patterns/几种“工厂”之间的区别.html"}},[t._v("几个名字带“工厂”的创建型模式对比")])],1),t._v(" "),_("h3",{attrs:{id:"_4-2-和其他创建型模式的关系"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-和其他创建型模式的关系"}},[t._v("#")]),t._v(" 4.2 和其他创建型模式的关系")]),t._v(" "),_("h3",{attrs:{id:"_4-3-和其他非创建型模式的关系"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-和其他非创建型模式的关系"}},[t._v("#")]),t._v(" 4.3 和其他非创建型模式的关系")])])}),[],!1,null,null,null);r.default=e.exports}}]);