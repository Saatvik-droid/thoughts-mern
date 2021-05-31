import { useState } from 'react'
import { useDispatch} from 'react-redux'
import { Grid, TextField, Button, Typography, Paper } from '@material-ui/core'

import { createThought } from '../../actions/thoughts'
import useStyles from './styles'
import AppBar from '../../components/AppBar/appBar'

const CreateThoughtPage = () => {
    const [thoughtData, setThoughtData] = useState({ title: '', body: '' })
    const [titleError, setTitleError] = useState(false)
    const dispatch = useDispatch()
    const classes = useStyles()

    const clear = () => {
        setThoughtData({ title: '', body: '' })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (thoughtData.title != '') {
            dispatch(createThought(thoughtData))
            window.location = 'http://localhost:3000/thoughts'  
            clear()
        } else {
            setTitleError(true)
        }
    }

    const handleChange = (e, data) => {
        switch (data) {
            case 'title':
                setThoughtData({ ...thoughtData, title: e.target.value})
                setTitleError(false)
                break 
            case 'body':
                setThoughtData({ ...thoughtData, body: e.target.value})
                break
            default:
                break
        }
    }
    
    return (
        <>
            <AppBar />
            <Grid className={classes.container} container >
                <Grid item xs={11} sm={8} md={6}>
                    <Paper className={classes.paper}>
                        <Typography variant="h5" gutterBottom> Creating a Thought</Typography>
                        <form className={classes.form} autoComplete="off" onSubmit={handleSubmit}>
                            <TextField className={classes.formItem} error={titleError} variant="outlined" label="Title" placeholder="Beautiful day" fullWidth 
                            value={thoughtData.title} onChange={(e) => handleChange(e, 'title') } />
                            <TextField className={classes.formItem} variant="outlined" label="Thought" placeholder="It is my birthday today" multiline fullWidth rows={4} 
                            value={thoughtData.body} onChange={(e) => handleChange(e, 'body')} />
                            <Button className={classes.formItem} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                            <Button className={classes.formItem} variant="contained" color="secondary" size="small" onClick={() => clear()}>Clear</Button>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}

export default CreateThoughtPage
