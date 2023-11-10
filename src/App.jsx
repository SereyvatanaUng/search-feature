import { useCallback, useRef, useState } from "react";
import useScroll from "./useScroll";

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const { products, hasMore, loading, error } = useScroll(pageNumber);

  const observer = useRef();
  const lastProductElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );
  return (
    <>
      {products.map((product, index) => {
        const uniqueKey = product._id + index; // Combining product ID with index for unique key

        if (products.length === index + 1) {
          return (
            <div ref={lastProductElementRef} key={uniqueKey}>
              {index} - {product.title}
            </div>
          );
        } else {
          return (
            <div key={uniqueKey}>
              {index} - {product.title}
            </div>
          );
        }
      })}
      <div>{loading && "Loading..."}</div>
      <div>{error && "Error"}</div>
    </>
  );
}

export default App;
