import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import DemoImage from '../images/demo.jpg';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    width: '100%',
    borderTop: "1px solid",
    justifyContent: 'spaceBetween',
    alignItems: 'center'
  },
  imageContainer: {
    display: 'flex',
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    marginTop: '1%',
    marginBottom: '1%',
    width: '40%',
  },
  textContainer: {
    width: '50%',
  },
  buttonContainer: {
    width: '20%'
  }
}));

const ProductListItem = ({ data }) => {
  const classes = useStyles();
  const { inventory } = useSelector(state => state.plp)

  const inStockValue = () => {
    let index = inventory.findIndex(x => x.id === data.id)
    if (index > -1) {
      return inventory[index].quantity;
    } else {
      return 0;
    }
  }

  return (
    <div className={classes.mainContainer}>
      <div className={classes.imageContainer}>
        <img src={DemoImage} className={classes.image}></img>
      </div>
      <div className={classes.textContainer}>
        <p>Name: {data["model-name"]}</p>
        <p>Company: {data.company}</p>
        <p>RAM: {data.RAM}</p>
        <p>Processor: {data.Processor}</p>
        <p>Space: {data.space}</p>
        <p>OS: {data.OS}</p>
        <p>Price: {data.Price}</p>
        <p>Purchase Limit: {data.purchaseLimit}</p>
        <p>In Stock: {inStockValue()} Items</p>
      </div>
      <div className={classes.buttonContainer}>
      </div>
      <div>
        <Button variant="contained" color="primary" disableElevation>Add To Cart</Button>
      </div>
    </div>
  );
}

export default ProductListItem;