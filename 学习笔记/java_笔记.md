__<font color = "Orange">1.我正在学什么</font>__
__<font color = "Orange">2.存在的意义是什么</font>__
__<font color = "Orange">3.知道什么东西用什么工具做</font>__
__<font color = "Orange">4.要会提出解决方案</font>__


# API
https://docs.oracle.com/en/java/javase/21/docs/api/index.html
## String
(1)字符数组转字符串
    char[] chs = {'a','b','c'}
    String a = new String(chs)
    //a -> "abc"
__(2)字符串比较__
"=" 比较数值值
"equals/equalsIgoreCase" 比较地址值(时候忽略大小写)

### StringBuilder
提高字符串的操作效率

```java
    //创建容器
    StringBuilder sb = StringBuilder()
    StringBuilder sb = StringBuilder("abc")

    //方法
    .append()   添加
    .reverse()  反转
    .length()  
    .toString()
```

### StringJoiner

```java
    StringJoiner sj = StringJoiner("间隔符号")
    StringJoiner sj = StringJoiner("间隔符号","开始符号","结束符号")
    //间隔是两添加的字符之间添加
```

## math
```java
    abs()   //绝对值
    cell()/floor     //向上/向下取整
    max(int a ,int b)
    pow(dooub)
    .sqrt()     平方
    .cbrt()     立方
```
## System

```java
    .exit(int status)       //终止当前虚拟机 0正常停止 非零异常停止
    .currentTimeMillis()       //返回当前系统时间的毫秒形式
    .arraycopy(数据源数组，起始索引，目的地数组，起始索引，拷贝个数(a中数组中的个数))        //数组拷贝
```
## Runtime

```java
    .getRuntime()       //通过方法new一个

    .exit()
    .availableProcessors()       //获取CPU线程数
    .maxMemory()        //jvm能从系统中获取的总内存
    .totalMemory()      //jvm已经从系统中获取的总内存
    .freeMemory()       //jvm剩余的内存
    .exec(String command)       //运行cmd命令
```


## Object

```java
    .toString()
    .equals()
    .clone(int a)       //对象克隆
        >浅克隆//深克隆  （是否新创建对象-浅克隆更改一个两个都修改）
    
    .BigInteger     //获取最大整数
    .BigDecima      //创建精确的小数
```
## 正则表达式 

(1)校验字符串是否满足一定的条件
(2)获取文本中的内容
例子：
    检验qq号码是否正确（6~20位以内，0不能在开头，必须全是数字）qq.matches("[1~9]\\d{5,19}")

* <font color = "orange">使用规范</font>

        [abc]   只匹配a,b或c;
        [^abc]  除了a,b,c之外任意字符；
        [a-zA-Z]    a到z A到Z,包括(范围)；
        [a-d[m-p]]  a到z,或m到p;
        [a-z&&[def]]    a-z和[d,e,f]的交集
        [a-z&&[^ba]]    a-z和非bc的交集；
        [a-z&&[^m-p]]   a-z和除了m-p的交集；


    预定义字符(只匹配一个字符)

        .       任何字符;
        \d      一个数字[0-9]范围;
        \D      非数字：[^0-9];
        \s      一个空白字符[\t\n\xOB\f\r]      //制表空白等
        \S      一个非空白字符：[^\s];
        \w      [a-zA-Z_0-9]英文、数字、下划线；
        \W      [^\w]一个非单词字符

        多次判断
        X?      X,出现一次或0次；
        X*      X,0次或多次；
        X+      X,一次或多次；
        X{n}    X,正好n次；
        X{n，}  X,n次到无穷；
        X{n,m}  X,n到m次；


## 时间类

1 s = 1000 ms
1 ms = 1000 微秒
1 微秒 = 1000 纳秒

* Date类
  * ZoneId：时区
  * Instant:时间戳
  * ZoneDaTeTime：带时区时间
  
* SimpleDateFormat类（日期格式化）
  * DateTimeFormatter

* Calender：日历类
  * LocalDate：年月日
  * LocalTime：时分秒
  * LocalDateTime：年月日时分秒
  
* 工具类（获取值）
  * Duration：时间间隔（秒，纳秒）
  * Period：时间间隔（年月日）
  * ChronoUnit 时间间隔（所有单位）

## 包类
把基础的数据包装成类
* Integer
* Charater
* String


***
# 数组
## Arrays 数组工具类

    Arrays.toString(int[] a)            //数组转成一组字符串

    Arrays.binarySearch(int[] a, key)   //二分查找
    //数组元素必须升序
    //查找数据存在 返回真实索引   否则返回插入点减一

    Arrays.copyOf(int[] a , newLength) //复制数组
    //如果oldLength < newLength 补上默认值
    // = 正差拷贝
    // > 部分拷贝

    Arrays.copyRange(int[] a , from , to) 
    //包头不包尾

    Arrays.sort(int[] a)              //排序，默认升序

    <font color = "blueeer">实现方式:</font>
    Arrays.sort(int[] a , new Comparator<Integer>){
        @Override
        public int compare(Integer o1 , Integer 02){
            return o1 - o2 (升序)/return o2 - o1 降序
        }
    }
<font color = "#BBFFFF">通过把数组分成两块 有序(0索引)和无序(其他索引)
(1)核心逻辑是将无序数组中的元素插入到有序数组中，通过>= 和 < 判断放在左还是右
(2)刚开始有序只有0索引 添加后遍历次数也会增加
</font>

***
# 函数对象

***
# 封装

***
# 继承

***
# 多态

使用方法
    public void register(Person p){
        p.show()                   
    }                              
继承Person类的子类都可以通过赋值给Person p 调用对应的show方法

条件
1.有继承关系
2.有父类引用指向子类对象
3.方法重写

多态方式调用成员变量和方法
1.编译看左边，运行也看左边(成员变量)————直接看父类的变量
2.编译看左边，运行也看右边(成员方法)————子类重写覆盖父类

***多态创建对象 “父类” 父类名 = new “子类”***

优缺点：
1.优点
   
（1）利于维护
__<span style="color:red">（2）调用方法时可以传递所有的子类对象</span>__
2.缺点
    <font color = "orange">（1）方法调用时，无法调用子类的特有方法，因为编译时会先检查父类中是否有这个方法。</font>

## ***<font color = "orange">静态代码块</font>***
```java
static{
    ....
}
```
在类首次被调用时创建

用途：
- 线程池，数据库连接池管理 ->只在首次需要时创建一个集中管理的类
    
## ***<font color = "orange">泛型</font>***
<font color = "lightblue">Java 泛型主要用于解决 类型系统（Type System） 的问题：如何在不丢失类型安全的前提下，编写可处理多种数据类型的通用代码</font>


任意类型（不确定类型）-> T 表示
- 变量在第一次使用时，根据赋值对象类型改变
  ```java
  private T a;

  a = 1 此时 T -> int 类型
  ```



***
# 抽象
强制子类按照这种格式写（在多人开发中可以使得不同的人能够用同意的格式进行，方便阅读合作）

## <font color = "orange">接口</font>
抽象方法的集合体————只写方法（一种规则）
继承的同时依然可以实现接口
<font color = "red"> 接口重名：重写一次就全部重写</font>

* <font color = "ornange">作用</font>
  * 实现不同类在调用时，可以通过同一个方法名称调用自己的方法: -> 实现多态

```java
    //接口
    public interface IPaymentMethod {
        void processPaymentMethod(double amount);
    }

    //支付，处理用户支付
    public class PayPalProcessor {
        public void processorPayment(IPaymentMethod paymentMethod , double balance) {
            paymentMethod.processPaymentMethod(balance);
        }

    }   

    //接口
    public class PayPalPaymentMethod implements IPaymentMethod{
        @Override
        public void processPaymentMethod(double paymentAmount) {
            System.out.println("PP payment : " + paymentAmount);
        }
    }
    public class CreditCardPaymentMethod implements IPaymentMethod{
        @Override
        public void processPaymentMethod(double paymentAmount) {
            System.out.println("Cred payment : " + paymentAmount);
        }
    }
    //实现
    public class test {
        public static void main(String[] args) {
            PayPalProcessor pp = new PayPalProcessor();
            pp.processorPayment(new CreditCardPaymentMethod(),1000);
            pp.processorPayment(new PayPalPaymentMethod(),1000);
        }
    }
```

