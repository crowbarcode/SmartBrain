import React from 'react';
import _ from 'lodash';

import './FaceRecognition.css';

class FaceRecognition extends React.Component {
  render() {
    const {boxes, imageUrl} = this.props
    return (
      <div className='center ma'>
        <div className='absolute mt2'>
          <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>
          {boxes.map((box, i) => (
            <div
              key={i}
              className='boundingBox'
              style={{
                top: box.topRow,
                right: box.rightCol,
                bottom: box.bottomRow,
                left: box.leftCol
              }}
            />
          ))}
        </div>
      </div>
    );
  } 
}

export default FaceRecognition;