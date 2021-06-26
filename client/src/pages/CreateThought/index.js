import { Grid } from '@material-ui/core'

import Form from '../../components/ThoughtsForm/form'
import useStyles from './styles'

const CreateThoughtPage = () => {
    const classes = useStyles()

    return (
        <Grid justify="center" container >
            <Grid item xs={11} sm={8} md={6}>
                <Form />
            </Grid>
        </Grid>
    )
}

export default CreateThoughtPage
