import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
const {addUser} = useContext(UserContext);
const navigate = useNavigate();

const [form,setForm] = useState({
    name:'',
    email:'',
    phone:''
 });

//handle form input changes
const handleChange = (e) => {
  const {name,value} = e.target;
  setForm(prevForm => ({
   ...prevForm,
   [name]:value
  }));
 }

 // Handle form submission
 const handleSubmit = (e) => {
    e.preventDefault();

    // Construct user object (you can add validation here)
    const newUser = {
      ...form,
      id: Date.now().toString(), // temporary ID if backend doesn't return one
    };

    addUser(newUser);
    navigate('/');
  };

  return (
    <div className="container centered">
     <div className="card">
    <h2>Add New User</h2>
    <form onSubmit={handleSubmit}>
        <div>
            <label>Name:</label><br />
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              />
        </div>
        <div>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone:</label><br />
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-button-wrapper">
        <button type="submit">Add User</button>
        </div>
    </form>
   </div>
    </div>
  
  );

}

export default AddUser;