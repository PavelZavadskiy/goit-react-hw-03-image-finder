import styled from 'styled-components';
import { Form, Field } from 'formik';

export const SearchForm = styled(Form)`
  background: #5552c7;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  position: fixed;
  top: 0;
  width: 100%;
`;

export const Wraper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  border: none;
  background: transparent;
  position: absolute;
  display: flex;
  align-items: center;
`;

export const Input = styled(Field)`
  padding: 0 0 0 20px;
`;
