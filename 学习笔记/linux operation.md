# linux

基础文件
|目录	|功能说明|
|:--|:--|
|/bin/	|基本系统命令，如 ls, cp, mv 等，所有用户可用|
|/boot/	|启动相关文件，包括内核（vmlinuz）、initramfs、GRUB 配置|
|/dev/	|设备节点，如 /dev/sda1 表示第一个硬盘的第一个分区|
|/etc/	|系统配置文件，如 nginx.conf, ssh/sshd_config, fstab|
|/home/	|普通用户的家目录，每个用户有独立空间（如 /home/zhangsan）|
|/lib/	|系统共享库（.so 文件），支持 /bin 和 /sbin 中的程序|
|/media/|	自动挂载可移动设备（U盘、光盘）的默认位置|
|/mnt/	|手动挂载其他设备的位置（如服务器共享磁盘）|
|/opt/	|第三方软件安装目录，如 Oracle、Adobe 等|
|/root/	|root 用户的主目录，不是 /home/root|
|/sbin/	|系统管理员使用的命令，如 fdisk, ifconfig, shutdown|
|/srv/	|服务数据存放地，如网站文件放在 /srv/www/html|
|/tmp/	|临时文件目录，重启后清空|
|/usr/	|用户程序和资源，是系统软件的主要存储区|
|/var/	|可变数据，如日志（/var/log）、邮件队列、数据库文件等|
|/proc/	|虚拟文件系统，提供进程和内核信息（如 /proc/cpuinfo）|
|/sys/	|内核对象和设备信息的接口，用于系统监控和驱动管理|
|/lost+found/	|文件系统检查工具（fsck）恢复的丢失文件|

## 命令

### 关机

* ```sync```数据写入同步到硬盘
* 关机
  * ```shutdown``` 关机
  * ```shutdown -h now(时间)```立即（时间后）关机
  * ```shutdown -r now(时间)```立即（时间后）关机

### 用户
***操作***
1.```sudo adduser username```创建并且自动创建家目录
2.```sudo passwd username```设置密码不然无法登录
3.```su - username```切换用户

***权限***
* 由10长度字符组成分别是->(文件类型)|该文件所拥有者权限|同组用户权限|其他用户权限

* ```ls/ls-l``` 查询
* ```chgrp [-R] 属组名 文件名``` 更改文件属组
* ```chown [–R] 所有者 文件名 | chown [-R] 所有者:属组名 文件名```更改文件所有者（owner），也可以同时更改文件所属组
* ```chmod```更改文件9个属性
  * 分数表
    ```
    r:4
    w:2
    x:1
    ```
### 磁盘管理

```df [-ahikHTm] [目录或文件名]```
选项与参数：

-h：以人类可读的方式显示输出结果（例如，使用 KB、MB、GB 等单位）。

-T：显示文件系统的类型。

-t <文件系统类型>：只显示指定类型的文件系统。

-i：显示 inode 使用情况。

-H：该参数是 -h 的变体，但是使用 1000 字节作为基本单位而不是 1024 字节。这意味着它会以 SI（国际单位制）单位（例如 MB、GB）而不是二进制单位（例如 MiB、GiB）来显示磁盘使用情况。

-k：这个选项会以 KB 作为单位显示磁盘空间使用情况。

-a：该参数将显示所有的文件系统，包括虚拟文件系统，例如 proc、sysfs 等。如果没有使用该选项，默认情况下，df 命令不会显示虚拟文件系统。

### vim

以下是普通模式常用的几个命令：
- i -- 切换到输入模式，在光标当前位置开始输入文本。
- x -- 删除当前光标所在处的字符。
- : -- 切换到底线命令模式，以在最底一行输入命令。
- a -- 进入插入模式，在光标下一个位置开始输入文本。
- o：在当前行的下方插入一个新行，并进入插入模式。
- O -- 在当前行的上方插入一个新行，并进入插入模式。
- dd -- 剪切当前行。
- yy -- 复制当前行。
- p（小写） -- 粘贴剪贴板内容到光标下方。
- P（大写）-- 粘贴剪贴板内容到光标上方。
- u -- 撤销上一次操作。
- Ctrl + r -- 重做上一次撤销的操作。
- :w -- 保存文件。
- :q -- 退出 Vim 编辑器。
- :q! -- 强制退出Vim 编辑器，不保存修改。


### yum

* yum 语法
* yum [options] [command] [package ...]
    - options：可选，选项包括-h（帮助），-y（当安装过程提示选择全部为 "yes"），-q（不显示安装的过程）等等。
    - command：要进行的操作。
    package：安装的包名。
