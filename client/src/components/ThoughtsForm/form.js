import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Paper, Typography, Grid } from '@material-ui/core'

import { createThought, updateThought } from '../../redux/actions/thoughts'
import CustomtextField from '../CustomTextField/customTextField'
import useStyles from './styles'

const ThoughtsForm = ({ type, id }) => {
    const thought = useSelector(state => state.thoughtsState.thoughts.filter(thought => thought._id === id))

    const [thoughtData, setThoughtData] = useState(thought[0] ? thought[0] : { title: '', body: '' })
    const [titleError, setTitleError] = useState(false)

    const dispatch = useDispatch()
    const classes = useStyles()

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (thoughtData.title !== '') {
            if (titleError) setTitleError(false)   
            if (type === 'Editing') {
                dispatch(updateThought(id, thoughtData))
            } else {
                dispatch(createThought(thoughtData))
            }   
        } else setTitleError(true)
    }

    const handleChange = (e) => {
        setThoughtData({ ...thoughtData, [e.target.name]: e.target.value })
    }

    return (
        <Paper className={classes.paper}>
            <Typography variant="h5" gutterBottom> { type } a Thought</Typography>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <Grid className={classes.form} container spacing={2}>
                    <CustomtextField name="title" label="Title" placeholder="Beautiful day" handleChange={handleChange} autoFocus />
                    <CustomtextField name="body" label="Thought" placeholder="It is my birthday today" handleChange={handleChange} multiline rows={4} />
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