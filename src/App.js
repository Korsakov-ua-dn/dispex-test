import './App.module.css'
import {Address} from "./UI/Address/Address";
import {Provider} from "react-redux";
import store from "./BLL/store";
import s from "./App.module.css"

function App() {
  return (
    <div className={s.app}>
        <Provider store={store}>
            <Address/>
        </Provider>
    </div>
  )
}

export default App