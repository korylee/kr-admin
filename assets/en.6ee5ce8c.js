var s=Object.defineProperty,l=Object.defineProperties;var c=Object.getOwnPropertyDescriptors;var t=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var a=(o,e,r)=>e in o?s(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r,n=(o,e)=>{for(var r in e||(e={}))d.call(e,r)&&a(o,r,e[r]);if(t)for(var r of t(e))m.call(e,r)&&a(o,r,e[r]);return o},i=(o,e)=>l(o,c(e));import{g as u,d as g}from"./index.618dfac3.js";var p={okText:"OK",closeText:"Close",cancelText:"Cancel",loadingText:"Loading...",saveText:"Save",delText:"Delete",resetText:"Reset",searchText:"Search",queryText:"Search",inputText:"Please enter",chooseText:"Please choose",refresh:"Refresh",back:"Back",light:"Light",dark:"Dark"},b=Object.freeze(Object.defineProperty({__proto__:null,default:p},Symbol.toStringTag,{value:"Module"})),h={app:{searchNotData:"No search results yet",toSearch:"to search",toNavigate:"to navigate"},countDown:{normalText:"Get SMS code",sendText:"Reacquire in {0}s"}},f=Object.freeze(Object.defineProperty({__proto__:null,default:h},Symbol.toStringTag,{value:"Module"})),T={footer:{onlinePreview:"Preview",onlineDocument:"Document"},header:{dropdownItemDoc:"Document",dropdownItemLoginOut:"Login Out",tooltipErrorLog:"Error log",tooltipLock:"Lock screen",tooltipNotify:"Notification",tooltipEntryFull:"Full Screen",tooltipExitFull:"Exit Full Screen",lockScreenPassword:"Lock screen password",lockScreen:"Lock screen",lockScreenBtn:"Locking",home:"Home"}},S=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"})),k={api:{operationFailed:"Operation failed",errorTip:"Error Tip",errorMessage:"The operation failed, the system is abnormal!",timeoutMessage:"Login timed out, please log in again!",apiTimeoutMessage:"The interface request timed out, please refresh the page and try again!",networkException:"network anomaly",networkExceptionMsg:"Please check if your network connection is normal! The network is abnormal",errMsg401:"The user does not have permission (token, user name, password error)!",errMsg403:"The user is authorized, but access is forbidden!",errMsg404:"Network request error, the resource was not found!",errMsg405:"Network request error, request method not allowed!",errMsg408:"Network request timed out!",errMsg500:"Server error, please contact the administrator!",errMsg501:"The network is not implemented!",errMsg502:"Network Error!",errMsg503:"The service is unavailable, the server is temporarily overloaded or maintained!",errMsg504:"Network timeout!",errMsg505:"The http version does not support the request!"},app:{logoutTip:"Reminder",logoutMessage:"Confirm to exit the system?",menuLoading:"Menu loading..."},errorLog:{tableTitle:"Error log list",tableColumnType:"Type",tableColumnDate:"Time",tableColumnFile:"File",tableColumnMsg:"Error message",tableColumnStackMsg:"Stack info",tableActionDesc:"Details",modalTitle:"Error details",fireVueError:"Fire vue error",fireResourceError:"Fire resource error",fireAjaxError:"Fire ajax error",enableMessage:"Only effective when useErrorHandle=true in `/src/settings/projectSetting.ts`."},exception:{backLogin:"Back Login",backHome:"Back Home",subTitle403:"Sorry, you don't have access to this page.",subTitle404:"Sorry, the page you visited does not exist.",subTitle500:"Sorry, the server is reporting an error.",noDataTitle:"No data on the current page.",networkErrorTitle:"Network Error",networkErrorSubTitle:"Sorry\uFF0CYour network connection has been disconnected, please check your network!"},lock:{unlock:"Click to unlock",alert:"Lock screen password error",backToLogin:"Back to login",entry:"Enter the system",placeholder:"Please enter the lock screen password or user password"},login:{backSignIn:"Back sign in",mobileSignInFormTitle:"Mobile sign in",qrSignInFormTitle:"Qr code sign in",signInFormTitle:"Sign in",signUpFormTitle:"Sign up",forgetFormTitle:"Reset password",signInTitle:"Backstage management system",signInDesc:"Enter your personal details and get started!",policy:"I agree to the xxx Privacy Policy",scanSign:"scanning the code to complete the login",loginButton:"Sign in",registerButton:"Sign up",rememberMe:"Remember me",forgetPassword:"Forget Password?",otherSignIn:"Sign in with",loginSuccessTitle:"Login successful",loginSuccessDesc:"Welcome back",accountPlaceholder:"Please input username",passwordPlaceholder:"Please input password",smsPlaceholder:"Please input sms code",mobilePlaceholder:"Please input mobile",policyPlaceholder:"Register after checking",diffPwd:"The two passwords are inconsistent",username:"Username",password:"Password",confirmPassword:"Confirm Password",email:"Email",smsCode:"SMS code",mobile:"Mobile"}},w=Object.freeze(Object.defineProperty({__proto__:null,default:k},Symbol.toStringTag,{value:"Module"})),y={login:"login",errorLogList:"Error Log"},v=Object.freeze(Object.defineProperty({__proto__:null,default:y},Symbol.toStringTag,{value:"Module"})),_={dashboard:"Dashboard",about:"About",workbench:"WorkBench",analysis:"Analysis"},x=Object.freeze(Object.defineProperty({__proto__:null,default:_},Symbol.toStringTag,{value:"Module"})),P={charts:{baiduMap:"Baidu map",aMap:"A map",googleMap:"Google map",charts:"Chart",map:"Map",line:"Line",pie:"Pie"},comp:{comp:"Component",basic:"Basic",transition:"Animation",countTo:"Count To",scroll:"Scroll",scrollBasic:"Basic",scrollAction:"Scroll Function",virtualScroll:"Virtual Scroll",tree:"Tree",treeBasic:"Basic",editTree:"Searchable/toolbar",actionTree:"Function operation",modal:"Modal",drawer:"Drawer",desc:"Desc",lazy:"Lazy",lazyBasic:"Basic",lazyTransition:"Animation",verify:"Verify",verifyDrag:"Drag ",verifyRotate:"Picture Restore",qrcode:"QR code",strength:"Password strength",upload:"Upload",loading:"Loading",time:"Relative Time",cropperImage:"Cropper Image"},editor:{editor:"Editor",jsonEditor:"Json editor",markdown:"Markdown editor",tinymce:"Rich text",tinymceBasic:"Basic",tinymceForm:"embedded form"},excel:{excel:"Excel",customExport:"Select export format",jsonExport:"JSON data export",arrayExport:"Array data export",importExcel:"Import"},feat:{feat:"Page Function",icon:"Icon",tabs:"Tabs",sessionTimeout:"Session Timeout",print:"Print",contextMenu:"Context Menu",download:"Download",clickOutSide:"ClickOutSide",imgPreview:"Picture Preview",copy:"Clipboard",msg:"Message prompt",watermark:"Watermark",ripple:"Ripple",fullScreen:"Full Screen",errorLog:"Error Log",tab:"Tab with parameters",tab1:"Tab with parameter 1",tab2:"Tab with parameter 2",ws:"Websocket test",breadcrumb:"Breadcrumbs",breadcrumbFlat:"Flat Mode",breadcrumbFlatDetail:"Flat mode details",breadcrumbChildren:"Level mode",breadcrumbChildrenDetail:"Level mode detail"},flow:{name:"Graphics editor",flowChart:"FlowChart"},form:{form:"Form",basic:"Basic",useForm:"useForm",refForm:"RefForm",advancedForm:"Shrinkable",ruleForm:"Form validation",dynamicForm:"Dynamic",customerForm:"Custom",appendForm:"Append"},iframe:{frame:"External",antv:"antVue doc (embedded)",doc:"Project doc (embedded)",docExternal:"Project doc (external)"},level:{level:"MultiMenu"},page:{page:"Page",form:"Form",formBasic:"Basic Form",formStep:"Step Form",formHigh:"Advanced Form",desc:"Details",descBasic:"Basic Details",descHigh:"Advanced Details",result:"Result",resultSuccess:"Success",resultFail:"Failed",account:"Personal",accountCenter:"Personal Center",accountSetting:"Personal Settings",exception:"Exception",netWorkError:"Network Error",notData:"No data",list:"List page",listCard:"Card list",basic:"Basic list",listBasic:"Basic list",listSearch:"Search list"},permission:{permission:"Permission",front:"front-end",frontPage:"Page",frontBtn:"Button",frontTestA:"Test page A",frontTestB:"Test page B",back:"background",backPage:"Page",backBtn:"Button"},setup:{page:"Intro page"},system:{moduleName:"System management",account:"Account management",account_detail:"Account detail",password:"Change password",dept:"Department management",menu:"Menu management",role:"Role management"},table:{table:"Table",basic:"Basic",treeTable:"Tree",fetchTable:"Remote loading",fixedColumn:"Fixed column",customerCell:"Custom column",formTable:"Open search",useTable:"UseTable",refTable:"RefTable",multipleHeader:"MultiLevel header",mergeHeader:"Merge cells",expandTable:"Expandable table",fixedHeight:"Fixed height",footerTable:"Footer",editCellTable:"Editable cell",editRowTable:"Editable row",authColumn:"Auth column"}},F=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"}));const M={"./en/common.ts":b,"./en/component.ts":f,"./en/layout.ts":S,"./en/sys.ts":w,"./en/routes/basic.ts":v,"./en/routes/dashboard.ts":x,"./en/routes/demo.ts":F};var C={message:i(n({},u(M,"en")),{antdLocale:g}),dateLocale:null,dateLocaleName:"en"};export{C as default};
