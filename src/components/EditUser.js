import { useState,useContext,useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { useParams,useNavigate } from "react-router-dom";

const EditUser = () => {
    const {id} = useParams();
    const {users,updateUser} = useContext(UserContext);
    const navigate = useNavigate();

    const [form,setForm] = useState({
        name:'',
        email:'',
        phone:''
     });

     useEffect(() => {
        const user = users.find(u => u.id === parseInt(id));
        if (user) setForm(user);
      }, [id, users]);

     //handle form input changes
const handleChange = (e) => {
    const {name,value} = e.target;
    setForm(prevForm => ({
     ...prevForm,
     [name]:value
    }));
   }
   const handleSubmit = e => {
    e.preventDefault();
    updateUser(form);
    navigate('/');
  };
  return (
    <div className="container centered">
     <div className="card">
    <form onSubmit={handleSubmit}>
      <h2>Edit User</h2>
      <div>
      <input name="name" value={form.name} onChange={handleChange} required />
      </div>
      <div>
      <input name="email" value={form.email} onChange={handleChange} required />
      </div>
      <div>
      <input name="phone" value={form.phone} onChange={handleChange} required />
      </div>    
      <div className="form-button-wrapper">
      <button type="submit">Update</button>
      </div>
    </form>
    </div>
    </div>
  );
}

export default EditUser;