import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    form: {
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    formItem: {
        marginBottom: theme.spacing(1),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    paper: {
        padding: theme.spacing(2)
    }
}))