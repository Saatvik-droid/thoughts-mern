import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center'
    },
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