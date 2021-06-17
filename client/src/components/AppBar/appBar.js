import { Link } from 'react-router-dom'
import { AppBar, Typography, Toolbar, Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

import useStyles from './styles'

const AppBar = () => {
    const classes = useStyles()

    return (
        <AppBar className={classes.appBar} position="static">
            <Toolbar className={classes.toolBar}>
                <Typography variant="h3" color="textPrimary" align="center">
                    <Link className={classes.textLink} to="/" >
                        Thoughts
                    </Link>
                </Typography>
                <Button className={classes.button} variant="contained" color="primary" startIcon={<AddIcon />} href='/thoughts/create'>
                    <Typography variant="button">Add</Typography>
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default AppBar
