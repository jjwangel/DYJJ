webpackJsonp([3],{633:function(n,e,t){var o=t(634);"string"==typeof o&&(o=[[n.i,o,""]]);t(40)(o,{});o.locals&&(n.exports=o.locals)},634:function(n,e,t){e=n.exports=t(39)(),e.push([n.i,"\n.user-setting-header[data-v-eeb27f7a] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  padding-left: 20px;\n  margin-left: 20px;\n  margin-right: 20px;\n  background-color: #bbbec4;\n}\n.user-setting-content[data-v-eeb27f7a] {\n  position: absolute;\n  top: 50px;\n  right: 0;\n  left: 0;\n  bottom: 20px;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-bottom: 20px;\n  overflow: auto;\n  border: 1px solid #dddee1;\n}\n.user-setting-footer[data-v-eeb27f7a] {\n  position: absolute;\n  bottom: 0px;\n  right: 0px;\n  height: 40px;\n  width: 100%;\n  margin-right: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n",""])},635:function(n,e,t){var o=t(636);"string"==typeof o&&(o=[[n.i,o,""]]);t(40)(o,{});o.locals&&(n.exports=o.locals)},636:function(n,e,t){e=n.exports=t(39)(),e.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},637:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t(13),a=t(46),i=t(45),s=t(10),r=t.n(s);e.default={data:function(){var n=this;return{detail_loading:!1,sync_loading:!1,reset_pwd_loading:!1,del_one_loading:!1,page_size_opts:[10,30,50,80,100],detail_columns:[{type:"selection",width:50,align:"center"},{type:"index",width:60,align:"center"},{title:"登录账号",width:200,sortable:!0,key:"user_acct"},{title:"用户名称",width:200,sortable:!0,key:"user_name"},{title:"性别",width:100,sortable:!0,key:"user_sex"},{title:"所属部门",width:200,sortable:!0,key:"user_dep"},{title:"所属职务",sortable:!0,width:200,key:"user_post"},{title:"操作",key:"action",width:100,align:"center",render:function(e,t){return e("Poptip",{props:{confirm:!0,title:"您确定要删除这个用户吗?",transfer:!0},on:{"on-ok":function(){n.handleDelOneSelected(t.row)}}},[e("Button",{style:{margin:"0 5px"},props:{type:"error",placement:"top",loading:n.del_one_loading}},"删除")])}},{title:" ",key:"space"}],detail_data:[],selected_data:[]}},components:{},methods:{init:function(){var n=this;this.detail_loading=!0,Object(a.b)().then(function(e){"000000"===e.data.retrun_code?n.detail_data=e.data.user_data:console.log(e.data.retrun_code),n.detail_loading=!1}).catch(function(e){n.detail_loading=!1,console.log(e)})},handleSyncUser:function(){var n=this;this.sync_loading=!0,Object(i.n)(this.$store.getters.user_id,"function_id").then(function(e){var t=e.data;"000000"==t.retrun_code?n.$Modal.confirm({title:"同步U8用户",content:"确定同步U8用户吗？新导入用户初始密码为：000000",onOk:function(){n.syncUser()},onCancel:function(){n.sync_loading=!1}}):"SYS0005"==t.retrun_code?(n.sync_loading=!1,n.$Message.warning({content:"你没有执行该功能的权限！",duration:2})):(console.log(t.retrun_code),n.sync_loading=!1)}).catch(function(e){console.log(e),n.sync_loading=!1})},syncUser:function(){var n=this;this.detail_loading=!0,Object(a.d)().then(function(e){"000000"===e.data.retrun_code?(n.detail_data=e.data.user_data,n.$Message.info("同步U8用户成功！")):console.log(e.data.retrun_code),n.detail_loading=!1,n.sync_loading=!1}).catch(function(e){n.detail_loading=!1,console.log(e)})},handleUserSelectChange:function(n){this.selected_data=n},handleResetPwd:function(){var n=this;this.selected_data.length>0?(this.reset_pwd_loading=!0,Object(i.n)(this.$store.getters.user_id,"function_id").then(function(e){var t=e.data;"000000"==t.retrun_code?n.$Modal.confirm({title:"重置密码",content:"确定重置所选用户的密码吗？重置后密码为：000000",onOk:function(){n.resetPwd()},onCancel:function(){n.reset_pwd_loading=!1}}):"SYS0005"==t.retrun_code?(n.reset_pwd_loading=!1,n.$Message.warning({content:"你没有执行该功能的权限！",duration:2})):(console.log(t.retrun_code),n.reset_pwd_loading=!1)}).catch(function(e){console.log(e),n.reset_pwd_loading=!1})):this.$Message.warning({content:"请至少选择一个用户！",duration:2})},resetPwd:function(){var n=this;Object(a.c)(o.a.getOnekeyValue(this.selected_data,"user_acct")).then(function(e){"000000"===e.data.retrun_code?n.$Message.info("密码重置成功！"):console.log(e.data.retrun_code),n.reset_pwd_loading=!1}).catch(function(e){n.reset_pwd_loading=!1,console.log(e)})},handleDelOneSelected:function(n){this.deleteUserByAcct(Array.of(n.user_acct))},handleDelUser:function(n){var e=this;"delBySelected"==n?this.selected_data.length>0?this.$Modal.confirm({title:"删除用户",content:"确定删除所选用户吗？",onOk:function(){e.deleteUserByAcct(o.a.getOnekeyValue(e.selected_data,"user_acct"))},onCancel:function(){e.reset_pwd_loading=!1}}):this.$Message.warning("请至少选择一个用户！"):"delByAll"==n&&this.$Modal.confirm({title:"删除用户",content:"确定删除所有用户吗？",onOk:function(){e.deleteUserByAcct(o.a.getOnekeyValue(e.detail_data,"user_acct"))},onCancel:function(){e.reset_pwd_loading=!1}})},deleteUserByAcct:function(n){var e=this;this.del_one_loading=!0,Object(i.n)(this.$store.getters.user_id,"function_id").then(function(t){var o=t.data;"000000"==o.retrun_code?Object(a.a)(n).then(function(t){"000000"==t.data.retrun_code?(e.detail_data.length==n.length?(e.detail_data=[],e.selected_data=[]):e.detail_data=r.a.filter(e.detail_data,function(e){return r.a.indexOf(n,e.user_acct)<0}),e.$Message.info("删除用户成功！")):t.data.retrun_code,e.del_one_loading=!1}).catch(function(n){console.log(n),e.del_one_loading=!1}):"SYS0005"==o.retrun_code?(e.reset_pwd_loading=!1,e.$Message.warning({content:"你没有执行该功能的权限！",duration:2})):(console.log(o.retrun_code),e.del_one_loading=!1)}).catch(function(n){console.log(n),e.del_one_loading=!1})}},computed:{},mounted:function(){this.init()}}},638:function(n,e,t){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("div",{staticClass:"user-setting-header"},[t("ButtonGroup",[t("Button",{attrs:{type:"primary",loading:n.sync_loading,icon:"arrow-swap"},on:{click:n.handleSyncUser}},[n._v("同步U8用户")]),n._v(" "),t("Button",{attrs:{type:"primary",icon:"android-sync"}},[n._v("刷新列表")]),n._v(" "),t("Button",{attrs:{type:"primary",icon:"nuclear"}},[n._v("权限设置")]),n._v(" "),t("Button",{attrs:{type:"primary",loading:n.reset_pwd_loading,icon:"unlocked"},on:{click:n.handleResetPwd}},[n._v("重置密码")])],1),n._v(" "),t("Dropdown",{staticStyle:{"margin-left":"10px"},on:{"on-click":n.handleDelUser}},[t("Button",{attrs:{type:"error"}},[n._v("\n        删除用户\n        "),t("Icon",{attrs:{type:"arrow-down-b"}})],1),n._v(" "),t("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[t("DropdownItem",{attrs:{name:"delBySelected"}},[n._v("删除所选")]),n._v(" "),t("DropdownItem",{attrs:{name:"delByAll",divided:""}},[n._v("删除所有")])],1)],1)],1),n._v(" "),t("div",{staticClass:"user-setting-content"},[t("Table",{attrs:{size:"small",stripe:"",border:"",loading:n.detail_loading,columns:n.detail_columns,data:n.detail_data},on:{"on-selection-change":n.handleUserSelectChange}})],1),n._v(" "),t("div",{staticClass:"user-setting-footer"},[t("Page",{attrs:{total:100,size:"small",placement:"top","page-size-opts":n.page_size_opts,"show-elevator":"","show-sizer":"","show-total":""}})],1)])},staticRenderFns:[]},n.exports.render._withStripped=!0},87:function(n,e,t){t(633),t(635);var o=t(41)(t(637),t(638),"data-v-eeb27f7a",null);o.options.__file="E:\\webprject\\ufapp\\dyjj\\app\\src\\views\\system-manage\\components\\user-setting.vue",o.esModule&&Object.keys(o.esModule).some(function(n){return"default"!==n&&"__esModule"!==n})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] user-setting.vue: functional components are not supported with templates, they should use render functions."),n.exports=o.exports}});