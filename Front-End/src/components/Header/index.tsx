import React, { useState } from "react";
import styles from "./styles.module.scss";

function Header() {
  return (
    <>
      <header className={styles.Header}>
        <img id={styles.Logo} src="/public/Logo.svg" alt="Logo Bibbble" />

        <nav id={styles.Nav}>
          <ul>
            <li>
              <a href="#" id={styles.Home}>
                Home
              </a>
            </li>
            <li>
              <a href="https://slideworks.cc/#about">About</a>
            </li>
            <li>
              <a href="https://slideworks.cc/#services">Features</a>
            </li>
            <li>
              <a href="https://www.amazon.com.br/Livros/b?ie=UTF8&node=6740748011">
                Pricing
              </a>
            </li>
            <li>
              <a href="https://www.estantevirtual.com.br/">Gallery</a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=f2JuxM-snGc">Team</a>
            </li>
            <li>
              <a>
                <img src="/public/Lupa.svg" alt="Pesquisar" />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default Header;
