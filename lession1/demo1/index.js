var dom = document.getElementById('root');

// 面向过程
var header = document.createElement('div');
header.innerText = 'header';
dom.append(header)

var sidebar = document.createElement('div');
sidebar.innerText = 'sidebar';
dom.append(sidebar);

var content = document.createElement('div');
content.innerText = 'content';
dom.append(content)

