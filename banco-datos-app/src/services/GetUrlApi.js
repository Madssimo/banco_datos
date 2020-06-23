import {url_base_api}  from './../constants/api_url';


const getUrlApi =concurso=> { 

   
    return `${url_base_api}?q=${concurso}&appid=${api_key}`;

} 

export default getUrlApi;