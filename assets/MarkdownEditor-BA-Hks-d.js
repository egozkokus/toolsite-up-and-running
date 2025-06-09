import{c as w,b as f,u as k,j as e}from"./index-CjcMs8T3.js";import{r as x}from"./vendor-CX2mysxk.js";import{B as s}from"./button-7J-vtqLr.js";import{T as v}from"./textarea-QRx2sY6u.js";import{C as N,a as y,b as C,c as M,d as L}from"./card-D2uq1LWq.js";import{A as T}from"./arrow-left-Cqdtw2X2.js";import{F as h}from"./file-text-BebbDACz.js";import{D as p}from"./download-1AJ-PecF.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=w("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),z=()=>{const[r,u]=x.useState(`# כותרת ראשית

## כותרת משנית

זהו **טקסט מודגש** ו*טקסט נטוי*.

### רשימה:
- פריט 1
- פריט 2
- פריט 3

### רשימה ממוספרת:
1. פריט ראשון
2. פריט שני
3. פריט שלישי

### קישור
[Google](https://www.google.com)

### קוד
\`\`\`javascript
console.log('Hello World!');
\`\`\`
`),[l,c]=x.useState("edit"),{toast:i}=f(),g=k(),d=a=>a.replace(/### (.*)/g,"<h3>$1</h3>").replace(/## (.*)/g,"<h2>$1</h2>").replace(/# (.*)/g,"<h1>$1</h1>").replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/\*(.*?)\*/g,"<em>$1</em>").replace(/```(.*?)```/gs,"<pre><code>$1</code></pre>").replace(/`(.*?)`/g,"<code>$1</code>").replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank">$1</a>').replace(/^\- (.*)/gm,"<li>$1</li>").replace(/^(\d+)\. (.*)/gm,"<li>$1. $2</li>").replace(/\n/g,"<br>"),j=()=>{const a=new Blob([r],{type:"text/markdown"}),o=URL.createObjectURL(a),t=document.createElement("a");t.href=o,t.download="document.md",t.click(),URL.revokeObjectURL(o),i({title:"הצלחה!",description:"קובץ Markdown הורד בהצלחה"})},b=()=>{const o=`<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; }
        pre { background: #f4f4f4; padding: 10px; border-radius: 4px; }
        code { background: #f4f4f4; padding: 2px 4px; border-radius: 2px; }
    </style>
</head>
<body>
    ${d(r)}
</body>
</html>`,t=new Blob([o],{type:"text/html"}),m=URL.createObjectURL(t),n=document.createElement("a");n.href=m,n.download="document.html",n.click(),URL.revokeObjectURL(m),i({title:"הצלחה!",description:"קובץ HTML הורד בהצלחה"})};return e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4",children:e.jsxs("div",{className:"container mx-auto max-w-6xl",children:[e.jsxs(s,{onClick:()=>g("/categories/text-tools"),variant:"outline",className:"mb-4",children:[e.jsx(T,{className:"h-4 w-4 mr-2"}),"חזרה לכלי טקסט"]}),e.jsxs("div",{className:"mb-8 text-center",children:[e.jsx(h,{className:"h-12 w-12 mx-auto mb-4 text-blue-600"}),e.jsx("h1",{className:"text-4xl font-bold mb-2",children:"עורך Markdown"}),e.jsx("p",{className:"text-gray-600",children:"ערוך וצפה ב-Markdown בזמן אמת"})]}),e.jsxs(N,{children:[e.jsx(y,{children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{children:[e.jsx(C,{children:"עורך Markdown"}),e.jsx(M,{children:"כתוב Markdown וצפה בתוצאה"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs(s,{variant:l==="edit"?"default":"outline",onClick:()=>c("edit"),size:"sm",children:[e.jsx(h,{className:"h-4 w-4 mr-2"}),"עריכה"]}),e.jsxs(s,{variant:l==="preview"?"default":"outline",onClick:()=>c("preview"),size:"sm",children:[e.jsx($,{className:"h-4 w-4 mr-2"}),"תצוגה מקדימה"]})]})]})}),e.jsx(L,{children:e.jsxs("div",{className:"grid gap-4",children:[l==="edit"?e.jsx(v,{value:r,onChange:a=>u(a.target.value),placeholder:"כתוב כאן Markdown...",className:"min-h-96 font-mono"}):e.jsx("div",{className:"min-h-96 p-4 border rounded prose max-w-none",dangerouslySetInnerHTML:{__html:d(r)}}),e.jsxs("div",{className:"flex gap-4",children:[e.jsxs(s,{onClick:j,variant:"outline",children:[e.jsx(p,{className:"h-4 w-4 mr-2"}),"הורד MD"]}),e.jsxs(s,{onClick:b,variant:"outline",children:[e.jsx(p,{className:"h-4 w-4 mr-2"}),"הורד HTML"]})]})]})})]})]})})};export{z as default};
