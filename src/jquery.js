window.jQuery = function(selectorOrArray){
    let elements
    //const声明了必须赋值，这里用let
      //先声明一个值为空，然后根据你的选择器是string还是Array，分别赋予不同的值
      //，然后再返回一个api去操作它
    if(typeof selectorOrArray === 'string'){
        elements = document.querySelectorAll(selectorOrArray)
    }else if(selectorOrArray instanceof Array){
        elements = selectorOrArray

    }
    //对象一般用instanceof
    //api 可以操作elements
    return {

        //find 一个test
        // find(selector){
        // //find是一个函数缩写，它可以接受一个选择器。
        // //find就是找到当前元素里面的所有匹配这个选择器的元素
        //    //，然后把元素放到数组里，在return这个数组
        //   let array = []
        //   for(let i=0;i<elements.length;i++){
        //       array= array.concat(Array.from (elements[i]
        //         .querySelectorAll(selector)))
        //   }
        //   return array
        // }


        //放在了上面来
        //find多个test
        //第一步：不能直接return之前的操作，我们要得到一个新的api，这个新的api要靠jQuery构造出来
        //第二步：jQuery不能只接受选择器，还要可以接受一个数组
        //第三步：如果接收的是个数组的话，就让新的elements
        find(selector){
            let array = []
              for(let i=0;i<elements.length;i++){
                  const elements2 = Array.from(elements[i].querySelectorAll(selector))
                  array = array.concat(elements2)
                  //多个test//首先遍历这个elements，然后做一个中间的变量elements2
                }
                //return一个新的api,因为return一个数组的话他不是一个函数无法调用
                //所以selectorOrArray
                const newApi = jQuery(array)//给我一个数组我给你返回一个新的api，如果直接用同一个api，那么每次得到新的元素都会污染之前的api，所有一定要得到一个新的对象，这个新对象就叫newApi
                return newApi//现在这个api和刚刚的api就是完全不同的对象了，
                //这个是由jQuery函数重新返回一个（new Object在new一个Object，两个Object是不同的object）
                  //用重载判断一下选择器


                  //简写 
                //  return jQuery(array)//实际上我要得到一个新的api对象，这个新的api对象用来操作array。
                  //总结一句话就是，jQuery你给我传什么，我就会返回一个对象操作什么。
        },



        //闭包：函数访问外部的变量
        addClass(className){
            for(let i=0;i<elements.length;i++){
                const element = elements[i]
                element.classList.add(className)
            }
            return this
        },
       




    }
}