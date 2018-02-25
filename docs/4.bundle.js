(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{379:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=d(n(1)),u=d(n(425)),l=d(n(387)),a=d(n(385));function d(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return r.default.createElement("div",null,r.default.createElement(l.default,{children:u.default}),r.default.createElement(a.default,{previous:{href:"/theming",name:"Theming"},next:{href:"/server-side-rendering",name:"Server Side Rendering"}}))}},384:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(8)),u=a(n(1)),l=n(12);function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return u.default.createElement(l.Heading,(0,r.default)({},e,{is:"h1",fontSize:[5,6,7,8],my:4}))}},385:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,u=n(1),l=(r=u)&&r.__esModule?r:{default:r},a=n(17),d=n(389),o=n(12);t.default=function(e){return l.default.createElement(o.Flex,{my:[3,5]},e.previous&&l.default.createElement(o.NavLink,{is:a.Link,to:e.previous.href},l.default.createElement(d.Chevron,{left:!0,size:16}),l.default.createElement(o.Text,{fontWeight:"bold",ml:2},e.previous.name)),e.next&&l.default.createElement(o.NavLink,{is:a.Link,ml:"auto",to:e.next.href},l.default.createElement(o.Text,{bold:!0,mr:2},e.next.name),l.default.createElement(d.Chevron,{right:!0,size:16})))}},387:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=p(n(8)),u=p(n(18)),l=p(n(24)),a=p(n(23)),d=p(n(22)),o=p(n(21)),f=p(n(1)),i=(p(n(7)),p(n(107))),c=p(n(391)),s=n(12),m=(function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);t.default=e}(s),p(n(384)));function p(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(){return(0,l.default)(this,t),(0,d.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}return(0,o.default)(t,e),(0,a.default)(t,[{key:"render",value:function(){return f.default.createElement(c.default,{source:this.props.children,renderers:v})}}]),t}(f.default.Component),v={code:function(e){var t=e.language,n=e.value;if(!/\./.test(t))return f.default.createElement(s.Pre,{fontSize:13,px:3,py:3,my:3,color:"blue",bg:"#fcfcff"},n);var r=!!/\.\./.test(t);return f.default.createElement(s.Box,{mb:3},f.default.createElement(i.default,{code:n,noInline:r}))},heading:function(e){return 1===e.level?f.default.createElement(m.default,e):f.default.createElement(s.BlockLink,{href:"#"+e.children},f.default.createElement(s.Heading,(0,r.default)({},e,{id:e.children,mt:5,mb:2})))},inlineCode:function(e){return f.default.createElement(s.Code,{color:"blue",children:e.value})},link:s.Link,paragraph:function(e){return f.default.createElement(s.Measure,(0,r.default)({},e,{maxWidth:"40em",mb:3}))}};t.default=h},425:function(e,t){e.exports="\n# Extending\n\nRebass components can be completely customized using styled-components' `.extend` method.\n\n```..jsx\nconst CustomButton = Button.extend`\n  border: 1px solid rgba(0, 0, 0, .25);\n  background-image: linear-gradient(transparent, rgba(0, 0, 0, .125));\n  box-shadow: 0 0 4px rgba(0, 0, 0, .25)\n`\n\nrender(\n  <CustomButton>\n    Hello\n  </CustomButton>\n)\n```\n"}}]);