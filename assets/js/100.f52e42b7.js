(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{489:function(a,t,e){"use strict";e.r(t);var s=e(44),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"thread-基础"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#thread-基础"}},[a._v("#")]),a._v(" Thread 基础")]),a._v(" "),e("h2",{attrs:{id:"_1-线程使用方式-构造一个线程有几种方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-线程使用方式-构造一个线程有几种方式"}},[a._v("#")]),a._v(" 1. 线程使用方式/构造一个线程有几种方式")]),a._v(" "),e("ul",[e("li",[a._v("继承 Thread 类\n"),e("ul",[e("li",[a._v("使用方便，自身就是一个线程，可以直接使用。")]),a._v(" "),e("li",[a._v("因为 java 不支持多继承，所有这样无法继承其他类。")])])]),a._v(" "),e("li",[a._v("实现 Runnable 接口\n"),e("ul",[e("li",[a._v("构造灵活。")]),a._v(" "),e("li",[a._v("没有返回值。")]),a._v(" "),e("li",[a._v("不是真正意义上的一个线程，最终使用时还是通过 Thread 类来调用。")])])]),a._v(" "),e("li",[a._v("实现 Callable 接口\n"),e("ul",[e("li",[a._v("构造灵活。")]),a._v(" "),e("li",[a._v("有返回值。")]),a._v(" "),e("li",[a._v("不是真正意义上的一个线程，最终使用时还是通过 Thread 类来调用。")])])])]),a._v(" "),e("h2",{attrs:{id:"_2-守护线程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-守护线程"}},[a._v("#")]),a._v(" 2. 守护线程")]),a._v(" "),e("p",[a._v("JVM 中线程分为两类")]),a._v(" "),e("ul",[e("li",[a._v("普通线程")]),a._v(" "),e("li",[a._v("守护线程")])]),a._v(" "),e("p",[a._v("守护线程属于非必要线程，相当于后台无关紧要的辅助程序，因此当所有非守护线程都结束时，守护线程都会直接被丢弃（kill）。")]),a._v(" "),e("p",[a._v("调用 Thread 对象的")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("setDaemon(true)\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("方法可以将一个 Thread 设置为守护线程，但是因为守护线程的推出非常直接（不会执行finally块，也不会执行回卷栈，而是直接退出），如果守护线程中有类似I/O这样的有关对外操作时会很危险，所以要谨慎使用守护线程，尽量在实现一些不重要的辅助功能时使用守护线程，例如清理无效缓存等。")]),a._v(" "),e("p",[a._v("一个 JVM 在启动时创建的线程中，除了主线程（main 方法所在的线程），其他都是守护线程（垃圾回收线程等）。")]),a._v(" "),e("h2",{attrs:{id:"_3-线程中断"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-线程中断"}},[a._v("#")]),a._v(" 3. 线程中断")]),a._v(" "),e("p",[a._v("线程结束有两种情况，")]),a._v(" "),e("ul",[e("li",[a._v("一是线程任务执行完毕之后自动结束，")]),a._v(" "),e("li",[a._v("二是线程执行过程中抛出异常而结束。")])]),a._v(" "),e("p",[a._v("线程中断就是利用了这两种情况。")]),a._v(" "),e("h3",{attrs:{id:"_3-1-interruptedexception"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-interruptedexception"}},[a._v("#")]),a._v(" 3.1 InterruptedException")]),a._v(" "),e("p",[a._v("调用线程的 interrupt() 方法，可以中断在阻塞/等待状态的线程，抛出 InterruptedException，但是不能中断因 I/O 阻塞或者因锁阻塞的线程。")]),a._v(" "),e("p",[a._v("例如：在线程中调用了 sleep()/wait() 方法使线程处于等待状态，此时外部调用此线程的 interrupt() 方法会立即中断线程运行并抛出  InterruptedException。")]),a._v(" "),e("h3",{attrs:{id:"_3-2-interrupted"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-interrupted"}},[a._v("#")]),a._v(" 3.2 interrupted()")]),a._v(" "),e("p",[a._v("在自定义线程任务时，通过在循环或者其他长耗时的任务中插入 interrupted() 判断来检测线程是否中断来通过 return/抛异常 来及时中断长耗时任务。")]),a._v(" "),e("p",[a._v("同时外部通过调用线程的 interrupt() 将线程状态设置为中断，使 interrupted() 方法返回 true。\n例如：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('public class ThreadExample extends Thread{\n  @Override\n  public void run(){\n    while(!interrupted()){ // 判断线程状态，中断就跳出循环\n     // do somthing\n    }\n    System.out.println("Thread exit");\n  }\n}\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("public static void main(String[] args){\n  Thread test = new ThreadExample();\n  test.start();\n  test.interrupt();\n}\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("h2",{attrs:{id:"_4-线程间协作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-线程间协作"}},[a._v("#")]),a._v(" 4. 线程间协作")]),a._v(" "),e("p",[a._v("当一个线程的运行依赖于其他线程的结果，此时简单的做法可以利用线程间协作的写法。")]),a._v(" "),e("h3",{attrs:{id:"join"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#join"}},[a._v("#")]),a._v(" join()")]),a._v(" "),e("p",[a._v("属于 Thread 对象，是 final 方法，不可重写。")]),a._v(" "),e("p",[a._v("假设有两个线程 a 和 b；")]),a._v(" "),e("p",[a._v("在 a 中调用 b.join() 会使 a 线程 "),e("strong",[a._v("挂起")]),a._v(" ，等到 b 线程执行完毕才会唤醒 a 线程。")]),a._v(" "),e("h3",{attrs:{id:"wait-notify-notifyall"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wait-notify-notifyall"}},[a._v("#")]),a._v(" wait()/notify()/notifyAll()")]),a._v(" "),e("p",[a._v("属于 Object 对象，是 final 方法，不可重写。")]),a._v(" "),e("h3",{attrs:{id:"await-signal-signalall"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#await-signal-signalall"}},[a._v("#")]),a._v(" await()/signal()/signalAll()")]),a._v(" "),e("p",[a._v("属于 Condition 接口，在 AQS 类中有实现，此实现中也是 final 方法。")])])}),[],!1,null,null,null);t.default=r.exports}}]);