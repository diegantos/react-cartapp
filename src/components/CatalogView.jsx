import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { useNavigate } from "react-router-dom";

export const CatalogView = ({ handler }) => {
  const [products, setProducts] = useState([]);

  const findAll = async() => {
    const prods = await getProducts()
    setProducts(prods);
  }

  useEffect(() => {
    findAll()
  }, []);

  const navigate = useNavigate()

  const addProduct = (product) => {
    handler(product)
    navigate('/cart')
  };

  return (
    <>
      <div className="row">
        {products.map(({ id, name, description, price }) => (
          <div key={id} className="col-4 my-2">
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
