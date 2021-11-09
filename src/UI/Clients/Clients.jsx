import { IconButton } from "@mui/material";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { Delete } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import s from "./Clients.module.css"

export const Clients = () => {

    const dispatch = useDispatch()
    const clients = useSelector(state => state.client.clients)

    console.log(clients);

    return (
        <>
            {
                clients && clients.map(c => <div key={c.id}>{c.name}</div>)
            }
            <Client/>
        </>
    )
}

const Client = () => {
    return (
        <div className={`${s.wrapper} ${s.client}`}>
            <div className={s.imgWrapper}>
                <img src="https://i.ya-webdesign.com/images/default-avatar-png-2.png" alt="man" />
            </div>
            <div className={s.wrapper}>
                <b><span>Фамилия Имя Отчество</span></b>
                <span>телефон</span>
                <span>email</span>
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