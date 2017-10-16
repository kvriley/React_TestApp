const apiBase = "localhost:3010/";

 let toQueryString = (paramsObject) => {
   return Object
     .keys(paramsObject)
     .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(paramsObject[key])}`)
     .join('&')
   ;
 }

export const get = (apiMethod, params) => {

   let apiUrl = apiBase + '/' + apiMethod;
   let paramString = toQueryString(params);
   if (paramString) {
     apiUrl = apiUrl + "?" + paramString;
   }

   return fetch(apiUrl,{
     method: 'get'
   })
     .then(res => res.json());
 };