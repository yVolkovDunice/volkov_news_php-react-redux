import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  // DialogContentText,
  // TextField,
  // DialogActions,
  // Tabs,
  // Tab,
  // Box,
} from '@mui/material';
import { Formik, Field, Form } from 'formik';

import { toggleModal, authRegister, authLogin } from '../../redux/actions';

function Modal() {
  const { modalOpen, modalModeState, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(toggleModal(false));
  };

  console.log('modal', error);

  const handleChange = (values) => {
    if (modalModeState === 'Sing up') {
      dispatch(authRegister(values));
    } else if (modalModeState === 'Login') {
      dispatch(authLogin(values));
    }
  };

  return (
    <Dialog open={modalOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">{modalModeState}</DialogTitle>

      <DialogContent sx={{ width: '500px' }}>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            url_avatar: 'someURL',
          }}
          onSubmit={handleChange}
        >
          <Form>
            <div className="form">

              {modalModeState === 'Sing up' && (<Field id="name" name="name" placeholder="Name" />)}

              <Field
                id="email"
                name="email"
                placeholder="email"
                type="email"
              />

              <Field
                id="password"
                name="password"
                placeholder="password"
                type="password"
              />
              {error}
              <button type="submit">Submit</button>
            </div>
          </Form>
        </Formik>
      </DialogContent>
      <Button onClick={handleClose} color="primary">Cancel</Button>
      {/* <label htmlFor="name">{error}</label> */}
    </Dialog>
  );
}

export default Modal;
