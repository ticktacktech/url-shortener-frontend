import { useState } from "react";
import { shortenUrl } from "../api";

const ShortenForm = ({ onShortened }: { onShortened: (shortUrl: string) => void }) => {
  const [longUrl, setLongUrl] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const data = await shortenUrl(longUrl);
      onShortened(data.shortUrl);
      setLongUrl("");
    } catch (err) {
      setError("Failed to shorten URL. Try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="shorten-form">
      <input
        type="url"
        placeholder="Enter URL"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        required
      />
      <button type="submit">Shorten</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default ShortenForm;
