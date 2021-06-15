import { Grid, Paper, Typography } from '@material-ui/core'

import useStyles from './styles'

const Popup = () => {
    const classes = useStyles()
    return (
        <Grid className={classes.container} item>
            <Paper className={classes.paper}>
                <Typography>
                    Submitted
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Popup
