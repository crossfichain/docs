"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[309],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return n?o.createElement(h,s(s({ref:t},d),{},{components:n})):o.createElement(h,s({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8759:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const r={order:4,title:"Upgrading Your Node"},s="Upgrade Your Node",i={unversionedId:"node/tutorials/upgrade-node",id:"node/tutorials/upgrade-node",title:"Upgrading Your Node",description:"This document describes the upgrade procedure of a crossfid full-node to a new version.",source:"@site/docs/node/tutorials/upgrade-node.md",sourceDirName:"node/tutorials",slug:"/node/tutorials/upgrade-node",permalink:"/docs/docs/node/tutorials/upgrade-node",draft:!1,editUrl:"https://github.com/crossfichain/docs/tree/master/docs/node/tutorials/upgrade-node.md",tags:[],version:"current",frontMatter:{order:4,title:"Upgrading Your Node"},sidebar:"nodeSidebar",previous:{title:"txs",permalink:"/docs/docs/node/tutorials/txs"},next:{title:"Validators",permalink:"/docs/docs/node/validators/"}},l={},p=[{value:"Cosmovisor",id:"cosmovisor",level:2},{value:"Setup",id:"setup",level:3},{value:"Preparing an Upgrade",id:"preparing-an-upgrade",level:3},{value:"Manual Software Upgrade",id:"manual-software-upgrade",level:2},{value:"Upgrade Genesis File",id:"upgrade-genesis-file",level:2},{value:"Fetching from a Trusted Source",id:"fetching-from-a-trusted-source",level:3},{value:"Exporting State to a New Genesis Locally",id:"exporting-state-to-a-new-genesis-locally",level:3},{value:"Reset Data",id:"reset-data",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"upgrade-your-node"},"Upgrade Your Node"),(0,a.kt)("p",null,"This document describes the upgrade procedure of a ",(0,a.kt)("inlineCode",{parentName:"p"},"crossfid")," full-node to a new version."),(0,a.kt)("h2",{id:"cosmovisor"},"Cosmovisor"),(0,a.kt)("p",null,"The Cosmos SDK provides a convenient process manager that wraps around the ",(0,a.kt)("inlineCode",{parentName:"p"},"crossfid")," binary and can automatically swap in new binaries upon a successful governance upgrade proposal. Cosmovisor is entirely optional but recommended. More information can be found in ",(0,a.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/v0.45/run-node/cosmovisor.html"},"cosmos.network docs")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.45.0/cosmovisor/README.md"},"cosmos-sdk/cosmovisor/readme"),"."),(0,a.kt)("h3",{id:"setup"},"Setup"),(0,a.kt)("p",null,"To get started with Cosmovisor first download it"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go install github.com/cosmos/cosmos-sdk/cosmovisor/cmd/cosmovisor\n")),(0,a.kt)("p",null,"Set up the environment variables"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'echo "# Setup Cosmovisor" >> ~/.profile\necho "export DAEMON_NAME=crossfid" >> ~/.profile\necho "export DAEMON_HOME=$HOME/.crossfi" >> ~/.profile\nsource ~/.profile\n')),(0,a.kt)("p",null,"Create the appropriate directories"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p ~/.crossfi/cosmovisor/upgrades\nmkdir -p ~/.crossfi/cosmovisor/genesis/bin/\ncp $(which crossfid) ~/.crossfi/cosmovisor/genesis/bin/\n\n# verify the setup. \n# It should return the same version as crossfid\ncosmovisor version\n")),(0,a.kt)("p",null,"Now ",(0,a.kt)("inlineCode",{parentName:"p"},"crossfid")," can start by running"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cosmovisor start\n")),(0,a.kt)("h3",{id:"preparing-an-upgrade"},"Preparing an Upgrade"),(0,a.kt)("p",null,"Cosmovisor will continually poll  the ",(0,a.kt)("inlineCode",{parentName:"p"},"$DAEMON_HOME/data/upgrade-info.json")," for new upgrade instructions. When an upgrade is ready, node operators can download the new binary and place it under ",(0,a.kt)("inlineCode",{parentName:"p"},"$DAEMON_HOME/cosmovisor/upgrades/<name>/bin")," where ",(0,a.kt)("inlineCode",{parentName:"p"},"<name>")," is the URI-encoded name of the upgrade as specified in the upgrade module plan."),(0,a.kt)("p",null,"It is possible to have Cosmovisor automatically download the new binary. To do this set the following environment variable."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export DAEMON_ALLOW_DOWNLOAD_BINARIES=true\n")),(0,a.kt)("h2",{id:"manual-software-upgrade"},"Manual Software Upgrade"),(0,a.kt)("p",null,"First, stop your instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"crossfid"),". Next, upgrade the software:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd gaia\ngit fetch --all && git checkout <new_version>\nmake install\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("em",{parentName:"p"},"NOTE"),": If you have issues at this step, please check that you have the latest stable version of GO installed.")),(0,a.kt)("p",null,"Your full node has been cleanly upgraded! If there are no breaking changes then you can simply restart the node by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"crossfid start\n")),(0,a.kt)("h2",{id:"upgrade-genesis-file"},"Upgrade Genesis File"),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"If the new version you are upgrading to has breaking changes, you will have to restart your chain. If it is not breaking, you can skip to ",(0,a.kt)("a",{parentName:"p",href:"#restart"},"Restart"))),(0,a.kt)("p",null,"To upgrade the genesis file, you can either fetch it from a trusted source or export it locally."),(0,a.kt)("h3",{id:"fetching-from-a-trusted-source"},"Fetching from a Trusted Source"),(0,a.kt)("p",null,"If you are joining the mainnet, fetch the genesis from the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/launch"},"mainnet repo"),". If you are joining a public testnet, fetch the genesis from the appropriate testnet in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/testnets"},"testnet repo"),". Otherwise, fetch it from your trusted source."),(0,a.kt)("p",null,"Save the new genesis as ",(0,a.kt)("inlineCode",{parentName:"p"},"new_genesis.json"),". Then replace the old ",(0,a.kt)("inlineCode",{parentName:"p"},"genesis.json")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"new_genesis.json")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd $HOME/.crossfi/config\ncp -f genesis.json new_genesis.json\nmv new_genesis.json genesis.json\n")),(0,a.kt)("p",null,"Then, go to the ",(0,a.kt)("a",{parentName:"p",href:"#reset-data"},"reset data")," section."),(0,a.kt)("h3",{id:"exporting-state-to-a-new-genesis-locally"},"Exporting State to a New Genesis Locally"),(0,a.kt)("p",null,"If you were running a node in the previous version of the network and want to build your new genesis locally from a state of this previous network, use the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd $HOME/.crossfi/config\ncrossfid export --for-zero-height --height=<export-height> > new_genesis.json\n")),(0,a.kt)("p",null,"The command above take a state at a certain height ",(0,a.kt)("inlineCode",{parentName:"p"},"<export-height>")," and turns it into a new genesis file that can be used to start a new network."),(0,a.kt)("p",null,"Then, replace the old ",(0,a.kt)("inlineCode",{parentName:"p"},"genesis.json")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"new_genesis.json"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cp -f genesis.json new_genesis.json\nmv new_genesis.json genesis.json\n")),(0,a.kt)("p",null,"At this point, you might want to run a script to update the exported genesis into a genesis that is compatible with your new version. For example, the attributes of a the ",(0,a.kt)("inlineCode",{parentName:"p"},"Account")," type changed, a script should query encoded account from the account store, unmarshall them, update their type, re-marshal and re-store them. You can find an example of such script ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/02c6c9fafd58da88550ab4d7d494724a477c8a68/contrib/migrate/v0.33.x-to-v0.34.0.py"},"here"),"."),(0,a.kt)("h2",{id:"reset-data"},"Reset Data"),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"If the version <new_version> you are upgrading to is not breaking from the previous one, you should not reset the data. If it is not breaking, you can skip to ",(0,a.kt)("a",{parentName:"p",href:"#restart"},"Restart"))),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"If you are running a ",(0,a.kt)("strong",{parentName:"p"},"validator node")," on the mainnet, always be careful when doing ",(0,a.kt)("inlineCode",{parentName:"p"},"crossfid unsafe-reset-all"),". You should never use this command if you are not switching ",(0,a.kt)("inlineCode",{parentName:"p"},"chain-id"),".")),(0,a.kt)("admonition",{title:"IMPORTANT",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Make sure that every node has a unique ",(0,a.kt)("inlineCode",{parentName:"p"},"priv_validator.json"),". Do not copy the ",(0,a.kt)("inlineCode",{parentName:"p"},"priv_validator.json")," from an old node to multiple new nodes. Running two nodes with the same ",(0,a.kt)("inlineCode",{parentName:"p"},"priv_validator.json")," will cause you to get slashed due to double sign !")),(0,a.kt)("p",null,"First, remove the outdated files and reset the data. ",(0,a.kt)("strong",{parentName:"p"},"If you are running a validator node, make sure you understand what you are doing before resetting"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"crossfid unsafe-reset-all\n")),(0,a.kt)("p",null,"Your node is now in a pristine state while keeping the original ",(0,a.kt)("inlineCode",{parentName:"p"},"priv_validator.json")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"config.toml"),". If you had any sentry nodes or full nodes setup before, your node will still try to connect to them, but may fail if they haven't also been upgraded."))}c.isMDXComponent=!0}}]);