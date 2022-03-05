import React from "react";
import styles from "./styles.module.scss";

function Header() {
  return (
    <>
      <header className={styles.Header}>
        <img id={styles.Logo} src="/public/Logo.svg" alt="Logo Bibbble" />
        <nav>
          <a id={styles.Home}>Home</a>
          <a>About</a>
          <a>Features</a>
          <a>Pricing</a>
          <a>Gallery</a>
          <a>Team</a>
          <a>
            <img src="/public/Lupa.svg" alt="Pesquisar" />
          </a>
        </nav>
      </header>
    </>
  );
}
export default Header;
