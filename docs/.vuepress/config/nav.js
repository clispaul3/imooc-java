const nav = [
    { text:'主页',link:'/' },
    { text:'入门基础',items:[
        {text:'语法基础1',link:'/1/基本介绍'},
        {text:'语法基础2',link:'/2/方法'},
        {text:'常用工具类',link:'/3/Math'},
        {text:'集合框架',link:"/4/集合框架"},
        // {text:'网络与多线程',link:'/入门基础-网络与多线程/'},
        // {text:'文件操作',link:'/入门基础-文件操作/'},
        // {text:'数据操作',link:'/入门基础-数据操作/'}
    ]},
    { text:'面向对象',items:[
        {text:'基本语法',link:'/OOP/基本语法'},
        {text:'泛型',link:'/OOP/泛型'},
        {text:'反射',link:'/OOP/反射'}
    ]},
    { text:'IO流',items:[
        {text:'File类',link:'/5/File'},
        {text:'IO',link:'/5/IO'}
    ]},
    { text:'JavaWeb',items:[
        {text:'Servlet',link:'/JavaWeb/Servlet'},
        {text:'JSP',link:'/JavaWeb/JSP'},
        {text:'Tomcat',link:'/JavaWeb/Tomcat'}
    ]},
    { text:'JDBC',link:'/JDBC/' },
    { text:'GitHub',link:'https://github.com/clispaul3' }
]
module.exports = {
    nav
}