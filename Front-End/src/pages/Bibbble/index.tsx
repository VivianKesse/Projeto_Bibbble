import { useState, useEffect } from "react";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./styles.module.scss";
import { Api } from "../../services/api";

type BookProps = {
  //  items: Data[];
  id?: number | null;
  title?: string | null;
  author?: string | null;
  genre?: string | null;
  description?: string | null;
  isbn?: string | null;
  image?: string;
  published?: string | null;
  publisher?: string | null;
};

function Bibbble() {
  const [data, setData] = useState<BookProps[]>([]);

  useEffect(() => {
    Promise.all([Api.get("")]).then((response) => {
      // console.log(response[0].data);
      setData(response[0].data);
    });
  }, []);

  // const { getAll } = useBibbble();

  // useEffect(() => {
  //   getAll();
  // }, [getAll]);

  return (
    <>
      <Header />

      <div id={styles.Cards}>
        {data.map((value, index) => {
          return (
            <Card
              key={value.id}
              title={value.title}
              author={value.author}
              genre={value.genre}
              description={value.description}
              image={value.image}
              published={value.published}
              isbn={value.isbn}
              publisher={value.publisher}
            />
          );
        })}
      </div>

      <div id={styles.Footer}>
        <Footer />
      </div>
    </>
  );
}

export default Bibbble;
