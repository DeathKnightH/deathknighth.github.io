(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{397:function(a,s,e){"use strict";e.r(s);var t=e(44),r=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"第三方开源软件使用问题记录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第三方开源软件使用问题记录"}},[a._v("#")]),a._v(" 第三方开源软件使用问题记录")]),a._v(" "),e("h2",{attrs:{id:"_0"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0"}},[a._v("#")]),a._v(" 0.")]),a._v(" "),e("h2",{attrs:{id:"_1-前端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-前端"}},[a._v("#")]),a._v(" 1. 前端")]),a._v(" "),e("h2",{attrs:{id:"_2-后端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-后端"}},[a._v("#")]),a._v(" 2. 后端")]),a._v(" "),e("h3",{attrs:{id:"_2-1-apache-common-configuration2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-apache-common-configuration2"}},[a._v("#")]),a._v(" 2.1 Apache Common Configuration2")]),a._v(" "),e("p",[e("code",[a._v("AbstractConfiguration")]),a._v(" 默认使用的是 "),e("code",[a._v("DisabledListDelimiterHandler")]),a._v("，即不启用定界符，遇到类似：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("MY_CONFIG = test1, test2, test3\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("这样的以特定字符分隔的配置项，会直接读取为一整个字符串。")]),a._v(" "),e("p",[a._v("以此配置项为例：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("# chart colors\ncolors.pie = #FF0000, #00FF00, #0000FF\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("p",[a._v("需要在 Configuration 对象实例中显示地指定定界符：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('Parameters params = new Parameters();\nFileBasedConfigurationBuilder<Configuration> builder =\n    new FileBasedConfigurationBuilder<Configuration>(PropertiesConfiguration.class)\n    .configure(params.properties()\n        .setFileName("usergui.properties")\n        .setListDelimiterHandler(new DefaultListDelimiterHandler(\',\'));\nConfiguration config = builder.getConfiguration();\nList<Object> colorList = config.getList("colors.pie");\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);