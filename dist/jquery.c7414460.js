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
})({"ZC2X":[function(require,module,exports) {
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

window.$ = window.jQuery = function (selectorOrArray) {
  //等号赋值从右忘左执行，也可以在最后写成window.$ = window.jQuery
  var elements; //const声明了必须赋值，这里用let
  //先声明一个值为空，然后根据你的选择器是string还是Array，分别赋予不同的值
  //，然后再返回一个api去操作它

  if (typeof selectorOrArray === "string") {
    elements = document.querySelectorAll(selectorOrArray);
  } else if (selectorOrArray instanceof Array) {
    elements = selectorOrArray;
  }

  function createElements(string) {
    var container = document.createElement("template");
    container.innerHTML = string.trim();
    return container.content.firstChild;
  } //api 可以操作elements
  //api一开始就把原型链链上，共有属性不用操心了，特有属性就放到自己身上


  var api = Object.create(jQuery.prototype); //创建一个对象，这个对象的 __proto__为括号里的东西
  //相当于 const api = {__proto__: jQuery.prototype}
  //api.elements = elements//不能把之前的覆盖了
  //api.oldApi = selectorOrArrayOrTemplate.oldApi
  //简写

  Object.assign(api, {
    //Object.assign的意思就是把后面对象的属性一个一个赋值到前面api来
    elements: elements,
    oldApi: selectorOrArrayOrTemplate.oldApi
  });
  return api;
}; //jQuery.fn = jQuery.prototype={}//给prototype给了个别名fn


jQuery.prototype = {
  //共有属性放到这里来 
  constructor: jQuery,
  //prototype需要个constructor，值就是jQuery
  jquery: true,
  get: function get(index) {
    return this.elements[index]; //this.elements就是api的elements，就是api变量elements
  },
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
  appendTo: function appendTo(node) {
    if (node instanceof Element) {
      this.each(function (el) {
        return node.appendChild(el);
      }); // 遍历 elements，对每个 el 进行 node.appendChild 操作
    } else if (node.jquery === true) {
      this.each(function (el) {
        return node.get(0).appendChild(el);
      }); // 遍历 elements，对每个 el 进行 node.get(0).appendChild(el))  操作
    }
  },
  append: function append(children) {
    var _this = this;

    if (children instanceof Element) {
      this.get(0).appendChild(children);
    } else if (children instanceof HTMLCollection) {
      for (var i = 0; i < children.length; i++) {
        this.get(0).appendChild(children[i]);
      }
    } else if (children.jquery === true) {
      children.each(function (node) {
        return _this.get(0).appendChild(node);
      });
    }
  },
  //放在了上面来
  //find多个test
  //第一步：不能直接return之前的操作，我们要得到一个新的api，这个新的api要靠jQuery构造出来
  //第二步：jQuery不能只接受选择器，还要可以接受一个数组
  //第三步：如果接收的是个数组的话，就让新的elements
  find: function find(selector) {
    var array = [];

    for (var i = 0; i < elements.length; i++) {
      var elements2 = Array.from(elements[i].querySelectorAll(selector));
      array = array.concat(elements2); //多个test//首先遍历这个elements，然后做一个中间的变量elements2
    }

    array.oldApi = this; //this就是 api，旧的api//放到了数组身上，api也有oldApi
    //return一个新的api,因为return一个数组的话他不是一个函数无法调用
    //所以selectorOrArray

    var newApi = jQuery(array); //给我一个数组我给你返回一个新的api，如果直接用同一个api，那么每次得到新的元素都会污染之前的api，所有一定要得到一个新的对象，这个新对象就叫newApi

    return newApi; //现在这个api和刚刚的api就是完全不同的对象了，
    //这个是由jQuery函数重新返回一个（new Object在new一个Object，两个Object是不同的object）
    //用重载判断一下选择器
    //简写
    //  return jQuery(array)//实际上我要得到一个新的api对象，这个新的api对象用来操作array。
    //总结一句话就是，jQuery你给我传什么，我就会返回一个对象操作什么。
  },
  //each遍历当前的所有元素
  each: function each(fn) {
    for (var i = 0; i < elements.length; i++) {
      //elements是个闭包会一直在第二行，不会丢失
      fn.call(null, elements[i], i); //call来调用，this传空，给元素下标知道是第几个
    }

    return this; //this就是api对象，当前api
  },
  //实现parent
  //parent不需要参数，直接什么什么.parent
  parent: function parent() {
    //获取对应元素的爸爸
    var array = [];
    this.each(function (node) {
      //每一个元素我们要得到一个节点
      if (array.indexOf(node.parentNode) === -1) {
        //push的时候判断一下，不在里面就是等于-1
        array.push(node.parentNode); //把这个节点的爸爸放到数组里
      }
    });
    return jQuery(array); //array没有什么可操作性，所以要封装一个操纵数组的对象，jQuery会返回一个对象，这个对象会操作这些爸爸
  },
  print: function print() {
    //实现print方法把当前elements元素打印出来
    console.log(elements);
  },
  children: function children() {
    var array = []; //准备好一个数组

    this.each(function (node) {
      array.push.apply(array, _toConsumableArray(node.children)); //...是把里面的东西拆开，第一个元素当做第一个参数，第二个元素当做第二个参数。
      //等价于(node.children[0], node.children[1],node.children[2]...等等)
    }); //遍历刚才的元素，

    return jQuery(array);
  },
  //闭包：函数访问外部的变量
  addClass: function addClass(className) {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      element.classList.add(className);
    }

    return this;
  },
  end: function end() {
    return this.oldApi; //this 就是当前的api//api2   api2的旧api是api1。调end用新api调的
  }
};
},{}]},{},["ZC2X"], null)
//# sourceMappingURL=jquery.c7414460.js.map