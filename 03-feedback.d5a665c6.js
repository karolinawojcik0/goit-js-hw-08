var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,o=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,l=f||u||Function("return this")(),c=Object.prototype.toString,s=Math.max,m=Math.min,d=function(){return l.Date.now()};function v(e,t,n){var i,r,o,a,f,u,l=0,c=!1,v=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,o=r;return i=r=void 0,l=t,a=e.apply(o,n)}function h(e){return l=e,f=setTimeout(O,t),c?y(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||v&&e-l>=o}function O(){var e=d();if(j(e))return S(e);f=setTimeout(O,function(e){var n=t-(e-u);return v?m(n,o-(e-l)):n}(e))}function S(e){return f=void 0,b&&i?y(e):(i=r=void 0,a)}function w(){var e=d(),n=j(e);if(i=arguments,r=this,u=e,n){if(void 0===f)return h(u);if(v)return f=setTimeout(O,t),y(u)}return void 0===f&&(f=setTimeout(O,t)),a}return t=p(t)||0,g(n)&&(c=!!n.leading,o=(v="maxWait"in n)?s(p(n.maxWait)||0,t):o,b="trailing"in n?!!n.trailing:b),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,i=u=r=f=void 0},w.flush=function(){return void 0===f?a:S(d())},w}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=r.test(e);return f||o.test(e)?a(e.slice(2),f?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:i,maxWait:t,trailing:r})};const b=document.querySelector(".feedback-form"),y=b.elements.email,h=b.elements.message,j={},O=JSON.parse(localStorage.getItem("feedback-form-state"))||{};y.value=O.email||"",h.value=O.message||"",b.addEventListener("input",t((e=>{const t={...JSON.parse(localStorage.getItem("feedback-form-state"))||{},[e.target.name]:e.target.value.trim()};localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500)),b.addEventListener("submit",(e=>{e.preventDefault();const t=y.value.trim(),n=h.value.trim();""===t||""===n?alert("Fill the textboxes"):(j.email=t,j.message=n,console.log(j),localStorage.removeItem("feedback-form-state")),b.reset()}));
//# sourceMappingURL=03-feedback.d5a665c6.js.map