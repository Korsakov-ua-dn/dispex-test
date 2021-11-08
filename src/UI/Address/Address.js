import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getStreets} from "../../BLL/address-reducer";
import s from "./Address.module.css"

export const Address = () => {
    const dispatch = useDispatch()
    const streets = useSelector(state => state.address.streets)
    console.log(streets)

    useEffect(() => dispatch(getStreets()), [])

    const [value, setValue] = useState([]);

    const handleChange = (event) => {
        const {
            target: {value},
        } = event;
        console.log(value)
        setValue(value)
    };

    return (
        <FormControl autoWidth>
            <InputLabel id="streets">Улица</InputLabel>
            <Select
                labelId="streets"
                id="streets"
                value={value}
                label="streets"
                onChange={handleChange}
                className={s.streets}
            >
                {
                    streets && streets.map(e => <MenuItem value={e.id}>{e.name}</MenuItem>)
                }
            </Select>
        </FormControl>
    )
}