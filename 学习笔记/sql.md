# sql

1.单行或多行书写，<font color = "yellow">分号结尾</font>
2.可以使用空格增强语句的可读性
3.SQL关键字使用大写字母（命令语句或属性）
4.注释
* 单行注释：--注释内容
* 多行：/* ... */


类别
* DDL 数据定义语言
* DML 数据操作语言
* DQL 数据查询语言
* DCL 数据控制语言

字段类型
```flow
* 数值(常用)
  * INT/INTEGER
  * BIGINT
  * FLOAT
  * DOUBLE
  * DECIMAL(依赖于m的精度和D的标度)
* 文本
  * CHAR 0~255 (bytes) 定长字符串
  * VARCHAR 0~65535 变长字符串
  * TINYBLOB 不超过255个字符的二进制数
  * TINYTET 短文本字符串
  * BLOB 二进制形式长文本数据
  * TEXT 长文本数据
  * MEDIUMABLOB 二进制形式中长文本数据
  * MEDIUMATEXT 二进制形式中长文本
  * LONGBLOG 二进制形式极大文本数据
  * LONGTEXT 二进制形式极大文本
* 日期
  * DATE （格式）YYYY-MM-DD 日期值
  * TIME -838：59：59~838：59：59 HH:MM:SS 时间持续时间
  * YEAR 1901~2155 YYYY 年份值
  * DATETIME 1000-01-01 ~ 9999-12-31 YYYY-MM-DD HH:MM:SS 混合呃呃时间和日期
  * TIMESTAMP 1970-01-01~ 2038-01-19 YYYY-MM-DDHH：MM：SS 混合日期时间，时间戳
```

## DDL

***数据库***
```sql
SHOW DATABASES 查询所有
SELECT DATABASE 查询当前
CREATE DATABASE + 创建
{
    [IF NOT EXISTS] 数据库名 +
    [DEFAULT CHARSET] 字符集（编码方式） +
    [COLLATE] 排序规则（字符与字符之间的排序方式）;
}
DROP DATABASE [IF EXISTS](数据库名) 删除
USE （数据库名）使用
```


***-- 表 --***
```sql
SHOW TABLES 查询所有表
DESC （表名）；查询表结构
SHOW CREATE TABLE （表名）；查询指定表的建表语句

CRAEATE TABLE （表名）(
    字段1 类型 [comment 字段1注释]，
    字段2 类型 [comment 字段2注释]，
    字段3 类型 [comment 字段3注释]，
    字段4 类型 [comment 字段4注释]，

    [CONSTRAINT][外键约束名称] FROREIGN KEY （外键字段名） REFERENCES 主表（主列表）
)[comment 表注释]；

约束
NOT NULL    |非空
UNIQUE       |唯一
PRIMARY KEY |主键约束（一行数据的唯一标识，要求非空唯一）
DEFAULT     |默认约束（未指定时采用）
CHECK       |检查约束（保证字段满足一定的条件）
FOREIGN KEY |外键约束（让两站表之间建立连接，保证数据的一致性和完整性）
```

* 外键约束（具有外键的是子表）
* 外键约束命（判断外键与那个表有关，关系是什么）
```flow
命名规则(外键名称)：
FK_     |表名外键约束
<子表名>    |包含外键字段的表
<父表>      |被引用的表
[_<编号>]   |可选，表示两个表之间的关系，可以编号区分
```

* 删除和更新
```flow
NO ACTION       |当父表中删除/更新对应记录时，首先检查该记录是否有对应的的外键，如果有不允许删除/更新
RESTRICT        |当父表中删除/更新对应记录时，首先检查该记录是否有对应的的外键，如果有不允许删除/更新
CASCADE         |当父表中删除/更新对应记录时，首先检查该记录是否有对应的的外键，如果有则也删除/更新外键在子表中的记录
SET NULL        |当父表中删除/更新对应记录时，首先检查该记录是否有对应的的外键，如果有，则子表中的外键值设置为NULL
SET DEFAULT     |父表有变动时，子表外键设置成默认值
```
* 修改
```flow

ALTER TABLE (表名) ADD (字段名) 类型 [comment 注释][约束]  |添加字段

ALTER TABLE （表名） MODIFY （字段名） 新数据类型   |更改数据类型
ALTER TABLE （表名） CHANGE （旧的字段名） （新的字段名） 类型 [comment 注释][约束]  |修改字段名和字段类型

ALTER TABLE （表名） DROP （字段名）  |删除字段

ALTER TABLE （表名） RENAME TO （新表名）

DROP TABLE [IF EXISTS] (表名)  删除；
TARUNCHATE TABLE （表名）  删除并且重新创建；

//插入外键
ALTER TABLE 子表表名 ADD CONSTRAINT 外键约束名（子表） FOREIGN KEY（外键字段名） REFERENCES 主表（主表列名）
```
---
## DML

