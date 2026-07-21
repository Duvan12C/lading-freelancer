import type {
    ButtonHTMLAttributes,
    ReactNode,
} from 'react';

type ButtonVariant =
    | 'brand'
    | 'solid'
    | 'outline'
    | 'ghost'
    | 'dark';

type ButtonColor =
    | 'primario'
    | 'primario-claro'
    | 'acento'
    | 'blanco'
    | 'superficie';

type ButtonSize =
    | 'small'
    | 'normal'
    | 'large';

type ButtonRounded =
    | 'none'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'full';

interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: ButtonVariant;
    color?: ButtonColor;
    hoverColor?: ButtonColor;
    size?: ButtonSize;
    rounded?: ButtonRounded;
    icon?: ReactNode;
    iconPosition?: 'left' | 'right';
    fullWidth?: boolean;
}

const backgroundColors: Record<ButtonColor, string> = {
    primario: 'bg-primario',
    'primario-claro': 'bg-primario-claro',
    acento: 'bg-acento',
    blanco: 'bg-blanco',
    superficie: 'bg-superficie',
};

const hoverBackgroundColors: Record<ButtonColor, string> = {
    primario: 'hover:bg-primario',
    'primario-claro': 'hover:bg-primario-claro',
    acento: 'hover:bg-acento',
    blanco: 'hover:bg-blanco',
    superficie: 'hover:bg-superficie',
};

const textColors: Record<ButtonColor, string> = {
    primario: 'text-primario',
    'primario-claro': 'text-primario-claro',
    acento: 'text-acento',
    blanco: 'text-blanco',
    superficie: 'text-superficie',
};

const borderColors: Record<ButtonColor, string> = {
    primario: 'border-primario',
    'primario-claro': 'border-primario-claro',
    acento: 'border-acento',
    blanco: 'border-blanco',
    superficie: 'border-superficie',
};

const hoverBorderColors: Record<ButtonColor, string> = {
    primario: 'hover:border-primario',
    'primario-claro': 'hover:border-primario-claro',
    acento: 'hover:border-acento',
    blanco: 'hover:border-blanco',
    superficie: 'hover:border-superficie',
};

const sizeStyles: Record<ButtonSize, string> = {
    small: 'px-4 py-2 text-sm',
    normal: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
};

const roundedStyles: Record<ButtonRounded, string> = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full',
};

const lightColors: ButtonColor[] = [
    'primario-claro',
    'acento',
    'blanco',
];

const Button = ({
    children,
    variant = 'brand',
    color = 'primario',
    hoverColor = 'primario-claro',
    size = 'normal',
    rounded = 'md',
    icon,
    iconPosition = 'left',
    fullWidth = false,
    className = '',
    disabled = false,
    type = 'button',
    ...buttonProps
}: ButtonProps) => {
    const getTextContrast = (selectedColor: ButtonColor) =>
        lightColors.includes(selectedColor)
            ? 'text-fondo'
            : 'text-blanco';

    const getHoverTextContrast = (selectedColor: ButtonColor) =>
        lightColors.includes(selectedColor)
            ? 'hover:text-fondo'
            : 'hover:text-blanco';

    const baseStyles = [
        'inline-flex items-center justify-center gap-2',
        'font-semibold',
        'cursor-pointer',
        'transition-all duration-300 ease-out',
        'focus-visible:outline-none',
        'focus-visible:ring-2',
        'focus-visible:ring-primario',
        'disabled:pointer-events-none',
        'disabled:cursor-not-allowed',
        'disabled:opacity-50',
    ].join(' ');

    const getVariantStyles = () => {
        switch (variant) {
            case 'brand':
                return [
                    'bg-primario',
                    'text-blanco',
                    'hover:bg-primario-claro',
                    'hover:-translate-y-0.5',
                    'active:translate-y-0',
                    'active:scale-[0.98]',
                ].join(' ');

            case 'solid':
                return [
                    backgroundColors[color],
                    getTextContrast(color),
                    hoverBackgroundColors[hoverColor],
                    getHoverTextContrast(hoverColor),
                    'hover:-translate-y-0.5',
                    'active:translate-y-0',
                    'active:scale-[0.98]',
                ].join(' ');

            case 'outline':
                return [
                    'border',
                    'bg-transparent',
                    borderColors[color],
                    textColors[color],
                    hoverBorderColors[hoverColor],
                    hoverBackgroundColors[hoverColor],
                    getHoverTextContrast(hoverColor),
                    'hover:-translate-y-0.5',
                    'active:translate-y-0',
                    'active:scale-[0.98]',
                ].join(' ');

            case 'ghost':
                return [
                    'bg-transparent',
                    textColors[color],
                    hoverBackgroundColors[hoverColor],
                    getHoverTextContrast(hoverColor),
                ].join(' ');

            case 'dark':
                return [
                    'border border-borde',
                    'bg-superficie',
                    'text-blanco',
                    'hover:border-primario',
                    'hover:bg-superficie-secundaria',
                    'hover:-translate-y-0.5',
                    'active:translate-y-0',
                    'active:scale-[0.98]',
                ].join(' ');

            default:
                return '';
        }
    };

    const buttonStyles = [
        baseStyles,
        getVariantStyles(),
        sizeStyles[size],
        roundedStyles[rounded],
        fullWidth ? 'w-full' : '',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <button
            type={type}
            disabled={disabled}
            className={buttonStyles}
            {...buttonProps}
        >
            {icon && iconPosition === 'left' && (
                <span className="shrink-0" aria-hidden="true">
                    {icon}
                </span>
            )}

            <span>{children}</span>

            {icon && iconPosition === 'right' && (
                <span className="shrink-0" aria-hidden="true">
                    {icon}
                </span>
            )}
        </button>
    );
};

export { Button };
export default Button;