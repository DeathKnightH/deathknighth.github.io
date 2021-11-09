(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{422:function(a,e,t){"use strict";t.r(e);var s=t(44),r=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"虚拟机修改"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#虚拟机修改"}},[a._v("#")]),a._v(" 虚拟机修改")]),a._v(" "),t("h2",{attrs:{id:"_1-仅针对-hotspot-虚拟机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-仅针对-hotspot-虚拟机"}},[a._v("#")]),a._v(" 1. 仅针对 Hotspot 虚拟机")]),a._v(" "),t("p",[a._v("Oracle-Sun Hotspot 虚拟机是应用范围最广的虚拟机，是 OracleJDK 和 OpenJDK 中默认的 jvm。")]),a._v(" "),t("p",[a._v("Java 8 这项改动仅针对 Oracle-Sun Hotspot 虚拟机，其他虚拟机如 Oralce JRockit， IBM J9 没有影响。")]),a._v(" "),t("h2",{attrs:{id:"_2-移除了-permgen-space"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-移除了-permgen-space"}},[a._v("#")]),a._v(" 2. 移除了 PermGen Space")]),a._v(" "),t("p",[a._v("PermGen Space 即 Permanent Generation Space，俗称永久代。")]),a._v(" "),t("p",[a._v("Hotspot 虚拟机中内存区域在 JDK 8 之前存在 3 块区域：新生代、老年代、永久代。永久代存储的是方法区和各种常量池，但是需要注意 Java 7 开始字符串常量池移到了"),t("strong",[a._v("堆")]),a._v("中。")]),a._v(" "),t("p",[a._v("JDK 8 移除了永久代，改用 Metaspace 替代。Metaspace 又称元空间，使用本地内存来存储类元数据，这和 JRockit/J9 类似。需要注意 Java 8 的 Hotspot 字符串常量池依旧在"),t("strong",[a._v("堆")]),a._v("中。")]),a._v(" "),t("h2",{attrs:{id:"_3-虚拟机参数修改"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-虚拟机参数修改"}},[a._v("#")]),a._v(" 3. 虚拟机参数修改")]),a._v(" "),t("ul",[t("li",[a._v("移除了 PermGen 相关参数：")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("PermGen\nMaxPermSize\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("如果在虚拟机启动时继续使用这两个参数会被忽略并告警。")]),a._v(" "),t("ul",[t("li",[a._v("新增了 Metaspace 相关参数：")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("MaxMetaspaceSize\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("元空间大小会随实际情况动态变动，如果不设置 MaxMetaspaceSize，则最大容量取决于操作系统可用虚拟内存大小。")])])}),[],!1,null,null,null);e.default=r.exports}}]);