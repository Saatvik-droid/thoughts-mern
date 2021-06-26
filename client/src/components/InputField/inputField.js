import { Grid, TextField, InputAdornment, IconButton } from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

const InputField = ({ name, label, handleChange, placeholder, type, autoFocus, half, handleShowPassword, error }) => {
    return (
        <Grid item xs={12} md={ half ? 6 : 12 }>
            <TextField 
                name={name}
                variant="outlined"
                label={label}
                placeholder={placeholder}
                required
                fullWidth
                error={error}
                autoFocus={autoFocus}
                onChange={handleChange}
                type={type}
                InputProps={ name === 'password' ? {
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={handleShowPassword}>
                            {type === 'password' ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    ),
                } : null }
            />
        </Grid>
    )
}

export default InputField
