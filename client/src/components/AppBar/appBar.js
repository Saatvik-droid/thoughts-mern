import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AppBar, Typography, Toolbar, Button, Avatar } from '@material-ui/core'

import useStyles from './styles'

const CustomAppBar = () => {
    const user = useSelector((state) => state.authState.authData)

    const classes = useStyles()

    return (
        <AppBar className={classes.appBar} position="sticky">
            <Toolbar className={classes.toolBar}>
                <Typography className={classes.textLink} component={Link} to='/' variant="h3" color="textPrimary" align="center"> Thoughts </Typography>
                {
                    user ? (
                        <Avatar>{user.profile.givenName.charAt(0)}</Avatar>
                    ) : (
                        <Button className={classes.button} component={Link} to="/auth" variant="contained" color="primary">
                            <Typography variant="button">Sign In</Typography>
                        </Button>
                    )
                }
            </Toolbar>
        </AppBar>
    )
}

export default CustomAppBar