const ShortUrlDisplay = ({ shortUrl }: { shortUrl: string }) => (
    <div className="short-url-display">
      <p>Success! Here's your short URL:</p>
      <a href={`http://localhost:5000/${shortUrl}`} target="_blank" rel="noopener noreferrer">
        http://localhost:5000/{shortUrl}
      </a>
      <button onClick={() => navigator.clipboard.writeText(`http://localhost:5000/${shortUrl}`)}>
        Copy
      </button>
    </div>
  );
  
  export default ShortUrlDisplay;
  