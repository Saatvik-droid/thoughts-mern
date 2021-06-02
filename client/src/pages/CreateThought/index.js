import { Grid } from '@material-ui/core'

import useStyles from './styles'
import Form from '../../components/Form/form'
import AppBar from '../../components/AppBar/appBar'

const CreateThoughtPage = () => {
    const classes = useStyles()

    return (
        <>
            <AppBar />
            <Grid className={classes.container} container >
                <Grid item xs={11} sm={8} md={6}>
                    <Form />
                </Grid>
            </Grid>
        </>
    )
}

export default CreateThoughtPage
