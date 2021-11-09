import {IconButton} from "@mui/material";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import {Delete} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import s from "./Clients.module.css"

export const Clients = () => {

    const dispatch = useDispatch()
    const clients = useSelector(state => state.client.clients)

    return (
        <div className={s.clientsWrapper}>
            {
                clients && clients.map(c => <Client key={c.id} name={c.name} phone={c.phone} email={c.email}/>)
            }
        </div>
    )
}

const Client = ({
                    name,
                    phone,
                    email
                }) => {
    return (
        <div className={`${s.wrapper} ${s.client}`}>
            <div className={s.imgWrapper}>
                <img src="https://i.ya-webdesign.com/images/default-avatar-png-2.png" alt="man"/>
            </div>
            <div className={`${s.wrapper} ${s.clientData}`}>
                <b><span>{name}</span></b>
                <span>{phone}</span>
                <span>{email}</span>
            </div>
            <div className={s.btnWrapper}>
                <IconButton className={s.btn}>
                    <Delete/>
                </IconButton>
                <IconButton className={s.btn}>
                    <BorderColorIcon/>
                </IconButton>
            </div>
        </div>
    )
}