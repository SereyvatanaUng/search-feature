import Product from "./Product";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";

export default function ProductList({ products }) {
  if (!Array.isArray(products)) {
    return <div>No products available</div>;
  }
  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "center", padding: "1rem 0" }}
      >
        <Masonry columns={2} spacing={1} sx={{ alignContent: "center" }}>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </Masonry>
      </Box>
    </>
  );
}
