# Maven

* 本质：是一个项目管理工具，将项目的开发抽象成项目一个项目对象的模型(Pom)
* Pom: 项目对象
* <font color = "yellow">避免不同项目/资源版本之间的冲突问题</font>

## 仓库

* 存放资源，架包
* 资源获取:
    * (你) <- 本地（如果没有，从私服中拿）<- 私服 <- 中央仓库
    * 本地：自己电脑上的
    * 私服：部门/公司维护--特点：<font color = "yello">自我研发，防止技术外露</font>
    * Maven：官方维护（只有开源资料）

* 镜像配置
  
        <mirror>
        <id>mirrorId</id> -> 取名
        <mirrorOf>repositoryId</mirrorOf> -> 镜像对象(中央，私人)//哪些仓库使用这个镜像
        <name>Human Readable Name for this Mirror.</name>
        <url>http://my.repository.com/repo/path</url>
        </mirror>

        暂时不知道什么用；
        <mirror>
        <id>maven-default-http-blocker</id>
        <mirrorOf>external:http:*</mirrorOf>
        <name>Pseudo repository to mirror external repositories initially using HTTP.</name>
        <url>http://0.0.0.0/</url>
        <blocked>true</blocked>
        </mirror>

* IDEA配置
```flow
  //表头（？？？）
  <?xml version="1.0" encoding="UTF-8"?>
  <project xmlns="http://maven.apache.org/POM/4.0.0"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
      <modelVersion>4.0.0</modelVersion>

      <groupId>org.example</groupId>  //组ID是什么包中
      <artifactId>MavenTest</artifactId>  //项目名称
      <version>1.0-SNAPSHOT</version> //版本
      <packaging>jar</packaging>  //做的是什么(多种，这里做的是jar包)

      <properties>
          <maven.compiler.source>17</maven.compiler.source>
          <maven.compiler.target>17</maven.compiler.target>
          <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
      </properties>

      <!-- 添加阿里云镜像 -->
      <repositories>
          <repository>
              <id>aliyun</id>   //库的名称
              <url>https://maven.aliyun.com/repository/public</url> //库的地址
              <releases>
                  <enabled>true</enabled>
              </releases>
              <snapshots>
                  <enabled>true</enabled>
              </snapshots>
          </repository>
      </repositories>

      <dependencies>
          <!-- 使用广泛兼容的 4.12 版本 -->
          <dependency>
              <groupId>junit</groupId>    //要用到的数据架包的名称
              <artifactId>junit</artifactId>  //数据库定位，方便查找
              <version>4.13.2</version> //版本号
              <scope>test</scope> //生效范围
          </dependency>
      </dependencies>
  </project>
```

scope生效范围

|Scope	 |   说明	 | 主代码可用？|	测试代码可用？	|会打包？|
|:-----:|:-----:|:-----:|:-----:|:-----:|	
compile	|  默认值。   |是| 是 |  是	
test	  |  仅用于测试 | 否 | 是 | 否	
provided|	容器或JDK已提供 |  是 | 是 | 否	
runtime	| 编译不需要，运行需要 | 否 | 是 |是	
system	|与provided类似但需显式提供路径	| 是 | 是	| 否


###  资源坐标

//mvn repository 资源搜索;

* 定位仓库资源的变量

* 坐标的定义(命名方式)
  * groupId：定义当前定义的组织
  * artifacetId: 定义当前Maven的项目名称
  * version：定义当前的版本号
  
* packaging: 打包方式




## maven方法/生命周期

<font color = "yellow">在pom.xml文件所在位置才可以运行</font>

* clean
  * 清理编译文件，缓存数据等
* validate
  * 检查pom.xml文件是否正确
* compile
  * 编译项目源代码
* test
  * 执行单元测试用例
* package
  * 打包成jar或war
  * 在之前会先执行编译和测试，如果错误则不会执行
* verify
  * 检测代码/jar包质量
* install
  * 安装到setting中设置的仓库中
