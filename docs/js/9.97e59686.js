(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"66ed":function(e,t,l){},"713b":function(e,t,l){"use strict";l.r(t);var n=l("7a23");const a=Object(n["I"])("data-v-fa4964e0");Object(n["x"])("data-v-fa4964e0");const c=Object(n["g"])(" Quasar App "),i=Object(n["g"])(" Example ");Object(n["v"])();const b=a(((e,t,l,b,o,r)=>{const u=Object(n["B"])("q-btn"),O=Object(n["B"])("q-toolbar-title"),j=Object(n["B"])("q-toolbar"),s=Object(n["B"])("q-header"),d=Object(n["B"])("q-item-label"),p=Object(n["B"])("EssentialLink"),h=Object(n["B"])("q-list"),k=Object(n["B"])("q-drawer"),f=Object(n["B"])("q-page-container"),m=Object(n["B"])("q-layout");return Object(n["u"])(),Object(n["e"])(m,{view:"lHh Lpr lFf"},{default:a((()=>[Object(n["h"])(s,{class:"header",elevated:""},{default:a((()=>[Object(n["h"])(j,null,{default:a((()=>[Object(n["h"])(u,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),Object(n["h"])(O,null,{default:a((()=>[c])),_:1})])),_:1})])),_:1}),Object(n["h"])(k,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":t[1]||(t[1]=t=>e.leftDrawerOpen=t),"show-if-above":"",bordered:"",class:"bg-grey-1"},{default:a((()=>[Object(n["h"])(h,null,{default:a((()=>[Object(n["h"])(d,{header:""},{default:a((()=>[i])),_:1}),(Object(n["u"])(!0),Object(n["e"])(n["a"],null,Object(n["A"])(e.essentialLinks,(t=>(Object(n["u"])(),Object(n["e"])(p,Object(n["n"])({key:t.title},t,{onUpdateLink:e.onClickChild}),null,16,["onUpdateLink"])))),128))])),_:1})])),_:1},8,["modelValue"]),Object(n["h"])(f,null,{default:a((()=>[Object(n["h"])("iframe",{allowfullscreen:"",src:"#/"+e.linkSelect,title:""},null,8,["src"])])),_:1})])),_:1})}));l("5319");function o(e,t,l,a,c,i){const b=Object(n["B"])("q-icon"),o=Object(n["B"])("q-item-section"),r=Object(n["B"])("q-item-label"),u=Object(n["B"])("q-item");return Object(n["u"])(),Object(n["e"])(u,{clickable:"",tag:"a",onClick:t[1]||(t[1]=t=>e.updateLink(e.link))},{default:Object(n["G"])((()=>[e.icon?(Object(n["u"])(),Object(n["e"])(o,{key:0,avatar:""},{default:Object(n["G"])((()=>[Object(n["h"])(b,{name:e.icon},null,8,["name"])])),_:1})):Object(n["f"])("",!0),Object(n["h"])(o,null,{default:Object(n["G"])((()=>[Object(n["h"])(r,null,{default:Object(n["G"])((()=>[Object(n["g"])(Object(n["D"])(e.title),1)])),_:1}),Object(n["h"])(r,{caption:""},{default:Object(n["G"])((()=>[Object(n["g"])(Object(n["D"])(e.caption),1)])),_:1})])),_:1})])),_:1})}var r=Object(n["i"])({name:"EssentialLink",data(){return{linkSelect:null}},props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}},methods:{updateLink(e){this.linkSelect=e,this.$emit("updateLink",this.linkSelect)}}}),u=l("66e5"),O=l("4074"),j=l("0016"),s=l("0170"),d=l("eebe"),p=l.n(d);r.render=o;var h=r;p()(r,"components",{QItem:u["a"],QItemSection:O["a"],QIcon:j["a"],QItemLabel:s["a"]});const k=[{title:"Draw a triangle",link:"p01"},{title:"02",link:"p02"},{title:"03",link:"p03"},{title:"04",link:"p04"},{title:"05",link:"p05"},{title:"06",link:"https://threejs.org/examples/webgl_animation_cloth.html"}];var f=Object(n["i"])({name:"MainLayout",components:{EssentialLink:h},data(){return{linkSelect:null}},watch:{},mounted(){this.getObjURL();var e=this;window.onhashchange=function(t){e.getObjURL()}},methods:{onClickChild(e){this.linkSelect=e,history.replaceState(null,null,"#/?link="+e)},getObjURL(){var e=window.location.hash,t={};return e.replace(new RegExp("([^?=&]+)(=([^&]*))?","g"),(function(e,l,n,a){t[l]=a})),t["link"]&&(this.linkSelect=t["link"]),t}},setup(){const e=Object(n["z"])(!1);return{essentialLinks:k,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}}),m=(l("e4e1"),l("4d5a")),g=l("e359"),w=l("65c6"),L=l("9c40"),_=l("6ac5"),v=l("9404"),B=l("1c1c"),q=l("09e3");f.render=b,f.__scopeId="data-v-fa4964e0";t["default"]=f;p()(f,"components",{QLayout:m["a"],QHeader:g["a"],QToolbar:w["a"],QBtn:L["a"],QToolbarTitle:_["a"],QDrawer:v["a"],QList:B["a"],QItemLabel:s["a"],QPageContainer:q["a"]})},e4e1:function(e,t,l){"use strict";l("66ed")}}]);