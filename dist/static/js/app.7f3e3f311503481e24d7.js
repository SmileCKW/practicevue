webpackJsonp([4],{

/***/ "4Sch":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("/5sW");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/App.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var App = ({
  name: "app",
  data: function data() {
    return {
      userID: 'zhansan'
    };
  },

  methods: {
    homeClick: function homeClick() {
      // history.pushState(''); //绕过rout-link进行页面跳转
      //通过内置路由进行页面上的跳转 push=>pushState ，意味 着点击完后，可以返回
      this.$router.replace("/home"); //使用replace更好
      // this.$router.push('/home')
    },
    aboutClick: function aboutClick() {
      this.$router.replace("/home");
      // this.$router.push('/about')
    },
    userClick: function userClick() {
      this.$router.replace("'/user/'+userID");
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6bd23fee","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/App.vue
var App_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('router-link',{attrs:{"to":"/home"}},[_vm._v("首页")]),_vm._v(" "),_c('router-link',{attrs:{"tag":"button","to":"/about","replace":""}},[_vm._v("关于")]),_vm._v(" "),_c('router-link',{attrs:{"to":'/user/'+_vm.userID,"replace":""}},[_vm._v("用户")]),_vm._v(" "),_c('button',{on:{"click":_vm.homeClick}},[_vm._v("首页2")]),_vm._v(" "),_c('button',{on:{"click":_vm.aboutClick}},[_vm._v("关于2")]),_vm._v(" "),_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: App_render, staticRenderFns: staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_App = (esExports);
// CONCATENATED MODULE: ./src/App.vue
function injectStyle (ssrContext) {
  __webpack_require__("4Sch")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6bd23fee"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  App,
  selectortype_template_index_0_src_App,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_App = (Component.exports);

// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("/ocq");

// CONCATENATED MODULE: ./src/router/index.js
//配置路由相关信息

 //从安装的路由中导入

//非懒加载
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

//懒加载
var Home = function Home() {
  return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, "lO7g"));
};
var About = function About() {
  return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, "c27y"));
};
var User = function User() {
  return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, "jyJz"));
};

//1、通过Vue.use（插件），安装插件
vue_runtime_esm["a" /* default */].use(vue_router_esm["a" /* default */]);

//2、创建路由对象
var routes = [{
  path: '', //缺省值，即一进入就是此url,通常设置主页
  redirect: '/home' //重定向到home页面
}, {
  path: "/home",
  component: Home
}, {
  path: "/about",
  component: About
}, {
  path: '/user/:userID', //可以定义url为 /user/userID --动态路由
  component: User
}];
var router = new vue_router_esm["a" /* default */]({
  //配置路由和组件之间的应用关系
  routes: routes,
  mode: 'history', //html5的history模式，默认是哈希模式
  linkActiveClass: 'active'
});

//3、在router对象传入到Vue实例中
/* harmony default export */ var src_router = (router); //先导出来
// CONCATENATED MODULE: ./src/main.js


 //默认导入此目录下的index文件

vue_runtime_esm["a" /* default */].config.productionTip = false;

/* eslint-disable no-new */
new vue_runtime_esm["a" /* default */]({
  el: '#app',
  router: src_router,
  render: function render(h) {
    return h(src_App);
  }
});

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.7f3e3f311503481e24d7.js.map