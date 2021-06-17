import { Grid, Paper, Typography, Slide } from '@material-ui/core'

import useStyles from './styles'

const Popup = ({ actionDone, message }) => {
    const classes = useStyles()

    return (
        <Slide direction="up" in={actionDone} mountOnEnter unmountOnExit>
            <Grid className={classes.container}>
                <Paper className={classes.paper}>
                    <Typography>{ message }</Typography>
                </Paper>
            </Grid>
        </Slide>
    )
}

Popup.defaultProps = {
    actionDone: false,
    message: 'Submitted'
}

export default Popup