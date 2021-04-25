import {
  Switch,
  Route,
  Redirect,
  useHistory
} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { useDispatch } from 'react-redux';

import NotFound from './pages/NotFound';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import { actions as plpActions } from './redux/reducers/plpReducer';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  mainContainer: {
    paddingTop: '20px',
  }
}));

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    let data = {
      products: require('./data/product.json'),
      inventory: require('./data/inventory.json')
    }
    dispatch(plpActions.hydrateData(data));
  }, []);

  return (
    <div>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Crest Demo
            </Typography>
            <ShoppingCartOutlinedIcon onClick={() => history.push('/cart')} color="inherit" />
          </Toolbar>
        </AppBar>
      </div>
      <div className={classes.mainContainer}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/product-list" />
          </Route>
          <Route path="/product-list">
            <ProductList />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/404">
            <NotFound />
          </Route>
          <Route path="*">
            <Redirect to="/404" />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
