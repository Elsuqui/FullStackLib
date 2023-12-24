import "../styles/components/footer.css";
export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer items">
                <span className="items branding">© 2023 <a href="" className="items text--underline">Biblioteca FullStack</a>. Todos los derechos reservados.
                </span>
                <ul className="items options">
                    <li>
                        <a href="#" className="items text--underline option">Acerca de Nosotros</a>
                    </li>
                    <li>
                        <a href="#" className="items text--underline option">Políticas de Privacidad</a>
                    </li>
                    <li>
                        <a href="#" className="items text--underline option">Licencias</a>
                    </li>
                    <li>
                        <a href="#" className="items text--underline">Contactos</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};