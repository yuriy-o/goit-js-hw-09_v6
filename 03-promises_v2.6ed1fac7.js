function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},n=o.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in t){var o=t[e];delete t[e];var n={id:e,exports:{}};return r[e]=n,o.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){t[e]=o},o.parcelRequired7c6=n);var i=n("eWCmQ");function l(e,o){return new Promise(((r,t)=>{setTimeout((()=>{Math.random()>.3?r({position:e,delay:o}):t({position:e,delay:o})}),o)}))}({form:document.querySelector(".form")}).form.addEventListener("submit",(function(o){o.preventDefault();let r=Number(o.currentTarget.delay.value);const t=Number(o.currentTarget.step.value),n=Number(o.currentTarget.amount.value);for(let o=0;o<n;o+=1)l(o,r).then((({position:o,delay:r})=>{e(i).Notify.success(`✅ Fulfilled promise ${o} in ${r}ms`),console.log(`✅ Fulfilled promise ${o} in ${r}ms`)})).catch((({position:o,delay:r})=>{e(i).Notify.failure(`❌ Rejected promise ${o} in ${r}ms`),console.log(`❌ Rejected promise ${o} in ${r}ms`)})),r+=t}));
//# sourceMappingURL=03-promises_v2.6ed1fac7.js.map
