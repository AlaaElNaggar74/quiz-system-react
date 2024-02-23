import React from 'react';

function LineIndecator(props) {
    const line = props.percent;

    return (
        <div className="parenLine">
        <div className="childLine" style={{ width: line + "%" }}></div>
      </div>
    );
}

export default LineIndecator;