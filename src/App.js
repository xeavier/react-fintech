import React, { useState, useEffect } from 'react';
import "./style.css";
import { useSelector, useDispatch } from 'react-redux';
import { saveCutomerD } from './actions/Customer';
import  Cform  from "./comp/Cform";
import CheckoutSteps from "./comp/CheckoutSteps"

export default function App() {
  const customer = useSelector(state => state.customer);
  const [index, setindex] = useState(0);
  const { shipping } = customer;
  const dispatch = useDispatch();

  const [isButtonForm, setisButtonForm] = useState("true");
  const [isCustomerForm, setisCustomerForm] = useState("false");
  const [isReviewAndCreateForm, setisReviewAndCreateForm] = useState("false");

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [buttonlable, setButtonLable] = useState('');
  const [ButtonType,setButtonType] = useState('');
  const [ButtonTheme, setButtonTheme] = useState('');

  const [Customer, setCustomer] = useState([]);
  const [childData, setChildData] = useState([]);;

  const addPaypalSdk = async () => {
        // Get HTML head element
        var head = document.getElementsByTagName('HEAD')[0]; 
  
        // Create new link Element
        var link = document.createElement('link');
  
        // set the attributes for link element 
        link.rel = 'stylesheet'; 
      
        link.type = 'text/css';
      
        link.href = "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"; 
  
        // Append link element to HTML head
        head.appendChild(link);
  }

 function handleButtonThemeChange(e){
  setButtonTheme(e.target.value);
 };
 function handleButtonTypeChange(e){
  setButtonType(e.target.value);
};
 const go0 = () => {
  //dispatch(saveCutomerD({ title, amount }));
  console.log(shipping)
  setindex(0)
}
const go1 = () => {
  dispatch(saveCutomerD({ title, amount, buttonlable, ButtonType, ButtonTheme }));
  //dispatch(saveCutomerD({ address, city, postalCode, country }));
  console.log(shipping)
  //dispatch(saveCutomerD({ address, city, postalCode, country }));
  //console.log(customer)
  setindex(1)
}
const go2 = () => {
  dispatch(saveCutomerD({title, amount, buttonlable, ButtonType, ButtonTheme, childData}));
  console.log(shipping)
  setindex(2)
}
  const submitHandler = (e) => {
    console.log("index")
    console.log(shipping)
    // e.preventDefault();
    // console.log(framework);
    // if(index === 0){
    //   isButtonForm = "false";
    //   isCustomerForm = "true";
    // }
    // if(index === 1){
    //   isCustomerForm = "false";
    //   isReviewAndCreateForm = "true";
    // }
    // if(index === 2){
    //   isReviewAndCreateForm = "false";
    // }
  }
  useEffect(() => {
      addPaypalSdk();
    return () => {
      //
    };
  }, []);
  return (
    <div>
      { index === 0 &&
        <div>
          <CheckoutSteps step1></CheckoutSteps>
          <div className="form">
            <form >
              <ul className="form-container">
                <li>
                  <h2>Button Details</h2>
                </li>

                <li>
                  <label htmlFor="address">
                    Title
                  </label>
                  <input type="text" name="title" id="address" onChange={(e) => setTitle(e.target.value)} value={title}>
                  </input>
                </li>
                <li>
                  <label htmlFor="city">
                    Amount
                  </label>
                  <input type="text" name="amount" id="city" onChange={(e) => setAmount(e.target.value)} value={amount}>
                  </input>
                </li>
                <li>
                  <label htmlFor="postalCode">
                    Button Label
                  </label>
                  <input type="text" name="buttonlable" id="postalCode" onChange={(e) => setButtonLable(e.target.value)} value={buttonlable}>
                  </input>
                </li>
                <li>
                  <h2>Button Type</h2>
                  <select onChange={handleButtonTypeChange} value={ButtonType}>
                    <option value="Quick-Pay_Button">Quick-Pay Button</option>
                    <option value="Donations_Button">Donations Button</option>
                    <option value="Buy_Now_Button">Buy Now Button</option>
                    <option value="Custom_Button">Custom Button</option>
                  </select>
                </li>
                <li>
                  <h2>Button Theme</h2>
                  <select onChange={handleButtonThemeChange} value={ButtonTheme}>
                    <option value="Dark">Dark</option>
                    <option value="Light">Light</option>
                    <option value="Outline">Outline</option>
                    <option value="Brand_Color">Brand Color</option>
                  </select>
                </li>

                <li>
                  <button type="button" className="button primary" onClick={go1}>Next</button>
                </li>

              </ul>
            </form>
          </div>
        </div>
}
{ index === 1 &&
         <div>
         <CheckoutSteps step1 step2></CheckoutSteps>
         <Cform passChildData={setChildData} initial={childData}/>
         <button type="button" className="button primary" onClick={go0}>Prev</button>
         <button type="button" className="button primary" onClick={go2}>Next</button>
       </div>
}
{ index === 2 &&
  <div>
<h2>Review and Create</h2>
<CheckoutSteps step1 step2 step3></CheckoutSteps>
<button type="button" className="button primary" onClick={go1}>Prev</button>
<button type="button" className="button primary" onClick={submitHandler}>Create</button> 
</div>
}
    </div>
  );
}
