import { useParams } from 'react-router-dom'
import { Grid } from '@material-ui/core'

import AppBar from '../../components/AppBar/appBar'
import Form from '../../components/Form/form'
import useStyles from './styles'

const UpdateThoughtPage = () => {
    const { id } = useParams()
    const classes = useStyles()
    
    return (
        <>
            <Grid className={classes.container} container >
                <Grid item xs={11} sm={8} md={6}>
                    <Form type="Editing" id={id} />
                </Grid>
            </Grid>
        </>
    )
}

export default UpdateThoughtPage
