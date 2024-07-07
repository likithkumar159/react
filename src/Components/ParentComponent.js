import React, { useState } from 'react';
import Tabledata from './Tabledata';

const ParentComponent = () => {
  const [length, setLength] = useState(0);

  const handleLengthUpdate = (newLength) => {
    setLength(newLength);
  };

  return (
    <div>
      <h1>Data Length: {length}</h1>
      <Tabledata onLengthUpdate={handleLengthUpdate} name="likith" />
    </div>
  );
}

export default ParentComponent;
