import React, { useEffect, useState } from "react";

const Card = (props) => {
  const [initials, setInitials] = useState("MN");
  const [name, setName] = useState("Martin Nolan");
  const [phone, setPhone] = useState("07364018491");
  const [email, setEmail] = useState("mn@email.com");
  const [favorite, setFavorite] = useState(false);
  const activeClass = favorite ? "active" : "";

  useEffect(() => {
    console.log(`Value has changed to: ${favorite}`);
  });

  return (
    <section className="card-container">
      <header className="card-header">
        <span initials={initials}></span>
        <h2>{name}</h2>
        <div
          className={`favorite ${activeClass}`}
          onClick={() => {
            setFavorite(!favorite);
          }}
        >
          ☆
        </div>
      </header>

      <main>
        <ul>
          <li>
            <span>Phone</span>
            {phone ? phone : "n/a"}
          </li>
          <li>
            <span>Email</span>
            {email ? email : "n/a"}
          </li>
        </ul>
      </main>
    </section>
  );
};

export default Card;
