import React, { useState, useEffect } from "react";
import "./Loader.css"; // Ky është CSS loader-it

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 sekondë

    return () => clearTimeout(timeout);
  }, []);

  if (!loading) return null;

  return (
    <div className="loader-wrapper">
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
