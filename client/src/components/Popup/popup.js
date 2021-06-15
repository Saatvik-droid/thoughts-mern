import { Grid, Paper, Typography, Slide } from '@material-ui/core'

import useStyles from './styles'

const Popup = ({ submited }) => {
    const classes = useStyles()
    return (
        <Slide direction="up" in={submited} mountOnEnter unmountOnExit>
            <Grid className={classes.container}>
                <Paper className={classes.paper}>
                    <Typography>
                        Submitted
                    </Typography>
                </Paper>
            </Grid>
        </Slide>
    )
}

export default Popup
