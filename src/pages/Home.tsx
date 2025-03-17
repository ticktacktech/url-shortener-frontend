import { useState } from "react";
import ShortenForm from "../components/ShortenForm";
import ShortUrlDisplay from "../components/ShortUrlDisplay";

const Home = () => {
  const [shortUrl, setShortUrl] = useState("");

  return (
    <div className="home">
      <h1>URL Shortener</h1>
      <ShortenForm onShortened={setShortUrl} />
      {shortUrl && <ShortUrlDisplay shortUrl={shortUrl} />}
    </div>
  );
};

export default Home;
