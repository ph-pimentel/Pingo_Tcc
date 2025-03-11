import styles from "./Register.module.css";
import { useState } from "react";

function Register(){
    const [showPassword, setShowPassword] = useState(false);
    return(
        <div className={styles.container}>

            {/*----FORMULARIO DE Registro----*/}
        
            <img src="/img/BackGround/pingoicon.png" className={styles.icon}/>
        


        <form className={styles.login_form} method="POST">  

            <h1 className={styles.title}>Registrar</h1>

            <input type="text" className={styles.login_input} placeholder="Nome de Usuário*"/>
            <input type="email" className={styles.login_input} placeholder="Endereço de e-mail*"/>

            {/*----INPUT-SENHA----*/}
            <label className={styles.login_input_container} onClick={(e) => {

            {/*--Sistema-de-foco-no-input-ao-clicar-na-label--*/}
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
            <label className={styles.login_input_container} onClick={(e) => {
             const input = e.currentTarget.querySelector("input");
                if (document.activeElement !== input) {
                input.focus();
    }
  }}
>
              <input type={showPassword ? "text" : "password"}  placeholder="Repetir Senha*"/>
             </label>

            {/*---MANTER-CONECTADO---*/}
            <div className={styles.login_form_container}/>    
            <div className={styles.checkbox_container}>
                <input type="checkbox" id="rememberMe" className={styles.checkbox}/>
                <label htmlFor="rememberMe" className={styles.checkbox_label}>Manter Conectado</label>
            </div>    

            {/*---CONTINUAR---*/}
                <button className={styles.login_btn}>Continuar</button>
        </form>
</div>
    );
}

export default Register;