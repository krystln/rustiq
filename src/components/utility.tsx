const GoogleIcon = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  return (
    <span className={"material-symbols-outlined " + className}>{children}</span>
  );
};

export default GoogleIcon;
