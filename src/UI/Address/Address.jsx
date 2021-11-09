import {FormControl, IconButton, InputLabel, MenuItem, Select} from "@mui/material";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getStreets, getHouses, getFlats} from "../../BLL/address-reducer";
import {getClients} from "../../BLL/client-reducer";
import s from "./Address.module.css"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export const Address = () => {
    const dispatch = useDispatch()
    const {
        streets,
        houses,
        flats,
        currentStreet,
        currentHouse,
        currentFlat
    } = useSelector(state => state.address)

    useEffect(() => dispatch(getStreets()), [dispatch])

    const handleChangeStreet = e => dispatch(getHouses(e.target.value))
    const handleChangeHouse = e => dispatch(getFlats(e.target.value))
    const handleChangeFlat = e => dispatch(getClients(e.target.value))
    // const handleAddClient = () => dispatch(addClient({clientId, name, phone, email, bindId}))

    return (
        <>
            <div className={s.title}>Адрес</div>
            <div className={s.addressWrapper}>
                <FormControl>
                    <InputLabel id="streets">Улица</InputLabel>
                    <Select
                        labelId="улица"
                        id="streets"
                        value={currentStreet}
                        label="улица"
                        onChange={handleChangeStreet}
                        className={s.street}
                    >
                        {
                            streets && streets.map(e => <MenuItem key={e.id} value={e.id}>{e.name}</MenuItem>)
                        }
                    </Select>
                </FormControl>
                <FormControl>
                    <InputLabel id="houses">Дом</InputLabel>
                    <Select
                        labelId="дом"
                        id="houses"
                        value={currentHouse}
                        label="дом"
                        onChange={handleChangeHouse}
                        className={s.house}
                    >
                        {
                            houses && houses.map(e => <MenuItem key={e.id} value={e.id}>{e.name}</MenuItem>)
                        }
                    </Select>
                </FormControl>
                <FormControl>
                    <InputLabel id="flats">Квартира</InputLabel>
                    <Select
                        labelId="квартира"
                        id="flats"
                        value={currentFlat}
                        label="квартира"
                        onChange={handleChangeFlat}
                        className={s.flat}
                    >
                        {
                            flats && flats.map(e => <MenuItem key={e.id} value={e.id}>{e.name}</MenuItem>)
                        }
                    </Select>
                </FormControl>
                {
                    currentFlat && <IconButton className={s.btn}>
                        <AddCircleOutlineIcon/>
                    </IconButton>
                }
            </div>
        </>
    )
}