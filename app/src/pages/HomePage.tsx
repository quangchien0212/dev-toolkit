import axios from "axios";
import React from "react";

export default function HomePage() {
  axios.get('http://localhost:3001').then(function(res) {
    console.log(res)
  })

  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center gap-2">
        <h1 className="text-4xl font-bold">
          This is home page
        </h1>
      </div>
    </>
  );
}
