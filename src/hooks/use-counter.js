import React from "react";
import { useEffect, useState } from "react";

// obavezno pravilo da custom hook mora pocinjati sa "use", filename ne mora ali dobra praksa je da i on prati ista pravila
const useCounter = (forwards = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [forwards]);

  return counter;
};

export default useCounter;
