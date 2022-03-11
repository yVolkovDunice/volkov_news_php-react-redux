import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Formik, Field, Form } from 'formik';

import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';

import { toggleModal, signUpAction, loginAction } from '../../redux/actions';

import './styles.css';

function Modal() {
  const { modalIsOpen, modalMode, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(toggleModal(false));
  };

  const handleChange = (values) => {
    if (modalMode === 'Sing up') {
      dispatch(signUpAction(values));
    } else if (modalMode === 'Login') {
      dispatch(loginAction(values));
    }
  };

  return (
    <Dialog open={modalIsOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">{modalMode}</DialogTitle>
      <DialogContent sx={{ width: '75%' }}>
        {error}
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            url_avatar: 'someURL',
          }}
          onSubmit={handleChange}
        >
          {({
            values,
          }) => (
            <Form>
              <div className="form">
                {modalMode === 'Sing up' && (
                <Field
                  id="name"
                  name="name"
                  placeholder="Name"
                />
                )}
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
                <Button
                  type="submit"
                  disabled={(modalMode === 'Sing up' ? !values.name : false || !values.email) || !values.password}
                >
                  {modalMode}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </DialogContent>
      <Button onClick={handleClose} color="primary">Cancel</Button>
    </Dialog>
  );
}

export default Modal;
