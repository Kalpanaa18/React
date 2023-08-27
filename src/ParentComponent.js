import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    const HandleChild =(Children)=> {
        setdata(Children);
    }
  return (
    <div>
      <ChildComponent onDataFromChild={HandleChild}/>
      <p>data</p>
    </div>
  )
}

export default ParentComponent
