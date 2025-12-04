# 实用技巧

元素水平垂直居中：
  * 1.伸缩盒子自动边框调整
      ```css
      style {
        .outer {
          display:flex
        }
        .inner {
          margin:auto
        }
      }
      ```


# HTML
<delails>
<font coler = 'yellow'>标签</font>

- <>
- '括号中的语句'

基本架构语句
- html 包含整个页面
- head 包含网页的元数据，如标题、字符集、样式表等
- title 定义网页的标题，显示在浏览器标签上(一般包含在head中)
- body 网页主体部分
- !--(内容)-- 注释

## 网页基本设置

* <font color = 'lightyellow'>标签关系</font>
  - 父子关系
  - 兄弟关系

* <font color = 'lightyellow'>标签属性</font>
  - 标签属性 （名 + 值）
  - 在标签框中《marquee + 属性》
  - 分类：通用标签/特有;

* 文档声明
  ```flow
  <!DOCTYPE html> 版本声明
  ```
* 编码
  ```flow
  <meta charset="">
  ```

* 语言设置
  ```flow
  属性添加
  <html lang = "（语言）">
  ```


## 标签

* <foont color = 'orange'>语义化标签</font>
  - 可读性高
  - 机械会通过标签来反馈内容

* 性质
  ```flow
  1.块级元素 （独占一行）
  2.行内元素 （只占一行中的一小块，是行的一部分）
  ```
* 排版标签
    ```flow
    1.等级标签
    - h1 ~ h6 (等级递减)

    2.段落标签
    - p 段落标签（段落和段落之间自动空行）
      （1）不能包含等级标签
      （2）不能嵌套自己
    - div 段落管理标签（布局使用）
    3.常用标签
    - br 换行
    - hr 添加水平线
    - pre 按原文显示
    ```

* 标记符
  - em 重要的内容
  - strong 非常重要的内容
  - span 没有语义，包裹短语的包装袋

* 图片标签
  ```flow
  img src = with + hight + "图片的URL地址  + alt = “”"
  1.搜索引擎可以通过alt确定图片内容

  2.相对路径
  （1）../上一级
  （2）./当前文件

  3.绝对路径
   (本地绝对路径)：从盘符出发
   (网络绝对路径)  

  4.图片格式

   jpg：基本
   png: 动态，高级
   bmp：画质极高-占用极大
   gif：简单透明，动态图
  ```

* 超链接
  ```fow
  1.网页
  <a href = 地址 + target = 查看网页方式（_self/blank）>文本</a>
  2.本地文件
  修改href地址为本地
  ```
  - 超链接跳转锚点（类似于标记）
  ```flow
  实现页面位置跳转
  <a href = "#名称"></a>
  <a name = "html"></a>

  ！特殊
  <a href = "#"></a> 回到顶部
  <a href = ""></a> 刷新页面
  <a href = "javascript:js脚本;"></a> 刷新页面
  <a herf = "特定关键词：（）"></a> 跳转指定应用
  ```
## 列表

* 有序列表```<ol>```
* 无序列表```<ul>```
* 自定义列表
  ```
  <dl>
    <dt>头
      <dd>解释头
  ```
* 列表单元```只要包含在列表中用<li>包裹（除了自定义）```

## 表格

* 格式
  ```flow
  <table>
    <cpation>标题
    <thead>表格头部（列）th 列
    <tbody>主体   <tr> 行 <td>元素
    <tfoot>脚注
  </table>
  ```

* 属性
  ```flow
  # table
  1.broder =
  2.width =
  3.height = 
  4.cellspacing = (间隔)

  # thead
  1.align = "right/left/center" OR valign = "botton/midle/top"


  #跨行和跨列
  colspan = "" 跨列 + 列数
  rowspan = "" 跨行 + 行数
  ```

## 表单

实现用户和网站的交互界面

```flow
<form action = "交互行为" target = "怎么打开">
  <input type = "test" name = "网站支持的类型"> 输入框 类型是文本
  <button>搜索</button>
</from>
```

* form 包裹所有块

* 常用控件
  - input
    ```flow
    1.type
      - text 文本
      - password 密码
    2.name 划分组别，名称相同会在一组
    3.value 默认值
    4.radio 单选项
    5.checkbox 复选框
    6.hidden 隐藏域 - 作者提交表单时携带的一些默认数据
    7.submit 提交（不写name，类似于一个button）
    8.reset 重置
    9.button 普通按钮
    10.diable 禁止使用
    11.id 组件连接
    ```

  - button
    ```flow
    1.submit
    2.reset 重置
    3.button 普通按钮
    ```
  - textarea
    ```flow
    1.col 列
    2.row 行
    ```
  - select （下拉框）
    ```flow
    <select>
      <option value = ""> 选项内容</option>
      .
      .
      .
    </select>

    有value会取value
    ```
  - lable 标签
    ```flow
    1. for = "id" 连接组件
    ```

  - fieldset和legend (分组)
    ```flow
    <fiedset>
      <legrnd>
    </fiedset>
    ```

## 框架结构

用途：嵌入网页
iframe 属性
* scr

## 字符实体

* &（字符名称）
  - 空格 &nbsp
  - 小于号 &lt
  - 大于号 &gt
  ....

## 全局属性 class
* 用途
  - 分类

## meta 元信息

* 编码 charset = ""
* 兼容 + 版本 http-equiv = "" content = ""
* 移动设备 name = "viewport" content = ""
* 配置网页关键字 name = "description"
* 针对搜索引擎爬虫 name = “robots” content =""
</details>

# h5

## 新增布局标签

| 标签名    | 语义                                       | 单/双标签 |
|-----------|--------------------------------------------|-----------|
| header    | 整个页面，或部分区域的头部                 | 双        |
| footer    | 整个页面，或部分区域的底部                 | 双        |
| nav       | 导航                                       | 双        |
| article   | 文章、帖子、杂志、新闻、博客、评论等       | 双        |
| section   | 页面中的某段文字，或文章中的某段文字（里面文字通常里面会包含标题） | 双        |
| aside     | 侧边栏                                     | 双        |
| main      | 文档的主要内容（WHATWG 没有语义，IE 不支持），几乎不用 | 双        |
| hgroup    | 包裹连续的标题，如文章主标题、副标题的组合（W3C 将其删除） | 双        |


## 2.新增状态标签

2.1 meter 标签

- **语义**：定义已知范围内的标量测量。也被称为 **gauge**（尺度），双标签，例如：**电量、磁盘用量等**。
- **常用属性**如下：

| 属性       | 值   | 描述       |
|------------|------|------------|
| **high**   | 数值 | 规定高值   |
| **low**    | 数值 | 规定低值   |
| **max**    | 数值 | 规定最大值 |
| **min**    | 数值 | 规定最小值 |
| **optimum**| 数值 | 规定最优值 |
| **value**  | 数值 | 规定当前值 |

2.2 **progress** 标签

- **语义**：显示某个任务完成的进度的指示器，一般用于表示**进度条**，双标签，例如：**工作完成进度等**。
- **常用属性**如下：

| 属性      | 值   | 描述         |
|-----------|------|--------------|
| **max**   | 数值 | 规定目标值。 |
| **value** | 数值 | 规定当前值。 |

## 3. 新增列表标签

| 标签名    | 语义    | 单/双标签 |
|---|---|---|
| **datalist** | 用于搜索框的关键字提示 | 双 |
| **details** | 用于展示问题和答案，或对专有名词进行解释 | 双 |
| **summary** | 写在 details 的里面，用于指定问题或专有名词 | 双 |

```html
<!-- 拥有可选项 -->
<input type="text" list="mydata"> 
<datalist id="mydata">
    <option value="周名而">周名而</option>
    <option value="周杰伦">周杰伦</option>
    <option value="温克伦">温克伦</option>
    <option value="马冬梅">马冬梅</option>
</datalist>

<!-- 解释内容 -->
<details>
    <summary>如何走上人生巅峰？</summary>
    <p>一步一步走哦</p>
</details>

```


## 4. 新增文本标签

4.1 文本注音

| 标签名    | 语义    | 单/双标签 |
|---|---|---|
| **ruby** | 包裹需要注音的文字 | 双 |
| **rt** | 写注音，rt 标签写在 ruby 的里面 | 双 |

