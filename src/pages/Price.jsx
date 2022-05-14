import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Price() {
  const apiKey = "pk_c40dccbc595f483eafd4d2fe97d5cd18";
  const { symbol } = useParams();
  const url = `https://cloud.iexapis.com/stable/crypto/${symbol}/price?token=${apiKey}`;

  const [coin, setCoin] = useState(null);

  async function getCoin() {
    const data = await fetch(url).then((res) => res.json());
    setCoin(data);
  }

  useEffect(() => {
    getCoin();
  }, []);

  const loaded = () => (
    <div>
      <h1>{symbol}</h1>
      <h2>{coin.price}</h2>
    </div>
  );

  const loading = () => <h1>Loading...</h1>;

  return coin ? loaded() : loading();
}
