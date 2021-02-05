// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"epB2":[function(require,module,exports) {
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
var x = jQuery('.test');
x.children().print(); //获取children并打印出来
//命名风格
// const div1 = document.querySelector('.test') //找到第一个以类名为test的div
//如果是普通的div元素，用el开头或者直接叫div
// const $div2 = $('.test') //div2获取的就是操作对应div的一个api，其实不是div
//但是如果是jQuery产生的一个api对象，那么要用jQuery的$开头
//疑问？
//div2 到底是 DOM对象 还是 JQuery对象
//DOM 对象只能使用DOM API 比如 querySelector appendChild
//jQuery 对象只能使用jQuery 的API 比如 find each
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.6b970db4.js.map