import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ImageIcon from "@mui/icons-material/Image";

export default function ProductList({ products }) {
  if (!Array.isArray(products)) {
    return <div>No products available</div>;
  }
  return (
    <Box
      sx={{ width: 300, height: 0 }}
      style={{
        margin: "0 auto",
      }}
    >
      <ImageList variant="masonry" cols={2} gap={8}>
        {products.map((item) => (
          <ImageListItem
            key={item.id}
            style={{
              display: "flex",
              flexDirection: "column",
              border: "1px solid black",
            }}
          >
            {/* <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            /> */}
            <ImageIcon sx={{ fontSize: 150 }} style={{ alignSelf: "center" }} />
            <div style={{ padding: "1rem" }}>
              <ImageListItemBar position="below" title={item.title} />
              <p>$ {item.unitPrice}</p>
              <p>{item.soldAmount}</p>
            </div>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

// function ProductList({ products }) {
//   if (!Array.isArray(products)) {
//     return <div>No products available</div>;
//   }

//   return (
//     <>
//       <h2>Product ProductList</h2>
//       <ul className="grid-layout">
//         {products.map((product) => (
//           // <Product key={product.id} product={product}></Product>
//           <ActionAreaCard key={product.id} />
//         ))}
//       </ul>
//     </>
//   );
// }
