import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import Box from "@mui/material/Box";

export default function Product({ product }) {
  // Truncate the description to 50 characters with an ellipsis
  const textWrap = 35;
  const truncatedDescription =
    product.description.length > textWrap
      ? `${product.description.slice(0, textWrap)}...`
      : product.description;

  const formatUnitPrice = product.unitPrice.toLocaleString();

  return (
    <Card sx={{ maxWidth: 140 }}>
      <CardMedia
        sx={{ width: 140, height: 140 }}
        image="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
        title="green iguana"
      />
      <CardContent
        sx={{
          padding: "8px !important",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "0.5rem",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          {truncatedDescription}
        </Typography>
        <Typography variant="body1">${formatUnitPrice}</Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", gap: "0.25rem", alignItems: "center" }}>
            <StarIcon fontSize="small" sx={{ color: "#F4B266" }} />
            <Typography variant="caption" sx={{ lineHeight: "normal" }}>
              {product.averageRating}
            </Typography>
          </Box>
          <Typography variant="caption" sx={{ lineHeight: "2" }}>
            {product.soldAmount} solds
          </Typography>
        </Box>
        <Typography variant="subtitle2">Seller</Typography>
      </CardContent>
    </Card>
  );
}

{
  /* <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography> */
}
