import React from "react"
import axios from 'axios';
import {BASE_URL} from "../../constants/urls";
import useForm from '../../hooks/useForm';
import {useNavigate} from "react-router-dom";
import { Logo,DivPai,InputForm,BotaoEnviar, StyleLogin,P,} from "./style";
import { Link } from "react-router-dom";

  export default function PgCadastro(){ 
  const {form, onChange, cleanFields}=useForm({username:"", email:"", password:""});
  const navigate= useNavigate();

  const submitForm = ((e)=>{
    e.preventDefault()
    console.log("Formulário enviado:", form)
    onSubmitSignup()

  })


  const onSubmitSignup = () => {

    const url = `${BASE_URL}/users/signup`
    const body = form
    axios.post(url, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token);
        alert("Cadastro autorizado")
        cleanFields()
        navigate("/pg_feed")

    })
    .catch((error) => {
        alert("Algo está errado, tente novamente!")
        console.log(error.res);

    })
  }
  return (
    <DivPai>
      <Logo src="https://i.postimg.cc/XvM3Wf3N/Labeddit-2.png"/>
      <StyleLogin>
      <form
      onSubmit={submitForm}
      >
       <InputForm
        name="username"
        placeholder="Nome de Usuário"
        type="text"
        value={form.username}
        onChange={onChange}
        required 
        />
       <InputForm
        name="email"
        placeholder="Email"
        type="email"
        value={form.email}
        onChange={onChange}
        required 
        />
       <InputForm
       name="password"
       placeholder="Senha"
       type="password"
       value={form.password}
       onChange={onChange}
       pattern={"\w{8,}"}
        title={"A senha deve conter no mínimo 8 caracteres"} 
       required
       />
       <BotaoEnviar type="submit">
          Cadastre-se
        </BotaoEnviar>
      </form> 
      <P>Já tem uma conta?  <Link to = "/">Login</Link> </P>
      </StyleLogin>
    </DivPai>
  )
}
 
