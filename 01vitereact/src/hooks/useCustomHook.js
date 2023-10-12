import React, { useEffect, useState } from "react";

const useCustomHook = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    const getData = async () =>
      await fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((response) => response.json())
        .then((data) => setData(data));

    getData();
  }, []);
  return data;
};
export default useCustomHook;
