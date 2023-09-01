import React, { useState } from 'react';

const FormData = () => {
const [Data,SetData] = useState({
    FName:"",
    lName:"",
    Email:"",
    Phoneno:"",
});
  const [FullData,SetFullData] = useState("");
  const HandleChange =(e) =>{
    const {name ,value} =e.target;
    SetFullData((prevData)=>({
        ...prevData,
        [Name]:value}))
};

  const HandleSubmit = (e) =>{
    preventDefault()
    SetFullData(Data)
    console.log(Data)
  };
  return (
    <div>
      <div>Form {FullData}</div>
      <form>
      <div>
      <label>FName:</label>
    <input type="text"  name="FName" onChange={HandleChange}/>
    <button onClick={HandleSubmit}>Submit</button>
     
      </div>
      <div>
      <label>lName:</label>
      <input type="text"  name="lName" onChange={HandleChange}/>
      <button onClick={HandleSubmit}>Submit</button>
     
      </div>
      
      <div>
      <label>Email:</label>
      <input type="text"  onChange={HandleChange}/>
      <button onClick={HandleSubmit}>Submit</button>
     
      </div>
      <div>
      <label>Phoneno:</label>
      <input type="text"  onChange={HandleChange}/>
      <button onClick={HandleSubmit}>Submit</button>
      </div>
      </form>
    </div>
  )
}

export default FormData
