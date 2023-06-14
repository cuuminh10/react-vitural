export const Button = ({
  loading,
  type,
  title,
  onClick,
  disabled,
  width,
}: {
  loading?: boolean;
  type?: string;
  title: string;
  onClick: React.SyntheticEvent | any;
  disabled?: boolean;
  width?: number;
}) => {
  return (
    <button
      className={
        loading ? "button is-small is-loading " : "button is-small " + type
      }
      style={{width}}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};
