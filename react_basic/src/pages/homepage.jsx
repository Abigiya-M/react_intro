import React from "react";
import { Button } from "./components/button";
import { Card } from "./components/card";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to My Page</h1>
      <Card title="Reusable Card" description="This is a reusable card component." />
      <Button text="Click Me" onClick={() => alert("Button clicked!")} />
    </div>
  );
};

export default HomePage;
