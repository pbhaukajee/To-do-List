(()=>{"use strict";let t=[];function e(e){o[e]&&(t=o[e].task)}function c(e,c,i,s){const a=function(t,e,c,n){let o;return o="high"===c?"❗️❗️":"",{title:t,dueDate:e,priority:o,projectIndex:n}}(e,c,i,s);var r;t.push(a),r=t,o[s].task=r,n(),console.log(t),k(t)}function n(){const t=o,e=JSON.stringify(t);localStorage.setItem("projectList",e)}let o=[];function i(t){const e=function(t){return{title:t,task:[]}}(t);o.push(e),n(),v()}let s=0;function a(t){s=t}const r=document.querySelector(".addProjectBtn"),d=document.querySelector("#display-add-project");function l(){p.value="",d.classList.add("hide-input"),r.classList.remove("hide-btn-active")}r.addEventListener("click",(()=>(r.classList.add("hide-btn-active"),d.classList.remove("hide-input"),void y()))),document.querySelector(".project-cancel-btn").addEventListener("click",(()=>l()));const u=document.querySelector(".project-add-btn"),p=document.querySelector(".add-project-input");function v(){document.querySelector("#project-list").textContent="";const t=document.querySelector("#project-list");o.forEach(((e,c)=>{t.innerHTML+=`<div class="project-select flex-div" data-project-index="${c}">\n        <p class="project-select data-project-index="${c}">${e.title}<p><img src=./images/delete.png alt="delete-bin" class="delete-bin hide-bin">`})),document.querySelectorAll(".project-select").forEach((t=>{t.addEventListener("click",m)}))}function m(c){document.querySelector(".list-title").textContent=c.target.innerText,l(),y(),document.querySelector(".add-task-btn").classList.remove("hide-btn-active");const i=this.getAttribute("data-project-index");if(a(i),e(s),k(t),c.target.classList.contains("delete-bin"))return(r=i)>-1&&o.splice(r,1),n(),a(0),v(),void g();var r}u.addEventListener("click",(()=>function(){if(!p.value)return!1;i(p.value),p.value=""}()));const S=document.querySelector(".add-task-btn"),f=document.querySelector("#display-add-task");function y(){f.classList.add("hide-input"),S.classList.remove("hide-btn-active")}function g(){document.querySelector(".todo-list").textContent=""}function k(t){g();const e=document.querySelector(".todo-list");t.forEach(((t,c)=>{e.innerHTML+=`<div class="todo-item" data-project-index="${t.projectIndex}" data-task-index="${c}">\n    <div class="task-left">\n    <p class="todo-title">• ${t.title}</p>\n    <p class="t-priority">${t.priority}</p>\n    </div>\n    <div class="task-right">\n    <p class="todo-due-date">${t.dueDate}</p>\n    <img  class="cross-bin hide-cross" data-task-index="${c}" src="./images/cross.png" alt="cross" />\n    </div>\n  </div>`})),document.querySelectorAll(".cross-bin").forEach((t=>t.addEventListener("click",L)))}function L(e){const c=e.target.parentNode.parentNode.dataset.projectIndex;!function(e,c){let n=localStorage.getItem("projectList"),o=JSON.parse(n);o[e].task.splice(c,1);const i=o,s=JSON.stringify(i);localStorage.setItem("projectList",s),t.splice(c,1)}(c,e.target.parentNode.parentNode.dataset.taskIndex);let n=localStorage.getItem("projectList");k(JSON.parse(n)[c].task)}S.addEventListener("click",(function(){S.classList.add("hide-btn-active"),f.classList.remove("hide-input"),l()})),document.querySelector(".task-cancel-btn").addEventListener("click",y),document.querySelector(".task-add-btn").addEventListener("click",(function(){y();const t=document.querySelector(".add-task-input"),n=document.querySelector(".priority"),o=document.querySelector(".task-due-date");t.value&&(e(s),c(t.value,o.value,n.value,s),t.value="",o.value="",n.value="low")})),function(){let t=localStorage.getItem("projectList");t?o=JSON.parse(t):(i("Study"),c("Practice Coding"))}(),v()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBR0EsSUFBSUEsRUFBVyxHQUVmLFNBQVNDLEVBQW1CQyxHQUN0QixFQUFvQkEsS0FDdEJGLEVBQVcsRUFBb0JFLEdBQWNDLEtBSWpELENBaUJBLFNBQVNDLEVBQVFDLEVBQU1DLEVBQVNDLEVBQWVMLEdBQzdDLE1BQU1DLEVBaEJSLFNBQW9CSyxFQUFPRixFQUFTQyxFQUFlTCxHQUNqRCxJQUFJTyxFQU1KLE9BSkVBLEVBRG9CLFNBQWxCRixFQUNTLE9BRUEsR0FFTixDQUNMQyxRQUNBRixVQUNBRyxXQUNBUCxlQUVKLENBR2VRLENBQVdMLEVBQU1DLEVBQVNDLEVBQWVMLEdDYXhELElBQWtDUyxFRFpoQ1gsRUFBU1ksS0FBS1QsR0NZa0JRLEVEWFFYLEVDWXhDYSxFRFowQlgsR0NZUEMsS0FBT1EsRUFDMUIsSURaQUcsUUFBUUMsSUFBSWYsR0FDWixFQUFtQkEsRUFDckIsQ0U5QkEsU0FBU2dCLElBQ1AsTUFBTUMsRUFBVyxFQUNYQyxFQUFvQkMsS0FBS0MsVUFBVUgsR0FDekNJLGFBQWFDLFFBQVEsY0FBZUosRUFDdEMsQ0RIQSxJQUFJTCxFQUFjLEdBdUJsQixTQUFTVSxFQUFXZixHQUNsQixNQUFNZ0IsRUFWUixTQUF1QmhCLEdBRXJCLE1BQU8sQ0FDTEEsUUFDQUwsS0FIVyxHQUtmLENBSWtCc0IsQ0FBY2pCLEdBQzlCSyxFQUFZRCxLQUFLWSxHQUNqQixJQUNBLEdBQ0YsQ0U3QkEsSUFBSUUsRUFBc0IsRUFFMUIsU0FBU0MsRUFBMEJDLEdBQ2pDRixFQUFzQkUsQ0FDeEIsQ0FHQSxNQUFNQyxFQUFnQkMsU0FBU0MsY0FBYyxrQkFDdkNDLEVBQW9CRixTQUFTQyxjQUFjLHdCQWFqRCxTQUFTRSxJQUNQQyxFQUFhQyxNQUFRLEdBQ3JCSCxFQUFrQkksVUFBVUMsSUFBSSxjQUNoQ1IsRUFBY08sVUFBVUUsT0FBTyxrQkFDakMsQ0FmQVQsRUFBY1UsaUJBQWlCLFNBQVMsS0FHdENWLEVBQWNPLFVBQVVDLElBQUksbUJBQzVCTCxFQUFrQkksVUFBVUUsT0FBTyxtQkFDbkNFLE9BSXVCVixTQUFTQyxjQUFjLHVCQUMvQlEsaUJBQWlCLFNBQVMsSUFBTU4sTUFRakQsTUFBTVEsRUFBZ0JYLFNBQVNDLGNBQWMsb0JBQ3ZDRyxFQUFlSixTQUFTQyxjQUFjLHNCQWlCNUMsU0FBU1csSUFMc0JaLFNBQVNDLGNBQWMsaUJBQy9CWSxZQUFjLEdBTW5DLE1BQU1DLEVBQXVCZCxTQUFTQyxjQUFjLGlCQUVwRCxFQUFvQmMsU0FBUSxDQUFDckIsRUFBU0ksS0FDcENnQixFQUFxQkUsV0FBYSw0REFBNERsQiw2REFDM0NBLE1BQVVKLEVBQVFoQixvRkFBb0YsSUFRcElzQixTQUFTaUIsaUJBQWlCLG1CQUNsQ0YsU0FBU0csSUFDdEJBLEVBQU9ULGlCQUFpQixRQUFTVSxFQUFtQixHQU54RCxDQVdBLFNBQVNBLEVBQW1CQyxHQUNScEIsU0FBU0MsY0FBYyxlQUMvQlksWUFBY08sRUFBRUMsT0FBT0MsVUFDakNuQixJQUNBTyxJQXVHc0JWLFNBQVNDLGNBQWMsaUJBQy9CSyxVQUFVRSxPQUFPLG1CQXJHL0IsTUFBTXBDLEVBQWVtRCxLQUFLQyxhQUFhLHNCQU92QyxHQUxBM0IsRUFBMEJ6QixHQUMxQixFQUF3QndCLEdBRXhCNkIsRUFBZSxHQUVYTCxFQUFFQyxPQUFPZixVQUFVb0IsU0FBUyxjQUc5QixPRnJEdUI1QixFRW1ERjFCLElGbERWLEdBQ1hXLEVBQVk0QyxPQUFPN0IsRUFBTyxHQUU1QixJRXVEQUQsRUFBMEIsR0FDMUJlLFNBUkVnQixJRnBESixJQUEyQjlCLENFdUQzQixDQXhEQWEsRUFBY0YsaUJBQWlCLFNBQVMsSUFDeEMsV0FDRSxJQUFLTCxFQUFhQyxNQUNoQixPQUFPLEVBRVQsRUFBbUJELEVBQWFDLE9BQ2hDRCxFQUFhQyxNQUFRLEVBQ3ZCLENBUDhDd0IsS0FnRTlDLE1BQU1DLEVBQWE5QixTQUFTQyxjQUFjLGlCQUNwQzhCLEVBQWlCL0IsU0FBU0MsY0FBYyxxQkFXOUMsU0FBU1MsSUFDUHFCLEVBQWV6QixVQUFVQyxJQUFJLGNBQzdCdUIsRUFBV3hCLFVBQVVFLE9BQU8sa0JBQzlCLENBd0JBLFNBQVNvQixJQUNtQjVCLFNBQVNDLGNBQWMsY0FDL0JZLFlBQWMsRUFDbEMsQ0FFQSxTQUFTWSxFQUFlNUMsR0FDdEIrQyxJQUVBLE1BQU1JLEVBQW9CaEMsU0FBU0MsY0FBYyxjQUNqRHBCLEVBQUtrQyxTQUFRLENBQUNrQixFQUFNQyxLQUNsQkYsRUFBa0JoQixXQUFhLDhDQUE4Q2lCLEVBQUs3RCxrQ0FBa0M4RCxpRUFFMUZELEVBQUt2RCx3Q0FDUHVELEVBQUt0RCx3RkFHRnNELEVBQUt6RCx3RUFDc0IwRCxrRUFFakQsSUFPWWxDLFNBQVNpQixpQkFBaUIsY0FDbENGLFNBQVNvQixHQUFRQSxFQUFJMUIsaUJBQWlCLFFBQVMyQixJQUo1RCxDQU9BLFNBQVNBLEVBQWtCaEIsR0FDekIsTUFBTWhELEVBQWVnRCxFQUFFQyxPQUFPZ0IsV0FBV0EsV0FBV0MsUUFBUWxFLGNEOUo5RCxTQUFvQkEsRUFBY21FLEdBQ2hDLElBQUlDLEVBQXFCakQsYUFBYWtELFFBQVEsZUFDMUNDLEVBQWtCckQsS0FBS3NELE1BQU1ILEdBRWpDRSxFQUFnQnRFLEdBQWNDLEtBQUtzRCxPQUFPWSxFQUFXLEdBRXJELE1BQU1LLEVBQWtCRixFQUNsQkcsRUFBZXhELEtBQUtDLFVBQVVzRCxHQUNwQ3JELGFBQWFDLFFBQVEsY0FBZXFELEdBRXBDLEVBQWNsQixPQUFPWSxFQUFXLEVBQ2xDLENDc0pFLENBQW1CbkUsRUFGRGdELEVBQUVDLE9BQU9nQixXQUFXQSxXQUFXQyxRQUFRQyxXQUd6RCxJQUFJQyxFQUFxQmpELGFBQWFrRCxRQUFRLGVBRTlDaEIsRUFEc0JwQyxLQUFLc0QsTUFBTUgsR0FDRnBFLEdBQWNDLEtBQy9DLENBM0VBeUQsRUFBV3JCLGlCQUFpQixTQUM1QixXQUNFcUIsRUFBV3hCLFVBQVVDLElBQUksbUJBQ3pCd0IsRUFBZXpCLFVBQVVFLE9BQU8sY0FFaENMLEdBQ0YsSUFFc0JILFNBQVNDLGNBQWMsb0JBQy9CUSxpQkFBaUIsUUFBU0MsR0FNckJWLFNBQVNDLGNBQWMsaUJBQy9CUSxpQkFBaUIsU0FDNUIsV0FDRUMsSUFDQSxNQUFNb0MsRUFBWTlDLFNBQVNDLGNBQWMsbUJBQ25DeEIsRUFBZ0J1QixTQUFTQyxjQUFjLGFBQ3ZDOEMsRUFBWS9DLFNBQVNDLGNBQWMsa0JBQ3BDNkMsRUFBVXpDLFFBR2YsRUFBd0JULEdBQ3hCLEVBQ0VrRCxFQUFVekMsTUFDVjBDLEVBQVUxQyxNQUNWNUIsRUFBYzRCLE1BQ2RULEdBRUZrRCxFQUFVekMsTUFBUSxHQUNsQjBDLEVBQVUxQyxNQUFRLEdBQ2xCNUIsRUFBYzRCLE1BQVEsTUFDeEIsSUZoSUEsV0FDRSxJQUFJMkMsRUFBZ0J6RCxhQUFha0QsUUFBUSxlQUNwQ08sRUFJSGpFLEVBQWNNLEtBQUtzRCxNQUFNSyxJQUh6QnZELEVBQVcsU0FDWCxFQUFhLG1CQUtqQixDR2JBLEdBQ0EsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy90YXNrcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvZG9tLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZG9tIGZyb20gXCIuL2RvbS5qc1wiO1xuaW1wb3J0ICogYXMgcHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5cbmxldCB0YXNrTGlzdCA9IFtdO1xuXG5mdW5jdGlvbiBnZXRUYXNrRnJvbVByb2plY3QocHJvamVjdEluZGV4KSB7XG4gIGlmIChwcm9qZWN0LnByb2plY3RMaXN0W3Byb2plY3RJbmRleF0pIHtcbiAgICB0YXNrTGlzdCA9IHByb2plY3QucHJvamVjdExpc3RbcHJvamVjdEluZGV4XS50YXNrO1xuICB9IGVsc2Uge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG5mdW5jdGlvbiBDcmVhdGVUYXNrKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eVNjYWxlLCBwcm9qZWN0SW5kZXgpIHtcbiAgbGV0IHByaW9yaXR5O1xuICBpZiAocHJpb3JpdHlTY2FsZSA9PT0gXCJoaWdoXCIpIHtcbiAgICBwcmlvcml0eSA9IFwi4p2X77iP4p2X77iPXCI7XG4gIH0gZWxzZSB7XG4gICAgcHJpb3JpdHkgPSBcIlwiO1xuICB9XG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgZHVlRGF0ZSxcbiAgICBwcmlvcml0eSxcbiAgICBwcm9qZWN0SW5kZXgsXG4gIH07XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2sobmFtZSwgZHVlRGF0ZSwgcHJpb3JpdHlTY2FsZSwgcHJvamVjdEluZGV4KSB7XG4gIGNvbnN0IHRhc2sgPSBDcmVhdGVUYXNrKG5hbWUsIGR1ZURhdGUsIHByaW9yaXR5U2NhbGUsIHByb2plY3RJbmRleCk7XG4gIHRhc2tMaXN0LnB1c2godGFzayk7XG4gIHByb2plY3QudXBkYXRlUHJvamVjdExpc3QocHJvamVjdEluZGV4LCB0YXNrTGlzdCk7XG4gIGNvbnNvbGUubG9nKHRhc2tMaXN0KTtcbiAgZG9tLnJlbmRlclRvZG9MaXN0KHRhc2tMaXN0KTtcbn1cblxuZXhwb3J0IHsgdGFza0xpc3QsIGdldFRhc2tGcm9tUHJvamVjdCwgQ3JlYXRlVGFzaywgYWRkVGFzayB9O1xuIiwiaW1wb3J0ICogYXMgZG9tIGZyb20gXCIuL2RvbS5qc1wiO1xuaW1wb3J0ICogYXMgc3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlLmpzXCI7XG5pbXBvcnQgKiBhcyB0YXNrIGZyb20gXCIuL3Rhc2tzLmpzXCI7XG5cbi8vU3RlcDFcbmxldCBwcm9qZWN0TGlzdCA9IFtdO1xuXG5mdW5jdGlvbiBnZXRMb2NhbFN0b3JhZ2UoKSB7XG4gIGxldCBsb2NhbFByb2plY3RzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0TGlzdFwiKTtcbiAgaWYgKCFsb2NhbFByb2plY3RzKSB7XG4gICAgYWRkUHJvamVjdChcIlN0dWR5XCIpO1xuICAgIHRhc2suYWRkVGFzayhcIlByYWN0aWNlIENvZGluZ1wiKTtcbiAgfSBlbHNlIHtcbiAgICBwcm9qZWN0TGlzdCA9IEpTT04ucGFyc2UobG9jYWxQcm9qZWN0cyk7XG4gIH1cbiAgcmV0dXJuIHByb2plY3RMaXN0O1xufVxuXG4vL1N0ZXAyXG5mdW5jdGlvbiBDcmVhdGVQcm9qZWN0KHRpdGxlKSB7XG4gIGNvbnN0IHRhc2sgPSBbXTtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICB0YXNrLFxuICB9O1xufVxuXG4vL1N0ZXAzXG5mdW5jdGlvbiBhZGRQcm9qZWN0KHRpdGxlKSB7XG4gIGNvbnN0IHByb2plY3QgPSBDcmVhdGVQcm9qZWN0KHRpdGxlKTtcbiAgcHJvamVjdExpc3QucHVzaChwcm9qZWN0KTtcbiAgc3RvcmFnZS5zYXZlUHJvamVjdFRvTG9jYWxTdG9yYWdlKCk7XG4gIGRvbS5yZW5kZXJQcm9qZWN0cygpO1xufVxuXG5mdW5jdGlvbiBzcGxpY2VQcm9qZWN0TGlzdChpbmRleCkge1xuICBpZiAoaW5kZXggPiAtMSkge1xuICAgIHByb2plY3RMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gIH1cbiAgc3RvcmFnZS5zYXZlUHJvamVjdFRvTG9jYWxTdG9yYWdlKCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3RMaXN0KGluZGV4LCBsaXN0KSB7XG4gIHByb2plY3RMaXN0W2luZGV4XS50YXNrID0gbGlzdDtcbiAgc3RvcmFnZS5zYXZlUHJvamVjdFRvTG9jYWxTdG9yYWdlKCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRhc2tBcnJheShcbiAgcHJvamVjdEluZGV4LFxuICB0YXNrSW5kZXgsXG4gIG5ld05hbWUsXG4gIG5ld1ByaW9yaXR5LFxuICBuZXdEYXRlXG4pIHtcbiAgcHJvamVjdExpc3RbcHJvamVjdEluZGV4XS50YXNrW3Rhc2tJbmRleF0udGl0bGUgPSBuZXdOYW1lO1xuICBwcm9qZWN0TGlzdFtwcm9qZWN0SW5kZXhdLnRhc2tbdGFza0luZGV4XS5wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICBwcm9qZWN0TGlzdFtwcm9qZWN0SW5kZXhdLnRhc2tbdGFza0luZGV4XS5kdWVEYXRlID0gbmV3RGF0ZTtcbiAgc3RvcmFnZS5zYXZlUHJvamVjdFRvTG9jYWxTdG9yYWdlKCk7XG59XG5cbmV4cG9ydCB7XG4gIHByb2plY3RMaXN0LFxuICBDcmVhdGVQcm9qZWN0LFxuICBhZGRQcm9qZWN0LFxuICBzcGxpY2VQcm9qZWN0TGlzdCxcbiAgdXBkYXRlUHJvamVjdExpc3QsXG4gIGdldExvY2FsU3RvcmFnZSxcbiAgdXBkYXRlVGFza0FycmF5LFxufTtcbiIsImltcG9ydCAqIGFzIHByb2plY3QgZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuaW1wb3J0ICogYXMgdGFzayBmcm9tIFwiLi90YXNrcy5qc1wiO1xuXG4vL1N0ZXA0XG5mdW5jdGlvbiBzYXZlUHJvamVjdFRvTG9jYWxTdG9yYWdlKCkge1xuICBjb25zdCBwcm9qZWN0cyA9IHByb2plY3QucHJvamVjdExpc3Q7XG4gIGNvbnN0IHByb2plY3RMaXN0SW5KU09OID0gSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RMaXN0XCIsIHByb2plY3RMaXN0SW5KU09OKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlVG9kbyhwcm9qZWN0SW5kZXgsIHRhc2tJbmRleCkge1xuICBsZXQgc3RvcmFnZVByb2plY3RMaXN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0TGlzdFwiKTtcbiAgbGV0IHN0b3JhZ2VQcm9qZWN0cyA9IEpTT04ucGFyc2Uoc3RvcmFnZVByb2plY3RMaXN0KTtcblxuICBzdG9yYWdlUHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrLnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuXG4gIGNvbnN0IGpzb25Qcm9qZWN0TGlzdCA9IHN0b3JhZ2VQcm9qZWN0cztcbiAgY29uc3QganNvblByb2plY3RzID0gSlNPTi5zdHJpbmdpZnkoanNvblByb2plY3RMaXN0KTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0TGlzdFwiLCBqc29uUHJvamVjdHMpO1xuXG4gIHRhc2sudGFza0xpc3Quc3BsaWNlKHRhc2tJbmRleCwgMSk7XG59XG5cbmZ1bmN0aW9uIGdldExvY2FsU3RvcmFnZSgpIHtcbiAgLy8gcmV0cmVpZXZlIGRhdGFcbiAgbGV0IHN0b3JhZ2VQcm9qZWN0TGlzdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdExpc3RcIik7XG4gIGxldCBzdG9yYWdlUHJvamVjdHMgPSBKU09OLnBhcnNlKHN0b3JhZ2VQcm9qZWN0TGlzdCk7XG4gIHJldHVybiBzdG9yYWdlUHJvamVjdHM7XG59XG5cbmV4cG9ydCB7IHNhdmVQcm9qZWN0VG9Mb2NhbFN0b3JhZ2UsIGRlbGV0ZVRvZG8sIGdldExvY2FsU3RvcmFnZSB9O1xuIiwiaW1wb3J0ICogYXMgcHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5pbXBvcnQgKiBhcyBzdG9yYWdlIGZyb20gXCIuL3N0b3JhZ2UuanNcIjtcbmltcG9ydCAqIGFzIHRhc2sgZnJvbSBcIi4vdGFza3MuanNcIjtcblxubGV0IGN1cnJlbnRQcm9qZWN0SW5kZXggPSAwO1xuXG5mdW5jdGlvbiBjaGFuZ2VDdXJyZW50UHJvamVjdEluZGV4KGluZGV4KSB7XG4gIGN1cnJlbnRQcm9qZWN0SW5kZXggPSBpbmRleDtcbn1cblxuLy9zdGVwNVxuY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkUHJvamVjdEJ0blwiKTtcbmNvbnN0IGRpc3BsYXlBZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkaXNwbGF5LWFkZC1wcm9qZWN0XCIpO1xuXG5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBzaG93UHJvamVjdEZvcm0oKSk7XG5cbmZ1bmN0aW9uIHNob3dQcm9qZWN0Rm9ybSgpIHtcbiAgYWRkUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiaGlkZS1idG4tYWN0aXZlXCIpO1xuICBkaXNwbGF5QWRkUHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZS1pbnB1dFwiKTtcbiAgaGlkZVRhc2tGb3JtKCk7XG59XG5cbi8vc3RlcDZcbmNvbnN0IHByb2plY3RDYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY2FuY2VsLWJ0blwiKTtcbnByb2plY3RDYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGhpZGVQcm9qZWN0Rm9ybSgpKTtcbmZ1bmN0aW9uIGhpZGVQcm9qZWN0Rm9ybSgpIHtcbiAgcHJvamVjdElucHV0LnZhbHVlID0gXCJcIjtcbiAgZGlzcGxheUFkZFByb2plY3QuY2xhc3NMaXN0LmFkZChcImhpZGUtaW5wdXRcIik7XG4gIGFkZFByb2plY3RCdG4uY2xhc3NMaXN0LnJlbW92ZShcImhpZGUtYnRuLWFjdGl2ZVwiKTtcbn1cblxuLy9TdGVwN1xuY29uc3QgcHJvamVjdEFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1hZGQtYnRuXCIpO1xuY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdC1pbnB1dFwiKTtcbnByb2plY3RBZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGFkZFByb2plY3RGb3JtKCkpO1xuZnVuY3Rpb24gYWRkUHJvamVjdEZvcm0oKSB7XG4gIGlmICghcHJvamVjdElucHV0LnZhbHVlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHByb2plY3QuYWRkUHJvamVjdChwcm9qZWN0SW5wdXQudmFsdWUpO1xuICBwcm9qZWN0SW5wdXQudmFsdWUgPSBcIlwiO1xufVxuXG4vL3N0ZXA4XG5mdW5jdGlvbiBjbGVhclByb2plY3REaXNwbGF5KCkge1xuICBjb25zdCBwcm9qZWN0TGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1saXN0XCIpO1xuICBwcm9qZWN0TGlzdENvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XG59XG5cbi8vU3RlcDlcbmZ1bmN0aW9uIHJlbmRlclByb2plY3RzKCkge1xuICBjbGVhclByb2plY3REaXNwbGF5KCk7XG4gIGNvbnN0IHByb2plY3RMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWxpc3RcIik7XG5cbiAgcHJvamVjdC5wcm9qZWN0TGlzdC5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgIHByb2plY3RMaXN0Q29udGFpbmVyLmlubmVySFRNTCArPSBgPGRpdiBjbGFzcz1cInByb2plY3Qtc2VsZWN0IGZsZXgtZGl2XCIgZGF0YS1wcm9qZWN0LWluZGV4PVwiJHtpbmRleH1cIj5cbiAgICAgICAgPHAgY2xhc3M9XCJwcm9qZWN0LXNlbGVjdCBkYXRhLXByb2plY3QtaW5kZXg9XCIke2luZGV4fVwiPiR7cHJvamVjdC50aXRsZX08cD48aW1nIHNyYz0uL2ltYWdlcy9kZWxldGUucG5nIGFsdD1cImRlbGV0ZS1iaW5cIiBjbGFzcz1cImRlbGV0ZS1iaW4gaGlkZS1iaW5cIj5gO1xuICB9KTtcblxuICBsaXN0ZW5Gb3JQcm9qZWN0Q2xpY2soKTtcbn1cblxuLy9TdGVwMTBcbmZ1bmN0aW9uIGxpc3RlbkZvclByb2plY3RDbGljaygpIHtcbiAgY29uc3QgcHJvamVjdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3Qtc2VsZWN0XCIpO1xuICBwcm9qZWN0QnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVByb2plY3RDbGljayk7XG4gIH0pO1xufVxuXG4vL1N0ZXAxMVxuZnVuY3Rpb24gaGFuZGxlUHJvamVjdENsaWNrKGUpIHtcbiAgY29uc3QgbGlzdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0LXRpdGxlXCIpO1xuICBsaXN0VGl0bGUudGV4dENvbnRlbnQgPSBlLnRhcmdldC5pbm5lclRleHQ7XG4gIGhpZGVQcm9qZWN0Rm9ybSgpO1xuICBoaWRlVGFza0Zvcm0oKTtcbiAgc2hvd0FkZFRhc2tCdG4oKTtcblxuICBjb25zdCBwcm9qZWN0SW5kZXggPSB0aGlzLmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pbmRleFwiKTtcblxuICBjaGFuZ2VDdXJyZW50UHJvamVjdEluZGV4KHByb2plY3RJbmRleCk7XG4gIHRhc2suZ2V0VGFza0Zyb21Qcm9qZWN0KGN1cnJlbnRQcm9qZWN0SW5kZXgpO1xuXG4gIHJlbmRlclRvZG9MaXN0KHRhc2sudGFza0xpc3QpO1xuXG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkZWxldGUtYmluXCIpKSB7XG4gICAgZGVsZXRlUHJvamVjdEZyb21Eb20ocHJvamVjdEluZGV4KTtcbiAgICBjbGVhclRhc2tEaXNwbGF5KCk7XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3RGcm9tRG9tKGluZGV4KSB7XG4gIHByb2plY3Quc3BsaWNlUHJvamVjdExpc3QoaW5kZXgpO1xuICBjaGFuZ2VDdXJyZW50UHJvamVjdEluZGV4KDApO1xuICByZW5kZXJQcm9qZWN0cygpO1xufVxuXG5jb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1idG5cIik7XG5jb25zdCBkaXNwbGF5QWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGlzcGxheS1hZGQtdGFza1wiKTtcbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dUYXNrRm9ybSk7XG5mdW5jdGlvbiBzaG93VGFza0Zvcm0oKSB7XG4gIGFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZChcImhpZGUtYnRuLWFjdGl2ZVwiKTtcbiAgZGlzcGxheUFkZFRhc2suY2xhc3NMaXN0LnJlbW92ZShcImhpZGUtaW5wdXRcIik7XG5cbiAgaGlkZVByb2plY3RGb3JtKCk7XG59XG5cbmNvbnN0IHRhc2tDYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY2FuY2VsLWJ0blwiKTtcbnRhc2tDYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVUYXNrRm9ybSk7XG5mdW5jdGlvbiBoaWRlVGFza0Zvcm0oKSB7XG4gIGRpc3BsYXlBZGRUYXNrLmNsYXNzTGlzdC5hZGQoXCJoaWRlLWlucHV0XCIpO1xuICBhZGRUYXNrQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlLWJ0bi1hY3RpdmVcIik7XG59XG5cbmNvbnN0IHRhc2tBZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stYWRkLWJ0blwiKTtcbnRhc2tBZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFRhc2tGb3JtKTtcbmZ1bmN0aW9uIGFkZFRhc2tGb3JtKCkge1xuICBoaWRlVGFza0Zvcm0oKTtcbiAgY29uc3QgdGFza0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1pbnB1dFwiKTtcbiAgY29uc3QgcHJpb3JpdHlTY2FsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJpb3JpdHlcIik7XG4gIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kdWUtZGF0ZVwiKTtcbiAgaWYgKCF0YXNrSW5wdXQudmFsdWUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdGFzay5nZXRUYXNrRnJvbVByb2plY3QoY3VycmVudFByb2plY3RJbmRleCk7XG4gIHRhc2suYWRkVGFzayhcbiAgICB0YXNrSW5wdXQudmFsdWUsXG4gICAgZGF0ZUlucHV0LnZhbHVlLFxuICAgIHByaW9yaXR5U2NhbGUudmFsdWUsXG4gICAgY3VycmVudFByb2plY3RJbmRleFxuICApO1xuICB0YXNrSW5wdXQudmFsdWUgPSBcIlwiO1xuICBkYXRlSW5wdXQudmFsdWUgPSBcIlwiO1xuICBwcmlvcml0eVNjYWxlLnZhbHVlID0gXCJsb3dcIjtcbn1cblxuZnVuY3Rpb24gY2xlYXJUYXNrRGlzcGxheSgpIHtcbiAgY29uc3QgdG9kb0xpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tbGlzdFwiKTtcbiAgdG9kb0xpc3RDb250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUb2RvTGlzdChsaXN0KSB7XG4gIGNsZWFyVGFza0Rpc3BsYXkoKTtcblxuICBjb25zdCB0b2RvTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1saXN0XCIpO1xuICBsaXN0LmZvckVhY2goKHRvZG8sIHRvZG9JbmRleCkgPT4ge1xuICAgIHRvZG9MaXN0Q29udGFpbmVyLmlubmVySFRNTCArPSBgPGRpdiBjbGFzcz1cInRvZG8taXRlbVwiIGRhdGEtcHJvamVjdC1pbmRleD1cIiR7dG9kby5wcm9qZWN0SW5kZXh9XCIgZGF0YS10YXNrLWluZGV4PVwiJHt0b2RvSW5kZXh9XCI+XG4gICAgPGRpdiBjbGFzcz1cInRhc2stbGVmdFwiPlxuICAgIDxwIGNsYXNzPVwidG9kby10aXRsZVwiPuKAoiAke3RvZG8udGl0bGV9PC9wPlxuICAgIDxwIGNsYXNzPVwidC1wcmlvcml0eVwiPiR7dG9kby5wcmlvcml0eX08L3A+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInRhc2stcmlnaHRcIj5cbiAgICA8cCBjbGFzcz1cInRvZG8tZHVlLWRhdGVcIj4ke3RvZG8uZHVlRGF0ZX08L3A+XG4gICAgPGltZyAgY2xhc3M9XCJjcm9zcy1iaW4gaGlkZS1jcm9zc1wiIGRhdGEtdGFzay1pbmRleD1cIiR7dG9kb0luZGV4fVwiIHNyYz1cIi4vaW1hZ2VzL2Nyb3NzLnBuZ1wiIGFsdD1cImNyb3NzXCIgLz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+YDtcbiAgfSk7XG5cbiAgaGFuZGxlVG9kb0J0bkNsaWNrcygpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVUb2RvQnRuQ2xpY2tzKCkge1xuICBjb25zdCB0YXNrRGVsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jcm9zcy1iaW5cIik7XG4gIHRhc2tEZWxldGUuZm9yRWFjaCgoYnRuKSA9PiBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVRhc2tGcm9tRG9tKSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2tGcm9tRG9tKGUpIHtcbiAgY29uc3QgcHJvamVjdEluZGV4ID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmRhdGFzZXQucHJvamVjdEluZGV4O1xuICBjb25zdCB0YXNrSW5kZXggPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZGF0YXNldC50YXNrSW5kZXg7XG5cbiAgc3RvcmFnZS5kZWxldGVUb2RvKHByb2plY3RJbmRleCwgdGFza0luZGV4KTtcbiAgbGV0IHN0b3JhZ2VQcm9qZWN0TGlzdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdExpc3RcIik7XG4gIGxldCBzdG9yYWdlUHJvamVjdHMgPSBKU09OLnBhcnNlKHN0b3JhZ2VQcm9qZWN0TGlzdCk7XG4gIHJlbmRlclRvZG9MaXN0KHN0b3JhZ2VQcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2spO1xufVxuXG5mdW5jdGlvbiBzaG93QWRkVGFza0J0bigpIHtcbiAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2stYnRuXCIpO1xuICBhZGRQcm9qZWN0QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlLWJ0bi1hY3RpdmVcIik7XG59XG5cbmV4cG9ydCB7IGNsZWFyUHJvamVjdERpc3BsYXksIHJlbmRlclByb2plY3RzLCByZW5kZXJUb2RvTGlzdCB9O1xuIiwiaW1wb3J0ICogYXMgZG9tIGZyb20gXCIuL21vZHVsZXMvZG9tLmpzXCI7XG5pbXBvcnQgKiBhcyBwcm9qZWN0IGZyb20gXCIuL21vZHVsZXMvcHJvamVjdC5qc1wiO1xuXG5wcm9qZWN0LmdldExvY2FsU3RvcmFnZSgpO1xuZG9tLnJlbmRlclByb2plY3RzKCk7XG4iXSwibmFtZXMiOlsidGFza0xpc3QiLCJnZXRUYXNrRnJvbVByb2plY3QiLCJwcm9qZWN0SW5kZXgiLCJ0YXNrIiwiYWRkVGFzayIsIm5hbWUiLCJkdWVEYXRlIiwicHJpb3JpdHlTY2FsZSIsInRpdGxlIiwicHJpb3JpdHkiLCJDcmVhdGVUYXNrIiwibGlzdCIsInB1c2giLCJwcm9qZWN0TGlzdCIsImNvbnNvbGUiLCJsb2ciLCJzYXZlUHJvamVjdFRvTG9jYWxTdG9yYWdlIiwicHJvamVjdHMiLCJwcm9qZWN0TGlzdEluSlNPTiIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiYWRkUHJvamVjdCIsInByb2plY3QiLCJDcmVhdGVQcm9qZWN0IiwiY3VycmVudFByb2plY3RJbmRleCIsImNoYW5nZUN1cnJlbnRQcm9qZWN0SW5kZXgiLCJpbmRleCIsImFkZFByb2plY3RCdG4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJkaXNwbGF5QWRkUHJvamVjdCIsImhpZGVQcm9qZWN0Rm9ybSIsInByb2plY3RJbnB1dCIsInZhbHVlIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhpZGVUYXNrRm9ybSIsInByb2plY3RBZGRCdG4iLCJyZW5kZXJQcm9qZWN0cyIsInRleHRDb250ZW50IiwicHJvamVjdExpc3RDb250YWluZXIiLCJmb3JFYWNoIiwiaW5uZXJIVE1MIiwicXVlcnlTZWxlY3RvckFsbCIsImJ1dHRvbiIsImhhbmRsZVByb2plY3RDbGljayIsImUiLCJ0YXJnZXQiLCJpbm5lclRleHQiLCJ0aGlzIiwiZ2V0QXR0cmlidXRlIiwicmVuZGVyVG9kb0xpc3QiLCJjb250YWlucyIsInNwbGljZSIsImNsZWFyVGFza0Rpc3BsYXkiLCJhZGRQcm9qZWN0Rm9ybSIsImFkZFRhc2tCdG4iLCJkaXNwbGF5QWRkVGFzayIsInRvZG9MaXN0Q29udGFpbmVyIiwidG9kbyIsInRvZG9JbmRleCIsImJ0biIsImRlbGV0ZVRhc2tGcm9tRG9tIiwicGFyZW50Tm9kZSIsImRhdGFzZXQiLCJ0YXNrSW5kZXgiLCJzdG9yYWdlUHJvamVjdExpc3QiLCJnZXRJdGVtIiwic3RvcmFnZVByb2plY3RzIiwicGFyc2UiLCJqc29uUHJvamVjdExpc3QiLCJqc29uUHJvamVjdHMiLCJ0YXNrSW5wdXQiLCJkYXRlSW5wdXQiLCJsb2NhbFByb2plY3RzIl0sInNvdXJjZVJvb3QiOiIifQ==