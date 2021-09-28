(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{405:function(t,_,v){"use strict";v.r(_);var a=v(44),r=Object(a.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"i-o模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#i-o模型"}},[t._v("#")]),t._v(" I/O模型")]),t._v(" "),v("p",[t._v("I/O是操作系统的概念，一个完整的 I/O 操作大致可以划分为两步：")]),t._v(" "),v("ul",[v("li",[t._v("等待数据")]),t._v(" "),v("li",[t._v("从内核缓冲区复制到应用缓冲区")])]),t._v(" "),v("p",[t._v("模型通常指 UNIX 的 5 种 I/O模型。")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("操作系统级")]),t._v(" "),v("th",[t._v("程序级")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("同步")]),t._v(" "),v("td",[t._v("阻塞 I/O")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[t._v("非阻塞 I/O (轮询)")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[t._v("I/O 复用")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[t._v("信号驱动 I/O")])]),t._v(" "),v("tr",[v("td",[t._v("异步 I/O")]),t._v(" "),v("td")])])]),t._v(" "),v("h2",{attrs:{id:"_1-同步-i-o"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-同步-i-o"}},[t._v("#")]),t._v(" 1. 同步 I/O")]),t._v(" "),v("p",[t._v("同步 I/O 指两个步骤中至少有一步当前进程是阻塞的。")]),t._v(" "),v("h3",{attrs:{id:"_1-1-阻塞-i-o"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-阻塞-i-o"}},[t._v("#")]),t._v(" 1.1 阻塞 I/O")]),t._v(" "),v("p",[t._v("传统的阻塞 I/O 在两个步骤中都是阻塞的，示意图如下：")]),t._v(" "),v("p",[t._v("表现在网络 I/O 上即 1 个 ServerSocket 只能对接一个 client。")]),t._v(" "),v("p",[t._v("虽然有使用多线程创建多个 ServerSocket 的方法来实现伪异步的效果，但是一个服务器能开启的线程数量是有限的，而且大量地创建线程会消耗一定的系统资源，能同时处理的并发请求数量也有限，\n通常这种模式的 I/O 最多只能单机处理 1000 以下 TPS，更高的访问量就会产生明显的业务阻塞。")]),t._v(" "),v("h3",{attrs:{id:"_1-2-轮询非阻塞-i-o"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-轮询非阻塞-i-o"}},[t._v("#")]),t._v(" 1.2 轮询非阻塞 I/O")]),t._v(" "),v("p",[t._v("在传统阻塞 I/O 的等待过程中，应用进程会一直阻塞直到数据准备完毕。")]),t._v(" "),v("p",[t._v("解决这个阶段阻塞的一个解决方案是使用轮询，在等待数据阶段，应用进程不阻塞，但是会定期向内核发送读的系统请求，数据未准备完成会返回错误，此时应用进程可以执行其他操作，直到系统请求返回成功，结束轮询，进行第二步。")]),t._v(" "),v("h3",{attrs:{id:"_1-3-i-o-多路复用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-i-o-多路复用"}},[t._v("#")]),t._v(" 1.3 I/O 多路复用")]),t._v(" "),v("p",[t._v("非阻塞 I/O 虽然解决了等待数据阶段的阻塞问题，但是仍然是一个进程处理一个 I/O 请求，能处理的并发请求数量相较于阻塞 I/O 并没有提升。")]),t._v(" "),v("h3",{attrs:{id:"_1-4-信号驱动-i-o"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-信号驱动-i-o"}},[t._v("#")]),t._v(" 1.4 信号驱动 I/O")]),t._v(" "),v("h2",{attrs:{id:"_2-异步-i-o"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-异步-i-o"}},[t._v("#")]),t._v(" 2. 异步 I/O")])])}),[],!1,null,null,null);_.default=r.exports}}]);