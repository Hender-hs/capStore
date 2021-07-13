import { useProducts } from "../../providers/Products";
import { useState, useEffect } from "react";
import Input from "../../components/Input";
import api from "../../services/api";
import jwt_decode from "jwt-decode";
import Button from "../../components/Button";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

const SpecificProducts = ({ category }) => {
  const [type, setType] = useState("");
  const [id, setId] = useState("");
  const { products, filterBySellerId, filteredProducts } = useProducts();

  const getType = () => {
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);
    setType(JSON.parse(decoded.sub));

    api
      .get(`/users/${decoded.sub}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setType(response.data.type);
        setId(response.data.sellerId);
      });
  };
  const setCart = (item) => {
    localStorage.setItem("cart", JSON.stringify(item));
  };

  useEffect(() => {
    getType();
    filterBySellerId(id);
  }, []);

  return (
    <>
      {type === "client" && (
        <>
          {
            <Slider>
              {products
                .filter((item) => item.category === category)
                .map((item) => (
                  <div>
                    <img src={item.url} alt="img de uma peça" />
                    <span>Nome {item.name.slice(0, 20)}</span>
                    <p>R${item.price}</p>
                    <button onClick={() => setCart(item)} className="client">
                      Comprar
                    </button>
                  </div>
                ))}
            </Slider>
          }
        </>
      )}

      {type === "seller" && (
        <>
          {
            <Slider>
              {filteredProducts
                .filter((item) => item.category === category)
                .map((item) => (
                  <div>
                    <img src={item.url} alt="img de uma peça" />
                    <span>Nome {item.name.slice(0, 20)}</span>
                    <p>R${item.price}</p>
                    <button onClick={() => setCart(item)} className="client">
                      Comprar
                    </button>
                  </div>
                ))}
            </Slider>
          }
        </>
      )}
    </>
  );
};

export default SpecificProducts;
