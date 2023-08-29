import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalForm, Image, Close } from './Modal.styled';
import { IconContext } from 'react-icons';
import { AiFillCloseCircle } from 'react-icons/ai';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  render() {
    return createPortal(
      <Overlay className="overlay">
        <Close type="button" onClick={this.props.onClose}>
          <IconContext.Provider value={{ size: 32 }}>
            <AiFillCloseCircle />
          </IconContext.Provider>
        </Close>
        <ModalForm className="modal">
          <Image
            src="https://media.istockphoto.com/id/1404425850/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B2%D0%B8%D0%B4-%D1%81-%D0%B2%D0%BE%D0%B7%D0%B4%D1%83%D1%85%D0%B0-%D0%BD%D0%B0-%D1%80%D0%B0%D1%84%D1%82%D0%B8%D0%BD%D0%B3-%D0%B8%D0%BB%D0%B8-%D0%BA%D0%B0%D0%BD%D0%BE%D1%8D-%D0%B2-%D0%B3%D0%BE%D1%80%D0%BD%D0%BE%D0%B9-%D1%80%D0%B5%D0%BA%D0%B5-%D0%B8-%D0%BB%D0%B5%D1%81%D1%83-%D0%BE%D1%82%D0%B4%D1%8B%D1%85-%D0%B8-%D0%BA%D0%B5%D0%BC%D0%BF%D0%B8%D0%BD%D0%B3.webp?b=1&s=612x612&w=0&k=20&c=fyC8syigQ0PPvYkE3XVQDR9zHJdRF5Qo99ZhNx0idP8="
            alt=""
          />
        </ModalForm>
      </Overlay>,
      modalRoot
    );
  }
}
