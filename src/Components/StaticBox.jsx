import React from 'react';

function StaticBox({ title, info, icon }) {
    return (
        <>
        <h4 className="item d-flex justify-content-between  align-items-center">
          <div>
            {title} :<span className="text-danger"> {info} </span>
          </div>
          <div className="icon">
            <i className={`fa-solid ${icon}`}></i>
          </div>
        </h4>
      </>
    );
}

export default StaticBox;