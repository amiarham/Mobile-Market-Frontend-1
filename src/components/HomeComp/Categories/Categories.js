/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import "./Categories.css";

const Categories = () => {
  const navigate = useNavigate();
  const myData = [
    {
      image:
        "https://res.cloudinary.com/dg6b5wkgh/image/upload/v1690407070/xgalblbux2slwq7fzzyh.png",
      title: "Buy Mobile",
      alt: "category1",
    },
    {
      image:
        "https://res.cloudinary.com/dg6b5wkgh/image/upload/v1690407070/t0ph5mirck7sxabq2njo.png",
      title: "Sell Mobile",
      alt: "category2",
    },
    {
      image:
        "https://res.cloudinary.com/dg6b5wkgh/image/upload/v1690407070/djwjtji9vdcvvuuvzbav.png",
      title: "Accessories",
      alt: "category3",
    },
  ];
  const clickhandler = (value) => {
    navigate("/shop", {
      state: {
        category: value,
      },
    });
  };
  return (
    <section className='categories'>
      {myData.map((card, index) => (
        <div
          className='Card'
          key={index}
          onClick={() => clickhandler(card.title)}>
          <img className='CardImg' src={card.image} alt={card.alt} />
          <div className='Cardtext'>
            <h3>{card.title}</h3>
            <button>Shop Now</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Categories;