```html
<ruby>
  魑魅魍魉
  <rt>chī mèi wǎng liǎng</rt>
</ruby>
```
## 三、新增表单功能

1. 表单控件新增属性

| 属性名 | 功能 |
|---|---|
| **placeholder** | 提示文字（注意：不是默认值，value是默认值），适用于文字输入类的表单控件。 |
| **required** | 表示该输入项必须使用，适用于除按钮外其他表单控件。 |
| **autofocus** | 自动获取焦点，适用于所有表单控件。 |
| **autocomplete** | 自动完成，可以设置为on或off，适用于文字输入类的表单控件。 |
| **pattern** | 填写正则表达式，适用于文本输入类表单控件。<br>注意：密码输入框、多行输入框不可用，且空的输入框不会验证，往往与required配合。 |

## 2. input 新增属性值

| 属性名 | 功能 |
|---|---|
| **`email`** | 邮箱类型的输入框，表单提交时会验证格式，输入为空则不验证格式。 |
| **`url`** | url 类型的输入框，表单提交时会验证格式，输入为空则不验证格式。 |
| **`number`** | 数字类型的输入框，表单提交时会验证格式，输入为空则不验证格式。 |
| **`search`** | 搜索类型的输入框，表单提交时不会验证格式。 |
| **`tel`** | 电话类型输入框，表单提交时不会验证格式，在移动端使用时，会唤起数字键盘。 |
| **`range`** | 范围选择框，默认值为 50，表单提交时不会验证格式。 |
| **`color`** | 颜色选择框，默认值为黑色，表单提交时不会验证格式。 |
| **`date`** | 日期选择框，默认值为空，表单提交时不会验证格式。 |
| **`month`** | 月份选择框，默认值为空，表单提交时不会验证格式。 |
| **`week`** | 周选择框，默认值为空，表单提交时不会验证格式。 |
| **`time`** | 时间选择框，默认值为空，表单提交时不会验证格式。 |
| **`datetime-local`** | 日期-时间选择框，默认值为空，表单提交时不会验证格式。 |

## 3. form 标签新增属性

| 属性名 | 功能 |
|---|---|
| **`novalidate`** | 如果给 form 标签设置了该属性，表单提交的时候不再进行验证。 |

## 4. 新增视频标签
**`<video>`** 标签用来定义视频，它是双标签。

| 属性 | 值 | 描述 |
|---|---|---|
| **`src`** | URL地址 | 视频地址 |
| **`width`** | 像素值 | 设置视频播放器的宽度 |
| **`height`** | 像素值 | 设置视频播放器的高度 |
| **`controls`** | - | 向用户显示视频控件（比如播放/暂停按钮） |
| **`muted`** | - | 视频静音 |
| **`autoplay`** | - | 视频自动播放 |
| **`loop`** | - | 循环播放 |
| **`poster`** | URL地址 | 视频封面 |
| **`preload`** | `auto` / `metadata` / `none` | 视频预加载，如果使用 autoplay，则忽略该属性。<br>• `none`：不预加载视频。<br>• `metadata`：仅预先获取视频的元数据（例如长度）。<br>• `auto`：下载整个视频文件，即使用户不希望使用它。 |

## 4. 音频标签

**`<audio>`** 标签用来定义音频，它是双标签。

| 属性 | 值 | 描述 |
|---|---|---|
| **`src`** | URL地址 | 音频地址 |
| **`controls`** | - | 向用户显示音频控件（比如播放/暂停按钮） |
| **`autoplay`** | - | 音频自动播放 |
| **`muted`** | - | 音频静音 |
| **`loop`** | - | 循环播放 |
| **`preload`** | `auto` / `metadata` / `none` | 音频预加载，如果使用 autoplay，则忽略该属性。<br>• `none`：不预加载音频。<br>• `metadata`：仅预先获取音频的元数据（例如长度）。<br>• `auto`：可以下载整个音频文件，即使用户不希望使用它。 |


# CSS 样式

<font color = "Orange">Mmdn web docs CSS标签网站</font>

特性
* 层叠性 （后的覆盖前的【权重相同】）
* 继承性  （继承祖先元素的某些样式，优先最近的）

## 选择器
内部样式格式
```flow
<style>
  选择器{
    申明块（属性）
  }
</style>
```

外部样式格式
* 需要一个专门的文件
  ```flow
  1.引入样式
  <link rel="stylesheet" href="文件地址">
  ```

* 选择器
  * 1.通配选择器  （*） 
  * 2.元素选择器  p,h1,h2... 
  * 3.类选择器    .class名
    ```flow
      class = "类名1 类名2 类名3" 空格分开
      具有所有类名的样式
    ```
  * 4.id选择器  #id名
  * 5.交集选择器 2~4无连接 and的关系    ！！！
  * 6.并集选择器 2~4无逗号连接 or的关系   ！！！
  * 7.后代选择器 （选中包裹的所有内容 空格）
  * 8.子代选择器 （专指下一代，跨代不行）
      ```flow
      (元素)>[] !!![]中是所有子元素中查询的总体条件
      
      div>p:first-child
      div元素中所有子元素第一个元素是p

      div p:first-child
      div所有后代的元素中 作为第一个儿子的p元素 可以包含在不同的组件中
      <div>
        <ul>
          <li>
            <p>被选中</p>
            <P>w</p>
          </li>
        </ul>
        <p>不被选中 不是div的第一个孩子</p>
        <div>
          <p>被选中子div中第一个且是p</p>
          <p>w</p>
        </div>
        <p>w</p>
      </div>
      ```
  * 9.兄弟选择器 +连接一个兄弟 （向下相邻的[一行]元素相同的，没有不变）~连接所有的
  * 10.属性选择器  [] 选中具有[]中的属性的元素
    ```flow 
      [（）^ = ""] 以~开头
      [（）$ = ""] 以~结尾
      [（）* = ""] 包含~
    ```
  * 12.伪类选择器（状态描述）
    ```flow
    1.动态伪类
      （元素）:link 没有访问过的
      :visited 访问过的
      :hover 鼠标悬浮状态的a元素
      :active 鼠标激活的
      :focus 焦点状态
    2.结构伪类
      :first-child 第一个儿子元素
      :last-child 最后一个儿子
      :nth-child(n) 第一个儿子
        {
          可以写公式
          -n + x 前x个
          2n  偶数
          2n-1 基数
        }
      :first-of-type 同类型第一个
      :last-of-type
      :nth-of-type()
      
      :only-child 选中没有兄弟的唯一元素
      :only-of-type 选中没有同类型兄弟的唯一元素

      :empty  选中没有内容的

    3.否定伪类
    :not()  

    4.UI伪类
    :checked  选中的勾选的框
    :disable  选中禁用的

    5.目标伪类（选中的是当前鼠标选中的目标对象）
    :target

    5.语言伪类
    :lang="语言"  选中语言是“”的

    6.伪元素选择器（元素中的特殊位置）
    ::first-leter 选中第一个字符
    ::first-line  选中第一行
    ::selection   选中被鼠标选中的文字
    ::placeholder 选中input中的提示文字
    ::before      选中第一个元素最开始的位置随后创建一个子元素
    ::after
    ```

优先级（根据a，b,c的数量比较，大的在前）
* a：id选择器
* b：类，伪类，属性
* c：元素，伪元素
* ！important; 属性后 - 表示一定显示

## 单位

px 像素
（x）em 当前（或前辈的）元素的font-size的x倍
（x）rem 根元素元素的font-size的x倍
（x）% 父元素的font-size的x%
  ```
  特殊情况
  ```
## 文本属性
### 颜色

1.rgb（0，0，0） 分别表示红绿蓝三色的度数;
2.rgba(0,0,0,0)   多一位控制透明度 

1.（HEX）#??[红]??[绿]??[蓝]
2.（HEXA）#??[红]??[绿]??[蓝]??[透明度]

1.hsl(色相，饱和度，亮度)
2.hsla(色相，饱和度，亮度，头，透明度)


### 字体

字体大小 ```font-size:```

字体族 ```font-family: .....sana-self/serif```

字体风格 ```font-style: normal/italic``` 是否倾斜

字体粗细 ```font-wight: lighter/normal/bold```

符合属性 ```font: 粗细 倾斜 大小 字体```


### 文本

字母间距```letter-spacing```

单词间距```word-spacing```