INSERT 插入数据
UPDATE 修改数据
DELETE 删除数据

```flow
INSERT INTO （表名）（字段1，字段2）VALUES（值1，值2）;  部分字段赋值
INSERT INTO （表名）（值1，值2，...）;  所有字段赋值

批量添加
INTDSERT INTO （表名）（字段1，字段2···）（字段1，字段2···）···VALUES（值1，值2，····）（值1，值2，····）···
INTDSERT INTO （表名）VALUES（值1，值2，····）（值1，值2，····）···


————————————————————————————————
UPDATE （表名） SET 字段1 = 值1，字段2 = 值2，····[WHERE 条件]

————————————————————————————————
DELETE FROM （表名） [WHERE 条件]
```
---
## DQL

```flow
编写顺序：

1.SELECT（DISTINCT 去重）/（聚合函数） + 字段列表 （+ 别名）
```
```flow
2.FROM + 列表名
```
```flow
3.WHERE + 条件列表
{
    >   大于
    <   小于
    <=
    >=
    =
    !=
    BETWEEN...AND...    |在..到..之间（闭区间）
    IN（value1,value2,...）  |只要是其中一个就行

    LIKE        |模糊匹配（’_‘匹配单个字符‘%’匹配任意字符）（和引号内的内容匹配的结果）
        '_e%' 匹配第二个字符为e的结果，%后面任意字符
        'e%'  匹配第一个字符为e，后面为任意字符

    IS NULL     |是空
    AND 或 &&   |并且
    OR 或 ||    |或者
    NOT 或 !    |不是/非

    REGEXP      |正则表达 ->规则
    {
    ^：匹配输入字符串的开始位置。

    $：匹配输入字符串的结束位置。

    .：匹配任意单个字符（除了换行符）。

    [abc]：匹配方括号内的任意一个字符（例如，匹配 'a', 'b', 或 'c'）。

    [a-z]：匹配任何从 a 到 z 的字母。

    [^abc]：匹配任何不在方括号内的字符。

    p1|p2：匹配 p1 或 p2 模式。

    *：匹配前面的子表达式零次或多次。

    +：匹配前面的子表达式一次或多次。

    {n}：匹配确定的 n 次。

    {n,}：匹配至少 n 次。

    {n,m}：匹配至少 n 次，至多 m 次。
    }
}
```
```flow
4.GROUP BY + 分组字段列表（字段）
{
    例子：
    select (字段)/(函数) from 表名 where （条件） group by 字段（在这个字段中统计） having 分组后在组内的条件;
}
```
```flow
5.HAVING + 分组后条件列表
```
```flow
6.ORDER BY + 排序字段列表
{
    字段名 + 排序方式
    .
    .
    （第一个排序方式相同，再根据下一个）
    {
        asc 升序
        desc 降序
    }
}
```
```flow
6.(TOP)LIMIT + 分页参数（不同数据库命令不同）
{
    起始索引，查询记录；
    * 起始索引从0开始（起始索引 = （查询页码-1）* 每一页显示的记录数）
}

执行顺序：
FROM
WHERE
GROUP BY
SELECT
ORDER BY
LIMIT
```

* 聚合函数（配合分组查找）
```flow
1.count   |统计数量
2.max     |最大值
3.min     |最小值
4.avg     |平均值
5.sum     |求和
6.abs     |绝对值
7.ceil    |向上取整
8.floor   |向下取整
9.round   |四舍五入

10.（函数） + over([PARTITION BY clumn(关键字)],[ORDER BY culumn(关键字)])  |partition (分组内容)，order by （排顺序内容）/（）逻辑顺序
当在 OVER() 子句中只使用 ORDER BY 而不使用 PARTITION BY 时，会发生以下情况：
(1)数据库会启用一个默认窗口架构
(2)计算：计算范围从第一行到当前行
(3)排序依据决定第一行到当前行的关系
(总)有partition相当于先分组同一关键字下相同的内容分成一组，没有则全部关键字混合计算：

——用途：
    （1）计算按日期累加的数据： （直接使用 over（order by [关键字]））
    （2）计算范围天数内数据: 结合逻辑判断符（over（order by [关键字]）ROWS BETWEEN 2 PRECEDING AND CURRENT ROW（从前两行到当前行））
       PRECEDING 之前行;
       CURRENT 当前行；
    （3）计算差异: profit - LAG(profit) OVER (ORDER BY 关键字), -- 与前一天差异
       LAG(关键字) 前一天数据

11.datediff(今天，过去)   计算两个日期的天数差 （今天-过去
```
### 1.函数（select中使用进行快速查找想要的数据）

