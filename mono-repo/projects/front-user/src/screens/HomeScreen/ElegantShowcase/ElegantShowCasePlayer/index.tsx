import styled from 'styled-components';
import usePlayerScript from './usePlayerScript';
import { shadowXL } from 'src/styles/mixins/boxShadow';

const StyledPlayerContainer = styled.div`
  width: 100%;
  max-width: 580px;
  min-height: 332px!important;
  height: 100%!important;

  /* classe utilizada no script do player */
  .pjscssed {
    border-radius: 1.5rem;
    width: 100%;

    ${shadowXL}
  }

  video {
    object-fit: cover!important;
    cursor: pointer!important;
  }
`;

export default function ElegantShowCasePlayer() {
  usePlayerScript('./video/rio-perdido.mp4');

  return (
    <StyledPlayerContainer id="player"></StyledPlayerContainer>
  );
}