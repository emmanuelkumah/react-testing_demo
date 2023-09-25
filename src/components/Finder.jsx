import React, { useState } from "react";

const Finder = () => {
  const [input, setInput] = useState("");
  const a = 4;
  const b = 5;
  const handleChange = () => {
    setInput("Testing");
  };
  return (
    <>
      <section>
        <h1>This is the heading</h1>
        <p>This is a paragraph</p>
        <input type="text" value={input} onChange={handleChange} />
        <input type="text" placeholder="Another test" />
      </section>
      <section>
        <span title="sum">{a + b}</span>
        <button disabled>Click me</button>
      </section>
    </>
  );
};

export default Finder;
