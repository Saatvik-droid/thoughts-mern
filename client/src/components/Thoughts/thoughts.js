import { useSelector } from 'react-redux'
import { Grid, CircularProgress } from '@material-ui/core'

import Thought from './Thought/thought'
import makeStyles from './styles'

const Thoughts = () => {
    const thoughts = useSelector((state) => state.thoughts)
    const classes = makeStyles()

    return (
        thoughts.length > 0 ? (
        <Grid container className={classes.container} spacing={2}>
            {thoughts.map((thought) => (
                <Grid item key={thought._id}>
                    <Thought thought={thought}/>
                </Grid>
            ))}
        </Grid>
        ) : <CircularProgress />
        
    )
}

export default Thoughts
