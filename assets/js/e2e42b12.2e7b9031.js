"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[635],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>k});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),m=p(n),u=a,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return n?r.createElement(k,l(l({ref:e},d),{},{components:n})):r.createElement(k,l({ref:e},d))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[m]="string"==typeof t?t:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9169:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},l="API",i={unversionedId:"node/EVM/api",id:"node/EVM/api",title:"API",description:"These following API's are recommended for development purposes. For maximun control and reliability it's recommended to run your own node.",source:"@site/docs/node/EVM/api.md",sourceDirName:"node/EVM",slug:"/node/EVM/api",permalink:"/docs/docs/node/EVM/api",draft:!1,tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Networks",id:"networks",level:2},{value:"Clients",id:"clients",level:2}],d={toc:p},m="wrapper";function c(t){let{components:e,...n}=t;return(0,a.kt)(m,(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"api"},"API"),(0,a.kt)("p",null,"These following API's are recommended for development purposes. For maximun control and reliability it's recommended to run your own node."),(0,a.kt)("h2",{id:"networks"},"Networks"),(0,a.kt)("p",null,"Quickly connect your app or client to CrossFi mainnet and public testnets. Head over to ",(0,a.kt)("a",{parentName:"p",href:"./api/networks"},"Networks")," to find a list of publicly available endpoints that you can use to connect to the CrossFi"),(0,a.kt)("h2",{id:"clients"},"Clients"),(0,a.kt)("p",null,"The CrossFi Network supports different clients in order to support Cosmos and Ethereum transactions and queries. You can use Swagger as a REST interface for state queries and transactions:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Port"),(0,a.kt)("th",{parentName:"tr",align:null},"Swagger"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Cosmos ",(0,a.kt)("a",{parentName:"strong",href:"./cosmos-grpc.md#cosmos-grpc"},"gRPC"))),(0,a.kt)("td",{parentName:"tr",align:null},"Query or send CrossFi transactions using gRPC"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"9090")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Cosmos REST (",(0,a.kt)("a",{parentName:"strong",href:"./cosmos-grpc.md#cosmos-http-rest-grpc-gateway"},"gRPC-Gateway"),")")),(0,a.kt)("td",{parentName:"tr",align:null},"Query or send CrossFi transactions using an HTTP RESTful API"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"9091")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://api.CrossFi.dev/"},"Testnet")," ",(0,a.kt)("a",{parentName:"td",href:"https://api.CrossFi.org/"},"Mainnet"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Ethereum ",(0,a.kt)("a",{parentName:"strong",href:"./ethereum-json-rpc/index.md"},"JSON-RPC"))),(0,a.kt)("td",{parentName:"tr",align:null},"Query Ethereum-formatted transactions and blocks or send Ethereum txs using JSON-RPC"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"8545")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Ethereum ",(0,a.kt)("a",{parentName:"strong",href:"./ethereum-json-rpc/index.md#ethereum-websocket"},"Websocket"))),(0,a.kt)("td",{parentName:"tr",align:null},"Subscribe to Ethereum logs and events emitted in smart contracts."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"8586")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Tendermint ",(0,a.kt)("a",{parentName:"strong",href:"#tendermint-rpc"},"RPC"))),(0,a.kt)("td",{parentName:"tr",align:null},"Query transactions, blocks, consensus state, broadcast transactions, etc."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"26657")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://docs.tendermint.com/v0.34/rpc/"},"Localhost"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Tendermint ",(0,a.kt)("a",{parentName:"strong",href:"#tendermint-websocket"},"Websocket"))),(0,a.kt)("td",{parentName:"tr",align:null},"Subscribe to Tendermint ABCI events"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"26657")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Command Line Interface (",(0,a.kt)("a",{parentName:"strong",href:"../../protocol/CrossFi-cli"},"CLI"),")")),(0,a.kt)("td",{parentName:"tr",align:null},"Query or send CrossFi transactions using your Terminal or Console."),(0,a.kt)("td",{parentName:"tr",align:null},"N/A"),(0,a.kt)("td",{parentName:"tr",align:null})))))}c.isMDXComponent=!0}}]);