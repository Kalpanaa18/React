import React from 'react';

const ChildComponent = ({onDataFromChild}) => {
    const SendDataToParent =() => {
        const data = "Logged In";
        onDataFromChild(data);
    }
  return (
    <div>
      <div>ChildComponent</div>
       
    </div>
  )
}

export default ChildComponent
