import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    appBar: {
        backgroundColor: 'rgba(255,238,0, 1)',
        marginBottom: theme.spacing(2)

    },
    toolBar: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#00a0b2'
    },
    buttonContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    textLink: {
        textDecoration: 'inherit'
    }
}))