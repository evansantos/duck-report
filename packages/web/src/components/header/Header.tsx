import React, { FC } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Header: FC = () => {
  const history = useHistory();
  const location = useLocation();

  console.log(location);

  return (
    <div>
      <Menu pointing secondary>
        <Menu.Item name="home" active={location.pathname === '/'} onClick={() => history.push('/')} />
        <Menu.Item name="reports" active={location.pathname === '/entries'} onClick={() => history.push('/entries')} />
      </Menu>
    </div>
  );
};

export default Header;
