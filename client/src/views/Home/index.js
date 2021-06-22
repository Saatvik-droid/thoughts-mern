import { Grow, Grid } from '@material-ui/core'

import AppBar from '../../components/AppBar/appBar'
import Thoughts from '../../components/Thoughts/thoughts'
import useStyles from './styles'

const HomePage = () => {
  const classes = useStyles()

  return (
    <>
    	<AppBar />
		<Grow in>
			<Grid className={classes.container} container >
				<Grid className={classes.container}item xs={11} sm={8} md={6}>
					<Thoughts />
				</Grid>
			</Grid>
		</Grow>  
    </>
  )
}

export default HomePage;
