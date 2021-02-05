#### 链式风格

查

* jQuery('#xxx')返回值并不是元素，而是一个api对象
* jQuery('#xxx').find ('.red')查找#xxx里的.red元素 
* jQuery('#xxx').parent()获取爸爸
* jQuery('#xxx').children()获取儿子
* jQuery('#xxx').siblings()获取兄弟
* jQuery('#xxx').index()获取排行老几(从O开始)
* jQuery('#xxx').next()获取弟弟
* jQuery('#xxx').prev()获取哥哥
* jQuery('.red').each(fn)遍历并对每个元素执行fn

#### 链式风格·删
1. $div.remove() 

2. $div.empty()

#### 链式风格·增
1. \$ ('body')获取document.body

2. \$('body' ).append(\$ (\'\<div>1\</div>\'))添加小儿子

3. \$('body').append(\'\<div>1\</div>\')更方便

4. \$('body').prepend(div或\$div)添加大儿子

5. \$('#test').after(div或 $div)添个弟弟

6. \$ ('#test').before(div或 $div)添个哥哥



增

`$ ('<div><span>1</span></div>')`

&emsp;&emsp; 返回值并不是新增的元素，而是api对象

`$ ('<div><span>1</span></div>').appendTo(...)`

&emsp;&emsp; appendTo可以把新增的元素放到另一个元素里

* 这是一种什么感觉

&emsp;&emsp; 就感觉DOM是不可见的，你不需要知道DOM的任何细节，只需要使用简洁的API即可

&emsp;&emsp; 一个好的封装，能让使用者完全不知道内部细节

&emsp;&emsp; 这是通过闭包实现的

#### 链式风格·改

1. $div.text(?)读写文本内容

2. $div.html(?)读写HTML内容

3. $div.attr('title',?)读写属性

4. Sdiv.css({color: 'red"})读写style // $div.style更好

5. $div.addClass('blue') / removeClass / hasClass

6. $div.on('click', fn)

7. $div.off('click', fn)

* 注意

&emsp;&emsp; $div可能对应了多个div元素
