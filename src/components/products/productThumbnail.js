import React from 'react';
import Link from 'src/components/Link';
import Img from 'gatsby-image';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 480,
  },
});

const ProductThumbnail = ({ product }) => {
  const classes = useStyles();
  return (
    <Card variant="outlined" className={classes.card}>
      <CardActionArea component={Link} to={`/buy/${product.slug}`}>
        {console.log(product)}
        <CardMedia
          component="img"
          alt="Product"
          height="140"
          image={product.skus[0].image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
          >
            ${product.skus[0].price / 100}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductThumbnail;
