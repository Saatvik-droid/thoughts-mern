import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Grid, CircularProgress } from '@material-ui/core'

import Thought from './Thought/thought'
import makeStyles from './styles'

const Thoughts = () => {
    const thoughts = useSelector((state) => state.thoughts)
    const classes = makeStyles()

    return (
        <>
            {
                thoughts.length > 0 ? (
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