import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    formItem: {
        marginBottom: 5
    },
    paper: {
        padding: 10
    }
}))