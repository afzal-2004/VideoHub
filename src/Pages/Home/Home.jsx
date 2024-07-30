import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./Home.css";
import Hero1 from "/1.jpg";
import Hero2 from "/2.jpg";
import Hero3 from "/3.jpg";
import Hero4 from "/4.jpg";
import graphics from "/5.png";

export const Home = () => {
  return (
    <>
      <section>
        <Carousel
          autoPlay
          infiniteLoop
          interval={1000}
          showArrows={false}
          showThumbs={false}
          showStatus={false}
        >
          <img src={Hero1} alt="" className="  Carsoselimg " />
          <img src={Hero2} alt="" className=" Carsoselimg" />
          <img src={Hero3} alt="" className=" Carsoselimg " />
          <img src={Hero4} alt="" className=" Carsoselimg  " />
        </Carousel>
        <div className="mt-[35px] flex flex-col sm:p-4 p-2  xl:flex-row  w-[98vw]  items-center gap-[50px]  ">
          <img src={graphics} alt="" className="GRaphicsImage " />

          <p className=" text-[20px] opacity-60 mt-[20px] p-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            enim, aperiam corrupti culpa, modi harum amet blanditiis deleniti
            ducimus iste quae! Obcaecati rerum id non, maxime nulla consequuntur
            sunt nihil. Aut dolorum excepturi sed exercitationem impedit, fuga
            quibusdam. Dignissimos illum nesciunt suscipit nihil nulla corrupti
            error atque rem blanditiis quam reiciendis odit corporis, vitae
            animi voluptas deleniti deserunt in modi! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Corporis enim, aperiam corrupti culpa,
            modi harum amet blanditiis deleniti ducimus iste quae! Obcaecati
            rerum id non, maxime nulla consequuntur
          </p>
        </div>
      </section>
    </>
  );
};
