(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8e39de96"],{2372:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"materials"},[e("DashboardHeader",{attrs:{title:"物料"}},[e("div",{staticClass:"h-right"},[e("Select",{staticStyle:{width:"200px"},model:{value:t.materialsName,callback:function(a){t.materialsName=a},expression:"materialsName"}},t._l(t.materials,(function(a){return e("Option",{key:a.value,attrs:{value:a.value}},[t._v(t._s(a.label))])})),1),e("div",[e("Button",{attrs:{type:"primary"},on:{click:t.sync}},[t._v("同步物料")])],1)],1)]),e("PageWrap",[e("router-view")],1),e("Modal",{attrs:{title:"自定义物料"},model:{value:t.modal,callback:function(a){t.modal=a},expression:"modal"}},[e("Form",{ref:"form",attrs:{model:t.form,"label-position":"top",rules:t.ruleValidate}},[e("FormItem",{attrs:{prop:"alias"}},[e("label",{attrs:{slot:"label"},slot:"label"},[t._v(" 物料名称 ")]),e("Input",{attrs:{placeholder:""},model:{value:t.form.alias,callback:function(a){t.$set(t.form,"alias",a)},expression:"form.alias"}})],1),e("FormItem",{attrs:{prop:"gitPath"}},[e("label",{attrs:{slot:"label"},slot:"label"},[t._v(" 物料地址 ")]),e("Input",{attrs:{placeholder:"ssh地址，例如git@git.souche-inc.com:loan/xxx.git"},model:{value:t.form.gitPath,callback:function(a){t.$set(t.form,"gitPath",a)},expression:"form.gitPath"}})],1)],1),e("div",{attrs:{slot:"footer"},slot:"footer"},[e("Button",{on:{click:function(a){t.modal=!1}}},[t._v("取消")]),e("Button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("确定")])],1)],1)],1)},i=[],r=(e("d81d"),e("b0c0"),e("ac1f"),e("5319"),e("365c")),o={name:"Materials",data:function(){return{materialsName:"",form:{name:"",alias:"",gitPath:""},ruleValidate:{alias:[{required:!0,message:"请填写物料名称"}],gitPath:[{required:!0,message:"请填写物料地址"}]},modal:!1}},methods:{sync:function(){var t=this;this.$Spin.show({render:function(t){return t("div",[t("Icon",{class:"demo-spin-icon-load",props:{type:"ios-loading",size:18}}),t("div","同步中")])}}),r["a"].get("/materials/sync").then((function(){t.$Spin.hide(),t.$Notice.success({title:"提示",desc:"同步成功",duration:1,onClose:function(){window.location.reload()}})}))},submit:function(){var t=this;this.$refs.form.validate((function(a){a?t.$Message.success("Success!"):t.$Message.error("Fail!")}))}},computed:{materials:function(){return this.$store.state.materials.map((function(t){return{label:t.alias,value:t.name}}))}},watch:{materialsName:function(t){this.$router.replace({name:"blocks",query:{materialsName:t}})}},mounted:function(){var t=this;this.$store.dispatch("getMaterials").then((function(a){t.materialsName=a[0].name}))}},l=o,n=(e("2875"),e("2877")),c=Object(n["a"])(l,s,i,!1,null,"66876a4a",null);a["default"]=c.exports},2875:function(t,a,e){"use strict";var s=e("478e"),i=e.n(s);i.a},"478e":function(t,a,e){},d81d:function(t,a,e){"use strict";var s=e("23e7"),i=e("b727").map,r=e("1dde"),o=e("ae40"),l=r("map"),n=o("map");s({target:"Array",proto:!0,forced:!l||!n},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-8e39de96.757fd94c.js.map