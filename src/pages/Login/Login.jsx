import styles from "./Login.module.css";
import { useState } from "react";

function Login(){
    const [showPassword, setShowPassword] = useState(false);
    return(
        <div className={styles.container}>

            {/*----FORMULARIO DE LOGIN----*/}
        
            <img src="/img/BackGround/pingoicon.png" className={styles.icon}/>
        
        {/*
        Após ligar o node.js ao projeto, 
        adicionar ao form 
        action="/loginform"
        para ligar a rota 
        de informações.
        */}

        <form className={styles.login_form} method="POST">  
            <h1 className={styles.title}>Entrar</h1>
            <input type="email" className={styles.login_input} placeholder="Endereço de e-mail*"></input>

            {/*----INPUT-SENHA----*/}
            <label className={styles.login_input_container} onClick={(e) => {

            {/*--Sistema-de-foco-no-input-ao-clicar-na-label-- */}
                 const input = e.currentTarget.querySelector("input");
                if (document.activeElement !== input) {
                input.focus();
    }
  }}
>
              <input type={showPassword ? "text" : "password"}  placeholder="Senha*"/>
              <img src={showPassword ? "/img/Icon/EyeOpen.png" : "/img/Icon/EyeBlock.png"} alt="Mostrar senha"
                onClick={(e) => {
                 e.stopPropagation(); 
                 setShowPassword(!showPassword);
                  }}
                />
    </label>


            {/*---MANTER-CONECTADO---*/}
            <div className={styles.login_form_container}>    
            <div className={styles.checkbox_container}>
                <input type="checkbox" id="rememberMe" className={styles.checkbox}/>
                <label htmlFor="rememberMe" className={styles.checkbox_label}>Manter Conectado</label>
            </div>


            {/*---ESQUECEU-A-SENHA---*/}    
                <a href="/recuperar-senha" className={styles.forgot_password}>Esqueceu a senha?</a>
            </div>


            {/*---CONTINUAR---*/}
                <button className={styles.login_btn}>Continuar</button>


            {/*---MOVER-PARA-REGISTRO---*/}
            <div className={styles.login_register_container}>
                <p>Não tem uma conta?</p><a href="/registro" className={styles.move_to_register}>Registrar</a>
            </div>


            {/*--FORMAS-DE-LOGIN--*/}
            <div className={styles.login_or_container}>
            <hr/> <span>ou</span> <hr/>
            </div>

            {/*--Google-- */}
                <button className={styles.alt_login_button}>
                    <img src="/img/Icon/google.png"/>
                    <p>Continuar com Google</p>
                </button>
            
        </form>
</div>
    );
}

export default Login;