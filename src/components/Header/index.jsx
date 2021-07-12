import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { FiLogIn, FiShoppingCart } from "react-icons/fi";

import * as S from "./styles";
import { Badge, createMuiTheme, ThemeProvider } from "@material-ui/core";

import { useAuth } from "../../providers/Auth";
import { useCart } from "../../providers/Cart";

const innerTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#605F5F",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    justifyContent: "space-between",
  },
  toolbarTitle: {
    flexGrow: 1,
    fontFamily: "Nunito, sans-serif",
    fontWeight: 600,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  cartIcon: {
    padding: "0 10px",
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  const { token } = useAuth();
  const { cart } = useCart();

  return (
    <ThemeProvider theme={innerTheme}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <S.NavLink to="/">
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              className={classes.toolbarTitle}
            >
              Menu
            </Typography>
          </S.NavLink>
          <nav>
            <S.NavLink to="/cart">
              <Badge badgeContent={cart.length} color="primary">
                <FiShoppingCart
                  size={25}
                  color="black"
                  className={classes.cartIcon}
                />
              </Badge>
              <S.StyledSpan> Pedidos </S.StyledSpan>
            </S.NavLink>
          </nav>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
