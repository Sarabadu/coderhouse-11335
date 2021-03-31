import React from 'react';
import './boxes.css'

export const Boxes = () => {

  function click1(e){
    
    e.stopPropagation()

    console.log('evento caja 4')
  }


  return (
    <div className="box box-1" onClick={()=> console.log('evento caja 1')}>
        Box - 1
      <div className="box box-2" onClick={()=> console.log('evento caja 2')}>
          Box - 2
        <div className="box box-3" onClick={()=> console.log('evento caja 3')}>
            Box - 3
          <div className="box box-4" onClick={click1}>Box - 4</div>
        </div>
      </div>
    </div>
  );
};
