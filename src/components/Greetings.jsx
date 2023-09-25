import React, { useState } from "react";

const Greetings = () => {
  const [changeText, setChangeText] = useState(false);
  const changeTextHandler = () => {
    setChangeText(true);
  };
  return (
    <div>
      <h2>Hello</h2>
      <p>Testing react Apps</p>
      {!changeText && <p>Good to see you</p>}
      {changeText && <p>Changed</p>}
      {/* <button onClick={changeTextHandler}>Change</button> */}

      <section>
        <ul>
          <li>Mango</li>
          <li>Orange</li>
          <li>Apple</li>
        </ul>
        <button>Disabled</button>
      </section>
    </div>
  );
};

export default Greetings;
