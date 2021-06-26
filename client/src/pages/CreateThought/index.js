import { Grid } from '@material-ui/core'

import Form from '../../components/Form/form'
import AppBar from '../../components/AppBar/appBar'
import useStyles from './styles'

const CreateThoughtPage = () => {
    const classes = useStyles()

    return (
        <>
            <Grid className={classes.container} container >
                <Grid item xs={11} sm={8} md={6}>
                    <Form />
                </Grid>
            </Grid>
        </>
    )
}

export default CreateThoughtPage
