import{g as o,r as u,j as s,f as y,h as b,F as d}from"./index-a2b96bbf.js";import{c as i}from"./Product-4355304c.js";import{W as w}from"./Whatsapp-61f78215.js";function P(){var n,h,f,p,g,c;const{id:r,idGroup:m}=o(),[t,j]=u.useState([]);return u.useEffect(()=>{var e,l,x;r&&j((x=(l=(e=i)==null?void 0:e.filter(a=>(a==null?void 0:a.id)===r)[0])==null?void 0:l.content)==null?void 0:x.filter(a=>(a==null?void 0:a.idGroup)===m))},[r]),s.jsxs(y,{className:"md:flex bg-white items-start justify-center py-12 2xl:px-20 md:px-6 px-4",children:[s.jsxs("div",{className:"xl:w-2/5 sticky top-32 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6",children:[s.jsxs("div",{className:"border-b border-gray-200 pb-6",children:[s.jsx(b,{className:"text-sm leading-none text-gray-600 dark:text-gray-300 ",children:s.jsx("h6",{children:(h=(n=i)==null?void 0:n.filter(e=>(e==null?void 0:e.id)===r)[0])==null?void 0:h.title})}),s.jsx(d,{className:"lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2",children:s.jsx("h1",{children:t==null?void 0:t.map(({name:e})=>e)})})]}),s.jsx(d,{delay:.4,children:s.jsxs("p",{className:"xl:pl-2 text-base lg:leading-relaxed leading-normal text-gray-600 dark:text-gray-300 mt-7",children:[t==null?void 0:t.map(({desc:e})=>e)," "]})}),s.jsx(d,{delay:.3,className:"flex items-center justify-center w-full mt-10",children:s.jsxs("a",{href:`https://wa.me/967773106129?text=${(c=(g=(p=(f=i)==null?void 0:f.filter(e=>(e==null?void 0:e.id)===r)[0])==null?void 0:p.content)==null?void 0:g.filter(e=>(e==null?void 0:e.idGroup)===m)[0])==null?void 0:c.name}`,target:"_blank",className:"button !relative group !top-0 !bottom-0 !z-[5] !w-full",children:[s.jsx("span",{className:"group-hover:-translate-y-5 text-center  font-bold text-lg group-hover:opacity-0 duration-1000 flex justify-center items-center",children:"طلب"}),s.jsx("span",{children:s.jsx(w,{className:"w-5 md:h-7 md:w-full "})})]})})]}),s.jsx(d,{className:"w-full space-y-10",children:t==null?void 0:t.map(({id:e,img:l,name:x},a)=>s.jsx(d,{delay:a*.1,children:s.jsx("img",{className:"w-full object-cover  h-[500px]",alt:x,src:l,width:"100%",height:500})},e)).slice(0,2)})]})}export{P as default};