#### 字符串函数

```flow
CONCAT (s1,s2,sn....)   |拼接字符
LOWER（str）    |转化为小写
UPPER （str）   |转化为大写
LPAD（str,(填充到的长度)，填充物）   |左填充内容
RPAD（）    |右填充
TRIM（str）    |去除头部和尾部的空格
SUBSTRING（str，起始，结束）   |截取一定的字符

```

#### 数值函数
```flow
CEIL(x)     |向上取整
FLOOR(x)    |向下取整
MOD(x,y)    |放回x/y的模
RAND()      |0~1内随机数
REUOUND(x,y)|求x四舍五入的值，y保留的小数位

```
#### 日期函数
```flow
CURDATE()   |返回当前日期
CURTIME()   |时间
NOW()       |同时返回日期时间
YEAR(date)  |获取指定date年份
MONTH(date) |获取指定date月份
DAY(date)   |获取指定date日期
DATE_ADD(date,INTERVAL expr type)  |返回一个日期/时间值加上一个时间值expr后的时间值
DATEDIFF(date1,date2)   |返回起始时间date1和结束时间date2之间的天数
```

#### 流程控制函数
```flow
IF(value,t,f)   |如果value为true ，则返回t，否则返回f ->(value 处应该是一个条件表达)
IFNULL(value1,value2)   |如果value不为空，返回value1，否则value
CASE WHEN [val1] THEN [res1] ... ElSE [default] END |如果val为true ，返回res1，...否则返回default的默认值
CASE [expr] WHEN [val1] THEN [res1]...ELSE [default] END    |如果expr的值等于val1，返回res1，...否则返回default默认值
```

### 多表查询
* 多表关系
  - 一对一
  - 一对多
  - 多对多（建立一共统一管理表去关联多表之间的关系）

#### 1.连接查询
- 内连接：查询A，B表的交集
- 外连接：查询（左/右）表所有数据，以及交际部分
- 自连接：当前表与自身连接，自连接必须使用表的别名 

内连接

- 隐示内连接 ```select () from 表一，表二 where 条件 ... ```
- 显示内连接 ``` select () from 表一 (inner) join 表二 on （连接条件）```


外连接
- 查询形式：```select () from 表一 left/right join 表二 on 条件```

自连接

* 查询同一张表的时候需要关联自己表内的两个字段
* 可以结合内连接和外连接，本质是多表查询
```flow
select () from 同一表用两个不同的别名 -> 看成两张表
```

#### 2.联合查询
```folw
select 字段 from 表A where () union (all) select 字段 from 表 where ()

去掉all 则会对结果去重
```

条件
* 各表列数必须保持一致

#### 3.嵌套查询

``` select * from t1 where colum1 = (select colum1 from t2) ```
<font color = 'yellow'>可以不断嵌套多个查询语句</font>

根据子表查询的结果分为
- 标量子查询（结果为单个值）
- 列子查询（结果为一列）
- 行子查询（多行多列）

```flow
根据不同要求查询会出现的不同结果

1.标量子查询
需要数据的配对，表一 -> a -> 表二 -> 查询a对应的数据

2.列子查询
会用到不同的常用关键字（in or and 等）

3.行子查询
（=  ！=  等）

4.表子查询（经常出现在from后）
```

---
## DCL(用户及其权限管理)

