import ReactSwitch from 'react-switch';
import styled from 'styled-components';

export const Switch = ({ theme, toggleTheme }) => {
	
  return (
    <SwitchStyled>
      <label style={{ marginRight: '10px' }}>
        {theme === 'light' ? 'Light Mood' : 'Dark Mood'}
      </label>
      <ReactSwitch
        onChange={toggleTheme}
        checked={theme === 'dark'}
        onColor={'#007c7c'}
      />
    </SwitchStyled>
  );
};

const SwitchStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 60px;
`;
