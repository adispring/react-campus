import React, { useEffect, useState } from 'react';

function useXXX() {
  const [data, setData] = useState();

  useEffect(() => {
    // get data ...
    setData(data);
  }, []);

  return data;
}

export default useXXX;

function MyComponent() {
  const data = useXXX();

  return <div>...</div>;
}
