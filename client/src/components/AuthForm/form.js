import { useState } from 'react'
import * as EmailValidator from 'email-validator'
import { Grid, Paper, Typography, Button } from '@material-ui/core'
import LockIcon from '@material-ui/icons/Lock'

import InputField from '../InputField/inputField'
import useStyles from './styles'

const AuthForm = () => {
    const [authData, setAuthData] = useState({firstName: '', lastName: '', email: '', password: '', confirmPassword: ''})
    const [isLogIn, setIsLogIn] = useState(true) 
    const [showPassword, setShowPassword] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const classes = useStyles()

    const handleShowPassword = () => setShowPassword(!showPassword)

    const handleChnage = (e) => {
        setAuthData({ ...authData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if (!EmailValidator.validate(authData.email)) setEmailError(true)
        else if (emailError) setEmailError(false) 
        if (authData.password !== authData.confirmPassword) setPasswordError(true)
        else if (passwordError) setPasswordError(false)

        console.log('submit')
    }

    return (
        <Paper className={classes.paper}>
            <Typography variant="h5" gutterBottom>
                { isLogIn ? 'Log In' : 'Sign Up' }
                <LockIcon className={classes.lockIcon} />
            </Typography>
            <form className={classes.form} autoComplete="off" onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    {
                        !isLogIn && (
                            <>
                                <InputField name="firstName" label="First Name" placeholder="John" handleChange={handleChnage} autoFocus half/>
                                <InputField name="lastName" label="First Name" placeholder="Smith" handleChange={handleChnage} half/>
                            </>
                        )
                    }
                    <InputField name='email' label="Email" placeholder="example@dummy.com" handleChange={handleChnage} error={emailError}/>
                    <InputField name="password" label="Password" handleChange={handleChnage} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} error={passwordError} half/>
                    <InputField name="confirmPassword" label="Confirm Password" handleChange={handleChnage} error={passwordError} half/>
                    <Button className={classes.formItem} variant="contained" color="primary" size="large" type="submit" fullWidth> Submit </Button>
                </Grid>
            </form>
        </Paper>
    )
}

export default AuthForm