import { useEffect, useState } from "react";
import { getProducts } from "./api/API";
import ProductList from "./ProductList";

function App() {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    // Inside an async function to handle async operations
    const fetchData = async () => {
      try {
        const data = await getProducts();
        setProducts(data.data.docs);
        console.log(data.data.docs);
        setLoading(false); // Mark loading as false when the data is fetched successfully
      } catch (error) {
        setError(error); // Handle and set the error state
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {error && loading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <h1>{products.results}</h1>
          <ProductList products={products} />
        </>
      )}
    </>
  );
}
export default App;
