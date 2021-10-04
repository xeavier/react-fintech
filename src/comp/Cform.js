import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

function App({ inital, passChildData }) {
  const customer = useSelector(state => state.customer);
  const { shipping } = customer;
  console.log(shipping)
  const [inputList, setInputList] = useState(inital ?inital :[
    { key: "", value: "" , type: ""}
  ]);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
    passChildData(inputList)
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { key: "", value: "" }]);
  };

  return (
    <div className="App">
      <h3><a href="https://cluemediator.com">Clue Mediator</a></h3>
      {inputList.map((x, i) => (
          <div className="box">
                                          <h2>Button Type</h2>
                  <select name="type" onChange={e => handleInputChange(e, i)} value={x.type}>
                    <option value="Quick-Pay_Button">Quick-Pay Button</option>
                    <option value="Donations_Button">Donations Button</option>
                    <option value="Buy_Now_Button">Buy Now Button</option>
                    <option value="Custom_Button">Custom Button</option>
                  </select>
            <input
              name="key"
			  placeholder="Enter First Name"
              value={x.key}
              onChange={e => handleInputChange(e, i)}
            />
            {/* <input
              className="ml10"
              name="value"
			  placeholder="Enter Last Name"
              value={x.value}
              onChange={e => handleInputChange(e, i)}
            /> */}
            <div className="btn-box">
              {inputList.length !== 1 && <button
                className="mr10"
                onClick={() => handleRemoveClick(i)}>Remove</button>}
              {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
            </div>
          </div>
      ))}
      <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
    </div>
  );
}

export default App;