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
  Tabs,
  Tab,
  Box,
} from '@mui/material';

import { toggleModal, modalMode } from '../../redux/actions';

function Modal() {
  const { modalOpen, modalModeState } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(toggleModal(false));
  };

  const handleChange = (event, newValue) => {
    dispatch(modalMode(newValue));
  };

  return (
    <Dialog open={modalOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">{modalModeState}</DialogTitle>

      <Box sx={{ width: '100%' }}>
        <Tabs
          value={modalModeState}
          onChange={handleChange}
          aria-label="wrapped label tabs example"
        >
          <Tab
            value="Login"
            label="Login"
            wrapped
          />
          <Tab value="Sing up" label="Sing up" />
        </Tabs>
      </Box>

      <DialogContent sx={{ width: '500px' }}>
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
          margin="dense"
          id="password"
          label="Password"
          type="password"
          fullWidth
        />
        {modalModeState === 'Sing up' && (
        <TextField
          margin="dense"
          id="confirmPassword"
          label="Confirm password"
          type="password"
          fullWidth
        />
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">Cancel</Button>
        <Button onClick={handleClose} color="primary">{modalModeState}</Button>
      </DialogActions>
    </Dialog>
  );
}

export default Modal;