## ***接口约束函数***

*尖括号在前*
> [!important]
> 1.限制返回值为实现该接口的子类  
> 2.返回的子类只能调用该接口的方法-实现低耦合

```java
// 1. 定义一个带泛型的接口（功能是实现写入数据的读出）
public interface Imputment<T> {
    T imput();  // 返回类型是 T，由使用者决定
}
// 返回String
public class StringImputment implements Imputment<String> {
    @Override
    public String imput() {
        return "Hello, World!";
    }
}

//返回Integer
public class NumberImputment implements Imputment<Integer> {
    @Override
    public Integer imput() {
        return 42;
    }
}

public static <T> void printResult(Imputment<T> input) {
    T result = input.imput();
    System.out.println("结果: " + result);
}

// 调用
printResult(new StringImputment());  // 输出: 结果: Hello, World!
printResult(new NumberImputment());  // 输出: 结果: 42
```

*尖括号在后*
> [!important]
> 限制传入参数的返回类型

```java
/**
 * @<AnyType extends ...> 必须继承...
 * @Comparable<? super AnyType> 必须返回实现了Comparable的类或者是父类
 * @AnyType返回一个任意类型
**/
public static <AnyType extends Comparable<? super AnyType>> AnyType findMax(AnyType[] arr)
```



***
# 内部类
定义：在类的内部在创建一个类
<font color = "green">内部类是外部类的一部分，单独出现作用不大</font>

1.内部类可以访问外部类属性
2.外部类不能直接访问外部内部类熟悉（只能同过创建对象进行访问）
    
## 成员内部类
<font color = "red">Outer 表示外部类名 Inner 表示内部类名</font>
类中方法外
1.先创建外部类实例
2.创建内部类对象 ：  ”外部类“."内部类" “类名” = "外部类实例".new "内部类"
3.内部类调用外部类成员变量 外部类名.this.a

## 静态内部类
1.特点：只能访问外部类中静态方法和变量（创建对象后除外）
2.创建 Outer.Inner “名称” = new Outer.Inner()

## 局部内部类
1.定义在方法中
2.外界无法直接访问，需要在方法中创建使用
3.该类可以直接访问外部类成员，也可以访问方法内的局部变量

## <font color = "orange">匿名内部类 </font>
1.（1）创建 new 类名或接口 -> 实现/继承 接口/类
  （2）方法重写
  （3）创建对象
2.类名不可见
<font color = "gree">3.简化代码 减少子类文件的创建
4.创建即可调用 new (){}.("调用方法")</font>

## lambda表达式
* 简化匿名内部类书写（不关心谁做，关心做什么）
(1)组成：参数部分+逻辑表达 
    (int a , int b) -> a + b
    (方法参数) -> (方法)
(2)简化代码，使得代码逻辑更好读懂


***
# 集合

## 顶层接口Collection
* <font color = "orange">方法</font>
    (1)public booleam add(E e)      //添加 <font color = "pink">(set 添加失败会放回false)</font>

    (2)public void clear()          //清空

    (3)public boolean remove(E e)      //删除

    (4)public boolean contain(E e)  //判断元素是否存在

    <font color = "red">底层实现是通过equals()方法实现，如果要判断自定义类需要重写底层equals方法</font> --Alt + Insert 重写快捷建

    (5)public boolean isEmpty()     //是否为空

    (6)public int size()            //获取长度
|
|
* <font color = "orange">迭代器遍历</font>
    Iterator<E> "名称" = iterator() 创建迭代器(默认指向0索引)
    (常用方法)
    * (1)hasNext();
        有元素返回true
    * (2)next()
        先获取元素，再往后移动指针

    (特点)  
    1.不依赖索引

    2.指针不会复位 --只能重新获取

    3.next()不能多次使用？？————原因hasnext()判断无法跟上移动指针的速度

    4.<font color = "red">迭代器遍历</font>不能用集合的方法进行增加或删除
    
    * for 增强语句简化迭代器

|

* <font color = "orange">泛型</font>
  (1)用于规范数组的书写，没有泛型默认所有数据都是Object,获取数据无法使用特有行为
  (2)泛型中不能写基本数据类型
  (3)泛型类不具备继承性，但数据具备继承性 <font color = "pink">（方法传递不能传递子类）</font>
  <font color = "red">(4)通配符 ？限定范围(继承体系常用)</font>
|
|
* __<font color = "orange">泛型类</font>__
当类中有数据类型不确定——>定义泛型类(类名+<E_> E记入类型 )

    
        public static class myList<E>{
        Object[] array = new Object[10];
        int size;

        public boolean add(E e){
            array[size] = e;
            size++;
            return true;
        }

        public E get(int index){
            return (E) array[index];
        }

        @Override
        public String toString() {
            return Arrays.toString(array);
            }
        }

***

* __<font color = "orange">泛型方法</font>__
方法中形参不确定，可以使用方法后定义泛型

        public static class oya{
            private oya(){}

        public static<E> void addAll(List<E> list , E...e){
            list.add(e);
            list.add(e1);
            list.add(e2);
            list.add(e3);
            }
        }

|
|

* __<font color = "orange">泛型接口</font>__
(1)实现类给出具体的类型 --直接通过接口规范可存储类型--如果不确定可以延续泛型

### List
* __<font color = "blac">(1)特点：有序、可重复、有索引</font>__

* ArrayList类
* LinkedList类
#### ArrayList
#### LinkedList
(特点)
底层数据结构：双向链表、查询慢、增删快、操作首尾元素速度快

#### Vector

### Set
__<font color = "blac">(1)特点：无序、不重复、无索引</font>__
(2)给HashSet中存放自定义类型元素时，需要重写对象中的hashCode和equals方法，建立自己的比较方式，才能保证HashSet集合中的对象唯一

#### HashSet

* hashCode方法：
  * 不同对象计算的整数不同（根据地址计算）
  * 如果重写：一样属性的对象（类）返回的值相同；
  * </font color = "yellow">存储类对象时要重写.equals和.hashCode方法（Alt + Inster）</font> 
##### LinkedHashSet
#### TreeSet

### Map
(与Python 中的元组很类似)
(1)表中的一个元素 a 分成 key(键值) + (隐藏值) ——> 同过键值可以查找找隐藏值
(2)HashMap<K,V>：存储数据采用的哈希表结构，元素的存取顺序不能保证一致。由于要保证键的唯一、不重复，需要重写键的hashCode()方法、equals()方法。

主要方法:
(1)get(Object key)    
(2)put(K key,V value)   
(3)remove(Object key)

# I/O
## File/Dir

<font color = "red"> 绝对路径：带盘符(C:)
相对路径：不带盘符</font>

* __<font color = "orange">判断/获取的方法__</font>
  
        .isDirectoty()  //是否文件夹 true OR false
        .isFile()
        .exists()

        .length()
        .getAbsolutePath()
        .getPath()
        .getName()
        .lastModified()  //返回时间

        .createNewfile() //创建文件 1.不存在返回ture 不存在创建失败false 2.一定创建文件
        .mkdir()/.mkdirs  // 1.路径唯一
        
        .delect() //文件直接删 目录有内容删除不了

        .listFiles();       //获取文件夹中所有内容

* <font color = "yellow">换行和续写</font>
    
    增加换行符\r\n；
    打开续写开关，构造函数的第二个变量；

* __<font color = "orange">成员的方法__</font>   

        .listRoots()(static)        //打印盘符
        .list()                     //文件夹下所有文件的获取名字
        .list(FileFilter fileter)       //利用文件过滤(函数方法接口！！) 返回值File
        .list(FilenameFilter fileter)       //返回值String

## I/O流
### 字节流（可以非纯文本，可拷贝所有数据）

