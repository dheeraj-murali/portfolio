interface LayoutProps {
  children: React.ReactNode;
}

interface NavItemProps extends NavLink {}

interface LinkProps {
  to: string;
  asButton?: boolean;
  className?: string;
  children: React.ReactNode;
  external?: boolean;
}

interface TextInputProps {
  name: string;
  label: string;
  placeholder: string;
  autoComplete?: "on" | "off";
  required?: boolean;
  disabled?: boolean;
  spellCheck?: boolean;
  legend?: string;
}

interface ButtonProps {
  type: "button" | "submit" | "reset";
  onClick: () => void;
  children: React.ReactNode;
}
