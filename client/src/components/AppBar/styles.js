import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    appBar: {
        backgroundColor: 'rgba(255,238,0, 1)',
        margin: '0 0 50px 0'

    },
    toolBar: {
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0 20px 0 20px'
    },
    button: {
        backgroundColor: '#00a0b2'
    },
    textLink: {
        color: 'inherit',
        textDecoration: 'inherit'
    }
}))