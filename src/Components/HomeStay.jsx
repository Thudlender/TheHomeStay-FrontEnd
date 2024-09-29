import { Card } from "./Card";
import { useEffect, useState } from "react";

const HomeStays = ({ homestays }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4" id="cards">
      {homestays &&
        homestays.map((homestay) => {
          return (
            <Card
              key={homestay.id}
              id={homestay.id}
              img={homestay.img}
              title={homestay.title}
              desc={homestay.desc}
            />
          );
        })}
    </div>
  );
};

export default HomeStays;
