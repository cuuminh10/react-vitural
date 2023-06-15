import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IEmployee, IEmployeeList, ILink } from "../../models/employee";
import { RootState, useAppDispatch } from "../../store";
import {
  getEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} from "./employeeApi";
import moment from "moment";
import { Input, Checkbox, Button } from "../../components";
import { toast, ToastContainer } from "react-toastify";
import { useHistory } from "react-router-dom";

export const Employee: React.FC = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  
  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  const employeeList = useSelector(
    (state: RootState) => state.employee.list.values
  );
  const isLoadingTable = useSelector(
    (state: RootState) => state.employee.list.isLoading
  );
  const isSaving = useSelector(
    (state: RootState) => state.employee.save.isSaving
  );
  const isDeleting = useSelector(
    (state: RootState) => state.employee.save.isDeleting
  );

  const [employee, setEmployee] = useState<ILink>({
    id: 0,
    link: "",
    shortLink: ""
  });

  const [showValidation, setShowValidation] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setEmployee((prevState) => ({
      ...prevState,
      [name]: name === "isActive" ? checked : value,
    }));
  };

  const selectEmployee = (d: ILink) => {
    setShowValidation(false);
    setEmployee({
      id: d.id,
      link: d.link,
      shortLink: d.shortLink,
    });
  };

  const removeEmployee = (id: number) => {
    if (id)
      dispatch(deleteEmployee(id))
        .unwrap()
        .then((response) => {
          toast.success(response);
          dispatch(getEmployees());
        })
        .catch((error) => {
          toast.error(error);
        });
  };

  const submit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (employee.link === "" && employee.shortLink === "") {
      setShowValidation(true);
      return;
    }

    const action =
      employee.id === 0
        ? addEmployee(employee)
        : updateEmployee(employee);

    dispatch(action)
      .unwrap()
      .then((response) => {
        toast.success(response);
        resetForm();
        dispatch(getEmployees());
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const resetForm = () => {
    setEmployee({
      id: 0,
      link: "",
      shortLink:  "",
    });
    setShowValidation(false);
  };

  return (
    <>
      <div className="form-container">
        <h1 className="title">
          Links &nbsp;
          <span className="tag is-link">{employeeList?.length}</span>
        </h1>
        <div className="card">
          <div className="card-content">
            <div className="content">
              {/* <div className="columns">
                <div className="column is-4">
                  <Input
                    type="text"
                    title="Name"
                    name="name"
                    placeholder="Enter name here"
                    value={employee.name}
                    inputChange={handleInputChange}
                    showValidation={showValidation}
                    isRequired={true}
                  />
                </div>
              </div> */}
              <div className="columns">
                <div className="column is-4">
                  <Input
                    type="text"
                    title="link"
                    name="link"
                    placeholder="Enter link"
                    value={employee.link}
                    inputChange={handleInputChange}
                    showValidation={showValidation}
                    isRequired={true}
                  />
                </div>
                <div className="column is-4">
                  <Input
                    type="text"
                    title="shortLink"
                    name="shortLink"
                    placeholder="Enter short link"
                    value={employee.shortLink}
                    inputChange={handleInputChange}
                    showValidation={showValidation}
                    isRequired={true}
                  />
                </div>
                {/* <div className="column is-4">
                  <Input
                    type="date"
                    title="Birthday"
                    name="birthday"
                    value={employee.birthday}
                    inputChange={handleInputChange}
                  />
                </div> */}
              </div>
              <Button
                type="is-success"
                loading={isSaving}
                title="Submit"
                onClick={submit}
                disabled={isSaving || isDeleting}
              />
              &nbsp;
              {employee.id !== 0 && (
                <Button
                  title="Cancel"
                  onClick={resetForm}
                  disabled={isSaving || isDeleting}
                />
              )}
              <hr />
              {isLoadingTable && (
                <div className="has-text-centered">Fetching...</div>
              )}
              <div className="table-container">
                <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>LINK</th>
                      <th>SHORT LINK</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {employeeList?.map((d: ILink, index: number) => {
                      return (
                        <tr key={index}>
                          <td onClick={() => {history.push(`/webview?path=${d.shortLink}`)}}>{d.id}</td>
                          <td onClick={() => {history.push(`/webview?path=${d.shortLink}`)}}>{d.link}</td>
                          <td>{d.shortLink}</td>
                          <td>
                            <Button
                              type="is-warning"
                              title="Edit"
                              onClick={() => selectEmployee(d)}
                              disabled={isSaving || isDeleting}
                            />
                            &nbsp;
                            <Button
                              type="is-danger"
                              title="Delete"
                              loading={isDeleting}
                              onClick={() => removeEmployee(d.id!)}
                              disabled={isSaving || isDeleting}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer closeOnClick={true} />
      </div>
    </>
  );
};
