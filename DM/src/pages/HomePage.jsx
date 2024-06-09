import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="sentence_haut">
        <div className="txtImg">
          <img
            src="https://trello.com/1/cards/651d91910538041bd6f7bbba/attachments/651d91a58b5516f7d0f5075f/download/livre_bibli.jpg"
            className="hautp"
            alt="Bookshelf"
          />
          <h3 className="txt_img">Accès instantané aux <br />Livres du monde entier</h3>
        </div>

        <div className="background">
          <p>Horraires d'ouverture <br /><strong>Jours ouvrés</strong></p>
          <p>
            <hr />Temps de réponse<br /><strong>2 ans <br /> merci de votre compréhension </strong>
          </p>
        </div>
      </div>
      <div className="textHomePage">
        <p>
          Bienvenue sur notre plateforme de vente de livres en ligne !
          Nous vous proposons une vaste sélection de livres allant des best-sellers aux classiques, en passant par les dernières nouveautés. Que vous soyez à la recherche de romans captivants, de passionnantes biographies, de livres pour enfants ou de manuels pratiques, notre boutique en ligne a tout ce qu'il vous faut.
          Profitez d'une expérience d'achat fluide et agréable, avec des descriptions détaillées et des avis de lecteurs pour vous aider à faire le bon choix. Découvrez dès maintenant notre collection et trouvez votre prochaine lecture favorite.
        </p>
      </div>
    </>
  );
};

export default HomePage;
