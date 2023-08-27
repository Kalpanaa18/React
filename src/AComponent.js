import React from 'react';
import BComponent from './BComponent';
import DataContext from './DataContext';

const AComponent = () => {
    const Vishatnama ="mere grandchildren ko 400000cr mein bhet swroop deta hoon";
return (
    <DataContext.Provider value={Vishatnama}>
    <div>
    AComponent
    <BComponent/>
</div>
    </DataContext.Provider>
);
}

export default AComponent
