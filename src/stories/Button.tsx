
export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-4"
      {...props}
    >
      {label}
    </button>
  );
};
