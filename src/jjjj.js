:index === 1?
        (<div>
          <CheckoutSteps step1 step2></CheckoutSteps>
          <div className="form">
      <form onSubmit={submitHandler} >
        <ul className="form-container">
          <li>
            <h2>Customer Details</h2>
          </li>

          <li>
            <label htmlFor="address">
            Title
          </label>
            <input type="text" name="address" id="address" onChange={(e) => setAddress(e.target.value)}>
            </input>
          </li>
          <li>
            <label htmlFor="city">
            Amount
          </label>
            <input type="text" name="city" id="city" onChange={(e) => setCity(e.target.value)}>
            </input>
          </li>
          <li>
            <label htmlFor="postalCode">
            Button Label
          </label>
            <input type="text" name="postalCode" id="postalCode" onChange={(e) => setPostalCode(e.target.value)}>
            </input>
          </li>
          <li>
          <h2>Button Type</h2>
        <select onChange={handleChange} value={framework}>
          <option value="react">React</option>
          <option value="angular">Angular</option>
          <option value="vue">Vue</option>
        </select>
          </li>
          <li>
          <h2>Button Theme</h2>
        <select onChange={handleChange} value={framework}>
          <option value="react">React</option>
          <option value="angular">Angular</option>
          <option value="vue">Vue</option>
        </select>
          </li>

          <li>
                        {/* <button type="button" className="button primary" onClick={setindex(2)}>Continue</button> */}
          </li>

        </ul>
      </form>
    </div>
          </div>)

: <div>
<h2>Review and Create</h2>
            {/* <button type="button" className="button primary" onClick={setindex(1)}>Continue</button> */}
</div>