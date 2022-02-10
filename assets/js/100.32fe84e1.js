(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{481:function(s,a,n){"use strict";n.r(a);var e=n(44),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"注解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#注解"}},[s._v("#")]),s._v(" 注解")]),s._v(" "),n("h2",{attrs:{id:"_1-原来的注解有什么问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-原来的注解有什么问题"}},[s._v("#")]),s._v(" 1. 原来的注解有什么问题？")]),s._v(" "),n("p",[s._v("自 java 1.5 加入注解以来，解决了很多问题，最著名的就 junit 和 spring 使用注解作为复杂配置的解决方案。")]),s._v(" "),n("p",[s._v("但是 Java 8 之前的注解还有一些难用的地方：")]),s._v(" "),n("ul",[n("li",[s._v("只能在声明的地方使用注解，在类声明/方法声明/属性声明的地方用，还不够灵活")]),s._v(" "),n("li",[s._v("重复注解，只能使用另一个注解封装重复注解的形式，使用起来不方便")])]),s._v(" "),n("p",[s._v("Java 8 解决了这些问题。")]),s._v(" "),n("h2",{attrs:{id:"_2-类型注解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-类型注解"}},[s._v("#")]),s._v(" 2. 类型注解")]),s._v(" "),n("p",[s._v("这种可以用在任何地方的注解叫做类型注解(Type Annotations)，类型注解是一种语法而不是语义，说白了不会影响编译。")]),s._v(" "),n("p",[s._v("类型注解主要作用在于配合检查 checker-framework 工具能实现编译时检查一些运行时异常，比如以下错误只会在运行时抛出，是可以正常编译通过的：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('Collections.emptyList().add("One");   // 运行时报 UnsupportedOperationException\nint i=Integer.parseInt("hello");      // 运行时报 NumberFormatException\nSystem.console().readLine();          // 运行时报 NullPointerException\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("个人感觉像是一种可以用工具校验的注释，具体作用不是很大，看个人使用习惯。")]),s._v(" "),n("h2",{attrs:{id:"_3-重复注解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-重复注解"}},[s._v("#")]),s._v(" 3. 重复注解")]),s._v(" "),n("p",[s._v("Java 8 之前如果要在同一个地方使用同样名称的注解需要再声明一个额外的注解进行包装，例如：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('public @interface Authority {\n     String role();\n}\n\n// 包装用的注解，把重复注解包装成一个数组\npublic @interface Authorities {\n    Authority[] value();\n}\n\npublic class RepeatAnnotationUseOldVersion {\n\n    @Authorities({@Authority(role="Admin"),@Authority(role="Manager")})\n    public void doSomeThing(){\n    }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("Java 8 开始可以直接使用重复注解：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('// 在声明注解时使用 @Repeatable 注解\n@Repeatable(Authorities.class)\npublic @interface Authority {\n     String role();\n}\n\npublic @interface Authorities {\n    Authority[] value();\n}\n\npublic class RepeatAnnotationUseNewVersion {\n    // 可以直接直接使用声明过 @Repeatable 的重复注解\n    @Authority(role="Admin")\n    @Authority(role="Manager")\n    public void doSomeThing(){ }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);