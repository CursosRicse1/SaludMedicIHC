import React, { useEffect, useState } from "react";
import LoadingBox from "components/LoadingBox";
import Home from "pages/home";

export default function HomeScreen() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  }, []);
  return <div>{loading ? <LoadingBox /> : <Home />}</div>;
}
