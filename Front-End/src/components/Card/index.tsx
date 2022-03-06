import React from "react";
import { Data } from "../../interfaces/IBibbble";
import styles from "./styles.module.scss";
import axios from "axios";

type BookProps = {
  //  items: Data[];  id?: number | null | undefined;

  title?: string | null;
  author?: string | null;
  genre?: string | null;
  description?: string | null;
  isbn?: string | null;
  image?: string;
  published?: string | null;
  publisher?: string | null;
};

// export const Card: React.FC<BookProps> ({items}) {
// export const Card = ({ data }) => (
function Card(BookProps: BookProps) {
  return (
    <div className={styles.Card}>
      <div>
        <img src={BookProps.image}></img>
      </div>

      <div id={styles.Text}>
        <div id={styles.Title}>{BookProps.title}</div>

        <div id={styles.Autor}>{BookProps.author}</div>
        <div id={styles.Description}>{BookProps.description}</div>
      </div>

      <div id={styles.Flex}>
        <div id={styles.Genre}>{BookProps.genre}</div>

        <div id={styles.Date}>{BookProps.published}</div>
      </div>
    </div>
  );
}

// function Card() {

export default Card;

// id,
//   title,
//   author,
//   genre,
//   description,
//   isbn,
//   image,
//   published,
//   publisher
