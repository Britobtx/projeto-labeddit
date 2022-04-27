import {BASE_URL} from "../../constants/urls";
import { Logo, DivPai, BotaoEnviar} from "./style";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import useForm from '../../hooks/useForm';



export default function PaginaLogin() {
  const navigate= useNavigate();

  const {form, onChange, clearFields}= useForm({ email: "", password: "" })

   const onSubmitLogin = () => {

    const url = `${BASE_URL}/users/login`
    const body = form

    axios.post(url, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        alert("Login autorizado")
        //clearFields()
        navigate("/pg_feed")
        console.log(res.data)

    })
    .catch((error) => {
        
        console.log(error.response);

    })
  }
  const submitForm = ((e)=>{
    e.preventDefault()
    console.log("Formulário enviado:", form)
    onSubmitLogin()

  })
  return (
    <div>
      <Logo src="https://i.postimg.cc/XvM3Wf3N/Labeddit-2.png" />
      <DivPai>
        <form
        onSubmit={submitForm}
        >
         <input
          name="email"
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={onChange}
          required 
          />

         <input
         name="password"
         placeholder="Senha"
         type="password"
         value={form.password}
         onChange={onChange}
         pattern={"\\w{8,}"}
          title={"A senha deve conter no mínimo 8 caracteres"} 
         required
         /> 

        <BotaoEnviar type="submit">
          Entrar
        </BotaoEnviar>
        </form>
        <p>Ainda não tem uma conta?  <Link to = "/pagina_cadastro">Cadastre-se</Link> </p>

        </DivPai>
    </div>)
}