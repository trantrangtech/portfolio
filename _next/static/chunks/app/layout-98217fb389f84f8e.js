(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{2880:(e,t,a)=>{Promise.resolve().then(a.bind(a,856)),Promise.resolve().then(a.bind(a,3774)),Promise.resolve().then(a.bind(a,2994)),Promise.resolve().then(a.t.bind(a,321,23)),Promise.resolve().then(a.t.bind(a,9324,23))},856:(e,t,a)=>{"use strict";a.d(t,{default:()=>C});var s=a(5155),r=a(2115),n=a(9871),i=a(7365),l=a(7113);a(9324);let o=()=>{let{theme:e,setTheme:t}=(0,l.D)();return(0,s.jsx)("div",{children:(0,s.jsxs)(n.$,{variant:"outline",size:"icon",onClick:()=>t("dark"===e?"light":"dark"),children:[(0,s.jsx)(i.gLX,{className:"h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),(0,s.jsx)(i.rRK,{className:"absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"})]})})};var d=a(8173),c=a.n(d),u=a(5565);let m=()=>(0,s.jsx)(c(),{href:"/",children:(0,s.jsx)(u.default,{src:"".concat("/portfolio","/logo.svg"),width:54,height:54,priority:!0,alt:""})});var f=a(6046),h=a(1934);let x=[{path:"/",name:"home"},{path:"/projects",name:"my projects"},{path:"/contact",name:"contact"}],p=e=>{let{containerStyles:t,linkStyles:a,underlineStyles:r}=e,n=(0,f.usePathname)();return(0,s.jsx)("nav",{className:"".concat(t),children:x.map((e,t)=>(0,s.jsxs)(c(),{href:e.path,className:"capitalize ".concat(a),children:[e.path===n&&(0,s.jsx)(h.P.span,{initial:{y:"-100%"},animate:{y:0},transition:{type:"tween"},layoutId:"underline",className:"".concat(r)}),e.name]},t))})};var g=a(4908),v=a(1027),b=a(767),j=a(8368);let y=g.bL,N=g.l9;g.bm;let w=g.ZL,k=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(g.hJ,{className:(0,j.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...r,ref:t})});k.displayName=g.hJ.displayName;let P=(0,v.F)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),_=r.forwardRef((e,t)=>{let{side:a="right",className:r,children:n,...i}=e;return(0,s.jsxs)(w,{children:[(0,s.jsx)(k,{}),(0,s.jsxs)(g.UC,{ref:t,className:(0,j.cn)(P({side:a}),r),...i,children:[n,(0,s.jsxs)(g.bm,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[(0,s.jsx)(b.A,{className:"h-6 w-6"}),(0,s.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});_.displayName=g.UC.displayName,r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(g.hE,{ref:t,className:(0,j.cn)("text-lg font-semibold text-foreground",a),...r})}).displayName=g.hE.displayName,r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(g.VY,{ref:t,className:(0,j.cn)("text-sm text-muted-foreground",a),...r})}).displayName=g.VY.displayName;var z=a(775),E=a(3774);let S=()=>(0,s.jsxs)(y,{children:[(0,s.jsx)(N,{asChild:!0,children:(0,s.jsx)(z.A,{className:"cursor-pointer"})}),(0,s.jsx)(_,{children:(0,s.jsxs)("div",{className:"flex flex-col items-center justify-between h-full p-8",children:[(0,s.jsxs)("div",{className:"flex flex-col items-center gap-y-32",children:[(0,s.jsx)(m,{}),(0,s.jsx)(p,{containerStyles:"flex flex-col items-center gap-y-6",linkStyles:"text-2xl"})]}),(0,s.jsx)(E.default,{containerStyles:"flex gap-x-4",iconsStyles:"text-2xl"})]})})]}),C=()=>{let[e,t]=(0,r.useState)(!1),a=(0,f.usePathname)();return(0,r.useEffect)(()=>{let e=window.addEventListener("scroll",()=>{window.scrollY>50?t(!0):t(!1)});return()=>window.removeEventListener("scroll",e)}),(0,s.jsx)("header",{className:"".concat(e?"py-4 bg-white shadow-lg dark:bg-accent":"py-6 dark:bg-transparent"," sticky top-0 z-30 transition-all ").concat("/"===a&&"bg-[#fef9f5]"),children:(0,s.jsx)("div",{className:"container mx-auto",children:(0,s.jsxs)("div",{className:"flex justify-between items-center",children:[(0,s.jsx)(m,{}),(0,s.jsxs)("div",{className:"flex items-center gap-x-6",children:[(0,s.jsx)(p,{containerStyles:"hidden xl:flex gap-x-8 items-center",linkStyles:"relative transition-all",underlineStyles:"absolute left-0 top-full h-[2px] bg-primary w-full"}),(0,s.jsx)(o,{}),(0,s.jsx)("div",{className:"xl:hidden",children:(0,s.jsx)(S,{})})]})]})})})}},3774:(e,t,a)=>{"use strict";a.d(t,{default:()=>o});var s=a(5155),r=a(8100),n=a(8173),i=a.n(n);let l=[{path:"/",name:(0,s.jsx)(r.PWi,{})},{path:"/",name:(0,s.jsx)(r.sAW,{})},{path:"/",name:(0,s.jsx)(r.du4,{})}],o=e=>{let{containerStyles:t,iconsStyles:a}=e;return(0,s.jsx)("div",{className:"".concat(t),children:l.map((e,t)=>(console.log(e),(0,s.jsx)(i(),{href:e.path,children:(0,s.jsx)("div",{className:"".concat(a),children:e.name})},t)))})}},2994:(e,t,a)=>{"use strict";a.d(t,{ThemeProvider:()=>n});var s=a(5155),r=a(7113);function n(e){let{children:t,...a}=e;return(0,s.jsx)(r.N,{...a,children:t})}},9871:(e,t,a)=>{"use strict";a.d(t,{$:()=>d});var s=a(5155),r=a(2115),n=a(2317),i=a(1027),l=a(8368);let o=(0,i.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-[54px] px-6 py-2 min-w-[166px]",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=r.forwardRef((e,t)=>{let{className:a,variant:r,size:i,asChild:d=!1,...c}=e,u=d?n.DX:"button";return(0,s.jsx)(u,{className:(0,l.cn)(o({variant:r,size:i,className:a})),ref:t,...c})});d.displayName="Button"},8368:(e,t,a)=>{"use strict";a.d(t,{cn:()=>n});var s=a(3463),r=a(9795);function n(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,r.QP)((0,s.$)(t))}},9324:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[656,204,105,501,857,934,175,441,517,358],()=>t(2880)),_N_E=e.O()}]);