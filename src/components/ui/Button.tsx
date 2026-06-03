type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  download?: boolean;
  className?: string;
};

export function Button({
  children,
  variant = "primary",
  href,
  download,
  className,
}: ButtonProps) {
  const baseClass = `btn btn--${variant}`;
  const classes = className ? `${baseClass} ${className}` : baseClass;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(download ? { download: true } : {})}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return <button className={classes}>{children}</button>;
}
