import { Link } from 'react-router-dom'
import { AppBar, Typography, Toolbar, Button, Grid, Avatar } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

import useStyles from './styles'

const CustomAppBar = () => {
    const classes = useStyles()

    const user = null

    return (
        <AppBar className={classes.appBar} position="sticky">
            <Toolbar className={classes.toolBar}>
                <Typography className={classes.textLink} component={Link} to='/' variant="h3" color="textPrimary" align="center"> Thoughts </Typography>
                {
                    user ? (
                        <Avatar>A</Avatar>
                    ) : (
                        <Button className={classes.button} variant="contained" color="primary">
                            <Typography variant="button">Log In</Typography>
                        </Button>
                    )
                }
            </Toolbar>
        </AppBar>
    )
}

export default CustomAppBar