import { useState } from "react";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./styles.module.scss";

function Bibbble() {
  return (
    <>
      <Header />

      <div className={styles.Cards}>
        <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card />
        <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card />
      </div>

      <Footer />
    </>
  );
}

export default Bibbble;
