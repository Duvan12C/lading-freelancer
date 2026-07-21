import type { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaWhatsapp } from 'react-icons/fa';
import Card from '../ui/Card';

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div
            className="
                relative
                isolate
                flex
                min-h-screen
                flex-col
                overflow-x-clip
         
            "
        >
            <Navbar />

            <main className="relative z-10 flex-1">
                {children}
            </main>

            <Footer />
            <a
                href="https://wa.me/50371830159"
                target="_blank"
                rel="noreferrer"
                aria-label="Escríbeme por WhatsApp"
                className="
                    fixed
                    bottom-6
                    right-6
                    z-50
                "
            >
                <Card
                    animation="float"
                    width="size-14"
                    height="size-14"
                    borderWidth="none"
                    rounded="full"
                    className="
                        flex
                        items-center
                        justify-center
                        bg-primario
                        text-blanco
                        shadow-lg
                    "
                >
                    <FaWhatsapp className="size-8" />
                </Card>
            </a>
        </div>
    );
};

export default MainLayout;