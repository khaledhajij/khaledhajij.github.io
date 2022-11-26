import React from "react";

const Form = () => {
  const dataNeeded = ["name", "email", "subject"];
  const renderData = dataNeeded.map((datium) => (
    <div className="mb-3">
      <label for="exampleFormControlInput1" className="form-label">
        {datium.slice(0, 1).toUpperCase() + datium.slice(1)}
      </label>
      <input
        type={datium === "email" ? "email" : "text"}
        className="form-control"
        placeholder={
          datium === "email"
            ? "name@example.com"
            : datium === "name"
            ? "Khaled"
            : "Something you want to say"
        }
      />
    </div>
  ));
  return (
    <div className="Form">
      <h2>Fill in this form</h2>
      {renderData}
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Topic
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
    </div>
  );
};

export default Form;
