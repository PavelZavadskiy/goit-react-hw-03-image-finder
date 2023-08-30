import { ButtonStyled } from './Button.styled';

export const Button = props => (
  <>
    <ButtonStyled type="button" onClick={props.onClick}>
      Load more
    </ButtonStyled>
  </>
);
