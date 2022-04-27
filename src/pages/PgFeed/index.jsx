import React from "react";
import { HeaderSite } from "../../components/Header/style";
import { Busca, BotaoBusca,Logo,JanelaFeed } from "./style";

VoltarInicio()=>{

}
export default function PgFeed() {

  const [inicio,setInicio] =useState()
  return (
    
    <HeaderSite>
      <Logo src="https://i.postimg.cc/ZnpyS0Wn/Labeddit-2.png" />
      <Busca value="" placeholder="Buscar no labeddit" />
      <BotaoBusca>Buscar</BotaoBusca>
      <JanelaFeed/>
    </HeaderSite>
    
    )
  };  
    
    
  