```flow
1.查询用户
USE mysql(数据库)
SELECT * FROM user；

2.创建用户
CREATE USER ‘新用户名’@‘主机名’ IDENTIFIED '新密码'；
--主机名 -> % 任意主机都能访问;

3.修改用户密码
CREATE USER ‘用户名’@‘主机名’ IDENTIFIED WITH （mysql_native_password）(密码形式)BY '新密码'；

4.删除用户
DROP USER ‘用户名’@‘主机名’

5.权限

ALL，ALL PROIVILEGES  |所有权限
SELECT  |查询权限
INSERT  |插入权限
UPDATE  |修改权限
DELECTE |删除权限
ALTER   |改表权限
DROP    |删除权限
CREATE  |创建权限

--操作：
SHOW GRANTS FOR ‘用户名’@‘主机名’   |查询权限
GRANT （权限） ON 数据库名.表名 TO ‘用户名’@‘主机名’    |授予表（名）给（主机）
REVOKE （权限） ON 数据库名.表名 TO ‘用户名’@‘主机名’    |撤销表（名）给（主机）
```

---
## 事务

<font color = 'yellow'>一个事件的语句需要不同的语句实现，如果过程中有语句报错可能会导致之前执行过的语句修改数据，报错语句未执行，导致数据异常</font>

事务就是把处理同一事件的不同语句共同执行，报错就全部不执行

```flow
查看/修改事务提交方式
select @@autocommit;
set @@autocommit = 0;

0: 关闭自动提交
1：开启自动提交

开启事务
START TRANSACTION / BEGIN

提交事务 -> 以提交事务为分割，分成不同操作时段（相当于存储成不同的版本）
commit

回滚事件
rollback
```

<font color = 'yellow'>四大特性（ACID）</font>:

- 原子性：事务是不可分割的最小操作单元，要么全部成功，要么全部失败
- 一致性：事务完成时，必须所有数据保持一致状态
- 隔离性：数据库系统提供的隔离机制，保证事务在不受外部并发操作影响的独立环境下运行
- 持久性：事务一旦提交或回滚，它对数据库中的数据的改变就是永久的

### 事务并发问题/事务的隔离级别

```flow
一、由不同的用户在同一时间段同时操作引发的数据错误：

- 1.脏读：一个事务读取到另外一个事务还没有提交的数据

- 2.不可重复读：一个事务先后读取同一条记录，但两次读取的数据不同（同一事务a中执行了两次查询，其中第一次后事务b更新了表导致两次查询语句查到的数据不一致）

- 3.幻读：一个事务按照条件查询数据时，没有对应的数据行，但是在插入数据时又发现这行数据已经存在，好像出现“幻影”（和2类似 -> 唯一冲突）
```


二、事务隔离级别

| **隔离级别** | **脏读** | **不可重复读** | **幻读** |
|:---:|:---:|:---:|:---:|
| 读未提交 (Read Uncommitted) | 可能 | 可能 | 可能 |
| 读已提交 (Read Committed) | 不可能 | 可能 | 可能 |
| 可重复读 (Repeatable Read) | 不可能 | 不可能 | 可能 |
| 可序列化 (Serializable) | 不可能 | 不可能 | 不可能 |

```
读未提交：任何人可以随便进出书库，甚至可以把别人正在修改的书稿拿去看（性能高，但可能看到脏数据）。

读已提交：大家可以在阅览室看任何已上架的书（已提交的数据），但不能打扰正在书库里整理书架的管理员（性能不错，平衡了安全和效率）。

可重复读：你可以借走一本书，在你还回来之前，其他人不能修改它（通过锁或版本控制保证了读取一致性）。

可序列化：图书馆一次只允许一个人进入书库，其他人必须在门口排队等待。绝对安全，但效率极其低下。
```

```flow
- 查看事务隔离级别
SELECT @@TRANSACTION_ISOLATION;

- 设置事务隔离级别
SET [SESSION（仅当前会话）/GLOBAL（所有后创建的会话）] TRANSACTION ISOLATION LEVEL {(隔离级别)}
```

## 存储引擎

```flow
SHOW ENGINS 展示支持引擎

CREATE TABLE xxxx（...）ENGINE = (INNODB)       指定表存储引擎；
```

* InnoDB(默认存储引擎)
  * 特点：
  ```
  1.DML操作遵循ACID模型,支持事务
  2.行级锁，提高并发访问性能
  3.支持外键约束，保证数据完整性和正确性

  {
    表空间 -> 多个段 -> 多个区 -> 多个页 -> 多个行
  }
  ```
  * 文件
  ```
  每一张表对应一个表文件(表名).idb
  ```

* MyISAM(早期存储引擎)
  * 特点
  ```
  1.不支持事务，外键
  2.支持表锁，不支持行锁
  3.访问快（优）
  ```

