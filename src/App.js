import './App.module.css'
import {Address} from "./UI/Address/Address";
import {Provider} from "react-redux";
import store from "./BLL/store";
import s from "./App.module.css"
import {Clients} from './UI/Clients/Clients';

function App() {
    return (
        <div className={s.app}>
            <Provider store={store}>
                <Address/>
                <Clients/>
            </Provider>
        </div>
    )
}

export default App