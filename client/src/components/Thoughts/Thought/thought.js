import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Card, CardContent, Typography, CardActions, Button, Grid } from '@material-ui/core'

import { deleteThought } from '../../../redux/actions/thoughts'
import Popup from '../../Popup/popup'
import useStyles from './styles'

const Thought = ({ thought }) => {
    const [showThought, setShowThought] = useState(true)
    const [showPopup, setShowPopup] = useState(false)
    const dispatch = useDispatch()
    const classes = useStyles()

    const delThought = () => {
        dispatch(deleteThought(thought._id))
        setShowThought(false)
        setShowPopup(true)
        setTimeout(() => {
            setShowPopup(false)
        }, 3000);
    }

    return (
        <>
            {
                showThought ? (
                    <Grid item>
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
            }
            <Popup actionDone={showPopup} message="Deleted" />
        </>
    )
}

export default Thought