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
            <a href="https://fonts.google.com/specimen/DM+Sans?query=Dm+sans">
              Terms & Conditions
            </a>
            <a>Privacy Policy</a>
          </div>
          <div>
            <img src="/public/Facebook.svg" alt="Nosso Facebook" />
            <img src="/public/Twitter.svg" alt="Nosso Twitter" />
            <img src="/public/Instagram.svg" alt="Nosso Instagram" />
          </div>
        </section>
      </footer>
    </>
  );
}
export default Footer;
