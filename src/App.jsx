import CreateUser from "./components/CreateUser";
import UserDetails from "./components/UserDetails";
import UserList from "./components/UserList";


export default function App() {
  return (
    <div className="flex">

    <CreateUser/>
  

      <UserList/>

      <UserDetails id = {2}/>
 

    </div>
  )
}
