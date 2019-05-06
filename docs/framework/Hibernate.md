---
sidebar: auto
---

# Hibernate

## 相关概念
### POJO
::: tip
（Plain Ordinary Java Object）简单的Java对象，实际就是普通JavaBeans，是为了避免和EJB混淆所创造的简称。 
  其中有一些属性及其getter、setter方法的类，没有业务逻辑，有时可以作为VO（value-object）或DTO（Data Transfer Object）来使用。不允许有业务方法，也不能携带connection之类的方法，实际就是普通JavaBeans。POJO类中有属性和get、set方法，但是没有业务逻辑
:::
```java
public class POJOdemo {
    private String username;
    private int age;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}
```
### JavaBean
::: tip
JavaBean 是一种JAVA语言写成的可重用组件。JavaBean符合一定规范编写的Java类，不是一种技术，而是一种规范。大家针对这种规范，总结了很多开发技巧、工具函数。符合这种规范的类，可以被其它的程序员或者框架使用。它的方法命名，构造及行为必须符合特定的约定：
  1. 所有属性为private
  2. 这个类必须有一个公共的缺省构造函数。即是提供无参数的构造器
  3. 这个类的属性使用getter和setter来访问，其他方法遵从标准命名规范
  4. 这个类应是可序列化的。实现serializable接口
:::
```java
public class JavaBeanDemo {
    private String username;
    private int age;
    JavaBeanDemo(){
        // super();
    }
    public void show(){
        System.out.print("show...");
    }
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}

```
### entity(实体类)
::: tip
对java实体类的众多理解：
A .就是属性类，通常定义在model层里面
B. 一般的实体类对应一个数据表，其中的属性对应数据表中的字段。 
好处： 
  1. 对对象实体的封装，体现OO思想。 
  2. 属性可以对字段定义和状态进行判断和过滤 
  3. 把相关信息用一个实体类封装后，我们在程序中可以把实体类作为参数传递，更加方便。
  4. 说白了就是为了让程序员在对数据库操作的时候不用写SQL语句
  5. 就是一个数据库表生成一个类 
这样做对数据库操作起来方便 
编写代码较少 提高效率 可以使程序员专注逻辑关系
  - 实体类就是把对某一个表的操作全写在一个类中.
  - 在Java开发中经常要定义一些实体类，这些类的定义的好坏会直接影响，编写代码的质量和难易程度，以下是别人总结的一些经验。
  1. 实体类的名字尽量和数据库的表的名字对应相同。
  2. 实体类应该实现java.io.Serializable接口。
  3. 实体类应该有个无参的构造方法。
  4. 实体类应该有个有参（所有的参数）的构造方法。
  5. 实体类有属性和方法，属性对应数据库中表的字段，主要有getter和setter方法。
  6. 实体类还应该有个属性serialVersionUID。例如：private static final long serialVersionUID = -6125297654796395674L;
  7. 属性一般是private类型，方法位public类型，对于数据库自动生成的ID字段对应的属性的set方法应为private。
:::
### ORM
::: tip
  - Object Relational Mapping:对象关系映射
  - 是一种程序技术，用于实现面向对象编程语言里不同类型系统的数据之间的转换。从效果上说，它其实是创建了一个可在编程语言里使用的--“虚拟对象数据库”
:::

## 简介
::: tip
它对JDBC进行了非常轻量级的对象封装，它将POJO与数据库表建立映射关系，是一个全自动的orm框架，hibernate可以自动生成SQL语句，自动执行，使得Java程序员可以随心所欲的使用对象编程思维来操纵数据库。 Hibernate可以应用在任何使用JDBC的场合，既可以在Java的客户端程序使用，也可以在Servlet/JSP的Web应用中使用，最具革命意义的是，Hibernate可以在应用EJB的J2EE架构中取代CMP，完成数据持久化的重任。
:::

## 特点
  - 将对数据库的操作转换为对Java对象的操作，从而简化开发。通过修改一个“持久化”对象的属性从而修改数据库表中对应的记录数据。
  - 提供线程和进程两个级别的缓存提升应用程序性能
  - 有丰富的映射方式将Java对象之间的关系转换为数据库表之间的关系
  - 屏蔽不同数据库实现之间的差异。在Hibernate中只需要通过“方言”的形式指定当前使用的数据库，就可以根据底层数据库的实际情况生成适合的SQL语句。
  - 非侵入式：Hibernate不要求持久化类实现任何接口或继承任何类，POJO即可

## 核心API
  - Session
  - SessionFactory
  - Transaction
  - Query
  - Criteria
  - Configuration

## 配置文件
  - hibernate.cfg.xml

## 映射文件
  
<Button/>