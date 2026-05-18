# Spring

***项目结垢***
* 把项目中的功能不断的细分，划分呢为一个个模块
* 通过.xml文件管理不同功能之间的关系

***项目创建***
* maven
* 子模块（一个功能）
* 配置添加spring依赖

***log4j***
* 依赖添加
* 资源库生成配置文件
  * ```loggers```：控制日志输出去向
    * console 控制台
    * file 文件
  * appender
    * console 控制台输出配置
    * RollingFile 文件输出配置
  * Properties 日志格式

## loC容器


### bean管理

> [!important]
> 要先在.xml配置文件中管理设置bean

***获取bean***
* ```ApplicationContext```获取
  *方法```.getBean(id,类型)```
* 依赖注入

> [!Tip]
> 多个类可以通过实现同一个接口接口来用bean共同管理

***生命周期***
1. bean对象创建
2. 设置相关属性
3. bean后置处理（初始化之前）
4. bean对象初始化（调用指定的初始化方法）
5. bean后置处理器（初始化后）
6. bean创建完成可以使用了
7. bean对象销毁 （配置指定销毁的方法）
8. loC容器关闭

#### 依赖注入（注解）

* setter方法
* 构造器注入
* ```@Autowired```注解自动注入

> [!waring]
> ```setter```必须设在实现类中设置了set方法  
> setter注入会读取set（...）方法后的类名进行注入

***常见注入用注解***
```java
@Value //用于将application.properties中的配置导入
@Qualifier  //当有多个接口实现类时，具体指定
@Resource //注入第三方资源按名称匹配
```
***扫描加入bean的注解
|注解  |作用范围|  语义解释|  
|:---|:---|:---|
|@Component | 通用组件|  当你不知道这个类属于哪一层时使用。|
|@Service  |业务逻辑层  |标注在 Service 实现类上，表示这是处理核心业务的逻辑。|
|@Repository|数据访问层 |标注在 DAO 或 Mapper 实现类上，它还会自动处理数据库异常转换。|
|@Controller|控制层 |标注在 Spring MVC 的控制器上，用于接收 HTTP 请求。@Configuration配置类标注在类上，表示这个类是用来定义和注册更多的 Bean 的。|


***作用***
> [!important]
> 在使用到其他类的时候bean会帮助你创建java实例  
> 通过springboot提供的方法或者读取注解，直接俄作为参数传递  
> 可以通过接口获取到所有实现此接口的map  

构造器注入示例
```java
@Service
public class PaymentContext {

    // 1. 声明为 final，保证线程安全且一旦初始化不可更改
    private final Map<String, PaymentStrategy> strategyMap;

    /**
     * 2. 构造器注入
     * Spring 看到这个构造函数，会自动去容器里搜集所有 PaymentStrategy 的实现类，
     * 并把它们的 BeanName 作为 Key，实例作为 Value 组装成 Map 传进来。
     */
    @Autowired // 如果类只有一个构造函数，这个注解甚至可以省略
    public PaymentContext(Map<String, PaymentStrategy> strategyMap) {
        this.strategyMap = strategyMap;
    }
}
```
##### 实例（注解）

```java
@Scope("singleton")//单实例
@Scope("prototype")//多实例
```

#### XML（文件）

***常用属性***
* ```<bean>```在bean中注入一个class
* ```<property>```类属性 --- 可以通过一些标签属性赋值
* ```<list> <value></value>  </list>```列表
* ```<array>```数组
* ```<Map><entry><key><value(键)></key>（值,任意类型）</entry></map>```Map
* 
* 注入其他类
  * ```<rel>```外部调用已经创建的bean
  * 内部bean，直接写在property内部

* p命名空间注入
  * 先声明```xmlns:p="http://www.springframework.org/schema/p"```
  * `p:`代替原来的```property```


##### 实例

Scope设置实例类型
* ***单实例singleton***:初始化时创建，类似全局变量，全局唯一
* ***多实例prototype***:获取的时候创建，可以创建多个

#### 外部文件注入

* 设置/添加文件头
* 添加对应文件```<context:component-scan base-package="io.github.skyriverYHR" />```
* 设置```<context:property-placeholder location="app.properties"/>```引入外部文件

#### 完整的生命周期

##### 初始化/销毁

**需要在标签中配置属性```init-method/destory```**

##### 后置处理器

**实现```BeanPostProcessor```接口**
* 前置处理
* 后置处理