* Memory
  * 特点
   * 内存存储，数据易丢失
   * <font color = 'LightYellow'>支持hash索引</font>


---
## 索引

<font color = 'Lightyellow'>通过数据结构快速查找想要的目标数据</font>

* 优点
  ```flow
  1.提高数据检索的效率，降低数据库的IO成本
  2.通过索引对数据进行排序，降低数据排序的成本降低cpu消耗：
  ```
* 缺点
  ```flow
  1.索引占用空间
  2.增加了查询效率，降低更新效率
  ```

* 实现
  ```flow
  通过存储引擎实现，不同存储引擎有不同的存储结构
  1.B+Tree  最常见大部分支持
  2.Hash    不支持范围查找 -只能精确匹配
  3.R-tree
  3.Full-text
  ```

* 索引分类
  ```flow
  1.主键索引    ——>自动创建，唯一   PRIMARY
  2.唯一索引    ——>避免重复创建     UNIQUE
  3.常规索引    ——>快速定位特定数据
  4.全文索引    ——>全文索引查找文本关键字，不比较索引值   FULLTEXT

  一、INNODB 特有
  1.聚集索引  Clustered index
    - 将数据存储与索引放到一块，索引结构的叶子节点保留行数据
    - 有且唯一，一定存在
  2.二级索引
    - 将数据和索引分开存储，索引结构的叶子节点关联对应的主键
    - 可以存在多个
  ```

* 索引语法
  ```flow
  1.创建索引
  CREATE [(索引类型)] INDEX index_name索引名 on table_name表名 (index_col_name, ····|需要关联索引的字段名，一个索引可以关联多个字段);

  2.查看索引
  SHOW INDEX FROM table_name;

  3.删除索引
  DROP INDEX index_name ON table_name;
  ```

### 索引的性能分析

* sql 执行频率
  ```flow
  Mysql用户连接后，通过show [session/global] status 命令可以查询服务器状态信息。
  
  通过以下命令可以查看操作（UPDATE DELECt INSERT SELECt）的访问频次
  SHOW GLOBAL STATUS LIKE 'Com______'
  ```
* sql 慢日志(<font color = 'yellow'>linux</font>)
  ```flow
  查询慢日志记录了所有时间超过指定参数的所有sql语句的日志
  Mysql的慢日志查询默认没有开启，需要在mysql的配置文件/etc/my.cnf中配置

  slow_query_log = 1 开启慢日志
  long_query_time = 2 设置时间为两秒

  在慢日志文件/var/lib/mysql/localhostpslow.log 中查看慢日志信息
  ```

* sql profiles
  ```flow
  show profile 能够在做sql优化时提供时间消耗信息

  1.是否支持该操作
  SELECT @@have_profiling

  2.设置
  SET profiling = 1 开启

  3.操作

  查看每一条sql的耗时
  show profiles

  查看指定query——id 的sql语句各个阶段的耗时情况
  show profile for query query_id

  查看指定query——id的sql语句的使用情况
  show profile cpu for query query_id
  ```

* explain执行计划
  ```flow
  EXPLAN 或者 DESC命令获取Mysql 如何执行SELECT 语句的信息，包括执行过程中表现如何连接的顺序

  1.直接在SELECt语句之前加上关键字（explain/desc）

  
  2.主要作用：
  查询优化：发现慢查询的原因

  索引优化：验证索引是否被正确使用

  数据库设计：指导表结构和索引设计

  性能调优：识别性能瓶颈并进行优化
  ```

---
### 索引使用原则

索引失效
* 最左前缀法则(针对联合索引)
  - 1.索引了多列，遵守此法则：查询从最左列开始，最左边列数据必须存在，不跳过索引中的列

  - <font color = lightyellow>2.！！！如果查询条件跳过了某一列（<font color = 'yellow'>包括 > / < </font>），索引将会部分失效（跳过的这一列后的索引失效）</font>
  - 尽量使用 = >= <=,进行查询
  
* 函数运算
* 字符串类型不加单引号 
* 模糊匹配
  - 只能在尾部进行
  - 头部会导致索引失效
* or 连接的条件前后一个有一个没有
* 数据分布影响：系统认为使用索引更慢


SQL提示（同一字段拥有多个索引）
```flow
在from + 表名 + 提示 中使用

1.use index() 推荐索引

2.ignore index() 忽略索引

3.force index() 强制索引
```

