import { useCallback, useRef, useState } from "react";
import useScroll from "./useScroll";
import Product from "./Product";

import "./styles/Product.css";
import Box from "@mui/material/Box";
import SearchBar from "./SearchBar";

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
      <SearchBar />
      <Box
        sx={{ display: "flex", justifyContent: "center", padding: "1rem 0" }}
      >
        <div className="container">
          {products.map((product, index) => {
            // Avoid dup
            const uniqueKey = product._id + index; // Combining product ID with index for unique key

            if (products.length === index + 1) {
              return (
                <div ref={lastProductElementRef} key={uniqueKey}>
                  <Product product={product} />
                </div>
              );
            } else {
              return <Product product={product} key={uniqueKey} />;
            }
          })}
        </div>
      </Box>
      <h1>{loading && "Loading..."}</h1>
      <div>{error && "Error"}</div>
    </>
  );
}

export default App;
