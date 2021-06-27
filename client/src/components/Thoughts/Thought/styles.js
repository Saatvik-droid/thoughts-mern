import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
    time: {
        fontSize: 12
    },
    body: {
        wordBreak: 'break-all'
    },
    actionsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
}))