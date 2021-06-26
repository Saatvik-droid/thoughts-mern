import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    formItem: {
        marginBottom: theme.spacing(1)
    },
    paper: {
        padding: theme.spacing(2)
    },
    lockIcon: {
        verticalAlign: 'middle'
    }
}))