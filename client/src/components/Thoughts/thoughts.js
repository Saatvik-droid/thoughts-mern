import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, CircularProgress } from '@material-ui/core'

import { getThoughts } from '../../redux/actions/thoughts'
import Thought from './Thought/thought'
import makeStyles from './styles'

const Thoughts = () => {
    const thoughts = useSelector((state) => state.thoughtsState.thoughts)

    const dispatch = useDispatch()
    const classes = makeStyles()

    useEffect(() => {
        dispatch(getThoughts())
    }, [])

    return (
        thoughts.length > 0 ? (
            <Grid className={classes.container} container spacing={2}>
                { 
                    thoughts.map((thought) => (
                        <Thought key={thought._id} thought={thought} />
                    ))
                }
            </Grid> 
        ) : <CircularProgress />
    )
}

export default Thoughts