__<font color = "orange">FileOutputStream fos = new FileOutputStream(路径)</font>__
    
    .getBytes()     //String -> 字节数组
    .write()写      //会清空文件夹
    .wirte(byte[] b)
    .write(byte[] b,int begin , int len)

__<font color = "orange">FileInputStream fos = new FileOutputStream(路径)</font>__

    .read() //读取编码，用整数接受；
    循环读取：
    int b;
    while(b = fis.read() != -1){
        System.outprintln((char)b)      //编码转化成字符
    }

<font color = "orange">文件拷贝</font>
* 小文件

        int b;
        while(b = fis.read() != -1){
            fos.write(b)      //编码转化成字符
        }

* 大文件

        byte[] bytes = new byte[2];     //bytes的长度决定一次读取多少个数据;
        int len 
        while((len = fis.read(bytes)) != -1){       //读取bytes个数据存储到len中
            fos.write(bytes,0,len)
        }
#### 字节高级流

把基本流包装成高级流

* 字节缓冲流

### 字符流（编码读取异常导致读取数据乱码问题）

* 未读完整个汉字
* 编码和解码使用的方法不同

        FileReader fdr = new FileReader();
        FileWiter ftr = new FileWriter; 


<font color = "yellow">因为字符流有缓冲区，所以新写入的字符无法马上被读取，需要手动刷新</font>

        // 使用 try-with-resources 自动管理资源
        try (FileWriter fw = new FileWriter(text1);
             FileReader fr = new FileReader(text1)) {
    
            fw.write("我还会");
         // 不需要显式调用 flush() -->flush 作用是使得文件中内容处于最新的状态
            // try-with-resources 会在关闭时自动刷新
    
            // 现在可以正常读取
            int ch;
            while((ch = fr.read()) != -1) {
                System.out.print((char)ch);
            }
}

***

### 高级流

<font color = "yellow">用于包装基本流</font>

#### 字符缓冲流

        BufferedReader(new FileReader r)
        BufferedReader(new FileWiter w)

        特有方法：
        读取：
        readLine()  //读一行数据，没有了返回null
        输入L:
        void newLine() //跨平台换行


#### 转换流

* InputStreamReader 字节输入流转成字符输入流
* OutputStreamWriter 字符输出流转成字节输出流

* 特点：在字节流->字符流->缓冲流 中加入参数可以

* <font color = "yellow">jdk11后字符流可直接指定编码</font>

#### 序列化流

把java中的对象写入到本地文件中；
* ObjectInputStream 
* ObjectOutputStream


记录到本地文件后修改：
  * 系统会自动计入一个版本好，如果修改，版本号会随之更新（serialVersionUID）

方法：

1.自己定义为final
2.通过底层修改Serializable的效果自动固定版本号

只序列化部分熟悉：

* 加入transient 关键字


#### 打印流

1.字节打印流
* 特点
  * 只有写没有读
  * 只操作文件的目的地，不操作数据源
  * 具有特别的写法，可以实现数据的原样写出;
  * 特有方法：打印一次 = 写出 + 换行 + 刷新;

2.字符打印流


#### 解压/压缩流

解压缩流：

        public static void unzip(File scr,File dest) throws IOException {
            ZipInputStream zis = new ZipInputStream(new FileInputStream(scr));
            ZipEntry ze;

            while ((ze = zis.getNextEntry()) != null) {
                if (ze.isDirectory()) {
                    File newFile = new File(dest, ze.toString());
                    newFile.mkdirs();
                }
                else {
                    FileOutputStream fos = new FileOutputStream(new File(dest, ze.toString()));
                    int b;
                    while ((b = zis.read()) != -1) {
                        fos.write(b);
                    }
                    fos.close();
                    zis.closeEntry();
                }
            }
            zis.close();
        }

# 多线程

* <font color = "red">多个线程抢夺cpu的执行权达到多线程的效果</font>

* 作用：
  * 同时做多件事
  * 提高运行效率

* 并发和并行
  * 并发：同一时刻，多个指令在单个CPU上交替执行
  * 并行：同一时刻，有多个指令在多个CPU上同时执行

## 实现方式
  * 重写run方法
    * 继承Threat
    * 实现Runable -> (<font color = "yellow">需要创建线程对象并传递继承接口的类对象</font>)
  * 可以获取多线程运行结果
    * 继承Callable接口 
      * 创建一个类
      * 重写call（具有返回值）
      * 创建类对象（表示执行任务）
      * 创建FutureTask（作用管理多线程的运行结果） 
      * 创建Threat（用于启动线程）
    * <font color = "yellow">需要不同线程的运行结果时使用</font>
* <font color = "yellow">区别</font>
  * 继承Threat：创建多个对象去分配到多个线程
  * 实现Runable：创建一个类，可以放到不同的线程中；

## 常见方法

        
        getName 线程名 -> 构造方法取名需要重写方法
        setName
        Thread currentThread()获取当前线程
        sleep(long time)指定线程的休眠时间ms
        setPriority(int newPriority)设置线程优先级
        getPriority()
        setDaemon(boolean on) 设置是守护线程 -> 在非守护的线程结束后守护线程就会陆续结束
        yield()出让线程/礼让线程 -> 让出当前线程的执行权
        join()插入线程  -> 插入到当前线程之前
        --------
        //方法一
        MyThreat myThreat1 = new MyThreat();
        MyThreat myThreat2 = new MyThreat();

        myThreat1.setName("X1");
        myThreat2.setName("X2");

        myThreat1.setPriority(1);
        myThreat2.setPriority(2);

        myThreat1.setDaemon(true);

        myThreat1.start();
        myThreat2.start();

        String name = myThreat1.getName();
        System.out.println(name);

        Thread tt = Thread.currentThread();
        String name2 = tt.getName();
        System.out.println(name2);

        Thread.sleep(5000);
        System.out.println(tt.getName());

## 线程的生命周期
```mermaid
flowchart TD
    A[新建] --> B[准备] -- 抢到CPU执行权-->C[运行];
    C -- 被抢走执行权 --> B;
    C -- sleep() --> D[没有执行资格（阻塞）];
    D --sleep()时间结束--> B;
    C -- 执行完毕 --> E[线程死亡]
```

## 线程安全

* <font color = "Orange">用处</font>
  * 可以通过锁，创建区域来解决同一时间多用户注册统一账号的问题;

### sychronized

* 锁对象"任意" ：synchronized(对象)锁 （功能：把一个代码锁起来）
  * 对象:唯一的
  * 几个线程运行同一个代码;
  * <font color = "yellow">上锁后：不同的人用一个公共设施，排队进行</font>

* 锁方法（同步方法）-继承;
  * 把方法上锁；
  * 优点;
    * 可以添加不同的方法到锁中
    * 增加可读性

### lock（使用范围比sychronize更广泛）

## 等待和唤醒

* 方法作用：处理有限空间内添加和取出的控制
* 特点：<font color = "yellow">
  * 解锁和唤醒是在同一个对象上对象的
  * 同一个锁可以接受或发出它锁定的对象的指令</font>
  * 不同的锁之间的对象无法进行唤醒和等待；(a无法操作线程2，除非获得线程二的锁)
```mermaid
flowchart TD
    A[锁] -- 分配 --> B[线程1]
    D[锁] -- 分配 --> C[线程2]
```

