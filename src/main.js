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
jQuery('.test')
  .find('.child')
  .addClass('red')
  .addClass('blue')
  .addClass('green')
//我们先找到.test，然后在找到里面所有的child，然后在child上面加个red，还可以加其他的





//操作.child后又想返回.test，在test身上加：
//方法一：加个变量