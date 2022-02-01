import React, { useState } from "react";
import "./MainContainer.css";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const [name, setName] = useState("");

  const toSubmit = (formData) => {
    let { name } = formData;
    setName(name);
  };

  return (
    <div className="contact">
      <h1 style={{ fontSize: "5rem" }}>
        <span style={{ color: "darkgoldenrod", fontFamily: "cursive" }}>
          Contact
        </span>{" "}
        Us
      </h1>

      {name ? (
        <h1>
          Hello,{" "}
          <span style={{ color: "darkgoldenrod", fontFamily: "cursive" }}>
            {name}
          </span>
        </h1>
      ) : (
        ""
      )}

      <form onSubmit={handleSubmit(toSubmit)}>
        <input
          type="text"
          placeholder="Enter Your name"
          autoComplete="off"
          {...register("name", { required: true })}
        />
      </form>
    </div>
  );
};

export default Contact;
