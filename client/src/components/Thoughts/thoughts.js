import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, CircularProgress } from '@material-ui/core'

import Thought from './Thought/thought'
import { getThoughts } from '../../redux/actions/thoughts'
import makeStyles from './styles'

const Thoughts = () => {
    const loading = useSelector((state) => state.thoughtsState.loading)
    const thoughts = useSelector((state) => state.thoughtsState.thoughts)

    const dispatch = useDispatch()
    const classes = makeStyles()

    useEffect(() => {
        dispatch(getThoughts())
    }, [])

    return (
        <>
            {
                !loading ? (
                    <Grid className={classes.container} container spacing={2}>
                        { 
                            thoughts.map((thought) => (
                                <Thought key={thought._id} thought={thought} />
                            ))
                        }
                    </Grid> 
                ) : <CircularProgress />
            }
        </>
    )
}

export default Thoughts