* yum常用命令
    1. 列出所有可更新的软件清单命令：yum check-update

    2. 更新所有软件命令：yum update

    3. 仅安装指定的软件命令：yum install ```<package_name>```

    4. 仅更新指定的软件命令：yum update ```<package_name>```

    5. 列出所有可安裝的软件清单命令：yum list

    6. 删除软件包命令：yum remove ```<package_name>```

    7. 查找软件包命令：yum search ```<keyword>```

    8. 清除缓存命令:
        ```linux
        yum clean packages: 清除缓存目录下的软件包
        yum clean headers: 清除缓存目录下的 headers
        yum clean oldheaders: 清除缓存目录下旧的 headers
        yum clean, yum clean all (= yum clean packages; yum clean oldheaders) :清除缓存目录下的软件包及旧的 headers
        ```

> [!important]
> 配置国内的yum源需要最新的路径，以前或ai生成大部分失效


### apt

* apt [options] [command] [package ...]
  * options：可选，选项包括 -h（帮助），-y（当安装过程提示选择全部为"yes"），-q（不显示安装的过程）等等。
  * command：要进行的操作。
  * package：安装的包名。
* apt 常用命令
    - 列出所有可更新的软件清单命令：```sudo apt update```

    - 升级软件包：```sudo apt upgrade```

    - 列出可更新的软件包及版本信息：```apt list --upgradable```

    - 升级软件包，升级前先删除需要更新软件包：```sudo apt full-upgrade```

    - 安装指定的软件命令：```sudo apt install <package_name>```

    - 安装多个软件包：```sudo apt install <package_1> <package_2> <package_3>```

    - 更新指定的软件命令：```sudo apt update <package_name>```

    - 显示软件包具体信息,例如：版本号，安装大小，依赖关系等等：```sudo apt show <package_name>```

    - 删除软件包命令：```sudo apt remove <package_name>```

    - 清理不再使用的依赖和库文件:``` sudo apt autoremove```

    - 移除软件包及配置文件: ```sudo apt purge <package_name>```

    - 查找软件包命令：``` sudo apt search <keyword>```

    - 列出所有已安装的包：```apt list --installed```

    - 列出所有已安装的包的版本信息：```apt list --all-versions```

## shell

* 脚本创建
  - 头部```#!/bin/bash```规定用哪一种shell执行
* 脚本运行
  - 需要可执行权限x

### 变量

* 用于存储数据
* 加上```$```调用数据

***变量***
- 设置只读变量```readonly '变量名'```
- 删除变量```unset '变量名'```

重要类型定义
- 数组（用的括号）
- 关联数组```declare -A '数组名'```
  - 赋值```associative_array["name"]="John"```
- 字符串
  - ```'单引号'```无法在字符串中拼接变量
  - ```"双引号"```可以调用变量拼接
  - ```${'变量名':头:尾}```提取字符串
  - ```(`expr index "$变量名" io`)```查找字符i或o的位置

#### dclare声明变量
✅ 一、declare 常用选项速查表
|选项|	作用|	示例|
|:--|:--|:--|
|-A	|声明关联数组|	declare -A map|
|-a	|声明普通索引数组（通常可省略）|	declare -a arr|
|-r	|声明只读变量（不可修改/删除）	|declare -r PI=3.14|
|-x	|将变量导出为环境变量（等价于 export）|	declare -x LANG=en_US|
|-i	|声明整数变量（算术运算自动处理）	|declare -i count=0|
|-l	|小写转换（赋值时自动转小写）	|declare -l name; name="ALICE" → "alice"|
|-u	|大写转换（赋值时自动转大写）	|declare -u name; name="alice" → "ALICE"|
|-t	|设置调试跟踪属性（配合 set -o functrace）|	declare -t func|
|-p	|打印变量定义（显示类型和值）	|declare -p var|

### 参数传递

|参数|描述|
|:--|:--|
|$'数字'| 第几个参数（一般第0个是脚本文件名）|
|$#	|传递到脚本的参数个数|
|$*	|以一个单字符串显示所有向脚本传递的参数。如"$*"用「"」括起来的情况、以"$1 $2 … $n"的形式输出所有参数。|
|$$	|脚本运行的当前进程ID号|
|$!	|后台运行的最后一个进程的ID号|
|$@	|与$*相同，但是使用时加引号，并在引号中返回每个参数。如"$@"用「"」括起来的情况、以"$1" "$2" … "$n" 的形式输出所有参数。|
|$-	|显示Shell使用的当前选项，与set命令功能相同。|
|$?	|显示最后命令的退出状态。0表示没有错误，其他任何值表明有错误。|


### 算术运算符

