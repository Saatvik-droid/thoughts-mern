import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AppBar, Typography, Toolbar, Button, Grid } from '@material-ui/core'

import UserAvatar from '../UserAvatar/userAvatar'
import useStyles from './styles'

const CustomAppBar = () => {
    const user = useSelector((state) => state.authState.authData)

    const classes = useStyles()

    return (
        <AppBar className={classes.appBar} position="sticky">
            <Toolbar>
                <Grid container justify="space-between" direction="row">
                    <Grid item>
                        <Typography className={classes.textLink} component={Link} to='/' variant="h3" color="textPrimary" align="center"> Thoughts </Typography>
                    </Grid>
                    {
                        user ? (
                            <UserAvatar user={user} showDropdown/>
                        ) : (
                            <Grid className={classes.buttonContainer} item>
                                <Button className={classes.button} component={Link} to="/auth" variant="contained" color="primary" size="medium">
                                    <Typography variant="button">Sign In</Typography>
                                </Button>
                            </Grid>    
                        )
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default CustomAppBar