import {IconButton} from "@mui/material";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import {Delete} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import s from "./Clients.module.css"
import { clientAPI } from "../../DAL/API";

export const Clients = () => {

    const dispatch = useDispatch()
    const clients = useSelector(state => state.client.clients)

    return (
        <div className={s.clientsWrapper}>
            {
                clients && clients.map(c => <Client key={c.id} clientId={c.id} bindId={c.bindId} name={c.name} phone={c.phone} email={c.email}/>)
            }
        </div>
    )
}

const Client = ({
                    name,
                    phone,
                    email,
                    clientId,
                    bindId,
                }) => {

    const handleDeleteClient = () => {
        clientAPI.deleteClient(clientId, bindId)
    }
    const handleUpdateClient = () => {
        clientAPI.updateClient(clientId, bindId)
    }

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
                <IconButton onClick={handleDeleteClient} className={s.btn}>
                    <Delete/>
                </IconButton>
                <IconButton onClick={handleUpdateClient} className={s.btn}>
                    <BorderColorIcon/>
                </IconButton>
            </div>
        </div>
    )
}