> [!important]
> 条件表达式要放在方括号之间，并且要有空格，例如: [$a==$b] 是错误的，必须写成 [ $a == $b ]。

> [!important]
> ```(val=`expr $a + $b`)``` expr是什么不能直接```$a+$b```吗  
> 直接写会被当成字符串拼接  
> ```expr```是·一个外部命令用于整数计算
> ```$(())```更好的用法

***关系运算符***  
- 关系运算符只支持数字，不支持字符串，除非字符串的值是数字。
- 假定变量 a 为 10，变量 b 为 20：
  
  |运算符	|说明|举例|
  |:---|:---|:---|
  |-eq	|检测两个数是否相等，相等返回 true。|	[ $a -eq $b ] 返回 false。|
  |-ne	|检测两个数是否不相等，不相等返回 true。|	[ $a -ne $b ] 返回 true。|
  |-gt	|检测左边的数是否大于右边的，如果是，则返回 true。	|[ $a -gt $b ] 返回 false。|
  |-lt	|检测左边的数是否小于右边的，如果是，则返回 true。	|[ $a -lt $b ] 返回 true。|
  |-ge	|检测左边的数是否大于等于右边的，如果是，则返回 true。|	[ $a -ge $b ] 返回 false。|
  |-le	|检测左边的数是否小于等于右边的，如果是，则返回 true。|	[ $a -le $b ] 返回 true。|


***布尔运算符***
- 假定变量 a 为 10，变量 b 为 20：

|运算符	|说明|	举例|
|:--|:--|:--|
|!	|非运算，表达式为 true 则返回 false，否则返回 true。	|[ ! false ] 返回 true。|
|-o	|或运算，有一个表达式为 true 则返回 true。	|[ $a -lt 20 -o $b -gt 100 ] 返回 true。|
|-a	|与运算，两个表达式都为 true 才返回 true。	|[ $a -lt 20 -a $b -gt 100 ] 返回 false。|


***字符串运算符***
- 假定变量 a 为 "abc"，变量 b 为 "efg"：

|运算符|	说明|	举例|
|:---|:---|:---|
|=	|检测两个字符串是否相等，相等返回 true。|	[ $a = $b ] 返回 false。   |   
|!=	|检测两个字符串是否不相等，不相等返回 true。|	[ $a != $b ] 返回 true。|  
|-z	|检测字符串长度是否为0，为0返回 true。|	[ -z $a ] 返回 false。       | 
|-n	|检测字符串长度是否不为 0，不为 0 返回 true。|	[ -n "$a" ] 返回 true。| 
|$	|检测字符串是否不为空，不为空返回 true。|	[ $a ] 返回 true。         | 


***文件测试运算符***
- 文件测试运算符用于检测 Unix 文件的各种属性。

|操作符	  |说明	|举例|
|:---|:---|:---|
|-b file	|检测文件是否是块设备文件，如果是，则返回 true。|	[ -b $file ] 返回 false。|
|-c file	|检测文件是否是字符设备文件，如果是，则返回 true。|	[ -c $file ] 返回 false。|
|-d file	|检测文件是否是目录，如果是，则返回 true。	|[ -d $file ] 返回 false。|
|-f file	|检测文件是否是普通文件（既不是目录，也不是设备文件），如果是，则返回 true。|	[ -f $file ] 返回 true。|
|-g file	|检测文件是否设置了 SGID 位，如果是，则返回 true。	|[ -g $file ] 返回 false。|
|-k file	|检测文件是否设置了粘着位(Sticky Bit)，如果是，则返回 true。|	[ -k $file ] 返回 false。|
|-p file	|检测文件是否是有名管道，如果是，则返回 true。|	[ -p $file ] 返回 false。|
|-u file	|检测文件是否设置了 SUID 位，如果是，则返回 true。|	[ -u $file ] 返回 false。|
|-r file	|检测文件是否可读，如果是，则返回 true。|	[ -r $file ] 返回 true。|
|-w file	|检测文件是否可写，如果是，则返回 true。|	[ -w $file ] 返回 true。|
|-x file	|检测文件是否可执行，如果是，则返回 true。|	[ -x $file ] 返回 true。|
|-s file	|检测文件是否为空（文件大小是否大于0），不为空返回 true。|	[ -s $file ] 返回 true。|
|-e file	|检测文件（包括目录）是否存在，如果是，则返回 true。|	[ -e $file ] 返回 true。|


### echo

高级用法
1. 输出到文件
使用重定向将输出保存到文件：
```echo "This will be saved to file" > output.txt```
2. **追加**内容到文件：
```echo "Additional line" >> output.txt```


