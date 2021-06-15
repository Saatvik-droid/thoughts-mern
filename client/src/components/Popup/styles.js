import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
    container: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        right: '5%',
        bottom: 30,
    },
    paper: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    }
}))