线```text-decoration: overline/underline/linethrough/none```

文本缩进```test-indent```

水平文本对齐```test-align:```

对齐```vertical-align```
* baseline：与父元素的基线对齐
* top：顶部与所在行顶部对齐
* middle：元素中部和父元素基线加上父元素字母x的一半对齐
* bottom：底部对齐

垂直文本对齐
```flow
1.顶部默认
2.居中 height = line-height
3.底部 line-height = （height x 2） - font-size - x（动态值）； 
```

行高：```line-hight: normal/px/数字（基于font-size倍数）/百分比``` (字体是基于x放入方框进行调整的)

### 列表样式

1.列表符号```list-style-type```
  ```flow
  1.sqare
  2.decimal
  ....
  ```
2.列表位置```list-style-position```
3.自定义列表符号```list-style-image:url("")
4.符合属性1~3```list-style:```


### 表格样式

1.边框border：包含所有属性<font color>必须指定完整</font>

2.列宽```table-layout:auto/foxed```

3.单元格间距```border-spacing```

4.合并相邻的单元格边框```border-collapse:separate/collapse```

5.隐藏空的单元格```empty-cells:hide```

### 背景样式

background: 颜色 图片 位置

### 鼠标表样式

cursor: pointer/move/wait/help; 


## 显示模式

* 块元素
  ```flow
  1.主题标签：<html><body>
  2.排版标签：<h1>~<h6> <hr> <p> <pre> <div>
  3.列表标签
  4.表格标签
  5.<form> <option>
  ```
* 行内元素
  ```flow
  1.文本标签：<br> <em> <strong> <sup> <sub> <del> <ins>
  2.<a> <label>
  ```
* 行内块元素
  ```flow
  1.图片：<img>
  2.单元格：<td> <th>
  3.表格控件：<input> <textarea> <select> <botton>
  4.框架标签：<iframe>
  ```

修改显示模式
display：none/block/inline/inline-block
visaibility：show;

## 内容溢出问题 - overflow
  * hidden 隐藏
  * auto   自动
  * scroll 滚动条


# 盒子模型

* 从外往里包裹成一个盒子margin是最外面的一层
  * margin（外边距）
    ```flow
    1.子元素的margin在父元素内计算
    2.行内元素无法设置上下margin

    ```
  * border（边框）
  * padding (内边距)
  * content（内容文本）
    ```
    max-with
    min-with
    无论如何不会因为浏览器窗口的变化而大/小于一个限度
    ```

  * 特点：都可以拆成上下左右

# 问题：
1.塌陷问题
  给第一个子元素设置上margin最后一个子元素设置下margin会导致设置margin给父元素

* 解决：
  - overflow：hidden;

2.margin 合并边界问题 （上下边界之间会统一用大的边界）


3.元素之间的空白问题 - 元素之间的换行会被识别为空白字符
* 解决
  - font-size 设置为0

4.行内块元素的幽灵空白问题
  * 对齐：vertical - align:bottom;
  * 修改为块
  * 把字调没

# 浮动

特点
```
浮动之后不在底层统一的层级中，而是自己一层，相当于在底层上方漂浮;
```
* 脱离文档流
* 不管前面什么元素，浮动后：默认宽高是杯内容撑开，可设置宽高
* 不会独占一行
* 不会margin合并和塌陷
* 不会像行内块一样当成文本处理

float功能
* 实现文字包裹效果 ```float-left/right```


浮动影响解决
* 浮动元素不影响父元素长宽  
* 浮动元素与其他不浮动元素冲突元素
  ```flow
  clear: left/right/both 清除浮动兄弟的影响
  ```

# 定位

相对定位（相对于发生移动前原来的位置）
 * 开启相对定位：```position: relative;```
 * 谁有定位谁优先显示
 * 都有定位谁先写谁优先显示

绝对定位 
 * 开启绝对定:```position:absolute```
 * 参考它的包含块
    * 没有脱离文档流 ---父元素
    * 脱离文档流 --- 第一个开启定位的元素
 * 绝对定位不能浮动 

固定定位
 * 根据窗口位置定位 （例子：小广告）

粘性定位
 * 参考定位 --- 离他最近的可滚动祖先
 * 不脱离文档流
 * 可以和滚动一起用


<font color = "orange">定位层级</font>
  * z-index 调整元素层级

<font color = "orange">特殊应用</font>
  * 充满父元素 --- 没有长宽（无论超出不足）
  * 居中

# 布局

* 版心 固定宽度且水平居中的部分，用于展示主要内容，一般是多个

* 命名
  * 顶部导航条 topbar
  * 页头 header、page-header
  * 导航 nav、navbar
  * 搜索框 search、search-box
  * 横幅广告 banner
  * 主要内容 content、main
  * 侧边栏 aside、sidebar
  * 页脚

* 重置默认样式
 * ```reset.css - 自定义的一个默认样式初始化文件``` 选择到具有默认样式的元素，清空默认的样式
 * ```Normalize.css - 标准化默认样式``` 保留有价值的默认样式
   * http://necolas.gihub.io/normalize.css/


# css5

- <span style="color: #d48806">CSS3</span>是<span style="color: #d48806">CSS2</span>的升级版本，它在CSS2的基础上，<span style="color: #d48806">新增了很多强大的新功能</span>，从而解决一些实际面临的问题。
- CSS3在未来会按照<span style="color: #d48806">模块化的方式</span>去发展：<span style="color: #d48806">https://www.w3.org/Style/CSS/current-work.html</span>
- CSS3的新特性如下：
  - 新增了更加实用的<span style="color: #d48806">选择器</span>，例如：<span style="color: #d48806">动态伪类选择器、目标伪类选择器、伪元素选择器</span>等等。
  - 新增了更好的<span style="color: #d48806">视觉效果</span>，例如：<span style="color: #d48806">圆角、阴影、渐变</span>等。
  - 新增了丰富的<span style="color: #d48806">背景效果</span>，例如：<span style="color: #d48806">支持多个背景图片</span>，同时新增了若干个背景相关的属性。
  - 新增了全新的<span style="color: #d48806">布局方案</span>——<span style="color: #d48806">弹性盒子</span>。
  - 新增了<span style="color: #d48806">Web字体</span>，可以显示用户电脑上没有安装的字体。
  - 增强了<span style="color: #d48806">颜色</span>，例如：<span style="color: #d48806">HSL、HSLA、RGBA</span>几种新的颜色模式，新增<span style="color: #d48806">opacity</span>属性来控制透明度。
  - 增加了<span style="color: #d48806">2D和3D变换</span>，例如：<span style="color: #d48806">旋转、扭曲、缩放、位移</span>等。
  - 增加<span style="color: #d48806">动画与过渡效果</span>，让效果的变换更具流线性、平滑性。


* 什么是私有前缀
  如下代码中的 <span style="color: #d48806">-webkit-</span> 就是私有前缀

  ```css
  div {
      width: 400px;
      height: 400px;
      -webkit-border-radius: 20px;
  }
  ```

**常见**：
<span style="color: #d48806">Chrome浏览器</span>：<span style="color: #d48806">-webkit-</span>

<span style="color: #d48806">Safari浏览器</span>：<span style="color: #d48806">-webkit-</span>

<span style="color: #d48806">Firefox浏览器</span>：<span style="color: #d48806">-moz-</span>

<span style="color: #d48806">Edge浏览器</span>：<span style="color: #d48806">-webkit-</span>

## 长度单位

1. **rem** - 根元素字体大小的倍数，只与根元素字体大小有关。
2. **vw** - 视口宽度的百分之多少，**10vw** 就是视口宽度的 10%。
3. **vh** - 视口高度的百分之多少，**10vh** 就是视口高度的 10%。
4. **vmax** - 视口宽高中大的那个的百分之多少。（了解即可）
5. **vmin** - 视口宽高中小的那个的百分之多少。（了解即可）

## 2. CSS3 新增颜色设置方式

CSS3 新增了三种颜色设置方式，分别是：**rgba**、**hsl**、**hsla**，由于之前已经详细讲解，此处略过。

## 3. CSS3 新增选择器

CSS3 新增的选择器有：**动态伪类**、**目标伪类**、**语言伪类**、**UI伪类**、**结构伪类**、**否定伪类**、**伪元素**；这些在 CSS2 中已经详细讲解，此处略过。

## 4.CSS3新增盒子属性

### 1. **box-sizing** 怪异盒模型

使用 **box-sizing** 属性可以设置盒模型的两种类型

| 可选值 | 含义 |
|---|---|
| **content-box** | **width** 和 **height** 设置的是盒子内容区的大小。（默认值） |
| **border-box** | **width** 和 **height** 设置的是盒子总大小。（怪异盒模型） |

### 2. **resize** 调整盒子大小

使用 **resize** 属性可以控制是否允许用户调节元素尺寸。

| 值 | 含义 |
|---|---|
| **none** | 不允许用户调整元素大小。（默认） |
| **both** | 用户可以调节元素的宽度和高度。 |
| **horizontal** | 用户可以调节元素的宽度。 |
| **vertical** | 用户可以调节元素的高度。 |

### 3. **box-shadow** 盒子阴影

使用 **box-shadow** 属性为盒子添加阴影。

- **语法**：
  - **各个值的含义**：

| 值 | 含义 |
|---|---|
| **h-shadow** | 水平阴影的位置，必须填写，可以为负值 |
| **v-shadow** | 垂直阴影的位置，必须填写，可以为负值 |
| **blur** | 可选，模糊距离 |
| **spread** | 可选，阴影的外延值 |
| **color** | 可选，阴影的颜色 |
| **inset** | 可选，将外部阴影改为内部阴影 |

- **默认值**：**box-shadow: none** 表示没有阴影

- **示例**：

```css
/* 写两个值，含义：水平位置、垂直位置 */
box-shadow: 10px 10px;

