import { useState, useEffect } from "react";
import { POSTS_DATA, Quote } from "../data";
import CardPost from "./CardPost";
import Loading from "./Loading";

const ShowQuote = () => {
  const [quote, setQuote] = useState<Quote>(null);

  // get random item from POSTS_DATA
  useEffect(() => {
    const data = POSTS_DATA.filter(item => !item.hidden)
    const randomIndex = Math.floor(Math.random() * data.length);
    setQuote(data[randomIndex]);
  }, []);

  return <div>
    {
      (quote && !quote.hidden) ? <CardPost post={quote} /> : <Loading />
    }
  </div>
}

export default ShowQuote;
