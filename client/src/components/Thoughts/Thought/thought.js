import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { DateTime } from 'luxon'
import { Card, CardContent, Typography, CardActions, Grid, Slide, IconButton } from '@material-ui/core'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import EditIcon from '@material-ui/icons/Edit'

import { deleteThought } from '../../../redux/actions/thoughts'
import Popup from '../../Popup/popup'
import useStyles from './styles'

const Thought = ({ thought }) => {
    const relativeTime = DateTime.fromISO(thought.createdAt).toRelative()
    const thoughtTime = relativeTime === '0 seconds ago' ? 'now' : relativeTime
    const user = !null

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
            <Slide direction="up" in={showThought} mountOnEnter unmountOnExit>
                <Grid item>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant="h4"> {thought.title} </Typography>
                            <Typography className={classes.time} color="textSecondary" gutterBottom> {thoughtTime} </Typography>
                            { thought.body && <Typography className={classes.body} variant="body1" component="p"> {thought.body} </Typography> }
                        </CardContent>
                        {
                            user && (
                                <CardActions className={classes.actionsContainer}>
                                    <IconButton color="primary" href={`thoughts/edit/${thought._id}`}><EditIcon /></IconButton>
                                    <IconButton color="primary" onClick={delThought}><DeleteForeverIcon /></IconButton>
                                </CardActions>
                            )
                        }
                    </Card>
                </Grid>
            </Slide>
            <Popup actionDone={showPopup} message="Deleted" />
        </>
    )
}

export default Thought