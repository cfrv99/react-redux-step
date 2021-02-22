import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUserList } from "./actions";

export const Test = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const userList = useSelector((state) => state.userList);
    console.log(userList);
  const [formValue, setFormValue] = useState({
    name: "",
    surname: "",
    features : ""
  });
  console.log(userList);
  const handleAddUser = () => {
    console.log("Work");
    const payload = {
      name: "Ibrahim",
      surname: "Huseynzade",
      features: "Yaxshi oglan",
    };

    dispatch(addUserList(payload));
  };

  const handleOnChangeForm = (e) => {
      setFormValue({...formValue,[e.target.name]:e.target.value});
  };

  const handleSubmit = ()=>{
      dispatch(addUserList(formValue));
  }
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleAddUser}>Add User</button>

      <input type="text" value={formValue.name} name="name" onChange={handleOnChangeForm} />
      <input type="text" value={formValue.surname} name="surname" onChange={handleOnChangeForm} />
      <input type="text" value={formValue.features} name="features" onChange={handleOnChangeForm} />

    <button onClick={handleSubmit}>Submit</button>
      <ul>
        {userList.map((i) => (
          <li>
            {i.name} -- {i.surname} -- {i.features}
          </li>
        ))}
      </ul>
    </div>
  );
};
