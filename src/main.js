// jQuery('.test')//不返回元素们，返回api 对象
//   .addClass('red')// this就是 api
//   .addClass('blue')// this就是 api
//   .addClass('green')//链式操作


// // obj.fn(p1) //函数里的 this 就是 obj
// // obj.fn.call(obj,p1)

// var obj = new Object()



// //find
// const x1 =  jQuery('.test1').find('.child')
// //获取child1，然后在里面去查找find，找什么呢？找类为child的元素
// console.log(x1)//一个test1的时候




//多个test
//把index.html的div改成了test，这时如果得到test，会有三个div
  //，三个div里分别去找child，一共会的3+2+1=6个child
// jQuery('.test').find('.child').addClass('red')

//如果你通过需要改变对象的话，就再构造一个jQuery对象，jQuery api去操作
// const api1 = jQuery('.test')//首先获取到test，然后在上面加上了blue
// api1.addClass('blue')

// const api2 = api1.find('.child').addClass('red')//然后用api1获取到child，child前加red

// api1.addClass('green')//再杀一个回马枪用api1添加一个green。
// //如何让addClass操作的是class而不是child


//简化后：
// jQuery('.test')
//   .find('.child') 
//   .addClass('red')
//   .addClass('blue')
//   .addClass('green')
//我们先找到.test，然后在找到里面所有的child，然后在child上面加个red，还可以加其他的


//操作.child后又想返回.test，在test身上加：
//方法一：加个变量
//   .end()//当前child结束了，只有end就回去上一层的api
//   .addClass('yellow')//此时yellow在test上

//   //中间命个名
//   const api1 = jQuery('.test')
//   const api2 = api1.find('.child') .addClass('red') .addClass('blue') .addClass('green')
//   const oldApi = api2.end() .addClass('yellow')


//遍历每个元素
// const x =jQuery('.test')
//   .find('.child')

// x.each((div) => console.log(div))
//each接收一个函数，然后在某个时刻会调用这个函数，调用的时候会传一个elements[i]和一个i，你可以在你的参数里接收这个elements[i]和i


//爸爸
// const x =jQuery('.test')

// x.parent().print()
//直接用获取到的api去print一下，它就会操作这些爸爸

const x =jQuery('.test')

x.children().print()
//获取children并打印出来





//命名风格
// const div1 = document.querySelector('.test') //找到第一个以类名为test的div
//如果是普通的div元素，用el开头或者直接叫div

// const $div2 = $('.test') //div2获取的就是操作对应div的一个api，其实不是div
//但是如果是jQuery产生的一个api对象，那么要用jQuery的$开头

//疑问？
  //div2 到底是 DOM对象 还是 JQuery对象
  //DOM 对象只能使用DOM API 比如 querySelector appendChild
  //jQuery 对象只能使用jQuery 的API 比如 find each
  

  