import React from 'react';
import ReactDom from 'react-dom';
import history from '../../history';

const Modal: React.FunctionComponent<any> = ({ children }) => {
  let root = document.querySelector('body') as HTMLElement;
  return ReactDom.createPortal(
    <div
      onClick={() => history.push('/')}
      className="ui dimmer modals visible active"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">Delete Stream</div>
        <div className="content">{children}</div>
        <div className="actions">
          <button className="ui negative button">Delete</button>
          <button
            className="ui positive button"
            onClick={() => history.push('/')}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>,
    root
  );
};

export default Modal;
