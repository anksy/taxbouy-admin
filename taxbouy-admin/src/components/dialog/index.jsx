import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Slide } from '@material-ui/core';
import { Close } from "@material-ui/icons";
import * as sc from "./styles";
import { displayModal } from "../../store/common/application.slice";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Modal({ open, modalProps }) {
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(displayModal({
            open: false,
            modalProps: {}
        }));
    }

    if (!open) {
        return false;
    }

    return (
        <sc.DialogWrapper>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                fullWidth
                fullScreen={false}
                maxWidth="sm"
                onClose={closeModal}
                aria-labelledby="dialog-title"
                aria-describedby="dialog-description"
            >
                <sc.DialogCloseButton>
                    <IconButton onClick={closeModal}>
                        <Close />
                    </IconButton>
                </sc.DialogCloseButton>
                <DialogTitle id="dialog-title">{modalProps?.title}</DialogTitle>
                {modalProps?.component && <DialogContent>
                    <DialogContentText id="dialog-description">
                        <modalProps.component {...modalProps.componentProps} />
                    </DialogContentText>
                </DialogContent>}
                {(modalProps?.okText && modalProps?.cancelText) && <DialogActions>
                    {modalProps?.ok && <Button onClick={modalProps.ok} color="primary" variant="contained">
                        {modalProps?.okText || "Confirm"}
                    </Button>}
                    {modalProps?.cancelText && <Button onClick={closeModal} color="primary" variant="outlined">
                        {modalProps?.cancelText || "Cancel"}
                    </Button>}
                </DialogActions>}
            </Dialog>
        </sc.DialogWrapper>
    );
}

Modal.defaultProps = {
    open: false,
    modalProps: {
        title: "Do you really want to delete this store?",
        ok: () => { },
        okText: "Confirm",
        cancel: () => { },
        cancelText: "Cancel",
        component: () => <></>,
        componentProps: {}
    }
}

Modal.propTypes = {
    open: PropTypes.bool,
    modalProps: PropTypes.shape({
        title: PropTypes.string,
        component: PropTypes.element.isRequired,
        componentProps: PropTypes.object,
        ok: PropTypes.func,
        okText: PropTypes.string,
        cancel: PropTypes.func,
        cancelText: PropTypes.string,
    })
}