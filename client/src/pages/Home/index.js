import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Grow, Grid } from '@material-ui/core'

import AppBar from '../../components/AppBar/appBar'
import Thoughts from '../../components/Thoughts/thoughts'
import { getThoughts } from '../../redux/actions/thoughts'
import useStyles from './styles'

const HomePage = () => {
  const dispatch = useDispatch()
  const classes = useStyles()

  useEffect(() => {
    dispatch(getThoughts())
  }, [])

  return (
    <>
      <AppBar />
      <Grow in>
        <Grid className={classes.container} container>
          <Grid item xs={11} sm={8} md={6}>
            <Thoughts />
          </Grid>
        </Grid>
      </Grow>  
    </>
  )
}

export default HomePage;
