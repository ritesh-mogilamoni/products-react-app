import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const gotoProduct = (productObj) => {
    navigate("/product", { state: { product: productObj } });
  };

  const changeSearch = (e) => {
    console.log(e)
    setSearch(e.target.value);
  };

  useEffect(() => {
    setLoading(true);

    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((product) =>
    product.category.includes(search)
  );

  if (loading) {
    return <p className="text-2xl text-center mt-10">Loading...</p>;
  }

  if (error) {
    return (
      <p className="text-red-500 text-center mt-10">
        Error: {error}
      </p>
    );
  }

  return (
    <div className="p-6">

      <input
        type="text"
        placeholder="Search products..."
        onChange={changeSearch}
        className="border-2 p-2 mb-6"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => gotoProduct(product)}
            className="border rounded-lg p-4 shadow-md cursor-pointer"
          >
            <img
              src={product.image}
              alt=""
              className="h-40 mx-auto object-contain"
            />
            <h2 className="font-bold mt-3">{product.title}</h2>
            <p className="text-gray-600 mt-2">$
              {product.price}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default ProductsList;