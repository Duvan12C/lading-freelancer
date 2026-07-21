import { motion } from 'motion/react';
import type {
    HTMLMotionProps,
    MotionProps,
} from 'motion/react';
import type { ReactNode } from 'react';

type CardBorderWidth =
    | 'none'
    | 'thin'
    | 'normal'
    | 'thick';

type CardRounded =
    | 'none'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | 'full';

type CardColor =
    | 'borde'
    | 'borde-morado'
    | 'primario'
    | 'primario-claro'
    | 'blanco'
    | 'superficie';

type CardAnimation =
    | 'none'
    | 'lift'
    | 'scale'
    | 'lift-scale'
    | 'fade-up'
    | 'float';

interface CardProps
    extends Omit<HTMLMotionProps<'div'>, 'children'> {
    children: ReactNode;
    borderWidth?: CardBorderWidth;
    borderColor?: CardColor;
    hoverBorderColor?: CardColor;
    rounded?: CardRounded;
    width?: string;
    height?: string;
    animation?: CardAnimation;
}

const borderWidthStyles: Record<CardBorderWidth, string> = {
    none: 'border-0',
    thin: 'border',
    normal: 'border-2',
    thick: 'border-4',
};

const roundedStyles: Record<CardRounded, string> = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full',
    '2xl': 'rounded-2xl',
};

const borderColors: Record<CardColor, string> = {
    borde: 'border-borde',
    'borde-morado': 'border-borde-morado',
    primario: 'border-primario',
    'primario-claro': 'border-primario-claro',
    blanco: 'border-blanco',
    superficie: 'border-superficie',
};

const hoverBorderColors: Record<CardColor, string> = {
    borde: 'hover:border-borde',
    'borde-morado': 'hover:border-borde-morado',
    primario: 'hover:border-primario',
    'primario-claro': 'hover:border-primario-claro',
    blanco: 'hover:border-blanco',
    superficie: 'hover:border-superficie',
};

const getAnimation = (animation: CardAnimation): MotionProps => {
    switch (animation) {
        case 'lift':
            return {
                whileHover: { y: -8 },
                transition: {
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                },
            };

        case 'scale':
            return {
                whileHover: { scale: 1.03 },
                transition: {
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                },
            };

        case 'lift-scale':
            return {
                whileHover: {
                    y: -8,
                    scale: 1.02,
                },
                transition: {
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                },
            };

        case 'fade-up':
            return {
                initial: {
                    opacity: 0,
                    y: 24,
                },
                animate: {
                    opacity: 1,
                    y: 0,
                },
                transition: {
                    duration: 0.45,
                    ease: 'easeOut',
                },
            };
        case 'float':
            return {
                animate: {
                    y: [0, -8, 0],
                },
                transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                },
            };

        default:
            return {};
    }
};

const Card = ({
    children,
    borderWidth = 'thin',
    borderColor = 'borde',
    hoverBorderColor,
    rounded = 'lg',
    width = 'w-auto',
    height = 'h-auto',
    animation = 'none',
    className = '',
    ...divProps
}: CardProps) => {
    const cardStyles = [
        'transition-colors duration-300',
        borderWidthStyles[borderWidth],
        borderColors[borderColor],
        hoverBorderColor
            ? hoverBorderColors[hoverBorderColor]
            : '',
        roundedStyles[rounded],
        width,
        height,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <motion.div
            {...getAnimation(animation)}
            className={cardStyles}
            {...divProps}
        >
            {children}
        </motion.div>
    );
};

export default Card;
export { Card };