(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{185:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c.n(a),o=c(16),l=c.n(o),r=c(4),s=c.n(r),i=c(76),d=c(7),h=(c(96),c(184),c(237)),j=c(230),p=c(235),u=c(238),g=c(233),m=c(227),b=c(231),O=c(234),v=c(229),S=c(232),f=c(236),x=c(239),y=c(224),I=c(77),w=c.n(I),N=(c(150),c(151),c(152),c(153),c(154),c(155),c(156),c(157),c(158),c(159),c(160),c(161),c(162),"http://34.214.122.22/api/"),k={c:"#include<stdio.h>\n\nint main() {\n    // Your Code will come here\n    return 0;\n}\n",cpp:"#include<bits/stdc++.h> \nusing namespace std;\n\nint main() {\n\t//Your Code will come here\n\treturn 0;\n}\n",python:"# Your code will come here\n",java:"class test {\n  public static void main(String args[]){\n      // Your Code will come here\n  }\n}\n"},J=c(78),C=c.n(J),E=c(12),_=Object(y.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}));var B=function(){var e=Object(a.useState)(k.cpp),t=Object(d.a)(e,2),c=(t[0],t[1]),n=Object(a.useState)("Submit Code to See Result"),o=Object(d.a)(n,2),l=o[0],r=o[1],y=Object(a.useState)("c_cpp"),I=Object(d.a)(y,2),J=I[0],B=I[1],L=Object(a.useState)(!1),T=Object(d.a)(L,2),A=T[0],R=T[1],Y=Object(a.useState)(""),D=Object(d.a)(Y,2),M=D[0],F=D[1],K=Object(a.useState)(JSON.parse(localStorage.getItem("theme"))||!1),P=Object(d.a)(K,2),G=P[0],W=P[1],z=Object(a.useState)(k.java),$=Object(d.a)(z,2),q=$[0],H=$[1],Q=Object(a.useState)(k.cpp),U=Object(d.a)(Q,2),V=U[0],X=U[1],Z=Object(a.useState)(k.python),ee=Object(d.a)(Z,2),te=ee[0],ce=ee[1],ae=function(){var e=Object(i.a)(s.a.mark((function e(t){var c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),R(!0),c="java"===J?{code:null!=localStorage.getItem("javacode")?JSON.parse(localStorage.getItem("javacode")):q,lang:J,input:M,result:l}:"c_cpp"===J?{code:null!=localStorage.getItem("cppcode")?JSON.parse(localStorage.getItem("cppcode")):V,lang:J,input:M,result:l}:{code:null!=localStorage.getItem("pythoncode")?JSON.parse(localStorage.getItem("pythoncode")):te,lang:J,input:M,result:l},"https:"==window.location.protocol&&(alert("You are accessing the https version which will not work, Redirecting you to http version."),window.location.href=window.location.href.replace("https:","http:")),C.a.post("".concat(N,"v1/submit"),c).then((function(e){R(!1);var t=e.data;t.err?r(t.error):r(t.output)})).catch((function(e){R(!1)}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();!function(e,t){var c=Object(a.useRef)(t);Object(a.useEffect)((function(){c.current=t})),Object(a.useEffect)((function(){function e(e){13===e.keyCode&&e.shiftKey&&e.ctrlKey&&c.current(e)}return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}}),[e])}("Enter",ae);var ne=_();return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("theme"));null==e&&(e=!1),B("c_cpp"),localStorage.setItem("theme",e)}),[]),Object(E.jsxs)("div",{className:G?"fullBodyDark":"fullBody",children:[Object(E.jsxs)(m.a,{children:[A?Object(E.jsx)(v.a,{}):Object(E.jsx)(E.Fragment,{}),Object(E.jsxs)("div",{className:"row",children:[Object(E.jsxs)("div",{className:"column left",children:[Object(E.jsxs)("div",{className:"",children:[Object(E.jsxs)(j.a,{variant:"filled",className:ne.formControl,style:{color:G?"white":"black"},children:[Object(E.jsx)(h.a,{style:{color:G?"white":"black"},id:"demo-simple-select-outlined-label",children:"Language"}),Object(E.jsxs)(p.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:J,style:{color:G?"white":"black"},onChange:function(e){return function(e){var t=e.target.value;if(localStorage.setItem("lang",t),B(t),"java"===t){var a=localStorage.getItem("javacode");null==a?(c(k[t]),localStorage.setItem("code",JSON.stringify(k[t]))):(localStorage.setItem("code",JSON.stringify(a)),c(a))}else if("c_cpp"===t){var n=localStorage.getItem("cppcode");null==n?(c(k[t]),localStorage.setItem("code",JSON.stringify(k[t]))):(localStorage.setItem("code",JSON.stringify(n)),c(n))}else{var o=localStorage.getItem("pythoncode");null==o?(c(k[t]),localStorage.setItem("code",JSON.stringify(k[t]))):(localStorage.setItem("code",JSON.stringify(o)),c(o))}}(e)},label:"Language",children:[Object(E.jsx)(u.a,{value:"c_cpp",children:"C++"}),Object(E.jsx)(u.a,{value:"java",children:"Java 11"}),Object(E.jsx)(u.a,{value:"python",children:"Python3"})]})]}),Object(E.jsx)(x.a,{control:Object(E.jsx)(f.a,{style:{color:"white"},checked:G,onChange:function(e){localStorage.setItem("theme",!G),W(!G)},color:"primary",name:"checkedB",inputProps:{"aria-label":"primary checkbox"}}),style:{marginLeft:"500px",textAlign:"center"},label:G?"\ud83c\udf1a":"\ud83c\udf1e"}),Object(E.jsx)("div",{children:"java"===J?Object(E.jsx)("p",{children:'Don\'t change the main "test" class name for java'}):Object(E.jsx)(E.Fragment,{})}),Object(E.jsx)(S.a,{elevation:3,style:{padding:"5px"},children:Object(E.jsx)(w.a,{height:"100vh",width:"400",mode:null!=localStorage.getItem("lang")?localStorage.getItem("lang"):J,theme:G?"monokai":"crimson_editor",onChange:function(e,t){"java"===J?(localStorage.setItem("lang",J),localStorage.setItem("javacode",JSON.stringify(e)),H(e)):"c_cpp"===J?(localStorage.setItem("lang",J),localStorage.setItem("cppcode",JSON.stringify(e)),X(e)):(localStorage.setItem("lang",J),localStorage.setItem("pythoncode",JSON.stringify(e)),ce(e)),localStorage.setItem("lang",J),localStorage.setItem("code",JSON.stringify(e)),c(e)},name:"Monaco",fontSize:16,editorProps:{$blockScrolling:!0},highlightActiveLine:!0,setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0},focus:!0,value:"java"===J?null!=localStorage.getItem("javacode")?JSON.parse(localStorage.getItem("javacode")):q:"c_cpp"===J?null!=localStorage.getItem("cppcode")?JSON.parse(localStorage.getItem("cppcode")):V:null!=localStorage.getItem("pythoncode")?JSON.parse(localStorage.getItem("pythoncode")):te})})]}),Object(E.jsx)("div",{style:{display:"flex"},children:Object(E.jsx)("div",{children:A?Object(E.jsx)(g.a,{}):Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(O.a,{variant:"contained",color:"primary",onClick:ae,style:{margin:"10px"},children:"Run (ctrl + shift + enter) \ud83c\udfc3\ud83c\udffb\u200d\u2642\ufe0f"}),Object(E.jsxs)("p",{children:["If the submission doesn't works please try"," ",Object(E.jsx)(O.a,{color:"secondary",href:"http://nav-compiler.herokuapp.com/",children:"here"})]}),Object(E.jsx)("p",{children:"Always make sure you are connected to the http version not the https version \ud83d\ude09 (specially if you use brave browser!)"})]})})})]}),Object(E.jsxs)("div",{className:"column right",children:[Object(E.jsx)("h1",{children:"Input: \ud83d\udcdd "}),Object(E.jsx)("div",{children:Object(E.jsx)("textarea",{placeholder:"Give Input",className:"ui-autocomplete-input",style:{width:"350px",height:"30vh"},type:"text",value:M,onChange:function(e){F(e.target.value)}})}),Object(E.jsxs)("div",{children:[Object(E.jsx)("div",{className:"row",children:Object(E.jsx)("h1",{className:"",children:"Output: \ud83e\uddfe"})}),Object(E.jsx)("div",{className:"",children:Object(E.jsx)(b.a,{style:{width:"350px",height:"60vh"},value:l,disabled:!0,"aria-label":"minimum height",minRows:9,fullwidth:"true",placeholder:"Minimum 3 rows"})})]})]})]})]}),Object(E.jsxs)("div",{className:"footer",children:[Object(E.jsx)("div",{style:{marginTop:"30px"},children:Object(E.jsx)("p",{children:"Made with \ud83d\udc9c By Navneet Kumar Singh"})}),Object(E.jsxs)("div",{style:{marginTop:"10px"},children:[Object(E.jsxs)("div",{children:["\ud83d\udcf7",Object(E.jsxs)("a",{href:"https://www.instagram.com/navneetkrsinghhh/",children:["Instagram"," "]})," "]}),Object(E.jsxs)("div",{style:{marginTop:"10px"},children:["\ud83d\udc31\u200d\ud83d\ude80",Object(E.jsx)("a",{href:"https://github.com/Navneet7716",children:" Github "})," "]}),Object(E.jsxs)("div",{style:{marginTop:"10px",marginBottom:"10px"},children:["\ud83c\udfae",Object(E.jsx)("a",{href:"https://discord.gg/NW97apa",children:" Discord "})," "]})]})]})]})};l.a.render(Object(E.jsx)(n.a.StrictMode,{children:Object(E.jsx)(B,{})}),document.getElementById("root"))},96:function(e,t,c){}},[[185,1,2]]]);
//# sourceMappingURL=main.2edeb55b.chunk.js.map