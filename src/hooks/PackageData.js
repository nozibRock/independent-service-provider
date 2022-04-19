import { useState, useEffect } from "react";

const PackageData = () => {
  // Fake data for showing courses
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/packages.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return data;
};

export default PackageData;
