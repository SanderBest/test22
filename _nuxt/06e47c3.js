(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{405:function(e,r,t){var content=t(422);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(26).default)("491a5d4b",content,!0,{sourceMap:!1})},421:function(e,r,t){"use strict";t(405)},422:function(e,r,t){(r=t(25)(!1)).push([e.i,".create[data-v-80cf3e1c]{width:50%}",""]),e.exports=r},441:function(e,r,t){"use strict";t.r(r);t(22);var o=t(4),n={layout:"admin",middleware:["admin-auth"],data:function(){return{loading:!1,controls:{displayName:"",password:"",email:"",phoneNumber:""},rules:{displayName:[{required:!0,message:"Поле не должно быть пустым",trigger:"blur"}],password:[{required:!0,message:"Поле не должно быть пустым",trigger:"blur"}],email:[{required:!0,message:"Поле не должно быть пустым",trigger:"blur"}],phoneNumber:[{required:!0,message:"Поле не должно быть пустым",trigger:"blur"}]}}},methods:{onSubmit:function(){var e=this;this.$refs.form.validate(function(){var r=Object(o.a)(regeneratorRuntime.mark((function r(t){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!t){r.next=17;break}return e.loading=!0,r.prev=2,o={displayName:e.controls.displayName,password:e.controls.password,email:e.controls.email,phoneNumber:e.controls.phoneNumber},r.next=6,e.$store.dispatch("auth/CREATE_USER",o);case 6:e.$message.success("Новый пользователь добавлен"),e.controls.displayName="",e.controls.password="",e.controls.email="",e.controls.phoneNumber="",e.loading=!1,r.next=17;break;case 14:r.prev=14,r.t0=r.catch(2),e.loading=!1;case 17:case"end":return r.stop()}}),r,null,[[2,14]])})));return function(e){return r.apply(this,arguments)}}())}}},l=(t(421),t(12)),component=Object(l.a)(n,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"create"},[t("el-breadcrumb",{staticClass:"mb",attrs:{separator:"/"}},[t("el-breadcrumb-item",{attrs:{to:"/admin/users"}},[e._v("Список пользователей")]),e._v(" "),t("el-breadcrumb-item",[e._v("Создать нового пользователя")])],1),e._v(" "),t("el-form",{ref:"form",attrs:{model:e.controls,rules:e.rules},nativeOn:{submit:function(r){return r.preventDefault(),e.onSubmit(r)}}},[t("h1",[e._v("Создать нового пользователя")]),e._v(" "),t("el-form-item",{attrs:{label:"Имя пользователя",prop:"displayName"}},[t("el-input",{model:{value:e.controls.displayName,callback:function(r){e.$set(e.controls,"displayName",r)},expression:"controls.displayName"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"Пароль",prop:"password"}},[t("el-input",{attrs:{type:"password"},model:{value:e.controls.password,callback:function(r){e.$set(e.controls,"password",r)},expression:"controls.password"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"Электронная почта",prop:"email"}},[t("el-input",{model:{value:e.controls.email,callback:function(r){e.$set(e.controls,"email","string"==typeof r?r.trim():r)},expression:"controls.email"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"Номер телефона",prop:"phoneNumber"}},[t("el-input",{model:{value:e.controls.phoneNumber,callback:function(r){e.$set(e.controls,"phoneNumber","string"==typeof r?r.trim():r)},expression:"controls.phoneNumber"}})],1),e._v(" "),t("el-button",{attrs:{type:"success","native-type":"submit",round:"",loading:e.loading}},[e._v("Создать")])],1)],1)}),[],!1,null,"80cf3e1c",null);r.default=component.exports}}]);