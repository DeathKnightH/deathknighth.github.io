(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{362:function(a,_,t){a.exports=t.p+"assets/img/command.drawio.8b7ec2f8.png"},436:function(a,_,t){"use strict";t.r(_);var v=t(44),r=Object(v.a)({},(function(){var a=this,_=a.$createElement,v=a._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("h1",{attrs:{id:"命令模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#命令模式"}},[a._v("#")]),a._v(" 命令模式")]),a._v(" "),v("h2",{attrs:{id:"_1-概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-概念"}},[a._v("#")]),a._v(" 1.概念")]),a._v(" "),v("p",[a._v("命令模式是一种行为设计模式，又称 Command/动作/Action/事务/Transaction 模式。")]),a._v(" "),v("h2",{attrs:{id:"_2-意图"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-意图"}},[a._v("#")]),a._v(" 2.意图")]),a._v(" "),v("p",[a._v('将"请求"这一动作封装成命令对象，便于将方法参数化、后续延迟使用队列，甚至可以在某些情况下撤销请求操作。')]),a._v(" "),v("h2",{attrs:{id:"_3-类图示例"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-类图示例"}},[a._v("#")]),a._v(" 3.类图示例")]),a._v(" "),v("p",[v("img",{attrs:{src:t(362),alt:"command"}})]),a._v(" "),v("p",[a._v("如图，其中：")]),a._v(" "),v("ul",[v("li",[a._v("command 接口的实现类都是命令对象，有的命令会调用 receiver 完成具体操作。")]),a._v(" "),v("li",[a._v("receiver 是命令的接收者，实际上通常是命令实际执行的地方。")]),a._v(" "),v("li",[a._v("invoker 是命令调用者、发送者，对请求进行初始化，并调用/触发相应的命令。")])]),a._v(" "),v("h2",{attrs:{id:"_4-适用场景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-适用场景"}},[a._v("#")]),a._v(" 4.适用场景")]),a._v(" "),v("h3",{attrs:{id:"_4-1-业务场景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-业务场景"}},[a._v("#")]),a._v(" 4.1 业务场景")]),a._v(" "),v("ul",[v("li",[a._v("需要参数化方法的时候都可以使用命令模式：\n"),v("ul",[v("li",[a._v("实现工作流时，就是将每一个 job 参数化作为命令对象，前端组装工作流时反映到后端就是将命令对象组装成一个复杂的工作流对象。")]),a._v(" "),v("li",[a._v("可以将最终的流对象序列化为json字符串或者xml文件，持久化下来等待实际使用。")]),a._v(" "),v("li",[a._v("最后业务中实际使用流对象时，由调用者反序列化工作流，根据传入的请求触发命令。")])])])]),a._v(" "),v("h3",{attrs:{id:"_4-2-开源实例"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-开源实例"}},[a._v("#")]),a._v(" 4.2 开源实例")]),a._v(" "),v("p",[a._v("java语言的线程就是典型的命令模式，创建的线程都是一个个 task，可以单独执行，也可以放到线程池队列中等待执行。")]),a._v(" "),v("ul",[v("li",[a._v("java.lang.Runnable")])]),a._v(" "),v("h2",{attrs:{id:"_5-实现细节与技巧"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-实现细节与技巧"}},[a._v("#")]),a._v(" 5.实现细节与技巧")]),a._v(" "),v("ul",[v("li",[a._v("有时候需要回滚命令，有两种实现方式：\n"),v("ul",[v("li",[a._v("将回滚也作为命令，同时维护一个已触发的命令栈，调用回滚的时候从栈中取出栈顶命令并恢复 receiver 状态。")]),a._v(" "),v("li",[a._v("将 undo 添加到命令接口，使每个可回滚的命令实现 undo 方法，要回滚时依次调用要回滚的命令的 undo 方法。")])])]),a._v(" "),v("li",[a._v("整体的逻辑表现为 invoker 触发 command，由 command 调用 receiver。")])]),a._v(" "),v("h2",{attrs:{id:"_6-优缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-优缺点"}},[a._v("#")]),a._v(" 6.优缺点")]),a._v(" "),v("p",[a._v("优点：")]),a._v(" "),v("ul",[v("li",[a._v("符合单一职责原则，命令触发和命令执行被解耦到两个类中进行。")]),a._v(" "),v("li",[a._v("符合开闭原则，invoker 和 receiver 都不需要修改，只需要增加新的 command 类即可。")]),a._v(" "),v("li",[a._v("可以持久化一系列复杂操作。")]),a._v(" "),v("li",[a._v("可以方便地实现回滚/撤销操作。")])]),a._v(" "),v("p",[a._v("缺点：")]),a._v(" "),v("ul",[v("li",[a._v("在 invoker 和 receiver 之间增加了一系列 command，大大增加了代码的复杂程度。")])]),a._v(" "),v("h2",{attrs:{id:"_7-与其他设计模式的关系"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-与其他设计模式的关系"}},[a._v("#")]),a._v(" 7.与其他设计模式的关系")])])}),[],!1,null,null,null);_.default=r.exports}}]);