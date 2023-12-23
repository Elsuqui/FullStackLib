export const Footer = () => {
    return (
        <footer className="bg-neutral-800 text-white mt-4">
            <div className="w-full h-20 mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="" className="hover:underline">Biblioteca FullStack</a>. Todos los derechos reservados.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Acerca de Nosotros</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Políticas de Privacidad</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Licencias</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contactos</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};