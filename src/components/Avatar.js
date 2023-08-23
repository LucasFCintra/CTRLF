'use client';

import { Avatar, Dropdown } from 'flowbite-react';

export default function UserDropdown() {
  return (
    <Dropdown
      inline
      label={<Avatar alt="User settings" img="/images/people/profile-picture-5.jpg" rounded/>}
    >
      <Dropdown.Header>
        <span className="block text-sm">
          Bonnie Green
        </span>
        <span className="block truncate text-sm font-medium">
          name@flowbite.com
        </span>
      </Dropdown.Header>
      <Item>
        Dashboard
      </Item>
      <Item>
        Settings
      </Item>
      <Item>
        Earnings
      </Item>
      <Dropdown.Divider />
      <Item>
        Sign out
      </Item>
    </Dropdown>
  )
}


