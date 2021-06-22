import { Grid, Paper, Typography, Slide } from '@material-ui/core'

import useStyles from './styles'

const Popup = ({ actionDone }) => {
    const classes = useStyles()

    return (
        <Slide direction="up" in={actionDone} mountOnEnter unmountOnExit>
            <Grid className={classes.container}>
                <Paper className={classes.paper}>
                    <Typography>Deleting</Typography>
                </Paper>
            </Grid>
        </Slide>
    )
}

export default Popup