import{a as m,S as p,i as c}from"./assets/vendor-DcHCnVjq.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const g="56017370-7aa7005f41ba7433eba06fcfc",h="https://pixabay.com/api/";async function y(s){const o=new URLSearchParams({key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});return(await m.get(`${h}?${o}`)).data}const l=document.querySelector(".gallery"),n=document.querySelector(".loader-container"),b=new p(".gallery a",{captionsData:"alt",captionDelay:250});function L(s){const o=s.map(({webformatURL:a,largeImageURL:r,tags:e,likes:t,views:i,comments:d,downloads:u})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${r}">
        <img class="gallery-image" src="${a}" alt="${e}" />
      </a>
      <div class="info-container">
        <div class="info-item"><b>Likes</b><span>${t}</span></div>
        <div class="info-item"><b>Views</b><span>${i}</span></div>
        <div class="info-item"><b>Comments</b><span>${d}</span></div>
        <div class="info-item"><b>Downloads</b><span>${u}</span></div>
      </div>
    </li>
  `).join("");l.innerHTML=o,b.refresh()}function v(){l.innerHTML=""}function w(){n&&n.classList.remove("hidden")}function S(){n&&n.classList.add("hidden")}const f=document.querySelector(".form");f.addEventListener("submit",P);async function P(s){s.preventDefault();const a=s.currentTarget.elements["search-text"].value.trim();if(a===""){c.warning({title:"Warning",message:"Please fill out the search field!",position:"topRight"});return}v(),w();try{const r=await y(a);if(r.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(r.hits)}catch(r){c.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(r)}finally{S(),f.reset()}}
//# sourceMappingURL=index.js.map