覆盖索引
* 查询使用了索引，并且需要返回的列在索引中已经能够全部找到 ——> 减少select *


前缀索引
* 字符串类型时，有时候需要很长的字符串，这会让索引变的很大，此时可以只将字符串前缀的一部分建立索引提高效率
  ```flow
  create index id_xxxx on table_name(column(n)前缀长度)
  ```

## sql优化

* 插入数据 —— INSERT
  - 批量操作（一次）
  - 事务提交
  - 主键顺序插入
  - 大批量数据建议使用 load指令
  ```flow
  #客户端连接服务端时，加上参数 --local-infile
  1.mysql --local-infile -u root -p 

  #设置全局变量local——infile为1，开启从本地加载文件导入的开关
  2.set global local_infile = 1;

  #执行load指令将准备好的数据加载到结构表中
  3.load data local infile 'root/sql1.log（本地磁盘文件）' into table '表名' fields terminated by 【','】（用什么分割字段和数据） lines terminated by 【'\n'】（每一行数据用什么分割）

* 主键优化
  - 尽量降低主键长度
  - 插入时，尽量顺序插入，使用自增主键AUTO_INCREMENT
  - 尽量不适用UUID做主键或者是其他自然主键，如身份证
  - 业务操作时，避免主键修改

* order by优化
```flow
默认order by排序：
1.Using filesort: 通过表索引或全表扫描，读取符合条件的数据，在缓冲区完成排序操作
2.Using index： 通过有序索引顺序表扫描直接返回有序数据，不需要额外排序
```
  - 建立合适的索引
  - 尽量使用覆盖索引
  - 多字段排序，升降不一，此时需要在联合索引创建时期限定（ASC/DESC）
  - 不可避免使用filesort时，可以适当增加缓冲区大小sort_buffer_size

* group by 优化
  - 创建适当索引

* limit（分页） 优化 <font color = 'yellow'>???</font>
  - 创建覆盖索引
  - 覆盖索引 + 子查询

* count优化
```flow
判断值是否为空，不为空计数为空不计数
```
  - 创建变量自己记录

* update 优化
```
1.行锁：不同用户通过事务操作同一个表时，如果该字段有索引a操作的行和b不同，也可以同时进行操作
2.没有索引，就会锁住整张表，降低性能

## 视图

* 一种虚拟存在的表，视图中的数据不在数据库中实际存在，行列数据来自于自定义视图查询中使用的表，<font color = 'lightyellow'>并且在使用视图时动态生成

* 特点/作用
  ```flow
  1.可以对表的数据和操作进行限定
  2.视图行行对应才能更新，如果一个数据修改涉及多个数据行无法更新

  ————————————————————————————————————————————————————————

  1.操作简单，简化复杂操作
  2.安全
  3.数据独立
  ```

* 操作语法
  ```flow
  1.创建视图
  CREATE 【OR REPLACE】 VIEW 视图名称 AS SELECT 【WITH【？】】
  - （CASCADED/LOCAL）CHECK OPTIOM -> 检查每一次操作的数据是否符合条件
  - CASCADED：检查当前视图依赖的所有视图条件
  - LOCAL：检查当前视图依赖的所有!!!有定义检查选项！！！的视图条件
  ```

2.查询创建的视图
SHOW CREATE VIEW 名称

3.修改
CREATE 【OR REPLACE】 VIEW 视图名称 AS SELECT 【WITH【】】

4.删除
DROUP VIEW IF EXIST （名称）

5。插入数据

# 存储过程
sql层面上的函数，封装了sql语句，可以根据不同场景采用不同的存储过程对数据进行存储，减少开发人员对数据库的操作

## 存储操作
```flow
1.创建存储过程  ---> 需要先用delimiter 指定sql函数外部语句结束符号，避免函数内语句被系统判定语句结束
CREATE PROCEDURE 方法名（【参数列表】）
BIGIN
 --sql语句 
END：

2.调用
CALL 名称（参数）

3.查看
SELECT * FROM information_schema.ROUTNES where ROUTTNE_SCHEMA = 'itcast';

show create procefure (函数名)

4.删除
DROP procedure if exist (名称)
``` 

### 语法结构

