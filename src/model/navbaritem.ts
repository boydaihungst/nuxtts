export interface NavbarItem {
  title?: string;
  icon?: string;
  to?: string;
}

export interface DropdownMenuItem extends NavbarItem {
  isList?: boolean;
  menuItems?: NavbarItem[];
}

export interface DropdownGridItem extends NavbarItem {
  isGrid?: boolean;
  groupMenu?: GroupMenu[];
}

export interface GroupMenu extends DropdownGridItem {
  header?: string;
  menuItems?: NavbarItem[];
}
