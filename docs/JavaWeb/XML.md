# XML

## 功能
::: tip
  1. 数据传输
  2. 做配置文件
  3. 充当小型数据库
:::

## 基本介绍
   1. XML被用于传输和存储数据，重点是数据的内容
   2. HTML被用于显示数据，重点是数据的外观
   3. XML：可扩展标记语言,是独立于软件和硬件的信息传输工具。
   4. XML没有预定义标签，需要自行定义，HTML有预定义标签
   5. XML不会替代HTML,XML 用于传输数据，而 HTML 用于格式化并显示数据
   ```java
   <note>
    <to>Tove</to>
    <from>Jani</from>
    <heading>Reminder</heading>
    <body>Don't forget me this weekend!</body>
   </note>
   ```
## JSON 对比 XML
   [JSON 对比 XML](https://www.cnblogs.com/SanMaoSpace/p/3139186.html)
   - xml示例
```java
   <?xml version="1.0" encoding="utf-8" ?>
<country>
  <name>中国</name>
  <province>
    <name>黑龙江</name>
    <citys>
      <city>哈尔滨</city>
      <city>大庆</city>
    </citys>  　　
  </province>
  <province>
    <name>广东</name>
    <citys>
      <city>广州</city>
      <city>深圳</city>
      <city>珠海</city>
    </citys> 　　
  </province>
  <province>
    <name>台湾</name>
    <citys>
      　<city>台北</city>
      　<city>高雄</city>
    </citys>　
  </province>
  <province>
    <name>新疆</name>
    <citys>
      <city>乌鲁木齐</city>
    </citys>
  </province>
</country>
```
  - JSON示例
  ```js
    var country =
        {
            name: "中国",
            provinces: [
            { name: "黑龙江", citys: { city: ["哈尔滨", "大庆"]} },
            { name: "广东", citys: { city: ["广州", "深圳", "珠海"]} },
            { name: "台湾", citys: { city: ["台北", "高雄"]} },
            { name: "新疆", citys: { city: ["乌鲁木齐"]} }
            ]
        }
  ```

## XML声明
  - XML 声明文件的可选部分，如果存在需要放在文档的第一行  
  `<?xml version="1.0" encoding="utf-8"?>`
```xml
  version--文档规范，一般是1.0
  encoding--文档字符编码
  standalone--文档是否独立使用
  standalone="yes"
  standalone="no"  默认
```

## 根元素
  - XML 文档必须有且只有一个根元素  
  `<root><title>标题</title></root>`

## 关闭标签
  - 在xml中所有元素都必须有关闭标签
  - 无标签体可以自关闭
  ```java
  <title>this is right</title>
  <title>this is false
  ```
  ```java
    // 以下写法都是符合规范的
    <a>Hello XML</a>
    <a name="java"/>
  ```

## 大小写敏感
   ```java
    <Message>这是错误的</message>
    <message>这是正确的</message>
   ```

## 正确嵌套

## 属性加引号
  - 属性必须加引号，单引号/双引号都支持，最终都会被解析成双引号
  ```java
  <note date="12/11/2007">
    <to>Tove</to>
    <from>Jani</from>
  </note>
  ```

## 特殊字符
  ![特殊字符](/img/xml01.png)

## 注释
  `<!-- This is a comment -->`

## 空格
  - HTML 会把多个连续的空格字符裁减（合并）为一个
  - 在 XML 中，文档中的空格不会被删减

## 换行

## 命名规范

## 元素 VS 属性
  - `元数据（有关数据的数据）应当存储为属性，而数据本身应当存储为元素`

## 验证器
  - 检查XML 文档是否符合标准的语法规范

## 样式
  - css
  - xslt

## 树结构
  - XML 文档必须包含根元素。该元素是所有其他元素的父元素
  - XML 文档中的元素形成了一棵文档树。这棵树从根部开始，并扩展到树的最底端
  - 父、子以及同胞等术语用于描述元素之间的关系
  - 所有的元素都可以有文本内容和属性

## 标准示例
```java
<?xml version="1.0" encoding="utf-8"?>
<bookstore>
    <book>
        <title auth="A">HTML</title>
    </book>
    <book>
        <title auth="B">CSS</title>
    </book>
    <book>
        <title auth="C">JavaScript</title>
    </book>
</bookstore>
```

<Button/>