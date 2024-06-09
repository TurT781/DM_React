export default function Footer() {
    return (
      <footer className="Footer">
        <ul>

        <li>Créé par Flavien Patriarca AKA</li>
        <span role="img" aria-label="turt">
        🐢
        </span>

        <span className=" span_footer">
            <li>
                <h1 className="h_footer">
                    <a href="/">Accueil</a>
                </h1>
            </li>

            <li>
                <h1 className="h_footer">
                    <a href="/contact">Conctact</a>
                </h1>
            </li>
        </span>

        </ul>
      </footer>
    );
};