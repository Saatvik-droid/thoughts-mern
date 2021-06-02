import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { TextField, Button, Paper, Typography } from '@material-ui/core'

import { createThought, getThoughts } from '../../redux/actions/thoughts'
import useStyles from './styles'

const Form = ({ type, id}) => {
    const thought = useSelector(state => state.thoughts.filter(thought => thought._id === id))
    const [thoughtData, setThoughtData] = useState(thought[0] ? thought[0] : { title: '', body: '' })
    const [titleError, setTitleError] = useState(false)
    const dispatch = useDispatch()
    const classes = useStyles()

    const clear = () => {
        setThoughtData({ title: '', body: '' })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (thoughtData.title !== '') {
            dispatch(createThought(thoughtData))
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
        <Paper className={classes.paper}>
            <Typography variant="h5" gutterBottom> { type } a Thought</Typography>
            <form className={classes.form} autoComplete="off" onSubmit={handleSubmit}>
                <TextField className={classes.formItem} error={titleError} variant="outlined" label="Title" placeholder="Beautiful day" fullWidth value={thoughtData.title} onChange={(e) => handleChange(e, 'title') } />
                <TextField className={classes.formItem} variant="outlined" label="Thought" placeholder="It is my birthday today" multiline fullWidth rows={4} value={thoughtData.body} onChange={(e) => handleChange(e, 'body')} />
                <Button className={classes.formItem} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button className={classes.formItem} variant="contained" color="secondary" size="small" onClick={() => clear()}>Clear</Button>
            </form>
        </Paper>
        
    )
}

Form.propTypes = {
    type: PropTypes.string,
    id: PropTypes.string
}

Form.defaultProps = {
    type: 'Creating',
    id: ''
}

export default Form


