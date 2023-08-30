import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalForm, Image, Close } from './Modal.styled';
import { IconContext } from 'react-icons';
import { AiFillCloseCircle } from 'react-icons/ai';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  keydownListener = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  clickBackDrop = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.keydownListener);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keydownListener);
  }

  render() {
    return createPortal(
      <Overlay className="overlay" onClick={this.clickBackDrop}>
        <Close type="button" onClick={this.props.onClose}>
          <IconContext.Provider value={{ size: 32 }}>
            <AiFillCloseCircle />
          </IconContext.Provider>
        </Close>
        <ModalForm className="modal">
          <Image src={this.props.item.largeImageURL} alt="this.props.item.tags" />
        </ModalForm>
      </Overlay>,
      modalRoot
    );
  }
}
