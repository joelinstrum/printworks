import { useState, useEffect } from "react";
import { products, materials, services } from "./data";

export const useQuery = (endpoint) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  let retval = {};
  if (endpoint === "offerings") {
    retval = {
      products,
      materials,
      services,
    };
  } else if (endpoint === "orders") {
    retval = JSON.parse(window.localStorage.getItem("orders")) || [];
    console.log(retval);
  }

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      await new Promise((resolve) => {
        //faking a fetch
        setTimeout(() => {
          resolve();
        }, 1000);
      });
      setIsLoading(false);
      setData(retval);
    };
    getData();
  }, [setData]);

  return { data, isLoading };
};

export const postApi = async (payload) => {
  const currentItems = JSON.parse(window.localStorage.getItem("orders")) || [];
  currentItems.push(payload);
  window.localStorage.setItem("orders", JSON.stringify(currentItems));

  await new Promise((resolve) => {
    /* fake a post */
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};
