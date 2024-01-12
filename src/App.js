
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { SubmittedFormData, getSubmittedData } from "./reduxFolder/actions";
function App() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    dispatch(SubmittedFormData({ name, email, number, password }));
  }

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <form>
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="number"
            name="number"
            placeholder="number"
            onChange={(e) => setNumber(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="button" value="submit" onClick={handleSubmit} />
        </form>
      </div>
      <div>
        Name: {name}
        <br /> Email: {email}
        <br /> Number: {number}
        <br /> password: {password}
      </div>
    </>
  );
}

export default App;
