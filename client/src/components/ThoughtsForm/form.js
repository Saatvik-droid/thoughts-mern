import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Paper, Typography, Grid } from '@material-ui/core'

import { createThought, updateThought } from '../../redux/actions/thoughts'
import CustomtextField from '../CustomTextField/customTextField'
import useStyles from './styles'

const ThoughtsForm = ({ type, id }) => {
    const thought = useSelector(state => state.thoughtsState.thoughts.filter(thought => thought._id === id))
    const user = useSelector((state) => state.authState.authData)

    const [thoughtData, setThoughtData] = useState(thought[0] ? thought[0] : { title: '', body: ''})
    const [titleError, setTitleError] = useState(false)

    const dispatch = useDispatch()
    const classes = useStyles()

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (thoughtData.title === '') setTitleError(true)
        else if (titleError) setTitleError(false)
        if (!titleError) {
            if (type === 'Editing') {
                dispatch(updateThought(id, thoughtData))
            } else {
                dispatch(createThought({ ...thoughtData, author: { _id: user?.profile.googleId, name: user?.profile.givenName }}))
            }   
        }
    }

    const handleChange = (e) => setThoughtData({ ...thoughtData, [e.target.name]: e.target.value })

    return (
        <Paper className={classes.paper}>
            <Typography variant="h5" gutterBottom> { type } a Thought</Typography>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <CustomtextField name="title" label="Title" placeholder="Beautiful day" defaultValue={thoughtData.title} handleChange={handleChange} autoFocus />
                    <CustomtextField name="body" label="Thought" placeholder="It is my birthday today" defaultValue={thoughtData.body} handleChange={handleChange} multiline rows={4} notRequired />
                    <Button className={classes.formItem} variant="contained" color="primary" size="large" type="submit" fullWidth> Submit </Button>
                </Grid>
            </form>
        </Paper>
    )
}

ThoughtsForm.defaultProps = {
    type: 'Creating',
    id: ''
}

export default ThoughtsForm