import { ThemeOptions } from "@material-ui/core";

export const themeOptions: ThemeOptions = {
  palette: {
    type: "dark",
    primary: {
      main: "#BA666E"
    },
    secondary: {
      main: "#ff4858"
    }
  },
  props: {
    MuiButtonBase: {
      disableRipple: true
    },
    MuiButton: {
      disableElevation: true,
      size: "small"
    },
    MuiFilledInput: {
      margin: "dense"
    },
    MuiFormControl: {
      margin: "dense"
    },
    MuiFormHelperText: {
      margin: "dense"
    },
    MuiIconButton: {
      size: "small"
    },
    MuiInputBase: {
      margin: "dense"
    },
    MuiInputLabel: {
      margin: "dense"
    },
    MuiListItem: {
      dense: true
    },
    MuiOutlinedInput: {
      margin: "dense"
    },
    MuiFab: {
      size: "small"
    },
    MuiTable: {
      size: "small"
    },
    MuiTextField: {
      margin: "dense"
    },
    MuiToolbar: {
      variant: "dense"
    }
  }
};
