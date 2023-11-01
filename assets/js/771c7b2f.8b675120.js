"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2006],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=r,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||i;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4869:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={order:2,title:"Joining Testnet"},o="Join the CrossFi Testnet",s={unversionedId:"node/tutorials/join-testnet",id:"node/tutorials/join-testnet",title:"Joining Testnet",description:"The current CrossFi testnet, crossfi-testnet-1.",source:"@site/docs/node/tutorials/join-testnet.md",sourceDirName:"node/tutorials",slug:"/node/tutorials/join-testnet",permalink:"/docs/node/tutorials/join-testnet",draft:!1,editUrl:"https://gitlab.dfmx.ae/xfi/xfi-front/crossfi.docs.front/docs/node/tutorials/join-testnet.md",tags:[],version:"current",frontMatter:{order:2,title:"Joining Testnet"},sidebar:"nodeSidebar",previous:{title:"Joining Mainnet",permalink:"/docs/node/tutorials/join-mainnet"},next:{title:"Upgrading the Chain",permalink:"/docs/node/tutorials/live-upgrade-tutorial"}},l={},p=[{value:"Overview",id:"overview",level:3},{value:"Background",id:"background",level:3},{value:"Explorers",id:"explorers",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Hardware",id:"hardware",level:2},{value:"General Configuration",id:"general-configuration",level:2},{value:"Initialize Chain",id:"initialize-chain",level:3},{value:"Seeds &amp; Peers",id:"seeds--peers",level:3},{value:"Pruning of State",id:"pruning-of-state",level:3},{value:"REST API",id:"rest-api",level:3},{value:"GRPC",id:"grpc",level:3},{value:"Sync Options",id:"sync-options",level:2},{value:"Blocksync",id:"blocksync",level:3},{value:"Getting Started",id:"getting-started-1",level:5},{value:"State Sync",id:"state-sync",level:3},{value:"Snapshots",id:"snapshots",level:2},{value:"Cosmovisor",id:"cosmovisor",level:2},{value:"Running via Background Process",id:"running-via-background-process",level:2},{value:"Exporting State",id:"exporting-state",level:2},{value:"Verify testnet",id:"verify-testnet",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"join-the-crossfi-testnet"},"Join the CrossFi Testnet"),(0,r.kt)("p",null,"The current CrossFi testnet, ",(0,r.kt)("inlineCode",{parentName:"p"},"crossfi-testnet-1"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This guide includes full instructions for joining the testnet either as an archive/full node or a pruned node.")),(0,r.kt)("p",null,"For instructions to boostrap a node via Quicksync or State Sync, see the ",(0,r.kt)("a",{parentName:"p",href:"https://hub.cosmos.network/main/getting-started/quickstart.html"},"Quickstart Guide")),(0,r.kt)("p",null,"For instructions to join as a validator, please also see the ",(0,r.kt)("a",{parentName:"p",href:"https://hub.cosmos.network/main/validators/overview.html#"},"Validator Guide"),"."),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#explorers"},"Explorers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#getting-started"},"Getting Started")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#hardware"},"Hardware Requirements")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#general-configuration"},"General Configuration"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#initialize-chain"},"Initialize Chain")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#genesis-file"},"Genesis File")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#seeds-amp-peers"},"Seeds & Peers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#gas-amp-fees"},"Gas & Fees")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#pruning-of-state"},"Pruning of State")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#rest-api"},"REST API")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#grpc"},"GRPC")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#sync-options"},"Sync Options"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#blocksync"},"Blocksync")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#state-sync"},"State Sync")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#quicksync"},"Quicksync")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#snapshots"},"Snapshots"),"="),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#releases-amp-upgrades"},"Releases")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#cosmovisor"},"Cosmovisor")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#running-via-background-process"},"Running via Background Process")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#exporting-state"},"Exporting State")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#verify-testnet"},"Verify testnet"))),(0,r.kt)("h3",{id:"background"},"Background"),(0,r.kt)("p",null,"The current Crossfi Chain testnet ",(0,r.kt)("inlineCode",{parentName:"p"},"crossfi-testnet-1"),"."),(0,r.kt)("h2",{id:"explorers"},"Explorers"),(0,r.kt)("p",null,"There are many explorers for the Crossfi Chain. For reference while setting up a node, here are a few recommendations:"),(0,r.kt)("p",null,"..."),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"Make sure the following prerequisites are completed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Choose the proper hardware/server configuration. See the ",(0,r.kt)("a",{parentName:"li",href:"#hardware"},"hardware guide"),"."),(0,r.kt)("li",{parentName:"ul"},"Ensure crossfid is properly installed. See the ",(0,r.kt)("a",{parentName:"li",href:"https://hub.cosmos.network/main/getting-started/installation.html"},"installation guide")," for a walkthrough."),(0,r.kt)("li",{parentName:"ul"},"Follow the ",(0,r.kt)("a",{parentName:"li",href:"#General-Configuration"},"configuration guide")," to intialize and prepare the node to sync with the network.")),(0,r.kt)("h2",{id:"hardware"},"Hardware"),(0,r.kt)("p",null,"Running a full archive node can be resource intensive as the full current ",(0,r.kt)("inlineCode",{parentName:"p"},"crossfi-1")," can be is over ",(0,r.kt)("inlineCode",{parentName:"p"},"1TB"),". For those who wish to run state sync or use quicksync, the following hardware configuration is recommended:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Node Type"),(0,r.kt)("th",{parentName:"tr",align:null},"RAM"),(0,r.kt)("th",{parentName:"tr",align:null},"Storage"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Validator"),(0,r.kt)("td",{parentName:"tr",align:null},"32GB"),(0,r.kt)("td",{parentName:"tr",align:null},"500GB-2TB*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Full"),(0,r.kt)("td",{parentName:"tr",align:null},"16GB"),(0,r.kt)("td",{parentName:"tr",align:null},"2TB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Default"),(0,r.kt)("td",{parentName:"tr",align:null},"16GB"),(0,r.kt)("td",{parentName:"tr",align:null},"1TB")))),(0,r.kt)("p",null,"*"," Storage size for validators will depend on level of pruning."),(0,r.kt)("h2",{id:"general-configuration"},"General Configuration"),(0,r.kt)("p",null,"Make sure to walk through the basic setup and configuration. Operators will need to initialize ",(0,r.kt)("inlineCode",{parentName:"p"},"crossfid"),", download the genesis file for ",(0,r.kt)("inlineCode",{parentName:"p"},"crossfi-1"),", and set persistent peers and/or seeds for startup."),(0,r.kt)("h3",{id:"initialize-chain"},"Initialize Chain"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/crossfichain/crossfi-2-node/releases/download/v0.1.0/crossfi-2-node._v0.1.0_darwin_arm64.tar.gz && tar -xf crossfi-2-node._v0.1.0_darwin_arm64.tar.gz\ngit clone https://github.com/crossfichain/testnet.git\n./crossfid start --home ./testnet\n")),(0,r.kt)("h3",{id:"seeds--peers"},"Seeds & Peers"),(0,r.kt)("p",null,"Upon startup the node will need to connect to peers. If there are specific nodes a node operator is interested in setting as seeds or as persistent peers, this can be configured in ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.crossfid/config/config.toml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# Comma separated list of seed nodes to connect to\nseeds = "<seed node id 1>@<seed node address 1>:26656,<seed node id 2>@<seed node address 2>:26656"\n\n# Comma separated list of nodes to keep persistent connections to\npersistent_peers = "<node id 1>@<node address 1>:26656,<node id 2>@<node address 2>:26656"\n')),(0,r.kt)("h3",{id:"pruning-of-state"},"Pruning of State"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note"),": This is an optional configuration.")),(0,r.kt)("p",null,"There are four strategies for pruning state. These strategies apply only to state and do not apply to block storage. A node operator may want to consider custom pruning if node storage is a concern or there is an interest in running an archive node."),(0,r.kt)("p",null,"To set pruning, adjust the ",(0,r.kt)("inlineCode",{parentName:"p"},"pruning")," parameter in the ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.crossfid/config/app.toml")," file.\nThe following pruning state settings are available:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"everything"),": Prune all saved states other than the current state."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"nothing"),": Save all states and delete nothing."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"default"),": Save the last 100 states and the state of every 10,000th block."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"custom"),": Specify pruning settings with the ",(0,r.kt)("inlineCode",{parentName:"li"},"pruning-keep-recent"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"pruning-keep-every"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"pruning-interval")," parameters.")),(0,r.kt)("p",null,"By default, every node is in ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," mode which is the recommended setting for most environments.\nIf a node operator wants to change their node's pruning strategy then this ",(0,r.kt)("strong",{parentName:"p"},"must")," be done before the node is initialized."),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.crossfid/config/app.toml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# default: the last 100 states are kept in addition to every 500th state; pruning at 10 block intervals\n# nothing: all historic states will be saved, nothing will be deleted (i.e. archiving node)\n# everything: all saved states will be deleted, storing only the current state; pruning at 10 block intervals\n# custom: allow pruning options to be manually specified through \'pruning-keep-recent\', \'pruning-keep-every\', and \'pruning-interval\'\npruning = "custom"\n\n# These are applied if and only if the pruning strategy is custom.\npruning-keep-recent = "10"\npruning-keep-every = "1000"\npruning-interval = "10"\n')),(0,r.kt)("p",null,"Passing a flag when starting ",(0,r.kt)("inlineCode",{parentName:"p"},"crossfid")," will always override settings in the ",(0,r.kt)("inlineCode",{parentName:"p"},"app.toml")," file. To change the node's pruning setting to ",(0,r.kt)("inlineCode",{parentName:"p"},"everything")," mode then pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"---pruning everything")," flag when running ",(0,r.kt)("inlineCode",{parentName:"p"},"crossfid start"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note"),": If running the node with pruned state, it will not be possible to query the heights that are not in the node's store.")),(0,r.kt)("h3",{id:"rest-api"},"REST API"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note"),": This is an optional configuration.")),(0,r.kt)("p",null,"By default, the REST API is disabled. To enable the REST API, edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.crossfid/config/app.toml")," file, and set ",(0,r.kt)("inlineCode",{parentName:"p"},"enable")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"[api]")," section."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'###############################################################################\n###                           API Configuration                             ###\n###############################################################################\n[api]\n# Enable defines if the API server should be enabled.\nenable = true\n# Swagger defines if swagger documentation should automatically be registered.\nswagger = false\n# Address defines the API server to listen on.\naddress = "tcp://0.0.0.0:1317"\n')),(0,r.kt)("p",null,"Optionally activate swagger by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"swagger")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," or change the port of the REST API in the parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"address"),".\nAfter restarting the application, access the REST API on ",(0,r.kt)("inlineCode",{parentName:"p"},"<NODE IP>:1317"),"."),(0,r.kt)("h3",{id:"grpc"},"GRPC"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note"),": This is an optional configuration.")),(0,r.kt)("p",null,"By default, gRPC is enabled on port ",(0,r.kt)("inlineCode",{parentName:"p"},"9090"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.crossfid/config/app.toml")," file is where changes can be made in the gRPC section. To disable the gRPC endpoint, set ",(0,r.kt)("inlineCode",{parentName:"p"},"enable")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),". To change the port, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"address")," parameter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'###############################################################################\n###                           gRPC Configuration                            ###\n###############################################################################\n[grpc]\n# Enable defines if the gRPC server should be enabled.\nenable = true\n# Address defines the gRPC server address to bind to.\naddress = "0.0.0.0:9090"\n')),(0,r.kt)("h2",{id:"sync-options"},"Sync Options"),(0,r.kt)("p",null,"There are three main ways to sync a node on the Crossfi Chain; Blocksync, State Sync, and Quicksync. See the matrix below for the Hub's recommended setup configuration. This guide will focus on syncing two types of common nodes; full and pruned. For further information on syncing to run a validator node, see the section on ",(0,r.kt)("a",{parentName:"p",href:"https://hub.cosmos.network/main/validators/overview.html"},"Validators"),"."),(0,r.kt)("p",null,"There are two types of concerns when deciding which sync option is right. ",(0,r.kt)("em",{parentName:"p"},"Data integrity")," refers to how reliable the data provided by a subset of network participants is. ",(0,r.kt)("em",{parentName:"p"},"Historical data")," refers to how robust and inclusive the chain\u2019s history is."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Low Data Integrity"),(0,r.kt)("th",{parentName:"tr",align:null},"High Data Integrity"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Minimal Historical Data"),(0,r.kt)("td",{parentName:"tr",align:null},"Quicksync - Pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"State Sync")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Moderate Historical Data"),(0,r.kt)("td",{parentName:"tr",align:null},"Quicksync - Default"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Full Historical Data"),(0,r.kt)("td",{parentName:"tr",align:null},"Quicksync - Archive"),(0,r.kt)("td",{parentName:"tr",align:null},"Blocksync")))),(0,r.kt)("p",null,"If a node operator wishes to run a full node, it is possible to start from scratch but will take a significant amount of time to catch up. Node operators not concerned with rebuilding original state from the beginning of ",(0,r.kt)("inlineCode",{parentName:"p"},"crossfi-1")," can also leverage ",(0,r.kt)("a",{parentName:"p",href:"#Quicksync"},"Quicksync"),"'s available archive history."),(0,r.kt)("p",null,"For operators interested in bootstrapping a pruned node, either ",(0,r.kt)("a",{parentName:"p",href:"#Quicksync"},"Quicksync")," or ",(0,r.kt)("a",{parentName:"p",href:"#State-Sync"},"State Sync")," would be sufficient."),(0,r.kt)("p",null,"Make sure to consult the ",(0,r.kt)("a",{parentName:"p",href:"#Hardware"},"hardware")," section for guidance on the best configuration for the type of node operating."),(0,r.kt)("h3",{id:"blocksync"},"Blocksync"),(0,r.kt)("p",null,"Blocksync is faster than traditional consensus and syncs the chain from genesis by downloading blocks and verifying against the merkle tree of validators. For more information see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.tendermint.com/v0.34/tendermint-core/fast-sync.html"},"Tendermint's Fastsync Docs")),(0,r.kt)("p",null,"When syncing via Blocksync, node operators will either need to manually upgrade the chain or set up ",(0,r.kt)("a",{parentName:"p",href:"#Cosmovisor"},"Cosmovisor")," to upgrade automatically."),(0,r.kt)("p",null,"It is possible to sync from previous versions of the Crossfi Chain. See the matrix below for the correct ",(0,r.kt)("inlineCode",{parentName:"p"},"crossfid")," version. See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/testnet"},"testnet archive")," for historical genesis files."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Chain Id"),(0,r.kt)("th",{parentName:"tr",align:null},"Crossfi Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"crossfi-1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"v1.0.0"))))),(0,r.kt)("h5",{id:"getting-started-1"},"Getting Started"),(0,r.kt)("p",null,"Start crossfid to begin syncing with the ",(0,r.kt)("inlineCode",{parentName:"p"},"skip-invariants")," flag. For more information on this see ",(0,r.kt)("a",{parentName:"p",href:"#Verify-testnet"},"Verify testnet"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"crossfid start --x-crisis-skip-assert-invariants\n")),(0,r.kt)("h3",{id:"state-sync"},"State Sync"),(0,r.kt)("p",null,"State Sync is an efficient and fast way to bootstrap a new node, and it works by replaying larger chunks of application state directly rather than replaying individual blocks or consensus rounds. For more information, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tendermint/tendermint/blob/v0.34.x/spec/p2p/messages/state-sync.md"},"Tendermint's State Sync docs"),"."),(0,r.kt)("p",null,"To enable state sync, visit an explorer to get a recent block height and corresponding hash. A node operator can choose any height/hash in the current bonding period, but as the recommended snapshot period is ",(0,r.kt)("inlineCode",{parentName:"p"},"1000")," blocks, it is advised to choose something close to ",(0,r.kt)("inlineCode",{parentName:"p"},"current height - 1000"),"."),(0,r.kt)("p",null,"With the block height and hash selected, update the configuration in ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.crossfid/config/config.toml")," to set ",(0,r.kt)("inlineCode",{parentName:"p"},"enable = true"),", and populate the ",(0,r.kt)("inlineCode",{parentName:"p"},"trust_height")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"trust_hash"),". Node operators can configure the rpc servers to a preferred provider, but there must be at least two entries. It is important that these are two rpc servers the node operator trusts to verify component parts of the chain state. While not recommended, uniqueness is not currently enforced, so it is possible to duplicate the same server in the list and still sync successfully."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note"),": In the future, the RPC server requirement will be deprecated as state sync is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tendermint/tendermint/issues/6491"},"moved to the p2p layer in Tendermint 0.38"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'#######################################################\n###         State Sync Configuration Options        ###\n#######################################################\n[statesync]\n# State sync rapidly bootstraps a new node by discovering, fetching, and restoring a state machine\n# snapshot from peers instead of fetching and replaying historical blocks. Requires some peers in\n# the network to take and serve state machine snapshots. State sync is not attempted if the node\n# has any local state (LastBlockHeight > 0). The node will have a truncated block history,\n# starting from the height of the snapshot.\nenable = true\n\n# RPC servers (comma-separated) for light client verification of the synced state machine and\n# retrieval of state data for node bootstrapping. Also needs a trusted height and corresponding\n# header hash obtained from a trusted source, and a period during which validators can be trusted.\n#\n# For Cosmos SDK-based chains, trust_period should usually be about 2/3 of the unbonding time (~2\n# weeks) during which they can be financially punished (slashed) for misbehavior.\nrpc_servers = ""\ntrust_height = 0\ntrust_hash = ""\ntrust_period = "168h0m0s"\n')),(0,r.kt)("p",null,"Start crossfid to begin state sync. It may take take some time for the node to acquire a snapshot, but the command and output should look similar to the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ crossfid start --x-crisis-skip-assert-invariants\n\n...\n\n> INF Discovered new snapshot format=1 hash="0x000..." height=8967000 module=statesync\n\n...\n\n> INF Fetching snapshot chunk chunk=4 format=1 height=8967000 module=statesync total=45\n> INF Applied snapshot chunk to ABCI app chunk=0 format=1 height=8967000 module=statesync total=45\n')),(0,r.kt)("p",null,"Once state sync successfully completes, the node will begin to process blocks normally. If state sync fails and the node operator encounters the following error:  ",(0,r.kt)("inlineCode",{parentName:"p"},'State sync failed err="state sync aborted"'),", either try restarting ",(0,r.kt)("inlineCode",{parentName:"p"},"crossfid")," or running ",(0,r.kt)("inlineCode",{parentName:"p"},"crossfid unsafe-reset-all")," (make sure to backup any configuration and history before doing this)."),(0,r.kt)("h2",{id:"snapshots"},"Snapshots"),(0,r.kt)("p",null,"Saving and serving snapshots helps nodes rapidly join the network. Snapshots are now enabled by default effective ",(0,r.kt)("inlineCode",{parentName:"p"},"1/20/21"),"."),(0,r.kt)("p",null,"While not advised, if a node operator needs to customize this feature, it can be configured in ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.crossfid/config/app.toml"),". The Crossfi Chain recommends setting this value to match ",(0,r.kt)("inlineCode",{parentName:"p"},"pruning-keep-every")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"config.toml"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note"),": It is highly recommended that node operators use the same value for snapshot-interval in order to aid snapshot discovery. Discovery is easier when more nodes are serving the same snapshots.")),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"app.toml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"###############################################################################\n###                        State Sync Configuration                         ###\n###############################################################################\n\n# State sync snapshots allow other nodes to rapidly join the network without replaying historical\n# blocks, instead downloading and applying a snapshot of the application state at a given height.\n[state-sync]\n\n# snapshot-interval specifies the block interval at which local state sync snapshots are\n# taken (0 to disable). Must be a multiple of pruning-keep-every.\nsnapshot-interval = 1000\n\n# snapshot-keep-recent specifies the number of recent snapshots to keep and serve (0 to keep all).\nsnapshot-keep-recent = 10\n")),(0,r.kt)("h2",{id:"cosmovisor"},"Cosmovisor"),(0,r.kt)("p",null,"Cosmovisor is a process manager developed to relieve node operators of having to manually intervene every time there is an upgrade. Cosmovisor monitors the governance module for upgrade proposals; it will take care of downloading the new binary, stopping the old one, switching to the new one, and restarting."),(0,r.kt)("p",null,"For more information on how to run a node via Cosmovisor, check out the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.45.0/cosmovisor/README.md"},"docs"),"."),(0,r.kt)("h2",{id:"running-via-background-process"},"Running via Background Process"),(0,r.kt)("p",null,"To run the node in a background process with automatic restarts, it's recommended to use a service manager like ",(0,r.kt)("inlineCode",{parentName:"p"},"systemd"),". To set this up run the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo tee /etc/systemd/system/<service name>.service > /dev/null <<EOF  \n[Unit]\nDescription=crossfid Daemon\nAfter=network-online.target\n\n[Service]\nUser=$USER\nExecStart=$(which crossfid) start\nRestart=always\nRestartSec=3\nLimitNOFILE=4096\n\n[Install]\nWantedBy=multi-user.target\nEOF\n")),(0,r.kt)("p",null,"If using Cosmovisor then make sure to add the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Environment="DAEMON_HOME=$HOME/.crossfid"\nEnvironment="DAEMON_NAME=crossfid"\nEnvironment="DAEMON_ALLOW_DOWNLOAD_BINARIES=false"\nEnvironment="DAEMON_RESTART_AFTER_UPGRADE=true"\n')),(0,r.kt)("p",null,"After the ",(0,r.kt)("inlineCode",{parentName:"p"},"LimitNOFILE")," line and replace ",(0,r.kt)("inlineCode",{parentName:"p"},"$(which crossfid)")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"$(which cosmovisor)"),"."),(0,r.kt)("p",null,"Run the following to setup the daemon:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -S systemctl daemon-reload\nsudo -S systemctl enable <service name>\n")),(0,r.kt)("p",null,"Then start the process and confirm that it's running."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -S systemctl start <service name>\n\nsudo service <service name> status\n")),(0,r.kt)("h2",{id:"exporting-state"},"Exporting State"),(0,r.kt)("p",null,"crossfid can dump the entire application state into a JSON file. This application state dump is useful for manual analysis and can also be used as the genesis file of a new network."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note"),": The node can't be running while exporting state, otherwise the operator can expect a ",(0,r.kt)("inlineCode",{parentName:"p"},"resource temporarily unavailable")," error.")),(0,r.kt)("p",null,"Export state with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"crossfid export > [filename].json\n")),(0,r.kt)("p",null,"It is also possible to export state from a particular height (at the end of processing the block of that height):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"crossfid export --height [height] > [filename].json\n")),(0,r.kt)("p",null,"If planning to start a new network from the exported state, export with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--for-zero-height")," flag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"crossfid export --height [height] --for-zero-height > [filename].json\n")),(0,r.kt)("h2",{id:"verify-testnet"},"Verify testnet"),(0,r.kt)("p",null,"Help to prevent a catastrophe by running invariants on each block on your full\nnode. In essence, by running invariants the node operator ensures that the state of testnet is the correct expected state. One vital invariant check is that no atoms are being created or destroyed outside of expected protocol, however there are many other invariant checks each unique to their respective module. Because invariant checks are computationally expensive, they are not enabled by default. To run a node with these checks start your node with the assert-invariants-blockly flag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"crossfid start --assert-invariants-blockly\n")),(0,r.kt)("p",null,"If an invariant is broken on the node, it will panic and prompt the operator to send a transaction which will halt testnet. For example the provided message may look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"invariant broken:\n    loose token invariance:\n        pool.NotBondedTokens: 100\n        sum of account tokens: 101\n    CRITICAL please submit the following transaction:\n        crossfid tx crisis invariant-broken staking supply\n\n")))}u.isMDXComponent=!0}}]);