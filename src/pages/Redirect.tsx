import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getOriginalUrl } from "../api";

const Redirect = () => {
  const { shortUrl } = useParams<{ shortUrl: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUrl = async () => {
      try {
        const data = await getOriginalUrl(shortUrl!);
        window.location.href = data.longUrl;
      } catch {
        navigate("/404");
      }
    };
    fetchUrl();
  }, [shortUrl, navigate]);

  return <p>Redirecting...</p>;
};

export default Redirect;
