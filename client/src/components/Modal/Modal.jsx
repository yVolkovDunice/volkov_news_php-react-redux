import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
} from '@mui/material';

import { toggleModal } from '../../redux/actions';

function Modal() {
  const { modalOpen } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(toggleModal(false));
  };

  return (
    <Dialog open={modalOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Log in</DialogTitle>
      <DialogContent>
        <DialogContentText>Log in</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="pass"
          label="Password"
          type="password"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">Cancel</Button>
        <Button onClick={handleClose} color="primary">log in</Button>
      </DialogActions>
    </Dialog>
  );
}

export default Modal;
