import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Toy from './Toy';
import { createContext, useEffect, useState } from 'react';


export const UserLogin = createContext()

function App() {
  var [logname, setlogname] = useState('')
  var [logout, setlogout] = useState(false)
  var [val,setval] = useState(1)


    // 👇 Restore login state on page refresh
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedUser"));
    if (storedUser) {
      setlogname(storedUser.lastname);
      setlogout(true);
    }
  }, []);


  return (
    <div className='App'>
      <UserLogin.Provider value={{logname,setlogname,logout,setlogout,val,setval}}>
        <Toy basename="/MyToy"></Toy>
      </UserLogin.Provider>
    </div>
  );
}

export default App;
