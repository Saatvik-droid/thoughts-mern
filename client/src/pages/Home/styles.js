import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(1)
    },
    item: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    fab: {
        position: 'fixed',
        bottom: theme.spacing(5),
        right: theme.spacing(10)
    }
}))