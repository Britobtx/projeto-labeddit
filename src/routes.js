import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaginaLogin from './pages/PaginaLogin'
import PgFeed from './pages/PgFeed';
import PgPost from './pages/PgPost';
import PaginaCadastro from './pages/PaginaCadastro';
    
    
     const RoutesApp =()=> {
             
            return ( 
               <BrowserRouter> 
                 <Routes>
                 <Route path="/" element ={<PaginaLogin/>} /> 
                 <Route path="/pg_feed" element ={<PgFeed/>} />
                 <Route path="/pg_post" element ={<PgPost/>}/>
                 <Route path="/pagina_cadastro" element ={<PaginaCadastro/>}/>
                 </Routes>
                </BrowserRouter>);
    }  
    export default RoutesApp;