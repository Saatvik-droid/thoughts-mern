import { Grow, Grid, Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

import Thoughts from '../../components/Thoughts/thoughts'
import useStyles from './styles'

const HomePage = () => {
  const classes = useStyles()

  return (
        <>
			<Grow in>
				<Grid className={classes.container} container>
					<Grid className={classes.item} item xs={12} sm={9} md={6}>
						<Thoughts />
					</Grid>
				</Grid>
			</Grow>
			<Fab className={classes.fab} size="large" color="primary" aria-label="add" href="/thoughts/create">
				<AddIcon />
			</Fab>
		</>  
	)
}

export default HomePage;
