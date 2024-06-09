export default function Footer() {
    return (
      <footer className="Footer">
        Créé par Flavien Patriarca AKA{" "}
        <span role="img" aria-label="turt">
        🐢
        </span>{" "}

        <span className=" span_footer">
            <h1 className="h_footer">
                <a href="#">Accueil</a>
            </h1>

            <h1 className="h_footer">
                <a href="/contact" target="_blank">Conctact</a>
            </h1>
        </span>

      </footer>
    );
};