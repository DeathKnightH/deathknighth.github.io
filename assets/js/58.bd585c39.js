(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{416:function(t,a,e){"use strict";e.r(a);var _=e(44),v=Object(_.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"jvm-垃圾回收"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jvm-垃圾回收"}},[t._v("#")]),t._v(" JVM 垃圾回收")]),t._v(" "),e("h2",{attrs:{id:"_1-如何判断一个对象是否可回收"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-如何判断一个对象是否可回收"}},[t._v("#")]),t._v(" 1. 如何判断一个对象是否可回收")]),t._v(" "),e("h3",{attrs:{id:"_1-1-引用计数法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-引用计数法"}},[t._v("#")]),t._v(" 1.1 引用计数法")]),t._v(" "),e("p",[t._v("因为难解决循环引用的问题，JVM 不使用此方法。")]),t._v(" "),e("h3",{attrs:{id:"_1-2-可达性分析法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-可达性分析法"}},[t._v("#")]),t._v(" 1.2 可达性分析法")]),t._v(" "),e("p",[t._v("以 GCRoots 为起点，分析起点到引用对象的引用链，如果不可达就可以回收。")]),t._v(" "),e("p",[t._v("GCRoots 一般包含以下内容：")]),t._v(" "),e("ul",[e("li",[t._v("虚拟机栈中引用的对象")]),t._v(" "),e("li",[t._v("本地方法栈中引用的对象")]),t._v(" "),e("li",[t._v("方法区中静态属性引用的对象")]),t._v(" "),e("li",[t._v("方法区中常量引用的对象")])]),t._v(" "),e("h3",{attrs:{id:"_1-3-方法区回收"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-方法区回收"}},[t._v("#")]),t._v(" 1.3 方法区回收")]),t._v(" "),e("p",[t._v("参考 "),e("RouterLink",{attrs:{to:"/java/jvm/JVM内存结构.html#53-方法区的垃圾回收"}},[t._v("JVM 内存结构——方法区部分")]),t._v("。")],1),t._v(" "),e("p",[t._v("使用 "),e("code",[t._v("-Xnoclassgc")]),t._v(" 参数可以关闭类卸载功能。")]),t._v(" "),e("h2",{attrs:{id:"_2-引用类型与垃圾回收"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-引用类型与垃圾回收"}},[t._v("#")]),t._v(" 2. 引用类型与垃圾回收")]),t._v(" "),e("p",[t._v("Java 中有 4 中类型的引用，引用的类型和对象回收的时机息息相关。")]),t._v(" "),e("h3",{attrs:{id:"_2-1-强引用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-强引用"}},[t._v("#")]),t._v(" 2.1 强引用")]),t._v(" "),e("p",[t._v("强引用的对象只有在 GCRoots 不可达的情况下才会被回收。")]),t._v(" "),e("p",[t._v("平时直接用 new 语句创建的对象都是强引用对象，例如：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Object obj = new Object();\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h3",{attrs:{id:"_2-2-软引用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-软引用"}},[t._v("#")]),t._v(" 2.2 软引用")]),t._v(" "),e("p",[t._v("即使 GCRoots 可达，软引用对象也会在内存不足时被回收。")]),t._v(" "),e("p",[t._v("Java 中用 SoftReference 类创建和管理软引用，例如：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('SoftReference<String> softString = new SoftReference<String>(new String("test"));\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("在 JVM 内存不足时，GC 会回收软引用，回收后以上代码的 "),e("code",[t._v("softString.get()")]),t._v(" 会返回 "),e("code",[t._v("null")]),t._v("。")]),t._v(" "),e("h3",{attrs:{id:"_2-3-弱引用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-弱引用"}},[t._v("#")]),t._v(" 2.3 弱引用")]),t._v(" "),e("p",[t._v("比软引用更弱，只要发生 GC，不论内存是否不足，弱引用都会被回收。")]),t._v(" "),e("p",[t._v("Java 中用 WeakReference 类创建和管理弱引用，例如：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('WeakReference<String> softString = new WeakReference<String>(new String("test"));\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("只要发生 GC，回收后以上代码的 "),e("code",[t._v("softString.get()")]),t._v(" 会返回 "),e("code",[t._v("null")]),t._v("。")]),t._v(" "),e("h3",{attrs:{id:"_2-4-虚引用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-虚引用"}},[t._v("#")]),t._v(" 2.4 虚引用")]),t._v(" "),e("p",[t._v("需要和 ReferenceQueue 一起使用，用来跟踪对象被垃圾回收的活动。")]),t._v(" "),e("p",[t._v("虚引用无法获得对象，也不会对对象本身的生命周期产生影响，只是记录该对象将要被回收的标记，例如：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('ReferenceQueue<String> referenceQueue = new ReferenceQueue<>();\nString test = new String("test");\nPhantomReference<String> softString = new PhantomReference<String>(test, referenceQueue);\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("当 "),e("code",[t._v("test")]),t._v(" 对象被标记即将回收时，会被放入 "),e("code",[t._v("referenceQueue")]),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"_3-垃圾收集算法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-垃圾收集算法"}},[t._v("#")]),t._v(" 3. 垃圾收集算法")]),t._v(" "),e("p",[t._v("不讨论具体实现，只讨论原理和问题。")]),t._v(" "),e("h3",{attrs:{id:"_3-1-标记-清除"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-标记-清除"}},[t._v("#")]),t._v(" 3.1.标记-清除")]),t._v(" "),e("p",[t._v("这种算法是最基础的垃圾回收算法，后续大多都是在此基础上改进的。")]),t._v(" "),e("h4",{attrs:{id:"_3-1-1-原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1-原理"}},[t._v("#")]),t._v(" 3.1.1 原理")]),t._v(" "),e("p",[t._v("大概分为两步：")]),t._v(" "),e("ul",[e("li",[t._v("先标出所有要回收的对象。")]),t._v(" "),e("li",[t._v("然后统一回收所有被标记的对象。")])]),t._v(" "),e("h4",{attrs:{id:"_3-1-2-问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2-问题"}},[t._v("#")]),t._v(" 3.1.2 问题")]),t._v(" "),e("p",[t._v("此算法主要存在两个问题：")]),t._v(" "),e("ul",[e("li",[t._v("效率问题：标记和清除两个过程效率都不高")]),t._v(" "),e("li",[t._v("空间问题：清除后可能产生大量内存碎片，导致后续内存余量足但需要大的连续空间时可能因为内存不够而导致各种问题（提前扩容/提前GC等）")])]),t._v(" "),e("h3",{attrs:{id:"_3-2-标记-整理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-标记-整理"}},[t._v("#")]),t._v(" 3.2 标记-整理")]),t._v(" "),e("h4",{attrs:{id:"_3-2-1-原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-原理"}},[t._v("#")]),t._v(" 3.2.1 原理")]),t._v(" "),e("p",[t._v("也是分为两个步骤：")]),t._v(" "),e("ul",[e("li",[t._v("和标记-清除一样先标出所有要回收的对象。")]),t._v(" "),e("li",[t._v("然后将未标记的对象都向一端移动，直接清理端边界外的内存。")])]),t._v(" "),e("h4",{attrs:{id:"_3-2-2-问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-问题"}},[t._v("#")]),t._v(" 3.2.2 问题")]),t._v(" "),e("p",[t._v("还是效率问题，如果大量对象死亡，那么标记和整理都会耗费较长时间。")]),t._v(" "),e("h3",{attrs:{id:"_3-3-复制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-复制"}},[t._v("#")]),t._v(" 3.3 复制")]),t._v(" "),e("p",[t._v("针对每次 GC 大量对象死亡，小部分对象存活的情况，也有这种复制算法。")]),t._v(" "),e("h4",{attrs:{id:"_3-3-1-原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-1-原理"}},[t._v("#")]),t._v(" 3.3.1 原理")]),t._v(" "),e("p",[t._v("将要 GC 的内存分为两块，每次只使用一块内存，在 GC 时把存活对象复制到另一块中，然后直接清理发生 GC 的这一块内存。")]),t._v(" "),e("h4",{attrs:{id:"_3-3-2-问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-2-问题"}},[t._v("#")]),t._v(" 3.3.2 问题")]),t._v(" "),e("p",[t._v("大部分对象存活时需要复制大量对象，效率较低。")]),t._v(" "),e("h3",{attrs:{id:"_3-4-分代收集"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-分代收集"}},[t._v("#")]),t._v(" 3.4 分代收集")]),t._v(" "),e("p",[t._v("因为以上的种种问题，没有一种垃圾收集算法能完美解决所有情况，现代商用 JVM 均采用了分代收集的策略。")]),t._v(" "),e("h4",{attrs:{id:"_3-4-1-原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-1-原理"}},[t._v("#")]),t._v(" 3.4.1 原理")]),t._v(" "),e("p",[t._v("分代收集不是一种具体的算法，而是根据对象存活周期将内存分代，对不同的块采用不同的收集算法。")]),t._v(" "),e("p",[t._v("常见的是分为新生代和老年代：")]),t._v(" "),e("ul",[e("li",[t._v("新生代用复制算法。")]),t._v(" "),e("li",[t._v("老年代用标记整理或者标记清除算法。")])]),t._v(" "),e("h2",{attrs:{id:"_4-hotspot-中的垃圾收集器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-hotspot-中的垃圾收集器"}},[t._v("#")]),t._v(" 4. HotSpot 中的垃圾收集器")]),t._v(" "),e("p",[t._v("JDK 8 版本的 HotSpot jvm 有 7 中 垃圾收集器，按照特性可以分为 3 类：")]),t._v(" "),e("ul",[e("li",[t._v("Serial 单线程串行")]),t._v(" "),e("li",[t._v("Parallel 多线程并行，是 Serial 的多线程版")]),t._v(" "),e("li",[t._v("Mostly Concurrent 绝大多数工作时间是并发的，对工作线程暂停影响很小")])]),t._v(" "),e("p",[t._v("目前 JDK 8版本的 HotSpot Jvm 默认收集器按使用模式分为两组：")]),t._v(" "),e("ul",[e("li",[t._v("Client mode：\n"),e("ul",[e("li",[t._v("新生代：Serial 收集器")]),t._v(" "),e("li",[t._v("老年代：Serial Old 收集器")])])]),t._v(" "),e("li",[t._v("Server mode：\n"),e("ul",[e("li",[t._v("新生代：Parallel Scavenge 收集器")]),t._v(" "),e("li",[t._v("老年代：套着"),e("code",[t._v("PS MarkSweep")]),t._v("皮，内部其实是 Serial Old 收集器的代码。需要注意如果使用 "),e("code",[t._v("-XX:+UseParallelOldGC")]),t._v(" 参数启用了 Parallel Old 收集器，对外的名字仍然是 "),e("code",[t._v("PS MarkSweep")]),t._v("，但是内部其实是 Parallel Old 的代码。这个看着很奇怪的问题来源是 HotSpot 虚拟机的垃圾收集器早期框架代码的遗留："),e("a",{attrs:{href:"http://openjdk.java.net/groups/hotspot/docs/StorageManagement.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Collector Styles"),e("OutboundLink")],1)])])])]),t._v(" "),e("h3",{attrs:{id:"_4-1-serial"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-serial"}},[t._v("#")]),t._v(" 4.1 Serial")]),t._v(" "),e("h4",{attrs:{id:"_4-1-1-serial-收集器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-1-serial-收集器"}},[t._v("#")]),t._v(" 4.1.1 Serial 收集器")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("启用参数")]),t._v(" "),e("th",[t._v("特点")]),t._v(" "),e("th",[t._v("使用范围")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("-XX:+UseSerialGC")]),t._v(" "),e("td",[t._v("单线程，使用复制算法")]),t._v(" "),e("td",[t._v("新生代")])])])]),t._v(" "),e("p",[t._v("client 模式下默认的新生代收集器。")]),t._v(" "),e("p",[t._v("只能和 CMS、Serial Old 配合使用。")]),t._v(" "),e("h4",{attrs:{id:"_4-1-2-serial-old-收集器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-2-serial-old-收集器"}},[t._v("#")]),t._v(" 4.1.2 Serial Old 收集器")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("启用参数")]),t._v(" "),e("th",[t._v("特点")]),t._v(" "),e("th",[t._v("使用范围")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("-XX:+UseSerialOldGC")]),t._v(" "),e("td",[t._v("单线程，使用标记-整理算法")]),t._v(" "),e("td",[t._v("老年代")])])])]),t._v(" "),e("h3",{attrs:{id:"_4-2-parallel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-parallel"}},[t._v("#")]),t._v(" 4.2 Parallel")]),t._v(" "),e("h4",{attrs:{id:"_4-2-1-parnew-收集器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-1-parnew-收集器"}},[t._v("#")]),t._v(" 4.2.1 ParNew 收集器")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("启用参数")]),t._v(" "),e("th",[t._v("特点")]),t._v(" "),e("th",[t._v("使用范围")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("-XX:+UseParNewGC")]),t._v(" "),e("td",[t._v("多线程，使用复制算法")]),t._v(" "),e("td",[t._v("新生代")])])])]),t._v(" "),e("h4",{attrs:{id:"_4-2-2-parallel-scavenge-收集器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-2-parallel-scavenge-收集器"}},[t._v("#")]),t._v(" 4.2.2 Parallel Scavenge 收集器")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("启用参数")]),t._v(" "),e("th",[t._v("特点")]),t._v(" "),e("th",[t._v("使用范围")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("-XX:+UseParallelGC")]),t._v(" "),e("td",[t._v("多线程，使用复制算法，和其他垃圾收集器的差别在于关注点是可控吞吐量")]),t._v(" "),e("td",[t._v("新生代")])])])]),t._v(" "),e("p",[t._v("这里的吞吐量（Throughput）是指：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("运行用户代码时间/(运行用户代码时间 + 垃圾收集时间)\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("可以用以下参数控制吞吐量：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("-XX:GCTimeRatio   // 吞吐量大小，默认 99\n-XX:MaxGCPauseMillis  // 最大垃圾收集停顿时间，毫秒数。值越小停顿时间越短，但是相应的吞吐量越小，新生代空间越小。\n-XX:UseAdaptiveSizePolicy   //开关参数，打开后 JVM 会根据实时运行收集的监控信息自适应调整各代内存空间大小以符合吞吐量和垃圾收集停顿时间目标。\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("server 模式下默认的新生代收集器。")]),t._v(" "),e("p",[t._v("只能和 Parallel Old、Serial Old 配合使用。无法和 CMS 收集器一起使用。")]),t._v(" "),e("h4",{attrs:{id:"_4-2-3-parallel-old-收集器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-3-parallel-old-收集器"}},[t._v("#")]),t._v(" 4.2.3 Parallel Old 收集器")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("启用参数")]),t._v(" "),e("th",[t._v("特点")]),t._v(" "),e("th",[t._v("使用范围")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("-XX:+UseParallelOldGC")]),t._v(" "),e("td",[t._v("多线程，使用标记-整理算法")]),t._v(" "),e("td",[t._v("老年代")])])])]),t._v(" "),e("p",[t._v("Parallel Scavenge 收集器的老年代版，只能和 Parallel Scavenge 收集器一起使用。")]),t._v(" "),e("h3",{attrs:{id:"_4-3-mostly-concurrent"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-mostly-concurrent"}},[t._v("#")]),t._v(" 4.3 Mostly Concurrent")]),t._v(" "),e("p",[t._v("大部分时候并发的收集器，目前只有 G1 和 CMS 收集器。")]),t._v(" "),e("h4",{attrs:{id:"_4-3-1-cms-收集器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-1-cms-收集器"}},[t._v("#")]),t._v(" 4.3.1 CMS 收集器")]),t._v(" "),e("p",[t._v("全名 Concurrent Mark Sweep，关注点是尽可能缩短回收停顿时间。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("启用参数")]),t._v(" "),e("th",[t._v("特点")]),t._v(" "),e("th",[t._v("使用范围")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("-XX:+UseConcMarkSweepGC")]),t._v(" "),e("td",[t._v("多线程，使用标记-清除算法")]),t._v(" "),e("td",[t._v("老年代")])])])]),t._v(" "),e("p",[t._v("当并发收集发生 Concurrent Mode Failure 时会使用 Serial Old 作为备用收集器。")]),t._v(" "),e("h4",{attrs:{id:"_4-3-2-g1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-2-g1"}},[t._v("#")]),t._v(" 4.3.2 G1")]),t._v(" "),e("p",[t._v("全名 Garbage-First，直到 JDK 7u4 才正式发布。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("启用参数")]),t._v(" "),e("th",[t._v("特点")]),t._v(" "),e("th",[t._v("使用范围")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("-XX:+UseG1GC")]),t._v(" "),e("td",[t._v("和其他收集器的算法都不一样")]),t._v(" "),e("td",[t._v("全堆")])])])]),t._v(" "),e("p",[t._v("基本的原理和思路是把整个堆划分为很多小的相同大小的 Region，仍然保留分代的概念，但是各个分代之间不再有物理隔离。\n基于每个 Region 以往回收的时间和回收时获得的空间维护一个优先列表，每次 GC 优先回收价值最大的 Region，这也是 Garbage-First 名称的由来。")]),t._v(" "),e("p",[t._v("G1 收集器相比其他收集器有如下优势：")]),t._v(" "),e("ul",[e("li",[t._v("利用多核环境优势，大幅减少停顿时间")]),t._v(" "),e("li",[t._v("G1 可以单独管理整个 GC 堆，不需要其他收集器配合（内部仍然是分代的）")]),t._v(" "),e("li",[t._v("空间整合能力，从整体看是"),e("code",[t._v("标记-整理")]),t._v("算法，从局部 Region 之间看是复制算法，均不会产生内存碎片")]),t._v(" "),e("li",[t._v("可预测停顿，可以指定在一个长度为 M 毫秒的时间片段中，消耗在垃圾收集上的时间不超过 N 毫秒（-XX:MaxGCPauseMillis）")])]),t._v(" "),e("p",[t._v("G1 最佳实践（官方给的"),e("a",{attrs:{href:"https://www.oracle.com/webfolder/technetwork/tutorials/obe/java/G1GettingStarted/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Getting Started with the G1 Garbage Collector"),e("OutboundLink")],1),t._v("），放几个关键的：")]),t._v(" "),e("ul",[e("li",[t._v("使用 G1 收集器时不要使用 "),e("code",[t._v("-Xmn")]),t._v(" 指定新生代大小，这样会导致 G1 的停顿时间目标失效，也会让 G1 不再根据实际监控情况调整新生代大小。")]),t._v(" "),e("li",[t._v("设置 "),e("code",[t._v("-XX:MaxGCPauseMillis")]),t._v(" 时设置一个预定值 90% 的值，这个值是个期望的目标值，不是准确的限定。")])]),t._v(" "),e("h2",{attrs:{id:"_5-触发-fullgc-的场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-触发-fullgc-的场景"}},[t._v("#")]),t._v(" 5. 触发 FullGC 的场景")]),t._v(" "),e("h3",{attrs:{id:"_5-1-显式调用-system-gc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-显式调用-system-gc"}},[t._v("#")]),t._v(" 5.1 显式调用 System.gc()")]),t._v(" "),e("p",[t._v("不一定会执行 FullGC，只是有可能，不可控，所以正常工作中是禁止使用这个方法的。")]),t._v(" "),e("h3",{attrs:{id:"_5-2-老年代空间不足"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-老年代空间不足"}},[t._v("#")]),t._v(" 5.2 老年代空间不足")]),t._v(" "),e("p",[t._v("造成这种现象的有两种情况：")]),t._v(" "),e("ul",[e("li",[t._v("大对象直接进入老年代，对象太大，或者老年代太小，造成空间不足。\n"),e("ul",[e("li",[t._v("尽量不要申请过大的对象。")]),t._v(" "),e("li",[t._v("调整老年代的大小（或者整个堆的大小）。")])])]),t._v(" "),e("li",[t._v("有大量长期存活对象进入老年代。\n"),e("ul",[e("li",[t._v("通过调大 "),e("code",[t._v("-XX:MaxTenuringThreshold")]),t._v(" 的大小来增大对象在新生代经过 GC 的代数，尽可能让对象在新生代被回收。")]),t._v(" "),e("li",[t._v("还有一种很特殊的情况，Survivor 区的对象不一定达到 "),e("code",[t._v("MaxTenuringThreshold")]),t._v(" 参数值才能进入老年代。如果 Survivor 空间中相同年龄的所有对象大小总和大于 Survivor 空间的一半，那么年龄大于等于该对象的所有对象都可以直接进入老年代，这种情况就要适当增加新生代的大小，或者尽量不要短时间内申请大量对象。")])])])]),t._v(" "),e("h3",{attrs:{id:"_5-3-空间分配担保失败"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-空间分配担保失败"}},[t._v("#")]),t._v(" 5.3 空间分配担保失败")]),t._v(" "),e("p",[t._v("当使用复制算法的 Minor GC 需要使用老年代空间进行担保时会发生。担保失败就会执行 FullGC。")]),t._v(" "),e("h3",{attrs:{id:"_5-4-jdk-7及之前的版本永久代空间不足"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-jdk-7及之前的版本永久代空间不足"}},[t._v("#")]),t._v(" 5.4 JDK 7及之前的版本永久代空间不足")]),t._v(" "),e("p",[t._v("如果在运行时大量生成类信息而不卸载类时可能会出现永久代空间不足，而且此时没有使用 CMS 垃圾收集器的话，会执行 FullGC。")]),t._v(" "),e("h3",{attrs:{id:"_5-5-执行-cms-gc-发生-concurrent-mode-failure-错误"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-5-执行-cms-gc-发生-concurrent-mode-failure-错误"}},[t._v("#")]),t._v(" 5.5 执行 CMS GC 发生 Concurrent Mode Failure 错误")])])}),[],!1,null,null,null);a.default=v.exports}}]);