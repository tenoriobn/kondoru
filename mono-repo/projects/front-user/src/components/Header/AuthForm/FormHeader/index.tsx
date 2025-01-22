import { StyledSubtitle, StyledTitle } from 'src/styles/commonStyles';
import { StyledCloseIcon, StyledFormHeader } from 'src/styles/StyledAuthFormLayout';
import { useSetRecoilState } from 'recoil';
import { stateActiveAuthForm } from 'src/store/atom';
import { IFormHeaderProps } from 'src/interfaces/header/IAuthForm';

export default function FormHeader({ title, subtitle }: IFormHeaderProps) {
  const setActiveAuthForm = useSetRecoilState(stateActiveAuthForm);

  return (
    <StyledFormHeader>
      <StyledCloseIcon 
        onClick={() => setActiveAuthForm('')}
      />

      <div>
        <StyledTitle>{title}</StyledTitle>
        <StyledSubtitle>{subtitle}</StyledSubtitle>
      </div>
    </StyledFormHeader>
  );
}
