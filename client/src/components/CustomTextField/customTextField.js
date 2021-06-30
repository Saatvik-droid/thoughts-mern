import { Grid, TextField, InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const CustomTextField = ({
  name,
  label,
  handleChange,
  placeholder,
  type,
  autoFocus,
  half,
  handleShowPassword,
  error,
  multiline,
  rows,
  defaultValue,
  notRequired,
}) => {
  return (
    <Grid item style={{ width: half ? "50%" : "100%" }}>
      <TextField
        name={name}
        variant="outlined"
        label={label}
        placeholder={placeholder}
        defaultValue={defaultValue}
        required={!notRequired}
        fullWidth
        multiline={multiline}
        rows={rows}
        error={error}
        autoFocus={autoFocus}
        onChange={handleChange}
        type={type}
        InputProps={
          name === "password"
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword}>
                      {type === "password" ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : null
        }
      />
    </Grid>
  );
};

export default CustomTextField;