/* 写三个值，含义：水平位置、垂直位置、颜色 */
box-shadow: 10px 10px red;

/* 写三个值，含义：水平位置、垂直位置、模糊值 */
box-shadow: 10px 10px 10px;

/* 写四个值，含义：水平位置、垂直位置、模糊值、颜色 */
box-shadow: 10px 10px 10px red;

/* 写五个值，含义：水平位置、垂直位置、模糊值、外延值、颜色 */
box-shadow: 10px 10px 10px 5px blue;

/* 写六个值，含义：水平位置、垂直位置、模糊值、外延值、颜色、内阴影 */
box-shadow: 10px 10px 20px 3px blue inset;
```

### opacity 不透明度
opacity 属性能为整个元素添加透明效果，值是 0 到 1 之间的小数，0 是完全透明，1 表示完全不透明。

opacity 与 rgba 的区别？

opacity 是一个属性，设置的是整个元素（包括元素里的内容）的不透明度。

rgba 是颜色的设置方式，用于设置颜色，它的透明度，仅仅是调整颜色的透明度。

## 5.CSS3新增背景属性

5.1. **background-origin**

- **作用**：设置背景图的原点。
- **语法**：
  1. **padding-box**：从 **padding** 区域开始显示背景图像。——**默认值**
  2. **border-box**：从 **border** 区域开始显示背景图像。
  3. **content-box**：从 **content** 区域开始显示背景图像。

5.2. **background-clip**

- **作用**：设置背景图的内外裁剪的区域。
- **语法**：
  1. **border-box**：从 **border** 区域开始向外裁剪背景。——**默认值**
  2. **padding-box**：从 **padding** 区域开始向外裁剪背景。
  3. **content-box**：从 **content** 区域开始向外裁剪背景。
  4. **text**：背景图只呈现在文字上。

**注意**：若值为 **text**，那么 **background-clip** 要加上 **-webkit-** 前缀。

5.3. **background-size**

- **作用**：设置背景图的尺寸。
- **语法**：
  1. 用**长度值**指定背景图片大小，不允许负值。
     ```css
     background-size: 300px 200px;
     ```
  2. 用**百分比**指定背景图片大小，不允许负值。
     ```css
     background-size: 100% 100%;
     ```
  3. **auto**：背景图片的真实大小，**默认值**。
  4. **contain**：将背景图片等比缩放，使背景图片的宽或高，与容器的宽或高相等，再将完整背景图片包含在容器内，但要注意：可能会造成容器里部分区域没有背景图片。
     ```css
     background-size: contain;
     ```
  5. **cover**：将背景图片等比缩放，直到完全覆盖容器，图片会尽可能全的显示在元素上，但要注意：背景图片有可能显示不完整。——相对比较好的选择
     ```css
     background-size: cover;
     ```

5.4. **background** 复合属性

- **语法**：

**注意**：

1. **origin** 和 **clip** 的值如果一样，如果只写一个值，则 **origin** 和 **clip** 都设置；如果设置了两个值，前面的是 **origin**，后面的 **clip**。

2. **size** 的值必须写在 **position** 值的后面，并且用 **/** 分开。

5.5. 多背景图

**CSS3** 允许元素设置多个背景图片

```css
/* 添加多个背景图 */
background: url(../images/bg-lt.png) no-repeat,
          url(../images/bg-rt.png) no-repeat right top,
          url(../images/bg-lb.png) no-repeat left bottom,
          url(../images/bg-rb.png) no-repeat right bottom;
