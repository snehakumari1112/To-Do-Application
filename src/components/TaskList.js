import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask, editTask } from '../features/tasksSlice';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(null);
  const [editText, setEditText] = useState('');

  const handleEdit = (task) => {
    setEditing(task.id);
    setEditText(task.text);
  };

  const handleSave = (id) => {
    dispatch(editTask({ id, newText: editText }));
    setEditing(null);
    setEditText('');
  };

  return (
    <List>
      {tasks.map((task) => (
        <ListItem key={task.id} dense button>
          <Checkbox
            checked={task.completed}
            onChange={() => dispatch(toggleTask(task.id))}
          />
          {editing === task.id ? (
            <TextField
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onBlur={() => handleSave(task.id)}
              fullWidth
            />
          ) : (
            <ListItemText primary={task.text} style={{ textDecoration: task.completed ? 'line-through' : 'none' }} />
          )}
          <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(task)}>
            <EditIcon />
          </IconButton>
          <IconButton edge="end" aria-label="delete" onClick={() => dispatch(deleteTask(task.id))}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

export default TaskList;
