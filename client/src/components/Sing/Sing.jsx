import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';

import { toggleModal, modalMode } from '../../redux/actions';

function Sing() {
  const dispatch = useDispatch();
  const handleClickOpen = ({ target: { value } }) => {
    dispatch(modalMode(value));
    dispatch(toggleModal(true));
  };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <Stack spacing={2} direction="row" sx={{ m: 1, minWidth: 80 }}>
      <Button variant="outlined" value="Login" onClick={handleClickOpen}>Login</Button>
      <Button variant="contained" value="Sing up" onClick={handleClickOpen}>Sing up</Button>
      <Button variant="outlined">Logout</Button>
    </Stack>
  );
}

export default Sing;
