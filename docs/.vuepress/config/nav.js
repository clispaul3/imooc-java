const nav = [
    { text:'主页',link:'/' },
    { text:'入门基础',items:[
        {text:'语法基础',link:'/入门基础-语法基础/'},
        {text:'面向对象',link:'/入门基础-面向对象/'},
        {text:'常用工具类',link:'/入门基础-常用工具类/'},
        {text:'网络与多线程',link:'/入门基础-网络与多线程/'},
        {text:'文件操作',link:'/入门基础-文件操作/'},
        {text:'数据操作',link:'/入门基础-数据操作/'}
    ]},
    { text:'web基础',items:[
        {text:'JSP',link:'/web基础-JSP/'},
        {text:'Servlet',link:'/web基础-Servlet/'},
        {text:'Tomcat',link:'/web基础-Tomcat/'}
    ]},
    { text:'框架',items:[
        {text:'基础',link:'/框架-基础/'},
        {text:'Hibernate',link:'/框架-Hibernate/'},
        {text:'Mybatis',link:'/框架-Mybatis/'},
        {text:'Struts2',link:'/框架-Struts2/'},
        {text:'Spring',link:'/框架-Spring/'},
        {text:'SpringMVC',link:'/框架-SpringMVC/'}
    ]},
    {text:'项目实战',items:[
        {text:'介绍',link:'/项目实战/'}
    ]},
    {text:'实用工具',items:[
        {text:'介绍',link:'/实用工具/'}
    ]},
    { text:'GitHub',link:'https://github.com/clispaul3' }
]
module.exports = {
    nav
}