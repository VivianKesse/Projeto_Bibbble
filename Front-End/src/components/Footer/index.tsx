import React from "react";
import styles from "./styles.module.scss";

function Footer() {
  return (
    <>
      <footer className={styles.Footer}>
        <img
          id={styles.Logo}
          src="/public/LogoFooter.svg"
          alt="Logo Libslide"
        />
        <section>
          <div>
            <a href="https://www.estantevirtual.com.br/termos-de-uso-comprador">
              Terms & Conditions
            </a>
            <a href="https://www.estantevirtual.com.br/seguranca-e-privacidade">
              Privacy Policy
            </a>
          </div>
          <div>
            <a href="https://www.facebook.com/slideworks.cc/photos/a.1578796195717476/3080362742227473">
              <img src="/public/Facebook.svg" alt="Nosso Facebook" />
            </a>
            <a href="https://twitter.com/">
              <img src="/public/Twitter.svg" alt="Nosso Twitter" />
            </a>
            <a href="https://www.instagram.com/slideworks.cc/">
              <img src="/public/Instagram.svg" alt="Nosso Instagram" />
            </a>
          </div>
        </section>
      </footer>
    </>
  );
}
export default Footer;
