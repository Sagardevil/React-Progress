import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [value, setValue] = useState(null);

  useEffect(() => {
    fetch(`https://api.fastforex.io/fetch-all?api_key=df88af3d68-dc42e1cac5-t3gbna`)
      .then((res) => res.json())
      .then((res) => {
        if (res && res.results && res.results[currency]) {
          setValue(res.results[currency]); // store only the selected currency value
        }
      })
      .catch((err) => console.error("Error fetching currency data:", err));
  }, [currency]);

  console.log(currency, value);

  return value; // only the number (e.g. 83.17)
}

export default useCurrencyInfo;
