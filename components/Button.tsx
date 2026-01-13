import React from 'react';

type BaseButtonProps = {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  children: React.ReactNode;
  className?: string;
};

type ButtonAsButton = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 cursor-pointer no-underline";
  
  const variants = {
    primary: "border-transparent text-white bg-brand-600 hover:bg-brand-700 focus:ring-brand-500 dark:bg-brand-500 dark:hover:bg-brand-600",
    secondary: "border-transparent text-white bg-secondary-600 hover:bg-secondary-700 focus:ring-secondary-500 dark:bg-secondary-500 dark:hover:bg-secondary-600",
    outline: "border-slate-300 text-slate-700 bg-white hover:bg-slate-50 focus:ring-slate-500 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-600 dark:hover:bg-slate-700",
  };

  const classes = `${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`;

  if ('href' in props && props.href) {
    return (
      <a className={classes} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};

export default Button;