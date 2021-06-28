import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    column: {
        flexDirection: 'column'
    },
    formContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    formItem: {
        marginBottom: theme.spacing(1),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
    },
    paper: {
        padding: theme.spacing(2)
    },
    lockIcon: {
        verticalAlign: 'middle'
    }
}))