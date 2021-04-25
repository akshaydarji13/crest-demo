import React from 'react';
import { useSelector } from 'react-redux';

import ProductListItem from './ProductListItem';

const ListView = () => {
  const { products } = useSelector(state => state.plp);

  return (
    <div>
      {products.map((data, index) => {
        return (
          <ProductListItem key={index} data={data} />
        );
      })}
    </div>
  );
}

export default ListView;