* site
  * 生成项目的站点文档（网站）
* deploy
  * 发送到仓库（公司/中央）(nexus)

## 依赖管理

    <dependencies>
        <dependency>
        <groupId>junit</groupId>
        <artifactId>junit</artifactId>
        <version>3.8.1</version>
        <scope>test</scope>
        </dependency>
    </dependencies>       

    <dependenceyManagement>

* dependenceyManagement中的依赖不会无条件自动继承到子模块中 -> 降低父子模块的耦合度

* scope
  * 表示这个jar包使用的范围
  * compile 默认（编译运行都要）
  * provided （编译需要）
  * test （测试需要）
  * runtime （运行需要，测试不要）
  * system （在本地文件系统提供，需要提供路径   //容易忽略
```flow    
     <systemPath>${basedir}/文件地址</system>
```

* 依赖传递
  * jar包1 -> 依赖了2和3
  * 2和3，IDEA也会下载

* 依赖冲突
  * jar包1和2 依赖了不同版本的同一jar包3
  * IDEA处理
    * 会优先路径最短的；
    * 路径层级相同，会使用最先声明的

```flow

    //方法一：排除路径依赖

    <dependencies>
            <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>3.8.1</version>
            //排除
                <exclusions>
                    <exclution>
                        <groupId> ??? </groupId>
                        <artifactId> ??? </artifactId>
                    </exclution>
                </exclusions>
            <scope>test</scope>
            </dependency>
        </dependencies> 

    
    //方法二：添加optional

    <dependencies>
        <dependency>
        <groupId>junit</groupId>
        <artifactId>junit</artifactId>
        <version>3.8.1</version>
        //这里添加
        <optional>true</optional>

        <scope>test</scope>
        </dependency>
    </dependencies>

    //不同方法作用对象不同
```

* properties标签
  * 一个全局标签：类似于全局变量
  * 通过${名称}引用


## maven命令行创建（cmd）
空目录运行

命令("-"也是命令)：
* mvn archetyoe:gennerate
  -DgroupId = {project-packaging}   //项目文件名
  -DartifactId = {project-name}     //做的什么项目（java-project,wev- project）
  -DarchetypeArtifactId = maven-archetype-quickstart    //采用的maven架构
  -Dversion = 版本号；
  -DinteractiveMode = false 


## 设计理念：分模块开发设计

<font color = "orange">特点</font>
* 模块划分
  * 不同的模块完成不同的独立功能
  * 模块之间通过接口相互配合


### 聚合:(把模块合并)
  * 定义：由一个统一的模块控制项目中所有的模块的更新和指令运行
  * 父级目录管理工程
```flow  
     <packaging>pom</packaging> //定义是管理目录

     //管理的列表
     <modules>
        <module>名称</module>
        ...
    </modules>
```

### 继承：直接在管理模块中配置依赖：

* 属性：（类似变量）大家一起用其中的属性；

### 配置环境：
  
 * 多环境配置
```flow
    <prifiles>
    //1
        <profile>
            <id>
        <profile>
    //2
        <profile>
            <id>包名
            <propertise> //配置内容
        <profile>
    <prifiles>
```
    * install -P 环境名（启动环境）



## 私服仓库

* nexus:
  * 我的本地私服命名：nexus3

* 配置用户名和密码(用于不允许匿名访问时)

```flow
    <server>
        <id></id>   //私服仓库id
        <username> admin </username>//用户名(默认)
        <password> went20060506 </password>//密码(默认)
    </server>
```


### 上传jar包

* 快照版本(版本号是否有SNAPSHOT)

```flow
    <distributionManagement>
        <snapshotRepository>
            <id>//仓库名
            <url>//地址(网络仓库)
        <snapshotRepository>
    <distributionManagement>
```

* 正式版本

```flow
    <distributionManagement>
            <repository>
                <id>
                <url>//地址(网络仓库)
            </repository>
    <distributionManagement>
```