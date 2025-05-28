import styled from 'styled-components';
import Link from 'next/link';
import ArrowDownIcon from 'public/icons/arrow-down.svg';
import { AccessDropdownProps } from './acessDropdown.type';
import { useAccessDropdown } from './useAccessDropdown';
import { accessLinks } from './accessLinks';

const Styled = {
  AccessDropdownContainer: styled.div`
    position: relative;
    width: 168px;
  `,

  ToggleButton: styled.div<{$isOpenDropdown: boolean}>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: .5rem;
    
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors['white']};
    border-radius: ${({ theme }) => theme.borderRadius['rounded-48']};
    
    position: relative;
    padding: .75rem 2rem;
    width: 100%;
    height: 100%;
    transition: ${({ theme }) => theme.transitions.smoothTransition};

    &:hover {
      background-color: ${({ theme }) => theme.colors['white-80']};
    }

    &:active {
      background-color: ${({ theme }) => theme.colors['white']};
    }
  `,

  ToggleLabel: styled.label`
    color: ${({ theme }) => theme.colors['dark-slate-900']};
    font-size: 1.25rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    cursor: pointer;
  `,

  ToggleIcon: styled(ArrowDownIcon)<{$isOpenDropdown: boolean}>`
    transform: ${({ $isOpenDropdown }) => ($isOpenDropdown ? 'rotate(180deg)' : 'rotate(0deg)')};
    transition: ${({ theme }) => theme.transitions.smoothTransition};

    path {
      stroke: ${({ theme }) => theme.colors['dark-slate-900']};
    }
  `,

  AccessDropdownMenu: styled.nav<{$isOpenDropdown: boolean}>`
    display: block;
    border-radius: 0.75rem;
    box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.40);
    position: absolute;
    bottom: calc(100% + 12px);
    left: 0;
    right: 0;
    z-index: 10;
    width: 100%;
    max-height: ${({ $isOpenDropdown }) => ($isOpenDropdown ? '176.48px' : '0')};
    overflow-y: hidden;
    transition: max-height 0.2s ease-in-out;

    ${({ $isOpenDropdown }) => $isOpenDropdown && 'animation: enable-scroll 0.2s forwards 0.2s;'};

    svg {
      transition: ${({ theme }) => theme.transitions.smoothTransition};

      path {
        stroke: ${({ theme }) => theme.colors['dark-slate-900']};
      }
    }

    @keyframes enable-scroll {
      to { overflow-y: auto; }
    }

    @media (min-width: 992px) {
      bottom: auto;
      top: calc(100% + 12px);
    }
  `,

  AccessDropdownLink: styled(Link)`
    cursor: pointer;
    color: ${({ theme }) => theme.colors['dark-slate-900']};
    font-size: 1.25rem;
    padding: 0.75rem 1.5rem;
    transition: ${({ theme }) => theme.transitions.smoothTransition};
    background-color: ${({ theme }) => theme.colors['white']};

    display: flex;
    align-items: center;
    gap: .5rem;

    &:first-of-type {
      border-bottom: 0.0625rem solid rgb(126 126 126 / 15%);
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors['white-80']};
    }

    &:active {
      background-color: ${({ theme }) => theme.colors['white']};
    }
  `,
};

export default function AccessDropdown({ ...props }: AccessDropdownProps) {
  const { isOpenDropdown, dropdownRef, handleToggle } = useAccessDropdown();

  return (
    <Styled.AccessDropdownContainer {...props} ref={dropdownRef}>
      <Styled.ToggleButton $isOpenDropdown={isOpenDropdown} onClick={handleToggle}>
        <Styled.ToggleLabel>Acessar</Styled.ToggleLabel>
        
        <Styled.ToggleIcon $isOpenDropdown={isOpenDropdown} />
      </Styled.ToggleButton>

      <Styled.AccessDropdownMenu $isOpenDropdown={isOpenDropdown} onClick={handleToggle}>
        {accessLinks.map(({ href, label, Icon }) => (
          <Styled.AccessDropdownLink key={href} href={href}>
            <Icon />
            {label}
          </Styled.AccessDropdownLink>
        ))}
      </Styled.AccessDropdownMenu>
    </Styled.AccessDropdownContainer>
  );
}
