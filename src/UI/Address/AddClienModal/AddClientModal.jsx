import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

export const AddClientModal = ({open, handleClose, handleAddClient}) => {

    const [name, setName] = useState(null)
    const [phone, setPhone] = useState(null)
    const [email, setEmail] = useState(null)

    const handleSubmit = () => handleAddClient(name, phone, email);

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Добавить жильца</DialogTitle>
            <DialogContent>
                <DialogContentText>
                Введите свои данные: ФИО, номер телефона, email
                </DialogContentText>
                <TextField
                autoFocus
                onChange={(e) => setName(e.currentTarget.value)}
                value={name}
                margin="dense"
                id="name"
                label="Имя"
                type="text"
                fullWidth
                variant="standard"
                />
                <TextField
                onChange={(e) => setPhone(e.currentTarget.value)}
                value={phone}
                margin="dense"
                id="phone"
                label="Телефон"
                type="text"
                fullWidth
                variant="standard"
                />
                <TextField
                onChange={(e) => setEmail(e.currentTarget.value)}
                value={email}
                margin="dense"
                id="email"
                label="Email"
                type="email"
                fullWidth
                variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSubmit}>Add Client</Button>
            </DialogActions>
        </Dialog>
    )
}