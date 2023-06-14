import { emit } from "process";
import { useState } from "react";
import { toast } from "react-toastify";
import { View } from "wiloke-react-core";
import { Input, Checkbox, Button } from "../../components";
import { ILink, IUser } from "../../models/employee";
import { useAppDispatch } from "../../store";
import { useHistory } from "react-router-dom";

import {
 loginLink
} from "./auth-api";


export const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const [showValidation, setShowValidation] = useState<boolean>(false);

  const [user, setUser] = useState<IUser>({
    password: '',
    email: ''
  });


  const submit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (user.email === "" && user.password === "") {
      setShowValidation(true);
      return;
    }

    const action =  loginLink({email: user.email, password: user.password});
    

    dispatch(action)
      .unwrap()
      .then((response) => {
        toast.success(response);
        history.push("/link");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const resetForm = () => {
    setUser({
      email: "",
      password:  "",
    });
    setShowValidation(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: name === "isActive" ? checked : value,
    }));
  };

  return (
    <div className="form-container">
      <h1 className="title">Links</h1>
      <div className="card">
        <div className="card-content">
          <div className="content">
            <div className="columns">
              <div className="column is-3">&nbsp;</div>
              <div className="column is-6">
                <Input
                  type="text"
                  title="USERNAME"
                  name="email"
                  placeholder="Enter Username"
                  value={user.email}
                  inputChange={handleInputChange}
                  showValidation={showValidation}
                  isRequired={true}
                />
              </div>
              <div className="column is-3">&nbsp;</div>
            </div>
            <div className="columns">
              <div className="column is-3">&nbsp;</div>
              <div className="column is-6">
                <Input
                  type="text"
                  title="PASSWORD"
                  name="password"
                  placeholder="Enter Password"
                  value={user.password}
                  inputChange={handleInputChange}
                  showValidation={showValidation}
                  isRequired={true}
                />
              </div>
              <div className="column is-3">&nbsp;</div>
            </div>
            <div className="columns">
              <div className="column is-3"></div>
              <div className="column is-6">
                <Button type="is-warning" title="Delete" onClick={submit} width={100}/>
              </div>
              <div className="column is-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
