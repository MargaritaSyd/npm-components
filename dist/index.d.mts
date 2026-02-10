import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

interface AvatarProps {
    src?: string | null;
    name: string;
    size?: 'sm' | 'md' | 'lg' | 'xlg';
    isOnline: boolean;
}
declare const Avatar: ({ src, name, size, isOnline }: AvatarProps) => react_jsx_runtime.JSX.Element;

interface ButtonProps {
    text: string;
    size?: 'sm' | 'md' | 'lg' | 'full';
    variant?: 'primary' | 'secondary' | 'tertiary';
    disabled?: boolean;
    onClick: () => void;
}
declare const Button: ({ text, size, variant, disabled, onClick }: ButtonProps) => react_jsx_runtime.JSX.Element;

interface HeaderProps {
    logo?: React.ReactNode;
    actions?: React.ReactNode;
    userName?: string;
    sticky?: boolean;
}
declare const Header: ({ logo, actions, userName, sticky }: HeaderProps) => react_jsx_runtime.JSX.Element;

export { Avatar, Button, Header };
