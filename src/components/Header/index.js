// Header.js
import styles from "./Header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            {/* Lado esquerdo: logo e opções */}
            <div className={styles.content_left}>
                <a href="#">
                    <img className={styles.opcoes} src="/img/Header/opções.png" alt="opções" />
                </a>
                <a href="#">
                    <img className={styles.imgLogo} src="/img/Header/pingoLogo.png" alt="logo" />
                </a>
            </div>

            {/* Centro: campo de busca */}
            <div className={styles.content_center}>
                <div className={styles.searchContainer}>
                    <input
                        type="text"
                        className={styles.searchInput}
                        placeholder="Pesquise aqui..."
                    />
                    <button className={styles.searchButton}>
                        <img className={styles.lupa} src="/img/Header/lupa.png" alt="lupa" />
                    </button>
                </div>
            </div>

            {/* Lado direito: ícones de ação */}
            <div className={styles.content_right}>
                <a href="#">
                    <img className={styles.coracao} src="/img/Header/coração.png" alt="coração" />
                </a>
                <a href="#">
                    <img className={styles.perfil} src="/img/Header/perfil.png" alt="perfil" />
                </a>
                <a href="#">
                    <img className={styles.configuracoes} src="/img/Header/configurações.png" alt="configurações" />
                </a>
            </div>
        </header>
    );
}

export default Header;
