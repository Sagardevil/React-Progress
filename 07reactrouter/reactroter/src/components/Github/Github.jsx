import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://api.github.com/users/shivraj-yadav")
      .then((Response) => Response.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <div className="text-center m-5 bg-gray-600 text-white p-4 text-3xl">
      Github Followers : {data.following}
      <img src={data.avatar_url} alt="Git pic" width={300} />
    </div>
  );
}

export default Github;
