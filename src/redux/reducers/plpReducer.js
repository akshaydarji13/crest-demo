export const actionTypes = {
  HYDRATE_DATA: "HYDRATE_DATA",
  ADD_TO_CART: "ADD_TO_CART"
}

const initialState = {
  products: [],
  inventory: [],
  cartItems: []
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.HYDRATE_DATA: {
      const { products, inventory } = action.payload;
      return {
        ...state,
        products: products,
        inventory: inventory
      };
    }
    case actionTypes.ADD_TO_CART: {
      const id = action.payload;
      let cart = JSON.parse(JSON.stringify(state.cartItems));
      let productArray = JSON.parse(JSON.stringify(state.products));
      let inventoryArray = JSON.parse(JSON.stringify(state.inventory));
      let cartIndex = cart.findIndex(x => x.id === id)
      if (cartIndex > -1) {
        cart[cartIndex].purchaseQuantity = cart[cartIndex].purchaseQuantity + 1
      } else {
        let productIndex = productArray.findIndex(x => x.id === id)
        if (productIndex > -1) {
          let productData = productArray[productIndex];
          productData.purchaseQuantity = 1;
          cart.push(productData);
        }
      }
    }
    default:
      return state
  }
}

export const actions = {
  hydrateData: (data) => ({
    type: actionTypes.HYDRATE_DATA,
    payload: data
  }),
  addToCart: (id) => ({
    type: actionTypes.ADD_TO_CART,
    payload: id
  })
}