import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReorderOutlinedIcon from '@material-ui/icons/ReorderOutlined';
import GridOnOutlinedIcon from '@material-ui/icons/GridOnOutlined';
import { useState } from 'react';

import ListView from '../../components/ListView';
import GridView from '../../components/GridView';

const useStyles = makeStyles((theme) => ({
  plContainer: {
    margin: '0 2%  0 2%',
  },
  layoutSelectionBar: {
    display: 'flex',
    backgroundColor: '#F5F5F5',
    height: '40px',
    alignItems: 'center',
    paddingLeft: '1em',
    paddingRight: '1em',
    justifyContent: 'space-between'
  },
  layoutButton: {
    color: 'black',
    marginLeft: '10px',
    cursor: 'pointer',
  },
  layoutButtonSelected: {
    color: 'blue',
    marginLeft: '10px',
    cursor: 'pointer',
  }
}));

const ProductList = () => {
  const classes = useStyles();
  const [selectedLayout, setSelectedLayout] = useState('list');

  return (
    <div className={classes.plContainer}>
      <div className={classes.layoutSelectionBar}>
        Product List
        <div className={classes.layoutButtonContainer}>
          <ReorderOutlinedIcon onClick={() => setSelectedLayout('list')} className={selectedLayout === 'list' ? classes.layoutButtonSelected : classes.layoutButton} />
          <GridOnOutlinedIcon onClick={() => setSelectedLayout('grid')} className={selectedLayout === 'grid' ? classes.layoutButtonSelected : classes.layoutButton} />
        </div>
      </div>
      {selectedLayout === 'list' ? <ListView /> : <GridView />}
    </div>
  );
};

export default ProductList;