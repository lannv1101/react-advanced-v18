import React, { useState, useReducer, Fragment } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
import { reducer } from "./reducer";
// reducer function

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "",
};
const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  return (
    <Fragment>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <button type="submit" className="btn">
          Add
        </button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h3>{person.name}</h3>
            <button
              onClick={() =>
                dispatch({
                  type: "REMOVE_ITEM",
                  payload: person.id,
                })
              }
            >
              Remove
            </button>
          </div>
        );
      })}
    </Fragment>
  );
};

export default Index;
