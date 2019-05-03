const sidebar = {
    '/1/':[{
        title:"语法基础1",
        collapsable: false,
        children:[
            '基本介绍',
            '变量',
            '注释',
            '数据类型',
            '常量',
            '运算符',
            '流程控制'
        ]
    }],
    '/2/':[{
        title:"语法基础2",
        collapsable: false,
        children:[
            '方法',
            '数组',
            '字符串',
            'Arrays',
            '异常'
        ]
    }],
    '/3/':[{
        title:"常用工具类",
        collapsable: false,
        children:[
            '包装类',
            'Math',
            'Scanner',
            'Date',
            'Calendar'
        ]
    }],
    '/5/':[{
        title:"IO流",
        collapsable:false,
        children:[
            'File',
            'IO'
        ]
    }],
    '/JavaWeb/':[{
        title:"网络编程",
        collapsable:false,
        children:[
            'Servlet',
            'JSP',
            'Tomcat'
        ]
    }]
}
module.exports = {
    sidebar
}