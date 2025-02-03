import { StyledCloseIcon, StyledFormHeader } from 'src/styles/components/StyledForm';
import { useSetRecoilState } from 'recoil';
import { stateActiveAuthForm } from 'src/store/atom';
import { IFormHeaderProps } from 'src/interfaces/homePage/data/IAuthForm';
import { StyledHeading, StyledSubtitle } from 'src/styles/components/StyledText';

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
