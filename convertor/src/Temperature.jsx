import React, { useState } from 'react';

const Temperature = () => {
  const [Celcius,SetCelcius] = useState(0);
  const [Farenheit,SetFarenheit] = useState(32);
  const HandleFarenheit=(e) =>{
    const value =e.target.value;
    SetFarenheit(value)
    SetCelcius(ftoc(value))
  };

  const HandleCelcius = (e) =>{
    const value =e.target.value;
    SetCelcius(value)
    SetFarenheit(ctof(value))
    
  };

  const ftoc=(Farenheit) =>{
    return ((Farenheit-32)*5)/9;
  }
  const ctof=(Celcius) =>{
    return (Celcius*9)/5+32
  }
  return (
    <div>
      <div>Temperature Convertor</div>
      <div>
      <label>Celcius:</label>
      <input type="text" value={Celcius} onChange={HandleCelcius}/>
    
     
      </div>
      <div>
      <label>Farenheit:</label>
      <input type="text" value={Farenheit} onChange={HandleFarenheit}/>
      
      </div>
    
    </div>
  )
}

export default Temperature
