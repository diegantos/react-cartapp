import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";

export const CatalogView = ({ handler }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(getProducts());
  }, []);

  const addProduct = (product) => {
    console.log(product);
    handler(product)
  };

  return (
    <>
      <div className="row">
        {products.map(({ id, name, description, price, handler }) => (
          <div key={id} handler={ handler} className="col-4 my-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">{price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => addProduct({ id, name, description, price })}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
