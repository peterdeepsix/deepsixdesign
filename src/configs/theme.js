import { red } from "@material-ui/core/colors"
import { createMuiTheme } from "@material-ui/core/styles"

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FF1654",
    },
    secondary: {
      main: "#FF1654",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
  },
})

export default theme
