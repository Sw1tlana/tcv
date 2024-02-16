import{a as i}from"./assets/vendor-1b0a9daf.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const a=document.querySelector(".list-container"),u=document.querySelectorAll(".exercise-card"),d=document.querySelector(".exercise-details-container"),l="https://energyflow.b.goit.study/api",f="filters",p="Muscles";async function g(){try{const r=await i.get(`${l}/${f}`,{params:{filter:p,page:1,limit:12}});console.log(r.data);const s=r.data.results;m(s)}catch(r){console.log(r)}}g();function m(r){const s=r.map(({name:o,imgUrl:n})=>`
        <li class="container-list-item">
    <h2>${o}</h2>
    <img class="exercise-card" data-exercise-id src="${n}" alt="${o}">
    </li>
        `).join("");a.insertAdjacentHTML("beforeend",s)}u.forEach(r=>async()=>{const s=r.dataset.exerciseId;try{const n=(await i.get(`${l}/exercise/${s}`)).data;console.log(n),y(n)}catch(o){console.log(o)}});function y({name:r,bodyPart:s,equipment:o,target:n,_id:e}){const t=`
        <li class="exercise-details">
            <h3>${r}</h3>
            <p><strong>Body Part:</strong> ${s}</p>
            <p><strong>Equipment:</strong> ${o}</p>
            <p><strong>Target:</strong> ${n}</p>
            <p><strong>ID:</strong> ${e}</p>
        </li>
    `;d.innerHTML=t}
//# sourceMappingURL=commonHelpers.js.map
