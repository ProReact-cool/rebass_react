(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{381:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=i(n(1)),o=i(n(427)),r=i(n(387)),u=i(n(385));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return l.default.createElement("div",null,l.default.createElement(r.default,{children:o.default}),l.default.createElement(u.default,{previous:{href:"/props",name:"Props"},next:{href:"/theming",name:"Theming"}}))}},384:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=u(n(8)),o=u(n(1)),r=n(12);function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return o.default.createElement(r.Heading,(0,l.default)({},e,{is:"h1",fontSize:[5,6,7,8],my:4}))}},385:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l,o=n(1),r=(l=o)&&l.__esModule?l:{default:l},u=n(17),i=n(389),a=n(12);t.default=function(e){return r.default.createElement(a.Flex,{my:[3,5]},e.previous&&r.default.createElement(a.NavLink,{is:u.Link,to:e.previous.href},r.default.createElement(i.Chevron,{left:!0,size:16}),r.default.createElement(a.Text,{fontWeight:"bold",ml:2},e.previous.name)),e.next&&r.default.createElement(a.NavLink,{is:u.Link,ml:"auto",to:e.next.href},r.default.createElement(a.Text,{bold:!0,mr:2},e.next.name),r.default.createElement(i.Chevron,{right:!0,size:16})))}},387:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=s(n(8)),o=s(n(18)),r=s(n(24)),u=s(n(23)),i=s(n(22)),a=s(n(21)),d=s(n(1)),f=(s(n(7)),s(n(107))),x=s(n(391)),c=n(12),p=(function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);t.default=e}(c),s(n(384)));function s(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(){return(0,r.default)(this,t),(0,i.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,a.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){return d.default.createElement(x.default,{source:this.props.children,renderers:m})}}]),t}(d.default.Component),m={code:function(e){var t=e.language,n=e.value;if(!/\./.test(t))return d.default.createElement(c.Pre,{fontSize:13,px:3,py:3,my:3,color:"blue",bg:"#fcfcff"},n);var l=!!/\.\./.test(t);return d.default.createElement(c.Box,{mb:3},d.default.createElement(f.default,{code:n,noInline:l}))},heading:function(e){return 1===e.level?d.default.createElement(p.default,e):d.default.createElement(c.BlockLink,{href:"#"+e.children},d.default.createElement(c.Heading,(0,l.default)({},e,{id:e.children,mt:5,mb:2})))},inlineCode:function(e){return d.default.createElement(c.Code,{color:"blue",children:e.value})},link:c.Link,paragraph:function(e){return d.default.createElement(c.Measure,(0,l.default)({},e,{maxWidth:"40em",mb:3}))}};t.default=h},427:function(e,t){e.exports="\n# Grid System\n\nRebass includes the incredibly flexible, responsive flexbox grid system\n[Grid Styled](http://jxnblk.com/grid-styled).\nUse the `<Flex />` and `<Box />` components to fine tune spacing and alignment in a variety of combination.\n\n```.jsx\n<Flex mx={-2}>\n  <Box width={1/2} px={2}>\n    <Text p={1} color='white' bg='blue'>\n      Half\n    </Text>\n  </Box>\n  <Box width={1/2} px={2}>\n    <Text p={1} color='white' bg='blue'>\n      Half\n    </Text>\n  </Box>\n</Flex>\n```\n\n```.jsx\n<Flex flexWrap='wrap' mx={-2}>\n  <Box px={2} py={2} width={1/2}>\n    <Text p={1} color='white' bg='blue'>\n      1/2\n    </Text>\n  </Box>\n  <Box px={2} py={2} width={1/2}>\n    <Text p={1} color='white' bg='blue'>\n      1/2\n    </Text>\n  </Box>\n  <Box px={2} py={2} width={1/3}>\n    <Text p={1} color='white' bg='blue'>\n      1/3\n    </Text>\n  </Box>\n  <Box px={2} py={2} width={1/3}>\n    <Text p={1} color='white' bg='blue'>\n      1/3\n    </Text>\n  </Box>\n  <Box px={2} py={2} width={1/3}>\n    <Text p={1} color='white' bg='blue'>\n      1/3\n    </Text>\n  </Box>\n  <Box px={2} py={2} width={1/4}>\n    <Text p={1} color='white' bg='blue'>\n      1/4\n    </Text>\n  </Box>\n  <Box px={2} py={2} width={1/4}>\n    <Text p={1} color='white' bg='blue'>\n      1/4\n    </Text>\n  </Box>\n  <Box px={2} py={2} width={1/4}>\n    <Text p={1} color='white' bg='blue'>\n      1/4\n    </Text>\n  </Box>\n  <Box px={2} py={2} width={1/4}>\n    <Text p={1} color='white' bg='blue'>\n      1/4\n    </Text>\n  </Box>\n</Flex>\n```\n\n```.jsx\n<Flex alignItems='center'>\n  <Box width={1/3}>\n    <Heading\n      py={4}\n      fontSize={[ 5, 6 ]}\n      color='white'\n      bg='blue'>\n      Hello\n    </Heading>\n  </Box>\n  <Box width={1/3} ml='auto'>\n    <Text>Grid</Text>\n  </Box>\n</Flex>\n```\n\nSee the [Grid Styled documentation](https://github.com/jxnblk/grid-styled) for more.\n"}}]);