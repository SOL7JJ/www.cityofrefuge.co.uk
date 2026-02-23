import{r as i,j as a}from"./index-SRWUrk_u.js";function l(){const[e,o]=i.useState({name:"",email:"",message:""}),n=t=>{o({...e,[t.target.name]:t.target.value})},s=t=>{t.preventDefault();const m=encodeURIComponent(`Website contact from ${e.name}`),r=encodeURIComponent(`Name: ${e.name}
Email: ${e.email}

Message:
${e.message}`);window.location.href=`mailto:corim@gmail.com?subject=${m}&body=${r}`};return a.jsxs("div",{className:"contact-container",children:[a.jsx("h2",{children:"Contact Us"}),a.jsxs("form",{onSubmit:s,children:[a.jsx("input",{name:"name",type:"text",placeholder:"Your Name",onChange:n,value:e.name,required:!0}),a.jsx("input",{name:"email",type:"email",placeholder:"Your Email",onChange:n,value:e.email,required:!0}),a.jsx("textarea",{name:"message",placeholder:"Your Message",onChange:n,value:e.message,required:!0}),a.jsx("button",{type:"submit",children:"Send Message"})]})]})}export{l as default};
