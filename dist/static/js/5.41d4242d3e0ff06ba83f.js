webpackJsonp([5],{W2Q3:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"login"},[o("div",{staticClass:"loginBox"},[o("el-form",{staticClass:"demo-ruleForm",attrs:{"label-width":"100px"}},[o("el-form-item",{attrs:{label:"账号"}},[o("el-input",{attrs:{type:"text"},model:{value:t.loginForm.userName,callback:function(e){t.$set(t.loginForm,"userName",e)},expression:"loginForm.userName"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"密码"}},[o("el-input",{attrs:{type:"password"},model:{value:t.loginForm.passWord,callback:function(e){t.$set(t.loginForm,"passWord",e)},expression:"loginForm.passWord"}})],1),t._v(" "),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:t.handleLogin}},[t._v("登录")])],1)],1)],1)])},staticRenderFns:[]};var a=o("C7Lr")({name:"login",data:function(){return{loginForm:{userName:"",passWord:""},testData:{id:12013}}},created:function(){},methods:{handleLogin:function(){var t=this;this.$store.dispatch("Login",this.loginForm).then(function(){t.$router.push({path:"/"})}).catch(function(){})}}},n,!1,function(t){o("uk7E")},"data-v-10adccf5",null);e.default=a.exports},uk7E:function(t,e){}});
//# sourceMappingURL=5.41d4242d3e0ff06ba83f.js.map