import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    container: {
        position: 'fixed',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        right: '5%',
        bottom: '5%',
        zIndex: 1
    },
    paper: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5px 10px 5px 10px',
        backgroundColor: '#a1eddd'
    }
}))