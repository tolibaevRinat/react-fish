import{i,S as n,R as c,j as e}from"./index-CSrvJAPu.js";const r="_advantages_18ejj_1",d="_title_18ejj_10",_="_item_18ejj_14",o="_subtitle_18ejj_21",g="_text_18ejj_27",m="_list_18ejj_37",a={advantages:r,title:d,item:_,subtitle:o,text:g,list:m},j=({isMobile:s})=>{const l=[{id:0,title:"Лучшие цены на рынке",text:"Мы стараемся делать цены максимальное вкусными только для вас"},{id:1,title:"Быстрая доставка",text:"Мы стараемся делать цены максимальное вкусными только для вас"},{id:2,title:"Гарантия качества",text:"Мы стараемся делать цены максимальное вкусными только для вас"},{id:3,title:"Ежедневные поставки",text:"Мы стараемся делать цены максимальное вкусными только для вас"}];return i.registerPlugin(n),c.useLayoutEffect(()=>{if(s){const t=i.timeline({scrollTrigger:{trigger:".advantages",start:"top 80%",end:"top 30%"}});t.from(".advantages__title",{opacity:0,x:200}),t.from(".advantages__item-01",{opacity:0,x:-200,y:200,duration:.4}),t.from(".advantages__item-02",{opacity:0,x:-100,y:400,duration:.4}),t.from(".advantages__item-03",{opacity:0,x:100,y:400,duration:.4}),t.from(".advantages__item-04",{opacity:0,x:200,y:400,duration:.4})}},[s]),e.jsx("section",{className:`${a.advantages} advantages rel z-5`,children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:`${a.title} advantages__title t-al-right f-700 title`,children:"Наши преимущества"}),e.jsx("ul",{className:`${a.list} gap-20 t-al-center `,children:l.map(t=>e.jsxs("li",{className:`${a.item} advantages__item-0${t.id+1}`,children:[e.jsx("img",{src:`img/icons/ad-0${t.id+1}.svg`,alt:" "}),e.jsx("h3",{className:`${a.subtitle} f-700`,children:t.title}),e.jsx("p",{className:`${a.text}`,children:t.text})]},t.id))})]})})};export{j as default};
