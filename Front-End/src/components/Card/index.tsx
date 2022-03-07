import moment from "moment";
import React from "react";
import styles from "./styles.module.scss";

type BookProps = {
  title?: string | null;
  author?: string | null;
  genre?: string | null;
  description?: string | null;
  isbn?: string | null;
  image?: string;
  published?: string | number | null;
  publisher?: string | null;
};

function Card(BookProps: BookProps) {
  // const date = new Intl
  // .DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'short' })
  // .format(cr.toDate())
  // const date = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738));
  // console.log(new Intl.DateTimeFormat("pt-BR").format(date));

  // let formattedDate = moment({}).format("DD MMM. YY");

  //   var objName = {

  //     time: {BookProps,published},
  //  }

  //   let formattedTime = moment(objName.time).format("DD/MM/YYYY HH:mm");

  // const date = new Date("2020-07-22T13:22:10.2566789+00:00");
  // const formattedDate = date.toLocaleDateString("en-GB", {
  //   day: "numeric",
  //   month: "long",
  //   year: "numeric",
  // });

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

        <div id={styles.Date}>
          {/* {formattedDate} */}
          {/* ${date} */}
          {BookProps.published}
        </div>
      </div>
    </div>
  );
}

export default Card;