* 两个锁的问题
  * 可能会浪费资源
  * 造成死锁 
    >1在线程A中上锁,并请求线程B
    >2在线程B中上锁，并且请求A
    ```java
        public class MyThreat2{
            static int Count = 10;
            static int food = 0;
            static final Object lock1 = new Object();
            static final Object lock2 = new Object();
        }

        public class MyThreat extends Thread {
            public void run() {
                while (true) {
                    synchronized (MyThreat2.lock2) {
                        if (MyThreat2.Count == 0) {
                            break;
                        }
                        if (MyThreat2.food != 0) {
                            // 必须先获取 lock1 的锁才能调用 notifyAll()
                            synchronized (MyThreat2.lock1) {
                                MyThreat2.lock1.notifyAll();
                            }
                        }
                        if (MyThreat2.food == 1) {
                            try {
                                MyThreat2.lock2.wait(); // 持有 lock2 的锁，可以 wait()
                            } catch (InterruptedException e) {
                                throw new RuntimeException(e);
                            }
                        } else {
                            MyThreat2.food++;
                            System.out.println("生产了" + 1 + "个");
                            System.out.println("等待运输的" + MyThreat2.food + "个");
                        }
                    }
                }
            }
        }

    public class MyThreat1 extends Thread {
        @Override
        public void run() {
            while (true) {
                synchronized (MyThreat2.lock1) {
                    if (MyThreat2.Count == 0) {
                        break;
                    }
                    if (MyThreat2.food == 0) {
                        try {
                            MyThreat2.lock1.wait(); // 持有 lock1 的锁，可以 wait()
                        } catch (InterruptedException e) {
                            throw new RuntimeException(e);
                        }
                    } else {
                        System.out.println("可以运输的" + MyThreat2.food + "个");
                        MyThreat2.Count--;
                        MyThreat2.food--;
                        System.out.println("还差" + MyThreat2.Count + "个");
                        System.out.println("运输了" + 1 + "个");
                    }
                }
                // 在 lock1 的同步块外，获取 lock2 的锁并唤醒生产者
                synchronized (MyThreat2.lock2) {
                    MyThreat2.lock2.notifyAll();
                }
            }
        }
    }
    ```

### 阻塞队列
ArrayBlickingQueue;
LinkesBlockingQueue;

## 线程池
newCachedThreadPool()
newFixedThreatPool(int nThreat)

* 自定义线程池
  * 核心线程数
  * 线程池中最大线程数量
  * 空闲时间（值）（计算临时线程存在时间）
  * 空闲时间（单位 s/m/h）
  * 阻塞队列（超出最大值）
  * 创建线程方式
  * 执行过多任务时的解决方案

* 线程池多大合适
  * CPU密集性： 最大并行数+1
  * I/O：密集性： 最大并行数 * CPU利用率 * 总时间(CPU计算+等待)/CPU计算时间

* 特点：
 * 节约线程资源（用已经存在于线程池中的线成去完成提供的任务）

## ThreadLocal

1.解决多并发问题，用于存储用户连接，防止同一个线程不停获取不同的连接导致资源浪费

2.threadlocal：可以存储保存并且识别某个线程的共享变量，类似于map

# 网络编程

* 类别
  * CS 客户端 + 服务器
  * BS 浏览器 + 服务器

* 三要素
  * IP（上网设备表示）
  * 端口号（应用在上网设备中表示）
  * 协议（数据传输规则）

## 协议

* TCP/IP
  * 应用层
  * 传输层
  * 网络层
  * 物理链路层

* UTP
  * 用户数据报协议
  * 面向无连接通信协议（能收就收，收不到就扔）
  * 优点：
    * 速度快
  * 缺点：
    * 数据有大小限制（最多64kb）
    * 数据不安全，易丢失
* TCP
  * 面向连接（连接后才传输，确保收到
  * 特点相反；


## 传输数据

### UTP
* DatagramSocket (运输)
* DatagramPacket (打包数据)
* 发送

* 传输模式
  * 单播
  * 组播（224.0.0.1）
  * 广播（255.255.255）

### TCP

* ServerSocket -><font color = "yellow">用来确认服务端，保证连接</font>
  * 服务端关闭程序才会结束；
  * 多线程：每接收一个客户都可以调用线程池
* Socket -> <font color = "yellow">类似于桥梁，用于获取流来相互传递信息</font>
  * <font color = "white">通过不断的获取连接可以不停的向服务端输出文件，消息</font>


# 动态代理

* 定义：在不修改原有代码的情况下，在代码中增加额外的功能；
* 代理：做完额外功能后，调用被代理对象的方法的；
  * 需要代理实现创建的接口类（接口中记录需要代理的方法）
  * 创建代理对象：实现同一个接口；

* <font color = "Orange">注意点：
  * 只能代理类实现的接口方法
  * 接口不能是Final类；（相当于没有代理）
  * 不能在代理方法中继续代理；</font>

```java
        public static Methon createProxy(Student stu){

                //参数1：用于指定用哪个加载器，去加载生成代理
                //指定接口，这些接口用于指定代理内容
                //用代理生成，生成代理做什么的代码

                //创建代理对象方法
                Methon proxy = (Methon) Proxy.newProxyInstance(
                        DL.class.getClassLoader(),
                        new Class[] {Methon.class},
                        
                        //代理要运行的方法
                        new InvocationHandler() {
                            @Override
                            //参数，1.代理对象2.要运行的方法名称3.运行需要用到的参数
                            public Object invoke(Object proxy, Method method, Object[] args)throws Throwable {
                                if (method.getName().equals("sing")) {
                                    System.out.println("准备话筒" + "收钱");
                                }
                                else if (method.getName().equals("dance")) {
                                    System.out.println("准备舞台" + "收钱");
                                }
                                //调用对象的方法
                                method.invoke(stu, args);
                                return null;
                            };
                        });
                return proxy;
            }
```

# 图形化界面

* 界面设置样例
```java
    public class GameFrame extends JFrame {

        public GameFrame(int width, int height, String title) {
            initFrame(width, height, title);

            initJMenuBar();

            //设置是否可见
            this.setVisible(true);
        }

        private void initJMenuBar() {
            //创建菜单
            JMenuBar menuBar = new JMenuBar();

            //菜单上的功能
            JMenu functionMenu = new JMenu("功能");
            JMenu aboutMenu = new JMenu("关于我们");

            //选项下的条目对象
            JMenuItem replayItem = new JMenuItem("重新开始");
            JMenuItem reLoginItem = new JMenuItem("重新登录");
            JMenuItem closeItem = new JMenuItem("关闭游戏");

            JMenuItem aboutItem = new JMenuItem("???");

            //组合条目
            functionMenu.add(replayItem);
            functionMenu.add(reLoginItem);
            functionMenu.add(closeItem);

            aboutMenu.add(aboutItem);

            //添加到菜单
            menuBar.add(functionMenu);
            menuBar.add(aboutMenu);

            //添加到界面
            this.setJMenuBar(menuBar);
        }

        private void initFrame(int width, int height, String title) {
            //设置长宽
            this.setSize(width, height);
            //设置标题
            this.setTitle(title);
            //设置是否总是置顶
            this.setAlwaysOnTop(true);
            //设置界面居中
            this.setLocationRelativeTo(null);
            /*
            设置默认的关闭模式（点×关闭）
            0:关闭什么都不做(窗口也不会关闭)
            1:默认
            2:多个界面只有最后一个关闭才停止程序（所有界面都得是2）
            3:关闭界面程序结束
            */
            this.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
        }
    }
```
* 图片管理
  * ImageIcon -> 获取图片对象
  * JLabel -> 图片的管理容器
  * 获取窗口getContentPane
  * 添加到窗口中
  * 图片坐标 （以左上角为原点构建的坐标系）

* 事件


# 项目开发

* 继承：可以使得创建的类拥有java自带的属性； -> 使得可以提取统一属性（只在要用时创建对应的需求）

## 设计思想

### SOLID设计原则

* 单一职责原则
* 开放封闭原则
* 里氏封闭原则
* 接口隔离原则
* 依赖倒置原则

#### 单一职责原则

定义:
* 每个类只有一个引起变化的原因 -> 及一个类只承担一个职责:
* 多职责的弊端:
  * 当一个类承担多个不相干的功能时，一个功能损坏导致所有功能不能使用
  * 多个功能会增加代码的复杂度和可读性！！！
  * 多个功能会降低代码的可拓展性；

职责：
* 某一个事件需要内部数据改变 -> 处理某一类/某个事件
* 多个职责：多个事件都需要调用这个职责管理的功能；

#### <font color = "Orange">开放封闭原则</font>