```

## 6.圆角

```css
border-radius: 10px;
```

## 7.轮廓

轮廓属性```例子：outline: 50px solid blue;```

- `outline-width`：外轮廓的宽度
- `outline-color`：外轮廓的颜色
- `outline-style`：外轮廓的风格
  - `none`：无轮廓
  - `dotted`：点状轮廓
  - `dashed`：虚线轮廓
  - `solid`：实线轮廓
  - `double`：双线轮廓
- `outline-offset`：设置外轮廓与边框的距离，正负值都可以设置

**注意：** outline-offset 不是 outline 的子属性，是一个独立的属性。


## CSS3新增文本属性

**文本阴影**
- 在 CSS3 中，我们可以使用 `text-shadow` 属性给文本添加阴影。
- 语法：`text-shadow: h-shadow v-shadow blur spread color inset;`

| 值       | 描述                                   |
| -------- | -------------------------------------- |
| **h-shadow** | 水平阴影的位置，必须填写，可以为负值 |
| **v-shadow** | 垂直阴影的位置，必须填写，可以为负值 |
| **blur** | 可选，模糊距离 |
| **spread** | 可选，阴影的外延值 |
| **color** | 可选，阴影的颜色 |
| **inset** | 可选，将外部阴影改为内部阴影 |

默认值：`text-shadow:none` 表示没有阴影。


**7.2 文本换行**
- 在 CSS3 中，我们可以使用 `white-space` 属性设置文本换行方式。

| 值         | 含义                                                         |
| ---------- | ------------------------------------------------------------ |
| normal     | 文本超出边界自动换行，文本中的换行被浏览器识别为一个空格。（默认值） |
| pre        | 原样输出，与 pre 标签的效果相同。|
| pre-wrap   | 在 pre 效果的基础上，超出元素边界自动换行。|
| pre-line   | 在 pre 效果的基础上，超出元素边界自动换行，且只识别文本中的换行，空格会忽略。 |
| nowrap     | 强制不换行                                                   |


**7.3 文本溢出**
- 在 CSS3 中，我们可以使用 `text-overflow` 属性设置文本内容溢出时的呈现模式。

| 值         | 含义                                                     |
| ---------- | -------------------------------------------------------- |
| clip       | 当内联内容溢出时，将溢出部分裁切掉。（默认值）|
| ellipsis   | 当内联内容溢出块容器时，将溢出部分替换为 …。|

注意：要使得 `text-overflow` 属性生效，块容器必须显式定义 `overflow` 为非 `visible` 值，`white-space` 为 `nowrap` 值。


**7.4 文本修饰**
- CSS3 升级了 `text-decoration` 属性，让其变成了复合属性。
  语法：`text-decoration: text-decoration-line || text-decoration-style || text-decoration-color`
- 子属性及其含义：
  - **text-decoration-line** 设置文本装饰线的位置
    - `none`：指定文字无装饰（默认值）
    - `underline`：指定文字的装饰是下划线
    - `overline`：指定文字的装饰是上划线
    - `line-through`：指定文字的装饰是贯穿线
  - **text-decoration-style** 文本装饰线条的形状
    - `solid`：实线（默认）
    - `double`：双线
    - `dotted`：点状线条
    - `dashed`：虚线
    - `wavy`：波浪线
  - **text-decoration-color** 文本装饰线条的颜色

**7.5 文本描边**
注意：文字描边功能仅 `webkit` 内核浏览器支持。
- **-webkit-text-stroke-width**：设置文字描边的宽度，写长度值。
- **-webkit-text-stroke-color**：设置文字描边的颜色，写颜色值。
- **-webkit-text-stroke**：复合属性，设置文字描边宽度和颜色。

## CSS3 线性渐变属性
线性渐变（linear-gradient）是 CSS3 新增的背景渐变属性，用于创建沿直线方向过渡的颜色效果，需通过 `background-image` 或 `background` 属性应用。


```css
background-image: linear-gradient(direction, color-stop1, color-stop2, ...);
```

关键参数说明
| 参数名       | 必要性 | 描述                                                                 |
|--------------|--------|----------------------------------------------------------------------|
| direction    | 可选   | 指定渐变方向，支持三种形式：<br>- 角度（如 45deg，0deg 为从下到上，90deg 为从左到右）<br>- 关键词（to right/left/top/bottom）<br>- 方位组合（to top right 等）<br>默认值为 to bottom（自上而下） |
| color-stop   | 必需   | 渐变颜色节点，格式为「颜色值 + 位置」（位置可选）：<br>- 颜色值：支持关键词（red）、十六进制（#ff0000）、rgb/rgba 等<br>- 位置：可用百分比（50%）或长度值（100px），未指定时均匀分布<br>至少需包含 2 个颜色节点 |



## CSS3 径向渐变属性
径向渐变（radial-gradient）是 CSS3 新增的背景渐变属性，以指定圆心为起点向四周扩散形成颜色过渡效果，需通过 `background-image` 或 `background` 属性应用。

`background-image: radial-gradient(shape size at position, color-stop1, color-stop2, ...);`

**关键参数说明**
| 参数名       | 必要性 | 描述                                                                 |
|--------------|--------|----------------------------------------------------------------------|
| shape        | 可选   | 指定渐变形状，支持两种形式：<br>- circle：圆形渐变<br>- ellipse：椭圆形渐变（默认，根据容器尺寸自适应）<br>默认值为 ellipse |
| size         | 可选   | 定义渐变扩散的结束边界，支持多种形式：<br>- closest-side：到离圆心最近的边结束<br>- farthest-side：到离圆心最远的边结束<br>- closest-corner：到离圆心最近的角结束<br>- farthest-corner：到离圆心最远的角结束（默认）<br>- 自定义值：可填长度（如 100px）或百分比（如 50%） |
| position     | 可选   | 指定渐变圆心位置，支持三种形式：<br>- 关键词（center/top left/bottom right 等）<br>- 长度值（如 20px 30px，水平在前垂直在后）<br>- 百分比（如 50% 50%）<br>默认值为 center（容器正中心） |
| color-stop   | 必需   | 渐变颜色节点，格式为「颜色值 + 位置」（位置可选）：<br>- 颜色值<br>- 位置：未指定时均匀分布<br>至少需包含 2 个颜色节点 |

# CSS3 重复渐变属性
重复渐变包含重复线性渐变（repeating-linear-gradient）和重复径向渐变（repeating-radial-gradient），是 CSS3 扩展的渐变属性，可将基础渐变效果循环重复填充容器，需通过 `background-image` 或 `background` 属性应用。

## 核心语法
### 重复线性渐变
background-image: repeating-linear-gradient(direction, color-stop1, color-stop2, ...);

### 重复径向渐变
background-image: repeating-radial-gradient(shape size at position, color-stop1, color-stop2, ...);

## 关键参数说明
| 参数名       | 必要性 | 描述                                                                 |
|--------------|--------|----------------------------------------------------------------------|
| direction    | 可选   | 仅重复线性渐变，指定渐变方向，支持三种形式：<br>- 角度（如 45deg，0deg 为从下到上，90deg 为从左到右）<br>- 关键词（to right/left/top/bottom）<br>- 方位组合（to top right 等）<br>默认值为 to bottom（自上而下） |
| shape        | 可选   | 仅重复径向渐变，指定渐变形状，支持两种形式：<br>- circle：圆形渐变<br>- ellipse：椭圆形渐变（默认，根据容器尺寸自适应）<br>默认值为 ellipse |
| size         | 可选   | 仅重复径向渐变，定义渐变扩散的结束边界，支持多种形式：<br>- closest-side：到离圆心最近的边结束<br>- farthest-side：到离圆心最远的边结束<br>- closest-corner：到离圆心最近的角结束<br>- farthest-corner：到离圆心最远的角结束（默认）<br>- 自定义值：可填长度（如 100px）或百分比（如 50%） |
| position     | 可选   | 仅重复径向渐变，指定渐变圆心位置，支持三种形式：<br>- 关键词（center/top left/bottom right 等）<br>- 长度值<br>- 百分比<br>默认值为 center |
| color-stop   | 必需   | 渐变颜色节点，格式为「颜色值 + 位置」（位置必选，否则无法重复）：<br>- 颜色值<br>- 位置，需明确指定以形成重复循环<br>至少需包含 2 个颜色节点 |

* 常用示例
  - 1. 重复线性渐变（条纹背景）
  ```css
  background-image: repeating-linear-gradient(45deg, #000 0%, #000 10%, #fff 10%, #fff 20%);
  ```

  - 重复径向渐变（圆点背景）
  ```css
  background-image: repeating-radial-gradient(circle at center, #ff6b6b 0%, #ff6b6b 5%, #fff 5%, #fff 10%);
  ```

## Web字体（@font-face）完整介绍
一、核心概念
通过`@font-face` CSS规则，可指定网页自定义字体文件的地址，浏览器会自动下载并应用该字体，无需依赖用户本地安装的字体，实现网页字体样式的个性化与统一性。

二、语法格式

1. 简写方式（基础场景）
适用于现代浏览器，无需兼容旧版本，代码简洁高效：
```css
@font-face {
  font-family: "atguigu";
  font-display: swap;
  src: url('webfont.eot');
  src: url('webfont.eot?#iefix') format('embedded-opentype'),
       url('webfont.woff2') format('woff2'),
       url('webfont.woff') format('woff'),
       url('webfont.ttf') format('truetype'),
       url('webfont.svg#webfont') format('svg');
}
```

## 字体图标
字体生成：
```阿里字体定制工具（https://www.iconfont.cn/webfont）```

字体图标介绍
* 核心优势
  - 清晰度高：相比图片图标，在任意分辨率下都能保持清晰，无失真问题。
  - 灵活性强：可像文字一样自由修改大小、颜色、样式（如加粗、倾斜），适配不同设计场景。
  - 兼容性好：对老旧浏览器（如 IE 系列）也能良好支持，保障多端显示一致性。
* 使用建议
  - 不同平台字体图标使用方式存在差异，建议参考对应平台使用指南。实际开发中，阿里图标库```（https://www.iconfont.cn/）```是使用广泛的资源平台，可通过该平台筛选、下载、管理字体图标，满足网页、移动端等多场景需求。

## 2D变换
### 2D 位移 (Transform: Translate)

**基本概念：**
2D 位移可以改变元素的位置，具体使用方式如下：

1. 先给元素添加 **转换属性** `transform`
2. 编写 `transform` 的具体值

**位移属性值：**

| 值 | 含义 |
|---|---|
| `translateX` | 设置水平方向位移，需指定长度值；若指定的是百分比，是参考自身宽度的百分比 |
| `translateY` | 设置垂直方向位移，需指定长度值；若指定的是百分比，是参考自身高度的百分比 |
| `translate` | 一个值代表水平方向，两个值代表：水平和垂直方向 |

使用示例
```css
/* 分开设置 */
transform: translateX(30px) translateY(40px);

/* 合并设置 */
transform: translate(30px, 40px);

/*元素水平垂直居中*/
.box {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
```


markdown
### 2D 缩放 (Transform: Scale)

* **基本概念**:
  2D缩放是指：让元素放大或缩小，具体使用方式如下：
　
  * 1. 先给元素添加 **转换属性** `transform`
  * 2. 编写 `transform` 的具体值

**缩放属性值**

| 值 | 含义 |
|---|---|
| `scaleX` | 设置水平方向的缩放比例，值为一个数字，1表示不缩放，大于1放大，小于1缩小 |
| `scaleY` | 设置垂直方向的缩放比例，值为一个数字，1表示不缩放，大于1放大，小于1缩小 |
| `scale` | 同时设置水平方向、垂直方向的缩放比例，一个值代表同时设置水平和垂直缩放；两个值分别代表：水平缩放、垂直缩放 |

**使用示例**
```css
/* 水平方向缩放 */
transform: scaleX(1.5);

/* 垂直方向缩放 */
transform: scaleY(0.8);

/* 同时设置水平和垂直缩放 */
transform: scale(1.2);        /* 水平和垂直都放大1.2倍 */
transform: scale(1.5, 0.8);   /* 水平放大1.5倍，垂直缩小到0.8倍 */
```

### 多重变换 (Multiple Transforms)

**基本概念**
多个变换可以同时使用一个 `transform` 属性来编写，实现复杂的组合效果。

**语法格式**
```css
transform: 变换函数1 变换函数2 变换函数3 ....

/* 位移 + 旋转 */
transform: translate(-50%, -50%) rotate(45deg);

/* 缩放 + 旋转 */
transform: scale(1.2) rotate(30deg);

/* 位移 + 缩放 + 旋转 */
transform: translateX(100px) scale(0.8) rotate(-15deg);
```

建议最后旋转，因为变换函数的执行顺序会影响最终效果：
  * 变换按照从左到右的顺序执行
  * 先执行的操作会影响后续操作的坐标系
  * 旋转会改变元素的坐标轴方向，可能影响位移和缩放的效果

## 3D变换

### 开启 3D 空间

**重要原则**：元素进行 3D 变换的首要操作：父元素必须开启 3D 空间！

### transform-style 属性
使用 `transform-style` 开启 3D 空间，可选值如下：

| 值 | 描述 |
|---|---|
| `flat` | 让子元素位于此元素的二维平面内（2D 空间）——**默认值** |
| `preserve-3d` | 让子元素位于此元素的三维空间内（3D 空间） |

**使用方法**
```css
.parent {
    transform-style: preserve-3d;  /* 开启3D空间 */
}

.container {
    perspective: 1000px;        /* 设置景深 */
    transform-style: preserve-3d; /* 开启3D空间 */
}

.child {
    transform: rotateY(45deg);   /* 子元素进行3D变换 */
}
```


### 透视点位置 (perspective-origin)

**透视点位置** 就是观察者位置，默认的透视点在发生 3D 变换元素的**中心**。

使用 `perspective-origin` 属性设置观察者位置（透视点的位置）

```css
perspective-origin: x-axis y-axis;
```

### 3D 位移

## 基本概念
3D 位移是在 2D 位移的基础上，增加了让元素沿 **z 轴** 位移的能力。

1. 先给元素添加 **转换属性** `transform`
2. 编写 `transform` 的具体值


| 值 | 含义 |
|---|---|
| `translateZ` | 设置 z 轴位移，需指定长度值，**正值向屏幕外**，**负值向屏幕里**，且**不能写百分比** |
| `translate3d` | 第1个参数对应 x 轴，第2个参数对应 y 轴，第3个参数对应 z 轴，且**均不能省略** |


```css
/* 沿 Z 轴位移 */
transform: translateZ(100px);    /* 向屏幕外移动 100px */
transform: translateZ(-50px);    /* 向屏幕里移动 50px */

/* 3D 综合位移 */
transform: translate3d(100px, 50px, 200px);  /* x:100px, y:50px, z:200px */
transform: translate3d(0, 0, 150px);         /* 仅 Z 轴位移 */

/* 组合使用 */
transform: translateX(100px) translateZ(80px);
```

### 3D 旋转

3D 旋转是在 2D 旋转的基础上，增加了让元素沿 **x 轴** 和 **y 轴** 旋转的能力。

1. 先给元素添加 **转换属性** `transform`
2. 编写 `transform` 的具体值


| 值 | 含义 |
|---|---|
| `rotateX` | 设置 x 轴旋转角度，需指定一个角度值 (deg)，**面对 x 轴正方向：正值顺时针，负值逆时针** |
| `rotateY` | 设置 y 轴旋转角度，需指定一个角度值 (deg)，**面对 y 轴正方向：正值顺时针，负值逆时针** |
| `rotate3d` | 前 3 个参数分别表示坐标轴：x, y, z，第 4 个参数表示旋转的角度，**参数不允许省略** |


```css
/* X 轴旋转 */
transform: rotateX(45deg);    /* 绕 X 轴顺时针旋转 45 度 */
transform: rotateX(-30deg);   /* 绕 X 轴逆时针旋转 30 度 */

/* Y 轴旋转 */
transform: rotateY(60deg);    /* 绕 Y 轴顺时针旋转 60 度 */
transform: rotateY(-90deg);   /* 绕 Y 轴逆时针旋转 90 度 */

/* 3D 综合旋转 */
transform: rotate3d(1, 0, 0, 45deg);    /* 等同于 rotateX(45deg) */
transform: rotate3d(0, 1, 0, 60deg);    /* 等同于 rotateY(60deg) */
transform: rotate3d(1, 1, 1, 30deg);    /* x、y、z 轴分别旋转 30 度 */

/* 组合使用 */
transform: rotateX(45deg) rotateY(30deg);
```

### 3D 缩放
3D 缩放是在 2D 缩放的基础上，增加了让元素沿 **z 轴** 缩放的能力。

1. 先给元素添加 **转换属性** `transform`
2. 编写 `transform` 的具体值

| 值 | 含义 |
|---|---|
| `scaleZ` | 设置 z 轴方向的缩放比例，值为一个数字，**1 表示不缩放**，**大于 1 放大**，**小于 1 缩小** |
| `scale3d` | 第 1 个参数对应 x 轴，第 2 个参数对应 y 轴，第 3 个参数对应 z 轴，**参数不允许省略** |

```css
/* Z 轴缩放 */
transform: scaleZ(1.5);    /* Z 轴放大 1.5 倍 */
transform: scaleZ(0.8);    /* Z 轴缩小到 0.8 倍 */

/* 3D 综合缩放 */
transform: scale3d(1.2, 1, 1.5);    /* x轴1.2倍, y轴不变, z轴1.5倍 */
transform: scale3d(0.8, 0.8, 2);    /* x,y轴缩小, z轴放大 */

/* 组合使用 */
transform: scaleX(1.2) scaleZ(1.5);
```

### 过渡 (Transition)

状态平滑改变


* transition-property

  * **作用**：定义哪个属性需要过渡，只有在该属性中定义的属性才会具有过渡效果。

  * **常用值**：
    - `none`：不过渡任何属性
    - `all`：过渡所有能过渡的属性
    - 具体属性名：例如 `width`、`height`，若有多个以逗号分隔

  * **支持过渡的属性特征**：
    - 值为数字，或者值能转为数字的属性
    - 常见的支持过渡的属性：
      - 颜色：`color`, `background-color`, `border-color`
      - 长度值：`width`, `height`, `margin`, `padding`
      - 百分比：`width: 50%`
      - 数值：`z-index`, `opacity`
      - 变换属性：`transform` (2D 和 3D)
      - 阴影：`box-shadow`, `text-shadow`

* transition-duration

  * **作用**：设置过渡的持续时间，即一个状态过渡到另外一个状态耗时多久。

  * **常用值**：
    - `0`：没有任何过渡时间——默认值
    - 时间单位：`s` (秒) 或 `ms` (毫秒)

  * **时间设置规则**：
    - 如果想让所有属性都持续一个时间，那就写一个值
    - 如果想让每个属性持续不同的时间，那就写一个时间的列表

```css
/* 单个属性过渡 */
.box {
    transition-property: width;
    transition-duration: 0.5s;
}

/* 多个属性相同持续时间 */
.box {
    transition-property: width, height, background-color;
    transition-duration: 0.3s;
}

/* 多个属性不同持续时间 */
.box {
    transition-property: width, height, opacity;
    transition-duration: 0.5s, 0.3s, 1s;
}

/* 使用 all 过渡所有属性 */
.box {
    transition-property: all;
    transition-duration: 0.4s;
}
```

* transition-delay

  - 作用：指定开始过渡的延迟时间，单位：s 或 ms

* transition-timing-function

  - 作用：设置过渡的类型
  - 常用值：
    - ease：平滑过渡——默认值
    - linear：线性过渡
    - ease-in：慢→快
    - ease-out：快→慢
    - ease-in-out：慢→快→慢
    - step-start：等同于 steps(1, start)
    - step-end：等同于 steps(1, end)
    - steps(n, start|end)：接受两个参数的步进函数。第一个参数必须为正整数，指定函数的步数。第二个参数取值可以是 start 或 end，指定每一步的值发生变化的时间点。第二个参数默认值为 end。
    - cubic-bezier(n, n, n, n)：特定的贝塞尔曲线类型。

在线制作贝塞尔曲线：https://cubic-bezier.com


## 动画的基本使用

* 第一步：定义关键帧（定义动画）
  ```css
    @keyframes 动画名 {
      0% {
          /* property1: value1 */
      }
      20% {
          /* property1: value1 */
      }
      40% {
          /* property1: value1 */
      }
      60% {
          /* property1: value1 */
      }
      80% {
          /* property1: value1 */
      }
      100% {
          /* property1: value1 */
      }
  }
  ```

* 第二步：给元素应用动画，用到的属性如下：

  - 1. `animation-name`：给元素指定具体的动画（具体的关键帧）
  - 2. `animation-duration`：设置动画所需时间
  - 3. `animation-delay`：设置动画延迟

  ```css
  .box {
      /* 指定动画 */
      animation-name: testKey;
      /* 设置动画所需时间 */
      animation-duration: 5s;
      /* 设置动画延迟 */
      animation-delay: 0.5s;
  }
  ```

* 其他属性
  1. `ease`：平滑过渡 —— 默认值  
  2. `linear`：线性过渡  
  3. `ease-in`：慢 → 快  
  4. `ease-out`：快 → 慢  
  5. `ease-in-out`：慢 → 快 → 慢  
  6. `step-start`：等同于 steps(1, start)  
  7. `step-end`：等同于 steps(1, end)  
  8. `steps(integer, ?)`：接受两个参数的步进函数。第一个参数必须为正整数，指定函数的步数。第二个参数取值可以是 start 或 end，指定每一步的值发生变化的时间点。第二个参数默认值为 end。  
  9. `cubic-bezier(number, number, number, number)`：特定的贝塞尔曲线类型。


## 多列布局属性

布局控制属性
  - **`column-count`**
    - 指定列数，值是数字。
  - **`column-width`**
    - 指定列宽，值是长度。
  - **`columns`**
    - 同时指定列宽和列数，复合属性；值没有数量和顺序要求。

间距与边框属性
  - **`column-gap`**
    - 设置列边距，值是长度。
  - **`column-rule-style`**
    - 设置列与列之间边框的风格，值与 `border-style` 一致。
  - **`column-rule-width`**
    - 设置列与列之间边框的宽度，值是长度。
  - **`column-rule-color`**
    - 设置列与列之间边框的颜色。
  - **`column-rule`**
    - 设置列边框，复合属性。

跨列控制属性
  - **`column-span`**
    - 指定是否跨列；值：`none`、`all`。
    - 
```css
<div class="article">
    <h2 class="article-title">文章标题</h2>
    <div class="article-content">
        这里是文章内容，会自动分成多列显示...
    </div>
</div>
css
.article {
    columns: 3 300px;      /* 3列，每列最小300px */
    column-gap: 30px;      /* 列间距30px */
    column-rule: 1px dashed #999;  /* 灰色虚线分割线 */
}

.article-title {
    column-span: all;      /* 标题跨所有列 */
    text-align: center;
    margin-bottom: 20px;
}

.article-content {
    text-align: justify;   /* 两端对齐 */
}
```

# 伸缩盒模型
1. 伸缩盒模型简介：

  2009年，W3C提出了一种新的盒子模型——Flexible Box（伸缩盒模型，又称：弹性盒子）。

  它可以轻松的控制：元素分布方式、元素对齐方式、元素视觉顺序……

  截止目前，除了在部分IE浏览器不支持，其他浏览器均已全部支持。

  伸缩盒模型的出现，逐渐演变出了一套新的布局方案——flex布局。

  # 2. 伸缩容器、伸缩项目

## 伸缩容器
- **伸缩容器**：开启了 flex 的元素，就是伸缩容器。

1. 给元素设置：`display: flex` 或 `display: inline-flex`，该元素就变为了伸缩容器。
2. `display: inline-flex` 很少使用，因为可以给多个伸缩容器的父容器，也设置为伸缩容器。
3. 一个元素可以同时是：伸缩容器、伸缩项目。

## 伸缩项目
- **伸缩项目**：伸缩容器所有子元素自动成为了伸缩项目。

1. 仅伸缩容器的子元素成为了伸缩项目，孙子元素、重孙子元素等后代，不是伸缩项目。
2. 无论原来是哪种元素（块、行内块、行内），一旦成为了伸缩项目，全都会"块状化"。

### 主轴与侧轴

*   **主轴**：伸缩项目沿着主轴排列，主轴默认是水平的，默认方向是：从左到右（左边是起点，右边是终点）。
*   **侧轴**：与主轴垂直的就是侧轴，侧轴默认是垂直的，默认方向是：从上到下（上边是起点，下边是终点）。

---
主轴方向：
    *   **属性名**：`flex-direction`
    *   **常用值如下**：

        1.  `row`：主轴方向水平从左到右 —— **默认值**
        2.  `row-reverse`：主轴方向水平从右到左。
        3.  `column`：主轴方向垂直从上到下。
        4.  `column-reverse`：主轴方向垂直从下到上。

---
flex-direction 属性图示：
  *  `column-reverse`：⬆️ (从下往上)
  *  `column`：⬇️ (从上往下)
  *  `row`：➡️ (从左往右)
  *  `row-reverse`：⬅️ (从右往左)

> **注意**：改变了主轴的方向，侧轴方向也随之改变。

---
**主轴换行方式**：

*   **属性名**：`flex-wrap`
*   **常用值如下**：

    1.  `nowrap`：默认值，不换行。
        > （图示：所有项目 [1] 到 [10] 强行挤在同一行）

    2.  `wrap`：自动换行，伸缩容器不够自动换行。
        > （图示：正常折行，[1]-[8] 在第一行，[9]-[12] 折行至第二行）

    3.  `wrap-reverse`：反向换行。
        > （图示：向上折行，[9]-[12] 出现在上方第一行，[1]-[8] 被挤到下方第二行）

    4.  复合属性：
        ```css
        flex-flow
        基本说明;
        - `flex-flow` 是一个复合属性，复合了 `flex-direction` 和 `flex-wrap` 两个属性
        - 值没有顺序要求

        语法
        flex-flow: row wrap;
        ```

#### 主轴对齐方式

- **属性名**: `justify-content`
- **作用**: 设置伸缩项目在**主轴方向**上的对齐方式


1. **`flex-start`**：主轴起点对齐。——默认值
2. **`flex-end`**：主轴终点对齐。
3. **`center`**：居中对齐。
4. **`space-between`**：均匀分布，两端对齐（最常用）。
   - 第一个项目在主轴起点，最后一个项目在主轴终点
   - 剩余空间平均分布在项目之间
5. **`space-around`**：均匀分布，两端距离是中间距离的一半。
   - 每个项目两侧的间隔相等
   - 项目之间的间隔比项目与边框的间隔大一倍
6. **`space-evenly`**：均匀分布，两端距离与中间距离一致。
   - 所有间隔（包括项目之间、项目与边框之间）都完全相等

#### 侧轴对齐方式


**只有一行的情况**：

- **所需属性**: `align-items`
- **作用**: 设置伸缩项目在**侧轴方向**上的对齐方式（单行情况）
---
**常用值**

1. **`flex-start`**：侧轴的起点对齐。
2. **`flex-end`**：侧轴的终点对齐。
3. **`center`**：侧轴的中点对齐。
4. **`baseline`**：伸缩项目的第一行文字的基线对齐。
5. **`stretch`**：如果伸缩项目未设置高度，将占满整个容器的高度。——（默认值）


#### 多行的情况

- **所需属性**: `align-content`
- **作用**: 设置多行伸缩项目在**侧轴方向**上的对齐方式

**常用值**:

1. **`flex-start`**：与侧轴的起点对齐。
2. **`flex-end`**：与侧轴的终点对齐。
3. **`center`**：与侧轴的中点对齐。
4. **`space-between`**：与侧轴两端对齐，中间平均分布。
5. **`space-around`**：伸缩项目间的距离相等，比距边缘大一倍。
6. **`space-evenly`**：在侧轴上完全平分。
7. **`stretch`**：占满整个侧轴。——默认值

### flex-grow（伸）

- `flex-grow` 定义伸缩项目的**放大比例**
- **默认值为 `0`**：即纵使主轴存在剩余空间，也不拉伸（放大）


若所有伸缩项目的 `flex-grow` 值都为 1，则它们将**等分剩余空间**（如果有空间的话）

**示例：**
```css
.item1 { flex-grow: 1; }
.item2 { flex-grow: 1; }
.item3 { flex-grow: 1; }
```

### flex-shrink（缩）

- `flex-shrink` 定义了项目的**压缩比例**
- **默认值为 `1`**：即如果空间不足，该项目将会缩小


### 复合属性 flex


`flex` 是复合属性，复合了：`flex-grow`、`flex-shrink`、`flex-basis` 三个属性

**默认值：** `0 1 auto`

**常用简写值**
| 简写形式 | 完整形式 | 含义 |
|---------|----------|------|
| `flex: auto` | `flex: 1 1 auto` | 可伸缩，基准值为自身大小 |
| `flex: 1` | `flex: 1 1 0` | 等分剩余空间，基准值为0 |
| `flex: none` | `flex: 0 0 auto` | 不可伸缩，保持原始大小 |
| `flex: 0 auto` | `flex: 0 1 auto` | 不拉伸但可收缩，基准值为自身大小（初始值） |


### 项目排序

order 属性
- `order` 属性定义项目的排列顺序
- **数值越小，排列越靠前**
- **默认值为 `0`**

使用示例
```css
.item1 { order: 3; }   /* 排在最后 */
.item2 { order: 1; }   /* 排在第二 */
.item3 { order: 2; }   /* 排在第三 */
.item4 { order: -1; }  /* 排在最前（数值最小） */
```

## 响应式布局

### 媒体查询(@media)

媒体类型
| 值 | 含义 |
|---|---|
| `all` | 检测所有设备。 |
| `screen` | 检测电子屏幕，包括：电脑屏幕、平板屏幕、手机屏幕等。 |
| `print` | 检测打印机。 |

 
**媒体特性**
| 值 | 含义 |
|---|---|
| `width` | 检测视口宽度。 |
| `max-width` | 检测视口最大宽度。 |
| `min-width` | 检测视口最小宽度。 |
| `height` | 检测视口高度。 |
| `max-height` | 检测视口最大高度。 |
| `min-height` | 检测视口最小高度。 |
| `device-width` | 检测设备屏幕的宽度。 |
| `max-device-width` | 检测设备屏幕的最大宽度。 |
| `min-device-width` | 检测设备屏幕的最小宽度。 |

**orientation**
检测视口的旋转方向（是否横屏）。
1. `portrait`：视口处于纵向，即高度大于等于宽度。
2. `landscape`：视口处于横向，即宽度大于高度。


# 1.5 结合外部样式的用法

## 用法一：在 link 标签中使用

```html
<link rel="stylesheet" media="具体的媒体查询" href="mystylesheet.css">
用法二：在 CSS 中使用 @media
css
@media screen and (max-width: 768px) {
    /* CSS Code */
}

@media screen and (min-width: 768px) and (max-width: 1200px) {
    /* CSS Code */
}
```

# javaScript
```https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Control_flow_and_error_handling```

菜鸟：```https://www.runoob.com/js/js-howto.html```

***node中的python冲突问题***
- node自动安装的python和本地已有的python冲突
  ```
  1.创建环境（在您的项目文件夹中）：
  python -m venv myprojectenv
  2.激活环境（进入项目管理）：
  .\myprojectenv\Scripts\activate
  （激活后，您的命令行提示符前会显示 (myprojectenv) 字样）
  3.退出环境：
  deactivate
  ```

***规范***
- 统一在body或head底端不影响页面的可读性
- body和head的区别
  - body中：在页面所有组件加载完成后下载脚本***（推荐）***
  - head中：先等待加载脚本再展示页面
  - 外部：多个文件使用->多态
    ```javascript
    <!--命名 -->
    <!DOCTYPE html>
    <html>
    <body>
    <script src="myScript.js"></script>
    </body>
    </html>
    ```

## 数据类型

* Number
* BigInt 
* String
* Boolean
* Null  （值是null，明确变量之后会赋值，暂时为null）
* Undifines (没有值（不是null），设计失误没赋值)
* symbol
* object (类似于map)```{key:value}```
  - 方法
  ```javaScript
  //访问对象的方法
  var person = {first:"Y",second:"L"};
  person.first;
  person[first];

  //创建对象方法
  methodName : function() {
    // 代码 
  }
  //访问对象方法
  objectName.methodName()
  ```
* Function(函数)```function name(){return}```

***变量声明***
* var 初始化一个值(function内局部生效)
* let 申明一个会计作用域变量（只在<font color = "orange">{}</font>中生效）
* const 常量
* 无类型 声明一个窗口（window全局变量 -> 可以window.name访问）
```javaScript
//let 声明的变量只在其声明的块或子块中可用，这一点，与var相似。二者之间最主要的区别在于var声明的变量的作用域是整个封闭函数。
function varTest() {
    var x = 1;
    if (true) {
        var x = 2;       // 同样的变量!
        console.log(x);  // 2
    }
    console.log(x);  // 2
}

function letTest() {
    let x = 1;
    if (true) {
        let x = 2;       // 不同的变量    
        console.log(x);  // 2  
    }
    console.log(x);  // 1
}
```

## 运算符

* +
  - 算数运算
  - 连接字符串
* .（点运算）
  - String方法```https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String```
  


## API

### 输出
***console.log***
- 日志输出->多用于测试
***window.alter***
- 弹出警告窗
***document.write***
- 方法内容写到文档中
- 查找对应的html标签```getElementById("html-id属性")``` 
***innerHTML<font color = "yellow">是属性不是方法</font>***
- 写入html文件中
---
### 事件

```<some-HTML-element some-event="JavaScript 代码">```

* 需改其他的标签
  ```javascript
  <button onclick="getElementById('demo').innerHTML=Date()">现在的时间是?</button>
  ```
* 修改自己的标签
  ```javascript
  <button onclick="this.innerHTML=Date()">现在的时间是?</button>
  ```

* 常见事件

  | 事件 | 描述 |
  | :--- | :--- |
  | `onchange` | HTML 元素改变 |
  | `onclick` | 用户点击 HTML 元素 |
  | `onmouseover` | 鼠标指针移动到指定的元素上时发生 |
  | `onmouseout` | 用户从一个 HTML 元素上移开鼠标时发生 |
  | `onkeydown` | 用户按下键盘按键 |
  | `onload` | 浏览器已完成页面的加载 |
  

### 字符串

* 常见方法
  | 属性 | 描述 |
  | :--- | :--- |
  | `constructor` | 返回创建字符串属性的函数 |
  | `length` | 返回字符串的长度 |
  | `prototype` | 允许您向对象添加属性和方法 |
* 常见用法
  ```javascript
  function isArray(myArray) {
    return myArray.constructor.toString().indexOf("Array") > -1;
  }
  ```

```String对象方法：https://www.runoob.com/jsref/jsref-obj-string.html```

* 字符串模板 -> 允许调用类对象
  ```javascript
  let userName = "小红";
  let userJob = "设计师";

  // 传统的字符串拼接方式
  let messageOld = "大家好，我是 " + userName + "，我的职业是 " + userJob + "。";

  // 使用模板字符串和插值表达式
  let messageNew = `大家好，我是 ${userName}，我的职业是 ${userJob}。`;

  console.log(messageNew);
  // 输出: 大家好，我是 小红，我的职业是 设计师。
  ```

* 字符转换```https://www.runoob.com/js/js-type-conversion.html```

### 正则表达式

* 修饰符
  |修饰符	|描述|
  |:--|:--|
  |i|	执行对大小写不敏感的匹配。
  |g|	执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）。
  |m|	执行多行匹配。

* 方法/规则```https://www.runoob.com/jsref/jsref-obj-regexp.html```

```javascript
var str = "Visit Runoob!"; 
var n = str.search("Runoob");
```