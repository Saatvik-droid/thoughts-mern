import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core'

import useStyles from './styles'

const Thought = ({ thought }) => {
    const classes = useStyles()

    return (
        <Card variant="outlined">
            <CardContent>
                <Typography variant="h4">
                    {thought.title}
                </Typography>
                <Typography className={classes.time} color="textSecondary" gutterBottom>
                    {thought.time}
                </Typography>
                <Typography className={classes.body} variant="body2" component="p">
                    {thought.body}
                </Typography>
            </CardContent>
            <CardActions className={classes.actionsContainer}>
                <Button size="small" href={`thoughts/edit/${thought._id}`}>EDIT</Button>
                <Button size="small">DELETE</Button>
            </CardActions>
        </Card>
    )
}

export default Thought