### printf

1. 格式控制：可以指定字段宽度、精度和对齐方式
2. 类型安全：不同类型的数据（整数、浮点数、字符串等）有对应的格式说明符
3. 可移植性：行为在不同系统和Shell中更加一致
4. 复杂输出：适合生成表格、报表等结构化输出

***语法```printf  format-string  [arguments...]```***
- ```format-string```：包含普通字符和**格式说明符**的字符串
  - 格式说明符由 % 字符开始，后跟一个或多个字符，用于指定输出的格式。常用的格式说明符包括：
    ```
    %s：字符串
    %d：十进制整数
    %f：浮点数
    %c：字符
    %x：十六进制数
    %o：八进制数
    %b：二进制数
    %e：科学计数法表示的浮点数
    ```
- ```arguments...```：与格式说明符对应的变量或值

### test

语法格式```test EXPRESSION```

运算符```https://www.runoob.com/linux/linux-shell-test.html```

### 流程控制

> [!warning]
> 流程控制语句不能为空

* ```for```循环
  ```
  for var in item1 item2 ... itemN
  do
      command1
      command2
      ...
      commandN
  done
  ```
* ```while```
  ```
  while condition(条件)
  do
      command
  done
  ```
* ```until``` 循环执行一系列命令直至条件为 true 时停止。
* ```case in```多选择语句

### 函数

**定义**
```
[ function ] funname [()]
{
    action;

    [return int;]
}
```

> [!Tip]
> 函数在调用时也可以使用参数


# 实操

## 配置yum镜像

```linux
# 创建备份目录
sudo mkdir -p /etc/yum.repos.d/backup
# 将现有的 repo 文件移动到备份目录
sudo mv /etc/yum.repos.d/*.repo /etc/yum.repos.d/backup/

#下载现有的repo文件
（下载阿里云镜像配置文件）
sudo curl -o /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo

# 清理旧缓存
sudo yum clean all

# 生成新缓存
sudo yum makecache
```

* ```curl```文本传输工具
* ```-o```指定下载路径
* ```/etc/yum.repos.d/CentOS-Base.repo```yum源仓库

## mysql安装

* 先下载mysql的源文件```rpm -Uvh https://dev.mysql.com/get/mysql80-community-release-el7-11.noarch.rpm```
  * 添加 Repo 文件：在 /etc/yum.repos.d/ 目录下生成两个文件：```mysql-community.repo 和 mysql-community-source.repo。```

  * 导入密钥：配置好官方的 GPG 数字签名密钥，确保以后下载的 MySQL 安装包是官方正版，没被篡改过。
* 然后yum安装```yum install -y mysql-community-server --nogpgcheck```
* 获取临时密码用于登录```grep 'temporary password' /var/log/mysqld.log```

## tomcat

* 直接yum安装（目录：usr/share/tomcat）
* 配置值目录下（/conf/tomcat.conf）
  ```
  1.JAVA_OPTS="-Djava.security.egd=file:/dev/urandom -Djava.awt.headless=true -Xmx1026 -XX:MaxPermSize=256m -XX:UseConcMarkSweepGC“
  ```
  * ```-Djava.security.egd=file:/dev/urandom```
    * 作用：加快随机数生成。
    * 背景：Java 的 SecureRandom 类在生成随机数时（如生成 Session ID），默认可能使用 /dev/random。在 Linux 负载不高时，该文件会产生阻塞，导致 Tomcat 启动极慢。改用 /dev/urandom 可以解决启动卡死/缓慢的问题。
  * ```-Djava.awt.headless=true```
    * 作用：开启“无头”模式。
    * 背景：告诉 Java 运行环境，当前服务器没有显示器、键盘和鼠标。这对于在服务器上运行需要处理图形（如生成验证码、导出报表图片）的程序是必须的。
  * ```Xm1024```设置最大内存
  * ```-XX:MaxMePermSize=256m```设置最大永久存储代码
  * ```-XX:+UseConcMarkSweepGC```作用：指定使用 CMS（Concurrent Mark Sweep） 垃圾回收器
* 下载管理员程序```sudo yum install tomcat-webapps tomcat-admin-webapps```
* 配置用户```添加用户信息<user username="admin" password="passsword" roles="manager-gui,admin-gui"/>```
  * ```username``` 用户名
  * ```password```  密码
  * ```roles``` 管理权限（可以设置多个）
    * ```manager-gui```允许访问页码```/manager/html/
    * ```admin-gui```允许访问```/host-manager/html```
    * ```manager-script```纯脚本接口
    * ```manager-jmx```用于远程监控tomcat指标
    * ```manager-status```只读