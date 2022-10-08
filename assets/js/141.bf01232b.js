(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{530:function(s,e,a){"use strict";a.r(e);var n=a(44),t=Object(n.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-webstorm-识别-vue-cli-中的别名设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-webstorm-识别-vue-cli-中的别名设置"}},[s._v("#")]),s._v(" 1.webstorm 识别 vue-cli 中的别名设置")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('import * as utils from "@/utils/StringUtil.js"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("上例中的 "),a("code",[s._v("@")]),s._v(" 就是常见的 webpack 路径别名，通常主流 IDE 例如 WebStorm 是可以识别的。")]),s._v(" "),a("p",[s._v("但是 Vue CLI 3 里，是没有传统的 webpack 配置文件的，因为使用另一种写法集成到了 vue.config.js 里，这时 WebStorm 就无法识别别名了，在编辑器里表现为 CTRL + 左键点击无法跳转到响应文件。")]),s._v(" "),a("p",[s._v("解决方案：")]),s._v(" "),a("p",[s._v("在本地代码仓库项目的根目录里新建一个 conf.js 文件：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("/**\n * 由于 Vue CLI 3 不再使用传统的 webpack 配置文件，故 WebStorm 无法识别别名\n * 本文件对项目无任何作用，仅作为 WebStorm 识别别名用\n * 进入 WebStorm preferences -> Language & Framework -> JavaScript -> Webpack，选择这个文件即可\n * */\nconst resolve = dir => require('path').join(__dirname, dir);\n\nmodule.exports = {\n    resolve: {\n        alias: {\n            '@': resolve('src')\n        }\n    }\n};\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("在 "),a("code",[s._v("settings")]),s._v("->"),a("code",[s._v("Language & Framework")]),s._v("->"),a("code",[s._v("JavaScript")]),s._v("->"),a("code",[s._v("Webpack")]),s._v(" 将 webpack 配置文件设置为上面新建的 conf.js。")])])}),[],!1,null,null,null);e.default=t.exports}}]);