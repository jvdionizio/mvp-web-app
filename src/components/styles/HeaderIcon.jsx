import React from 'react';
import PropTypes from 'prop-types';
import { Slot } from '@radix-ui/react-slot';

function HeaderIcon({ children }) {
  return (
    <Slot className="w-6 h-6 text-white-smoked" weight="bold">
      {children}
    </Slot>
  );
}

HeaderIcon.displayName = 'Header.Icon';

HeaderIcon.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderIcon;