定义：
* 软件实体应该对扩展开放对修改封闭:
* 在更改原有代码的情况下，增加方法来实现功能的拓展；

* 扩展的功能由新的类承担，在旧类中只需要实现接口就行；

```java
    //不遵循原则
    public class PaymentProcessor{
        public void processPayment(String type, double amount){ //判断支付方式
            if ("信用卡".equals(type)){
                ...
            }
            else if ("支付宝".equals){
                ...
            }

            //如果要增加支付方式的话只能增加if语句修改代码 -> 违反原则
        }
    }



    //遵循原则
    public interface IPaymentMethod{
        void processPayment(double amount);
    }

    public class PaymentProcessor{
        public void processPayment(IPaymentMethod paymentMethod,double amount){
            paymentMethod.processPayment(amount);
        }
    }

    //只需要增加新的类实现IPaymentMethod接口
    public class CreditCardPayment implements IPaymentMethod{
        @Override
        publrc void processPayment(double amount){
            ...
        }
    }

    public class PayPalPayment implements IPaymentMethod{
        @Override
        publrc void processPayment(double amount){
            ...
        }
    }
```
####  里氏封闭原则

定义:
* 子类因该能够替代它们的基类，且不改变程序的运行结果
* 目的：子类和父类代码一致;
* 表现：子类要继承和实现父类的关键功能


#### 接口隔离原则

定义
* 一个类不应该被迫依赖于他不需要的接口


#### 依赖倒置原则

定义
* 高层模块都不依赖低层模块，它们都应该依赖于抽象
* 抽象不应依赖于细节，而细节应该依赖于抽象

解释：
* 多态的实现
* 不因为一小部分代码的损坏二修改整个代码；

### 三层架构

* 单一原则在大方向上的应用

UI(表现层): 主要是指与用户交互的界面。用于接收用户输入的数据和显示处理后用户需要的数据。

BLL:(业务逻辑层): UI层和DAL层之间的桥梁。实现业务逻辑。业务逻辑具体包含：验证、计算、业务规则等等。

DAL:(数据访问层): 与数据库打交道。主要实现对数据的增、删、改、查。将存储在数据库中的数据提交给业务层，同时将业务层处理的数据保存到数据库。（当然这些操作都是基于UI层的。用户的需求反映给界面（UI），UI反映给BLL，BLL反映给DAL，DAL进行数据的操作，操作后再一一返回，直到将用户所需数据反馈给用户）

* UI 接受输入和输出工作
* BLL 接受数据实现功能/逻辑
  * 不存储任何数据
  * 只访问方法
* DAL 接受BLL中处理的信息，修改

```mermaid
flowchart TD
    A[UI] --> B[BLL];
    B --> C[DAL];
    C --> B;
    B --> A; 
```

### MVC

* 专门解决页码中数据的处理问题；
* 将页面和数据分开
* 将数据和业务代码分开

* 功能分类
  * 查询
  * 修改

* 软件页面分类
  * 呈现数据
    * 变动就直接更新
  * 接受数据

* 路由器：通过路由器将数据和业务代码连接起来
  * 数据要更新数据 -> 在路由其中请求 -> 路由器去业务中调用;

flowchart TD
    A[V视图] --> B[C控制器];
    B --> C[M模型];


# JDBC（数据库操作语句）

***1.Connection (连接管理)***
数据库连接是操作的起点，负责建立物理通道和事务管理。

  * 连接字符串 (URL): jdbc:mysql://IP地址:端口/数据库名?参数

    * 常用参数：useSSL=false (关闭安全连接), serverTimezone=UTC (设置时区)。

  * 事务管理:

    * ```setAutoCommit(false)```: 开启手动事务（转账等原子操作必用）。

    * ```commit()```: 提交事务。

    * ```rollback()```: 发生异常时回滚。

  * 资源关闭: 它是重量级资源，必须在使用完毕后关闭。


***2.Statement 家族 (执行对象)***
  |特性| Statement|PreparedStatement (推荐)|
  |:--|:--|:--|
  |原理|拼接 SQL 字符串，直接发送。|SQL 预编译，通过 ? 占位。|
  |安全性|存在 SQL 注入风险。|防止 SQL 注入（自动处理特殊字符）。|
  |效率|低（每次都要编译）。|高（预编译一次，多次执行）。|
  |用法|execute(sql)|setXxx(index, value) |赋值后执行。|


***3.ResultSet (结果集处理)***
保存查询返回的数据行。
* 遍历方式: 使用 ```while(rs.next())。next()``` 方法既判断是否有下一行，又会将指针向下移动。
* 获取数据:通过列名：```rs.getString("username")```（推荐，可读性好）。通过索引：rs.getInt(1)。

