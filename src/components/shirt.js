import React from "react";

const Shirt = ({ Image, Title, Description, Price }) => {
  // Shirt(props) {
  //   const  = props;
  const handleClick = () => {
    console.log();
  };
  return (
    <article className="product">
      <img src={Image} alt={Title} className="product-image" />
      <h2 className="title"> {Title}</h2>
      <p className="description"> {Description}</p>
      <h3 className="price"> {Price}</h3>
      <button className="button" onClick={() => handleClick(2, 5)}>
        click it
      </button>
    </article>
  );
};

export default Shirt;
