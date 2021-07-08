import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import Input from "../../components/Input";

import { useState } from "react";
const Home = () => {
  const [input, setInput] = useState("");

  return (
    <>
      <Input />
      <section>
        <h3>Teclados</h3>
        <Slider>
          <div>
            <p>Nome do produto</p>
            <span>Preço</span>
          </div>
        </Slider>
      </section>
      <section>
        <h3>Processador</h3>
        <Slider>
          <div>
            <p>Nome do produto</p>
            <span>Preço</span>
          </div>
        </Slider>
      </section>
      <section>
        <h3>MotherBoard</h3>
        <Slider>
          <div>
            <p>Nome do produto</p>
            <span>Preço</span>
          </div>
        </Slider>
      </section>
    </>
  );
};

export default Home;