***4.实体类 (POJO / Entity)*** 
ORM (对象关系映射) 的初步思想。
* 映射规则:
  * 类 ```$\rightarrow$ 表
  * 属性 $\rightarrow$ 字段
  * 实例对象 $\rightarrow$ 一行记录
  * 集合 (List<Entity>) $\rightarrow$ 多行记录


> [!important]
> 大幅提升海量数据插入效率。
> 配置: URL 必须加上 ?rewriteBatchedStatements=true。  
> 流程:
> conn.setAutoCommit(false) (建议关闭自动提交以提升性能)。  
> pstmt.addBatch()：将 SQL 加入缓冲区。  
> pstmt.executeBatch()：一次性发送给数据库。  
> conn.commit()：手动提交。  


* 连接池
  ```java
  解决资源频繁创建和销毁的问题
  Druid(常用，使用广泛)
  Hikari(速度快，简单，可靠)
  ```
  - druid
  ```java
  软编码
  1.创建资源配置文件 
  @Test
    public void testResourcesDruid() throws Exception {
        //储存配置
        Properties props = new Properties();

        //读取配置文件的流
        InputStream inputStream = DruidResourcesTest.class.getClassLoader().getResourceAsStream("db.properties");

        //读取配置
        props.load(inputStream);

        //获取连接池（参数：配置文件）
        DataSource ds = DruidDataSourceFactory.createDataSource(props);

        Connection conn = ds.getConnection();
        System.out.println(conn);

        conn.close();


        #配置信息
        driverClassName = com.mysql.cj.jdbc.Driver
        url = jdbc:mysql:///zenless_zone_zero
        username = root
        password = 123456

        initialSize = 10
        maxActive = 20
    }
  ```
  - HikariCP
  ```java
  @Test
    public void testResourceHikari()throws Exception {
        Properties props = new Properties();

        InputStream input = HikariResourceTest.class.getResourceAsStream("/Hikari.properties");
        props.load(input);

        //创建Hickaril配置文件
        HikariConfig config = new HikariConfig(props);

        //基于配置文件构建连接池
        HikariDataSource ds = new HikariDataSource(config);

        Connection conn = ds.getConnection();
        System.out.println(conn);

        conn.close();
    }

    #配置文件
    driverClassName = com.mysql.cj.jdbc.Driver
    jdbcUrl = jdbc:mysql:///zenless_zone_zero
    username = root
    password = 123456

    minimumIdle = 10
    maximumPoolSize = 20
  ```

* 数据连接统一管理
  ```fow
  public class JDBCUtil {
    //连接池
    private static DataSource dataSource;   //多态，只需要更变创建的连接池，DataSource可以随时切换不同类型的数据库

    //线程匹配池
    private static ThreadLocal<Connection> threadLocal = new ThreadLocal<>();

    static  {
        try {
            Properties props = new Properties();
            InputStream input = HikariResourceTest.class.getResourceAsStream("/Hikari.properties");
            props.load(input);

            //创建Hickaril配置文件
            HikariConfig config = new HikariConfig(props);

            //基于配置文件构建连接池
            dataSource = new HikariDataSource(config);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public static Connection getConnection() throws SQLException {
        Connection connection = threadLocal.get();
        if (connection == null) {
            connection = dataSource.getConnection();    //获取连接
            threadLocal.set(connection);        //添加到管理中
        }
        return connection;
    }

    public static void Close() throws SQLException {
        Connection connection = threadLocal.get();
        if (connection != null) {   //如果不为空说明已经创建过需要关闭
            threadLocal.remove();
            connection.close();
        }
    }
    ```

# java注解

特点：
- 不是程序本身，可以对程序做出解释
- 可以被其他程序读取（比如编译器）


元注解（用来描绘注解）
- @Target：标注注解使用范围
- @Retention：表示什么级别保存该注解信息，描绘生命周期
- @Document：说明该注解被包含在javadoc中
- @Inherited：子类可以继承父类中的该注解
  ```java
  public class Test {
    @MyAnnotation
    public void hh(){}
    }
    //自定义注解
    /*
    元注解
    1.
    2.
    3.
    自己定义的注解
    */
    @Target(value = ElementType.METHOD)//在方法有效
    @interface  MyAnnotation{
        //参数类型 + 参数名（）
        String name() default ""; //default默认值
        int age() default 0;
    }
    ```

# java反射

特点：动态编写程序（软编码）

```
类创建的逆推

正常情况下对于已经知晓的数据 -> 代码设置属性 -> 封装到类Class中 -> 通过new创建

反射：不知晓数据，数据是在程序运行中出现的
先获取实例new -> 获取实例名称 -> 把属性封装进去
```

* 定义；反射允许对成员变量，成员方法，构造方法进行编程访问；
* 作用：
  * 获取构造方法的信息，参数
  * 可以在代码多的时候，获取了解方法信息；

* 可获取class对象
  * Constructor 构造方法
  * Parameter 构造方法参数
  * Method 成员方法

方法
```java
1.classforName(String name)     返回指定类名对象
2.newInstance()     调用缺省函数构造，返回class
3.getName   返回Class对象的所有实体
4.getSuperClass     返回当前Class对线的父类对像
5.getinterfaces()   获取class对象接口
6.getClassLoader    返回该类的加载器
7.getMothed（string name，Class... T）  返回Methon对象，对象形参类型为param Type
8.Field[] getDeclearedFields()      返回Field对象的一个数组
```


# web后端

## socket

* 要创建一个 Socket 连接，你需要指定服务器的地址和端口：
  ```java
    try {
        // 连接到 localhost 的 8080 端口
        Socket socket = new Socket("localhost", 8080);
    
        // 使用 socket 进行通信...
    
        // 关闭连接
        socket.close();
    } catch (IOException e) {
        e.printStackTrace();
    }
    ```

|方法|描述|
|:--|:--|
|getInputStream()|	获取输入流，用于接收数据|
|getOutputStream()|	获取输出流，用于发送数据|
|close()|	关闭 Socket 连接|
|isConnected()|	检查连接是否已建立|
|setSoTimeout(int timeout)|	设置超时时间（毫秒）|

* 多线程
  - socket循环内无线接收
  - 接收到连接抛出给新的线程解决
  - 线程中定义统一的方法


一、基础网络与通信模型
  * TCP/IP 协议栈
  * TCP vs UDP（Web 用 TCP）
  * 三次握手 / 四次挥手
  * 端口（Port）的作用（如 80、443、8080）
  * Socket 编程基础
    * ServerSocket：监听连接
    * Socket：代表一个客户端连接
    * InputStream / OutputStream：读写数据
  * 阻塞 I/O（BIO）模型
    * accept()、read()、write() 默认都是阻塞的
    * “每连接一线程”（Thread-per-Connection）模型
    * 线程创建开销与 C10K 问题
  * 并发处理策略
    * 多线程（new Thread()）
    * 线程池（ExecutorService）→ 控制资源
    * 异步 I/O（NIO）→ Reactor 模式（进阶）

二、***HTTP 协议核心***（处理请求的关键）
  * HTTP 请求/响应结构
    * 请求行：GET /index.html HTTP/1.1
    * 响应行：HTTP/1.1 200 OK
    * Header 字段（Host, Content-Type, Content-Length 等）
    * 空行 \r\n\r\n 分隔 Header 和 Body
    * Body（可选）
  * 常见 HTTP 方法
    * GET（获取资源）
    * POST（提交数据）
    * PUT / DELETE（RESTful）
    * HEAD（只获取 Header）
  * 状态码分类
    * 2xx 成功（200 OK）
    * 3xx 重定向（301, 302）
    * 4xx 客户端错误（400, 404, 405）
    * 5xx 服务器错误（500, 502）
  * Header 关键字段
    * Content-Type：声明 body 类型（text/html, application/json）
    * Content-Length：body 字节数（必须准确！）
    * Connection: keep-alive / close
    * Host（HTTP/1.1 必须）
  * URL 解析
    * 路径（Path）：/api/user
    * 查询参数（Query）：?id=123&name=Tom
    * 解码 %20 → 空格（URLDecoder）

三、Web 服务器核心功能实现
  * 请求解析器（Request Parser）
    * 读取并解析请求行
    * 解析 Headers（按行读，直到空行）
    * 读取 Body（根据 Content-Length 或 Chunked）
  * 路由（Routing）
    * 根据路径分发请求（if-else / Map / 注解）
    * 支持动态路径（如 /user/{id}）
  * 响应生成器（Response Builder）
    * 构造合法 HTTP 响应
    * 自动设置 Content-Length
    * 支持不同 Content-Type
  * 静态文件服务
    * 读取本地文件（如 public/index.html）
    * 根据扩展名设置 Content-Type（.css → text/css）
    * 处理 404（文件不存在）
  * 动态内容生成
    * 模板渲染（简单字符串替换）
    * 返回 JSON（{"time": "2025-12-27"}）
    * 时间、数据库查询等

四、健壮性与安全
  * 异常处理
    * 捕获 IOException 防止线程崩溃
    * 资源释放（try-with-resources 关闭 Socket）
  * 输入校验
    * 路径遍历攻击防护（如 ../etc/passwd）
    * 限制请求大小（防 OOM）
  * 编码一致性
    * 全程使用 UTF-8
    * 避免系统默认编码导致乱码
  * 超时控制
    * Socket.setSoTimeout() 防止 hang 住


## web项目

idea配置web项目
* 配置web架构
  * 在项目文件下-点击右上角的搜素(搜add framework support)
  * 添加web项目
* 配置Tomcat
  * 在运行配置中添加本地Tomcat
  * 设置虚拟机配置 -Dfile.endcoding=UTF-8 解决编码问题
  * 部署中添加项目文件夹
  > [!waring]
  > 项目文件是web文件目录，不是你自己创建命名的项目目录

### servlet

* init（核心）
  * 每一个用户请求都会产生一个新的线程
* service
  *  service() 方法由容器调用,无需操作
* doGet() 
  * 接收浏览器地址栏请求
* doPost()
  * 接收浏览器html请求
  > [!Tip]
  > ```public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {doGet(request, response); }```
  > ```doPost```可以直接通过```doGet```的嵌套进行相同的处理
* destroy()
  * 回收资源，确保数据安全
* @WebServlet("网页路径")
  * 通过注解省略了繁琐的web.html编辑
  * ***注解的路径对应可以一对一，也可以一对多，即一个类处理一类路径***
* form表单属性
  * acton - 定义表单提交到对应的路径处理
  * method - 定义表单的提交方式（常用：GET/POST）
  * target 属性用于指定在何处显示表单提交后服务器返回的响应。
    |值	|描述|
    |:--|:--|
    |_self	|默认值。在同一个框架或窗口中显示响应（覆盖当前页面）|
    |_blank	|在新窗口或新标签页中打开响应|
    |_parent|	在父框架集中显示响应（如果当前框架有父框架）|
    |_top	|在整个窗口中显示响应（会跳出所有框架）|
    |framename|	在指定的 `<iframe>` 或框架中显示响应（需要指定框架的 name 属性）|


#### 方法

```request.getContentType() ```是 HttpServletRequest 接口中的一个方法，用于获取请求头中的 Content-Type 字段值。
* application/x-www-form-urlencoded：HTML 表单默认的提交类型
* multipart/form-data：文件上传时使用的类型
* application/json：JSON 数据
* text/xml 或 application/xml：XML 数据

```request.getParameter("键") ```是 HttpServletRequest 接口中的一个方法，用于获取 HTTP 请求中的参数值。

#### 表头

> [!important]
> 请求和响应头是前端html，css，js和后端java（其他语言）的交流桥梁

##### HTTP请求表头

***当浏览器请求网页时，它会向 Web 服务器发送特定信息，这些信息不能被直接读取，因为这些信息是作为 HTTP 请求的头的一部分进行传输的。***


|头信息|	描述|
|:--|:--|
|Accept	|这个头信息指定浏览器或其他客户端可以处理的 MIME 类型。值 image/png 或 image/jpeg 是最常见的两种可能值。|
|Accept-Charset|	这个头信息指定浏览器可以用来显示信息的字符集。例如 ISO-8859-1。|
|Accept-Encoding|	这个头信息指定浏览器知道如何处理的编码类型。值 gzip 或 compress 是最常见的两种可能值。|
|Accept-Language|	这个头信息指定客户端的首选语言，在这种情况下，Servlet 会产生多种语言的结果。例如，en、en-us、ru 等。|
|Authorization|	这个头信息用于客户端在访问受密码保护的网页时识别自己的身份。|
|Connection	|这个头信息指示客户端是否可以处理持久 HTTP 连接。持久连接允许客户端或其他浏览器通过单个请求来检索多个文件。值 Keep-Alive 意味着使用了持续连接。|
|Content-Length|	这个头信息只适用于 POST 请求，并给出 POST 数据的大小（以字节为单位）。|
|Cookie	|这个头信息把之前发送到浏览器的 cookies 返回到服务器。|
|Host	|这个头信息指定原始的 URL 中的主机和端口。|
|If-Modified-Since	|这个头信息表示只有当页面在指定的日期后已更改时，客户端想要的页面。如果没有新的结果可以使用，服务器会发送一个 304 代码，表示 Not Modified 头信息。|
|If-Unmodified-Since|	这个头信息是 If-Modified-Since 的对立面，它指定只有当文档早于指定日期时，操作才会成功。|
|Referer|	这个头信息指示所指向的 Web 页的 URL。例如，如果您在网页 1，点击一个链接到网页 2，当浏览器请求网页 2 时，网页 1 的 URL 就会包含在 Referer 头信息中。|
|User-Agent|	这个头信息识别发出请求的浏览器或其他客户端，并可以向不同类型的浏览器返回不同的内容。|

**方法**:```https://www.runoob.com/servlet/servlet-client-request.html```

* 获取读取请求头
  ```java
  // 获取单个请求头
  String userAgent = request.getHeader("User-Agent");
  String acceptLanguage = request.getHeader("Accept-Language");

  // 获取所有请求头
  java.util.Enumeration<String> headerNames = request.getHeaderNames();

  // 获取指定名称的所有值（如多个Cookie）
  java.util.Enumeration<String> headers = request.getHeaders("Accept-Encoding");
  ```



##### HTTP响应头

|头信息|	描述|
|:--|:--|
|Allow	|这个头信息指定服务器支持的请求方法（GET、POST 等）。|
|Cache-Control|	这个头信息指定响应文档在何种情况下可以安全地缓存。可能的值有：public、private 或 no-cache 等。Public 意味着文档是可缓存，Private 意味着文档是单个用户私用文档，且只能存储在私有（非共享）缓存中，no-cache 意味着文档不应被缓存。|
|Connection	|这个头信息指示浏览器是否使用持久 HTTP 连接。值 close 指示浏览器不使用持久 HTTP 连接，值 keep-alive 意味着使用持久连接。|
|Content-Disposition|	这个头信息可以让您请求浏览器要求用户以给定名称的文件把响应保存到磁盘。|
|Content-Encoding	|在传输过程中，这个头信息指定页面的编码方式。|
|Content-Language	|这个头信息表示文档编写所使用的语言。例如，en、en-us、ru 等。|
|Content-Length	|这个头信息指示响应中的字节数。只有当浏览器使用持久（keep-alive）HTTP 连接时才需要这些信息。|
|Content-Type	|这个头信息提供了响应文档的 MIME（Multipurpose Internet Mail Extension）类型。|
|Expires	|这个头信息指定内容过期的时间，在这之后内容不再被缓存。|
|Last-Modified|	这个头信息指示文档的最后修改时间。然后，客户端可以缓存文件，并在以后的请求中通过 If-Modified-Since 请求头信息提供一个日期。|
|Location	|这个头信息应被包含在所有的带有状态码的响应中。在 300s 内，这会通知浏览器文档的地址。浏览器会自动重新连接到这个位置，并获取新的文档。|
|Refresh|	这个头信息指定浏览器应该如何尽快请求更新的页面。您可以指定页面刷新的秒数。|
|Retry-After|	这个头信息可以与 503（Service Unavailable 服务不可用）响应配合使用，这会告诉客户端多久就可以重复它的请求。|
|Set-Cookie	|这个头信息指定一个与页面关联的 cookie。|

设置响应表头
  ```java
  // 设置响应头
  response.setHeader("Content-Type", "text/html;charset=UTF-8");
  response.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  response.setHeader("Pragma", "no-cache");
  response.setDateHeader("Expires", 0);

  // 添加多个相同名称的响应头
  response.addHeader("Set-Cookie", "user=John");
  response.addHeader("Set-Cookie", "session=abc123");

  // 设置内容类型和编码（常用简写）
  response.setContentType("text/html;charset=UTF-8");
  ```

#### 状态码

熟悉的404，400等用于标记请求端接收数据的程度和状态

状态码：```https://www.runoob.com/servlet/servlet-http-status-codes.html```

|方法|描述|
|:--|:--|
|public void setStatus ( int statusCode )| 该方法设置一个任意的状态码。如果响应包含了一个特殊的状态码和文档，确保在使用 PrintWriter 实际返回任何内容之前调用 setStatus。|
|public void sendRedirect(String url) |该方法生成一个 302 响应，连同一个带有新文档 URL 的 Location 头。|
|public void sendError(int code, String message) |该方法发送一个状态码（通常为 404），连同一个在 HTML 文档内部自动格式化并发送到客户端的短消息。|

#### 过滤器
***`过滤器是一个实现了 javax.servlet.Filter 接口的 Java 类。动态拦截请求和响应***

* 身份验证过滤器（Authentication Filters）。
* 数据压缩过滤器（Data compression Filters）。
* 加密过滤器（Encryption Filters）。
* 触发资源访问事件过滤器。
* 图像转换过滤器（Image Conversion Filters）。
* 日志记录和审核过滤器（Logging and Auditing Filters）。
* MIME-TYPE 链过滤器（MIME-TYPE Chain Filters）。
* 标记化过滤器（Tokenizing Filters）。
* XSL/T 过滤器（XSL/T Filters），转换 XML 内容。

主要方法：
* ```public void doFilter (ServletRequest, ServletResponse, FilterChain)```完成实际的拦截操作
  - 分别是请求对象，响应对象，过滤器链
* init（FilterConfig congig） 初始化配置信息
* destory 销毁

> [!important]
> init()

***定义过滤器***
|注解属性 (@WebFilter)|	XML 对应标签|	功能描述|
|:--|:--|:--|
|filterName|	`<filter-name>`|	过滤器的逻辑名称（在一个应用中必须唯一）。|
|urlPatterns 或 value|	`<url-pattern>`|	指定过滤器要拦截的 URL 路径模式。|
|servletNames	|`<servlet-name>`|	指定过滤器要拦截的特定 Servlet 名称。|
|initParams	|`<init-param>`	|配置初始化参数，通过 WebInitParam 数组传递。|
|dispatcherTypes|	`<dispatcher>`	|指定过滤器的触发方式（请求、转发、包含、错误）。|
|asyncSupported	|`<async-supported>`|	是否支持异步操作（布尔值）。|
|description	|`<description>`|	过滤器的描述文本。|


> [!Tip]
> initParames可以脱离代码执行需要修改注解值就能修改过滤器行为  
> 比如我要维护web，我只需要设置一个维护属性，通过读取它的值来决定是否开放网页

> [!IMPORTANT]
> 获取过滤器属性一般保存在私有属性里

***过滤器处理***
* ```filterChain.doFilter```传递给下一个过滤器或目标资源
* **目的是匹配你的过滤器和请求、响应头**

#### listenner

*** 负责初始化资源防止在servlet中写静态代码块```

Web 容器（如 Tomcat）在运行 Web 应用时，会管理三大核心对象的生命周期：

  * ServletContext → 整个 Web 应用
  * HttpSession → 一次用户会话
  * ServletRequest → 单次 HTTP 请求
***每当这些对象被创建、销毁或属性改变时，容器就会自动检查是否有对应的 Listener 注册，如果有，就立即调用其方法。***

|用户/系统行为|	容器内部动作	|自动调用的 Listener 方法|
|:---|:---|:---|
|启动 Tomcat |并加载你的 Web 应用	创建 ServletContext 对象	|AppStartListener.contextInitialized()|
|用户第一次访问网站（如打开 login.jsp）|	创建 HttpSession 对象|	SessionCounter.sessionCreated()|
|用户关闭浏览器或 Session 超时|	销毁 HttpSession 对象	|SessionCounter.sessionDestroyed()|
|停止 Tomcat|	销毁 ServletContext 对象	|AppStartListener.contextDestroyed()|

#### 异常处理

标签定义
* ```<error-page>```包裹整个块
* ```<error-code>```返回的异常签名
* ```<location>```路径位置

***注解***
* ```@ControllerAdvice```捕获整个界面的遗产
  * ```@ExceptionHandler(RuntimeException.class)```系统异常时自动调用此注解下的方法
* @ResponseStatus(value = HttpStatus.NOT_FOUND, reason = "资源找不到了亲")直接定义异常返回的状态码

#### Cookie
|方法|描述|
|:--|:--|
|1 public void setDomain(String pattern)|该方法设置 cookie 适用的域，例如 runoob.com。|
|2	public String getDomain()|该方法获取 cookie 适用的域，例如 runoob.com。|
|3	public void setMaxAge(int expiry)|该方法设置 cookie 过期的时间（以秒为单位）。如果不这样设置，cookie 只会在当前 session 会话中持续有效。|
|4	public int getMaxAge()|该方法返回 cookie 的最大生存周期（以秒为单位），默认情况下，-1 表示 cookie 将持续下去，直到浏览器关闭。|
|5	public String getName()|该方法返回 cookie 的名称。名称在创建后不能改变。|
|6	public void setValue(String newValue)|该方法设置与 cookie 关联的值。|
|7	public String getValue()|该方法获取与 cookie 关联的值。|
|8	public void setPath(String uri)|该方法设置 cookie 适用的路径。如果您不指定路径，与当前页面相同目录下的（包括子目录下的）所有 URL 都会返回 cookie。|
|9	public String getPath()|该方法获取 cookie 适用的路径。|
|10	public void setSecure(boolean flag)|该方法设置布尔值，表示 cookie 是否应该只在加密的（即 SSL）连接上发送。|
|11	public void setComment(String purpose)|设置cookie的注释。该注释在浏览器向用户呈现 cookie 时非常有用。|
|12	public String getComment()|获取 cookie 的注释，如果 cookie 没有注释则返回 null。|


#### Session跟踪

HttpSession类实现
* 在用户请求发来时开辟一个新空间并且给与一个独立字段```request.getSession```

|方法|描述|
|:--|:--|
|1	public Object getAttribute(String name)|该方法返回在该 session 会话中具有指定名称的对象，如果没有指定名称的对象，则返回 null。|
|2	public Enumeration getAttributeNames()|该方法返回 String 对象的枚举，String 对象包含所有绑定到该 session 会话的对象的名称。|
|3	public long getCreationTime()|该方法返回该 session 会话被创建的时间，自格林尼治标准时间 1970 年 1 月 1 日午夜算起，以毫秒为单位。|
|4	public String getId()|该方法返回一个包含分配给该 session 会话的唯一标识符的字符串。|
|5	public long getLastAccessedTime()|该方法返回客户端最后一次发送与该 session 会话相关的请求的时间自格林尼治标准时间 1970 年 1 月 1 日午夜算|起，以毫秒为单位。|
|6	public int getMaxInactiveInterval()|该方法返回 Servlet 容器在客户端访问时保持 session 会话打开的最大时间间隔，以秒为单位。|
|7	public void invalidate()|该方法指示该 session 会话无效，并解除绑定到它上面的任何对象。|
|8	public boolean isNew()|如果客户端还不知道该 session 会话，或者如果客户选择不参入该 session 会话，则该方法返回 true。|
|9	public void removeAttribute(String name)|该方法将从该 session 会话移除指定名称的对象。|
|10	public void setAttribute(String name, Object value)|该方法使用指定的名称绑定一个对象到该 session 会话。|
|11	public void setMaxInactiveInterval(int interval)|该方法在 Servlet 容器指示该 session 会话无效之前，指定客户端请求之间的时间，以秒为单位。|

#### 数据库访问

* 在doGet或doPost中用jdbc的语句处理

#### 文件传传

```javascript
<form method="post" action="/TomcatTest/UploadServlet" enctype="multipart/form-data">
    选择一个文件:
    <input type="file" name="uploadFile" />
    <br/><br/>
    <input type="submit" value="上传" />
</form>
```
* ```enctype``` 编码类型
  * multipart 说明编码有多个部分
  * form-data 说明是表单数据

* 已经杯spring boot 替代

#### 日期处理


* 处理javaUtil的Data类

|boolean after(Date date)|如果调用的 Date 对象中包含的日期在 date 指定的日期之后，则返回 true，否则返回 false。|
|:---|:---|
|boolean before(Date date)|如果调用的 Date 对象中包含的日期在 date 指定的日期之前，则返回 true，否则返回 false。|
|Object clone( )|重复调用 Date 对象。|
|int compareTo(Date date)|把调用对象的值与 date 的值进行比较。如果两个值是相等的，则返回 0。如果调用对象在 date 之前，则返回一个负值。如果调用对象在 date 之后，则返回一个正值。|
|int compareTo(Object obj)|如果 obj 是 Date 类，则操作等同于 compareTo(Date)。否则，它会抛出一个 ClassCastException。|
|boolean equals(Object date)|如果调用的 Date 对象中包含的时间和日期与 date 指定的相同，则返回 true，否则返回 false。|
|long getTime( )|返回 1970 年 1 月 1 日以来经过的毫秒数。|
|int hashCode( )|为调用对象返回哈希代码。|
|void setTime(long time)|设置 time 指定的时间和日期，这表示从 1970 年 1 月 1 日午夜以来经过的时间（以毫秒为单位）。|
|String toString( )|转换调用的 Date 对象为一个字符串，并返回结果。|

#### 网页转化和重定向

重定向方法
* ```response.sendRedirct("路径或注解")```

相对路径：response.sendRedirect("displaySuccess");

* 如果当前在 localhost:8080/app/login，它会跳到 localhost:8080/app/displaySuccess。

绝对路径（推荐）：response.sendRedirect(request.getContextPath() + "/displaySuccess");

* ```request.getContextPath() 会动态获取你的项目名称（如 /myweb），这样即使你改了项目名，代码也不会失效。```

***区别：***
|特性	|重定向 (Redirect)|	转发 (Forward)|
|:---|:---|:---|
|浏览器地址栏|	会变（显示新地址）|	不变（显示原地址）|
|请求次数	|2 次请求	|1 次请求|
|数据共享|	丢失原 request，需用 Session|	共享原 request 数据|
|跳转位置	|可以跳转到任意网站 (如百度)	|只能跳转到本站内部资源|
|执行位置	|客户端（浏览器）行为|	服务器内部行为|

#### 自动刷新
```public void setIntHeader(String header, int headerValue)```