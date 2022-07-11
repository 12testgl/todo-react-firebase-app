import React from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import LabelIcon from '@material-ui/icons/Label';
import { db } from '../firebase';

const Todo = ({ arr }) => {
    console.log(arr.item.todo);
    return (
        <List className='todo_list'>

            <ListItem>
                <LabelIcon />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <ListItemText primary={arr.item.todo} />
            </ListItem>
            <DeleteForeverIcon fontSize='large'
                onClick={() => { db.collection('todos').doc(arr.id).delete() }}
            />
        </List>
    )
}

export default Todo