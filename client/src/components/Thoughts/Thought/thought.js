import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Card, CardContent, Typography, CardActions, Button, Grid } from '@material-ui/core'

import { deleteThought } from '../../../redux/actions/thoughts'
import useStyles from './styles'

const Thought = ({ thought }) => {
    const [show, setShow] = useState(true)
    const dispatch = useDispatch()
    const classes = useStyles()

    const delThought = () => {
        dispatch(deleteThought(thought._id))
        setShow(false)
    }

    return (
        show ? (
            <Grid item key={thought._id}>
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
                        <Button size="small" onClick={() => delThought()}>DELETE</Button>
                    </CardActions>
                </Card>
            </Grid>
        ) : null 
    )
}

export default Thought
