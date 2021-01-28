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

                array.oldApi = this//this就是 api，旧的api//放到了数组身上，api也有oldApi
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

       
        //each遍历当前的所有元素
        each(fn){
            for(let i = 0;i<elements.length;i++){
                 //elements是个闭包会一直在第二行，不会丢失
                fn.call(null, elements[i], i)
                 //call来调用，this传空，给元素下标知道是第几个
            }
            return this//this就是api对象，当前api
           
        },



        //实现parent
        //parent不需要参数，直接什么什么.parent
        parent(){
            //获取对应元素的爸爸
            const array = []
            this.each((node)=>{//每一个元素我们要得到一个节点
                if(array.indexOf(node.parentNode) === -1){//push的时候判断一下，不在里面就是等于-1
                    array.push(node.parentNode)//把这个节点的爸爸放到数组里 
                }
            })
            return jQuery(array)
            //封装一个操纵数组的对象，jQuery会返回一个对象，这个对象会操作这些爸爸
        },
        children(){
            const array = []//准备好一个数组
            this.each((node)=>{
                array.push(...node.children)//...是把里面的东西拆开，第一个元素当做第一个参数，第二个元素当做第二个参数。
                                              //等价于(node.children[0], node.children[1],node.children[2]...等等)
            })//遍历刚才的元素，
            return jQuery(array)
        },


        print(){
            console.log(elements)
        },




        //闭包：函数访问外部的变量
        addClass(className){
            for(let i=0;i<elements.length;i++){
                const element = elements[i]
                element.classList.add(className)
            }
            return this
        },



        //实现end
        oldApi: selectorOrArray.oldApi,//oldApi来获取数组的api。(api操作数组，又挂到了数组上，要获取数组上的oldApi)
        end(){
            return this.oldApi //this 就是当前的api//api2   api2的旧api是api1。调end用新api调的
        },



    }
}