* 变量
  * 系统变量（@@__）
  ```flow
  1.全局变量
  2.会话变量

  #具体操作 -> 系统重启后修改回自动返回默认值（永久保留需修改系统文件）
  show （级别） variables （条件）查看系统变量

  set （级别） 变量名 = （）；
  ```
  * 自定义变量(@__)
  ```flow
  只作用于当前会话

  SET @var_name1 := expr, @var_name2 = expr....
  SELECT @var_name := expr ,.....
  SELECT
  ```

 * 局部变量 ->方法内使用
  ```flow
  1.定义
  DECLARE 变量名 变量类型【】

  2.赋值
  SET 变量名 = 值
  SET 变量名 := 值
  SELECT 字段名 INTO 变量名 FROM 表名
  ```

  * if 条件判断
  ```flow
  IF 条件1 THEN （）
  ELSEIF 条件2 THEN （）
  ELSE 
  END IF;
  ```

* 函数参数
  ```flow
  IN 输入参数
  OUT 输出参数
  INOUT 即可输入也可输出

  参数设置
  函数类型 变量名 数据类型
  ```

  * CASE
  ```flow
  1.
  CASE case_value
    WHEN value1 THEN ()
    WHEN...
    else()
  END case;

  2.
  CASE 
    WHEN search_condition1(条件) THEN ()
    WHEN...
    else（非法）
  END case;
  ```
* 循环
  * WHILE
  ```flow
  WHILE 条件 DO （）条件为true执行
    swl
  END WHILE；
  ```

  * REPEAT
  ```flow
  REPEAT
    sql
    UNTL 条件 （先执行一次，不满足就继续执行）
  END REPEAT
  ```
  * loop
  ```flow
  loop实现简单循环，如果不在sql逻辑在增加退出循环退出条件，可实现简单死循环
  LEVAVE：退出循环
  ITERATE：逃过当前循环剩下的语句

  LOOP
    sql
  END LOOP；
  ```

* 游标 CURSOR
  ```flow
  用来存储查询结果的数据类型

  1.申明游标
  DECLARE 游标名 CURSOR FOR  查询语句；

  2.打开游标
  OPEN 名

  3.获取游标记录
  FETCH 名 INTO 变量，...

  4.关闭
  CLOSE 游标名
  ```

* 条件处理程序(类似于异常抛出)
  ```flow
  DECLARE hander_action HANDLER FOR condition_value,[condition_value]（状态码）... statement（操作语句）;

  hander_action
    continue 继续执行
    exit 终止

  condition_value
    SQLATATE sqlstate_value:状态码
    SQLWARNING：  所有01开头的SQLSTATE代码简写
    NOT FOUND：  所有02开头的SQLSTATE代码简写
    SQLEXCEPTION：  所有没有被SQLWARNING 和 NOT FOUND 捕获的代码简写
  ```


### 存储函数

```flow
CREATE FUNCTION 函数名（参数{只能是in类型}）
RETURNS type（返回值类型） [characteristic]（函数类型）
BIGIN
  --sql语句
  RETURN...;
END;

characteristic:
* DETERMINSTIC 输入相同参数返回一样结果
* NO SQL 无sql语句
* READS SQL DATA：只读不写
```

## 触发器

用户自定义的特定操作引发的操作

* 类型 + （new新增数据/old之前的数据）
  - INSERT
  - UPDATE
  - DELETE

* 语法
  ```flow
  1.创建
  CREATE TRIGGER 名称
  BEFORE/AFTER（之前触发/之后触发） 类型
  ON 表名 （行级FOR EACH ROW/语句级）
  BEGIN
    具体逻辑
  END；

  2.删除
  SHOW TRIGGERS；

  3.DROP TRIGGER [数据库名] 触发器名
  ```

## 锁

* 类型
  - 全局锁
  ```flow
  全局锁锁
  flush tables with read lock 全局

  解锁
  unlock tables
  ```
  - 表级锁
  ```flow
  1.读锁rees lock（只能读）
  2.写锁write lock（不能读不能写）
  3.元数据锁 meta data lock 自动添加（有事务无法更改表结构）
  4.意向锁 自动添加 在用户创建表锁时减少检查行锁冲突的运行时间 

  lock tables 表名 1/2
  unlock tables
  ```
  - 行级锁
  ```flow
  1.行锁
   - 排他锁
   - 共享锁
  2.间隙锁 防止在两个数据间插入数据
  3.临键锁 1+2
  ```

## innoDB引擎

* <font color = 'yellow'>MVCC多版本并发控制</font>

