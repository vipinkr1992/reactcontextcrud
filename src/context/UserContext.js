import { createContext,useState,useEffect} from "react";
import {
    fetchUsers,
    createUser,
    updateUserApi,
    deleteUserApi,
  } from '../api/userApi';

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [users,setUsers] = useState([]);

    //fetch users from an API
    useEffect(() => {
        fetchUsers()
          .then(res => setUsers(res.data))
          .catch(err => console.error(err));
      }, []);
    
      const addUser = user => {
        createUser(user)
          .then(res => setUsers(prev => [...prev, res.data]))
          .catch(err => console.error(err));
      };
    
      const updateUser = updatedUser => {
        updateUserApi(updatedUser.id, updatedUser)
          .then(res => {
            setUsers(prev =>
              prev.map(user =>
                user.id === updatedUser.id ? res.data : user
              )
            );
          })
          .catch(err => console.error(err));
      };
    
      const deleteUser = id => {
        deleteUserApi(id)
          .then(() => {
            setUsers(prev => prev.filter(user => user.id !== id));
          })
          .catch(err => console.error(err));
      };
    return (
        <UserContext.Provider value={{users,addUser,updateUser,deleteUser}}>
            {children}
        </UserContext.Provider>
    )
}