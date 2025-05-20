import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import {Link} from 'react-router-dom';

const UserList = () => {
    const {users,deleteUser} = useContext(UserContext);

    return(
        <div>
            <h2>User List</h2>
            <Link to="/add">Add User</Link>
            <ul className="user-list">
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
            <div className="action-buttons">
            <Link to={`/edit/${user.id}`} className="edit-link">Edit</Link>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
            </div>        
          </li>
        ))}
      </ul>
        </div>
    )
}

export default UserList;