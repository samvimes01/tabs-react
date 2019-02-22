import React from 'react';

function Tab(props) {
  return (
    <div className="tabcontent">
      {props.children}
    </div>
  );
}

export default Tab;
