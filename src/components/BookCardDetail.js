import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function BookCardDetail(props) {
  return (
    <Card
      onClick={props.onClick}
      sx={{ maxWidth: 345 }}
      style={{ cursor: "pointer" }}
    >
      <CardMedia
        component="img"
        height="140"
        image={props.book.imageSrc}
        alt="green iguana"
        style={{ minHeight: "300px", marginTop: "20px" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.book.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.book.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
