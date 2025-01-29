import { StyledCloseIcon, StyledFormHeader } from 'src/styles/styledComponents/StyledForm';
import { useSetRecoilState } from 'recoil';
import { stateActiveAuthForm } from 'src/store/atom';
import { IFormHeaderProps } from 'src/interfaces/header/IAuthForm';
import { StyledHeading, StyledSubtitle } from 'src/styles/styledComponents/StyledText';

export default function FormHeader({ title, subtitle }: IFormHeaderProps) {
  const setActiveAuthForm = useSetRecoilState(stateActiveAuthForm);

  return (
    <StyledFormHeader>
      <StyledCloseIcon 
        onClick={() => setActiveAuthForm('')}
      />

      <div>
        <StyledSubtitle>{title}</StyledSubtitle>
        <StyledHeading>{subtitle}</StyledHeading>
      </div>
    </StyledFormHeader>
  );
}
