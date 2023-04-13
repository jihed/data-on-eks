"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[1499],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(r),k=n,m=u["".concat(p,".").concat(k)]||u[k]||d[k]||o;return r?a.createElement(m,s(s({ref:t},c),{},{components:r})):a.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},5489:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:3,sidebar_label:"Observability Spark on EKS"},s="Observability Spark on EKS",i={unversionedId:"data-analytics/observability-spark-on-eks",id:"data-analytics/observability-spark-on-eks",title:"Observability Spark on EKS",description:"Introduction",source:"@site/docs/data-analytics/observability-spark-on-eks.md",sourceDirName:"data-analytics",slug:"/data-analytics/observability-spark-on-eks",permalink:"/data-on-eks/docs/data-analytics/observability-spark-on-eks",draft:!1,editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/docs/data-analytics/observability-spark-on-eks.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Observability Spark on EKS"},sidebar:"docs",previous:{title:"Spark Operator with YuniKorn",permalink:"/data-on-eks/docs/data-analytics/spark-operator-yunikorn"},next:{title:"AI/ML on EKS",permalink:"/data-on-eks/docs/category/aiml-on-eks"}},p={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Deploying the Solution",id:"deploying-the-solution",level:2},{value:"Set up data and py script",id:"set-up-data-and-py-script",level:2},{value:"Spark Web UI",id:"spark-web-ui",level:2},{value:"Spark History Server",id:"spark-history-server",level:2},{value:"Prometheus",id:"prometheus",level:2},{value:"Grafana",id:"grafana",level:2}],c={toc:l},u="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"observability-spark-on-eks"},"Observability Spark on EKS"),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"In this post, we will learn the Observability for Spark on EKS. We will use Spark History Server to watch Spark Applications logs and check the Spark job progress via the Spark Web UI. Amazon Managed Service for Prometheus is used to collect and store the metrics generated by Spark Applications and Grafana is used to build dashboards for monitoring use cases."),(0,n.kt)("h2",{id:"deploying-the-solution"},"Deploying the Solution"),(0,n.kt)("p",null,"We will reuse the previous Spark on Operator example. Please follow ",(0,n.kt)("a",{parentName:"p",href:"https://awslabs.github.io/data-on-eks/docs/spark-on-eks/spark-operator-yunikorn#deploying-the-solution"},"this link")," to provision resources"),(0,n.kt)("h2",{id:"set-up-data-and-py-script"},"Set up data and py script"),(0,n.kt)("p",null,"let's navigate to one example folder under spark-k8s-operator and run the shell script to upload data and py script to the S3 bucket created by terraform above."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd data-on-eks/analytics/terraform/spark-k8s-operator/examples/nvme-ephemeral-storage\n\n# replace <S3_BUCKET> with your S3 bucket and <REGION> with your region, then run\n./taxi-trip-execute.sh\n")),(0,n.kt)("h2",{id:"spark-web-ui"},"Spark Web UI"),(0,n.kt)("p",null,"When you submit a Spark application, Spark context is created which ideally gives you ",(0,n.kt)("a",{parentName:"p",href:"https://sparkbyexamples.com/spark/spark-web-ui-understanding/"},"Spark Web UI")," to monitor the execution of the application. Monitoring includes the following."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Spark configurations used"),(0,n.kt)("li",{parentName:"ul"},"Spark Jobs, stages, and tasks details"),(0,n.kt)("li",{parentName:"ul"},"DAG execution"),(0,n.kt)("li",{parentName:"ul"},"Driver and Executor resource utilization"),(0,n.kt)("li",{parentName:"ul"},"Application logs and many more ",(0,n.kt)("br",null))),(0,n.kt)("p",null,"When your application is done with the processing, Spark context will be terminated so your Web UI as well. and if you wanted to see the monitoring for already finished application, we cannot do it."),(0,n.kt)("p",null,'To try Spark web UI, let\'s update <S3_BUCKET> with your bucket name and <JOB_NAME> with "nvme-taxi-trip" in nvme-ephemeral-storage.yaml'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"  kubectl apply -f nvme-ephemeral-storage.yaml\n")),(0,n.kt)("p",null,"Then run port forward command to expose spark web service."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward -n=spark &lt;SPARK_DRIVER_NAME&gt; 4040:4040\n")),(0,n.kt)("p",null,"Then open browser and enter localhost:4040. You can view your spark application like below."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img.png",src:r(993).Z,width:"1888",height:"934"})),(0,n.kt)("h2",{id:"spark-history-server"},"Spark History Server"),(0,n.kt)("p",null,"As mentioned above, spark web UI will be terminated once the spark job is done. This is where Spark history Server comes into the picture, where it keeps the history (event logs) of all completed applications and its runtime information which allows you to review metrics and monitor the application later in time."),(0,n.kt)("p",null,"In this example, we installed Spark history Server to read logs from S3 bucket. In your spark application yaml file, make sure you have the following setting:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'sparkConf:\n    "spark.hadoop.fs.s3a.aws.credentials.provider": "com.amazonaws.auth.InstanceProfileCredentialsProvider"\n    "spark.hadoop.fs.s3a.impl": "org.apache.hadoop.fs.s3a.S3AFileSystem"\n    "spark.eventLog.enabled": "true"\n    "spark.eventLog.dir": "s3a://<your bucket>/logs/"\n')),(0,n.kt)("p",null,"Run port forward command to expose spark-history-server service."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward services/spark-history-server 18085:80 -n spark-history-server\n")),(0,n.kt)("p",null,"Then open browser and enter localhost:18085. You can view your spark history server like below.\n",(0,n.kt)("img",{alt:"img.png",src:r(6825).Z,width:"1894",height:"500"})),(0,n.kt)("h2",{id:"prometheus"},"Prometheus"),(0,n.kt)("p",null,"Spark users must add the following config to spark application yaml file to extract the metrics from Spark Driver and Executors. In the example, they are added into nvme-ephemeral-storage.yaml already."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'"spark.ui.prometheus.enabled": "true"\n"spark.executor.processTreeMetrics.enabled": "true"\n"spark.kubernetes.driver.annotation.prometheus.io/scrape": "true"\n"spark.kubernetes.driver.annotation.prometheus.io/path": "/metrics/executors/prometheus/"\n"spark.kubernetes.driver.annotation.prometheus.io/port": "4040"\n"spark.kubernetes.driver.service.annotation.prometheus.io/scrape": "true"\n"spark.kubernetes.driver.service.annotation.prometheus.io/path": "/metrics/driver/prometheus/"\n"spark.kubernetes.driver.service.annotation.prometheus.io/port": "4040"\n"spark.metrics.conf.*.sink.prometheusServlet.class": "org.apache.spark.metrics.sink.PrometheusServlet"\n"spark.metrics.conf.*.sink.prometheusServlet.path": "/metrics/driver/prometheus/"\n"spark.metrics.conf.master.sink.prometheusServlet.path": "/metrics/master/prometheus/"\n"spark.metrics.conf.applications.sink.prometheusServlet.path": "/metrics/applications/prometheus/"\n')),(0,n.kt)("p",null,"Run port forward command to expose prometheus service."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl  port-forward service/prometheus-server   8080:80 -n prometheus\n")),(0,n.kt)("p",null,"Then open browser and enter localhost:8080. You can view your prometheus server like below.\n",(0,n.kt)("img",{alt:"img.png",src:r(3014).Z,width:"1911",height:"762"})),(0,n.kt)("h2",{id:"grafana"},"Grafana"),(0,n.kt)("p",null,"Grafana has been installed. Use the command below to access with port forward."),(0,n.kt)("h1",{id:"get-grafana-password"},"get grafana password"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl  port-forward service/grafana 8080:80 -n grafana  \n")),(0,n.kt)("p",null,"login username is admin and password can get from secrets manager. You can import dashboard with ID: 7890."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img.png",src:r(9524).Z,width:"1897",height:"796"})))}d.isMDXComponent=!0},3014:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/prometheus-spark-6b44472f727a400ea97c3e78dae319a1.png"},9524:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/spark-grafana-dashboard-663f9623e038dc15be3cab6e7d6d14ef.png"},6825:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/spark-history-server-e3a6062c788ed738fa1a4b7ab7f64b26.png"},993:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/spark-web-ui-734c4ac84186b9491042d11b78098303.png"}}]);