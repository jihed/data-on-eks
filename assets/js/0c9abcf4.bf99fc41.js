"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[2321],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},561:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:1,sidebar_label:"Introduction"},i="Data Analytics on EKS",s={unversionedId:"data-analytics/index",id:"data-analytics/index",title:"Data Analytics on EKS",description:"Running data analytics tools on Kubernetes can provide a number of benefits for organizations looking to extract insights from large and complex data sets. Tools such as Apache Spark and DASK are designed to run on a cluster of machines, making them well-suited for deployment on Kubernetes.",source:"@site/docs/data-analytics/index.md",sourceDirName:"data-analytics",slug:"/data-analytics/",permalink:"/data-on-eks/docs/data-analytics/",draft:!1,editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/docs/data-analytics/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Introduction"},sidebar:"docs",previous:{title:"Data Analytics on EKS",permalink:"/data-on-eks/docs/category/data-analytics-on-eks"},next:{title:"Spark Operator with YuniKorn",permalink:"/data-on-eks/docs/data-analytics/spark-operator-yunikorn"}},l={},p=[],c={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-analytics-on-eks"},"Data Analytics on EKS"),(0,r.kt)("p",null,"Running data analytics tools on Kubernetes can provide a number of benefits for organizations looking to extract insights from large and complex data sets. Tools such as ",(0,r.kt)("strong",{parentName:"p"},"Apache Spark")," and ",(0,r.kt)("strong",{parentName:"p"},"DASK")," are designed to run on a cluster of machines, making them well-suited for deployment on Kubernetes."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Spark Operator")," for Kubernetes is a popular Kubernetes operator that simplifies the deployment and management of Apache Spark on Kubernetes. By using the Spark Operator, organizations can take advantage of features such as automatic scaling, rolling updates, and self-healing capabilities to ensure high availability and reliability of their data analytics pipelines. This can greatly simplify and automate the deployment, scaling, and management of these complex applications, freeing up data scientists and engineers to focus on the analysis and interpretation of the data."),(0,r.kt)("p",null,"With its growing ecosystem of tools and support for a wide range of use cases, Kubernetes is becoming an increasingly popular choice for running data analytics platforms in production."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/GoogleCloudPlatform/spark-on-k8s-operator"},"Spark Operator")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://spark.apache.org/docs/latest/running-on-kubernetes.html"},"Spark Submit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://karpenter.sh/"},"Karpenter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://yunikorn.apache.org/"},"Apache YuniKorn")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://volcano.sh/en/"},"Volcano"))))}u.isMDXComponent=!0}}]);