import { Lang } from "@/lib/dictionaries";

export default function Imprint({ params }: { params: { lang: Lang } }) {
  const { lang } = params;
  return (
    <div className="container py-10 text-neutral-200">
      {lang === "fr" ? (
        <>
          <h1 className="text-3xl font-bold mb-6">Mentions Légales</h1>
          <p className="mb-4">
            Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (<strong>LCEN</strong>), les utilisateurs du site <strong>StudentPassport</strong> sont informés de l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.
          </p>
          <h2 className="text-xl font-semibold mt-8 mb-4">1. Éditeur du Site</h2>
          <p className="mb-4">
            <strong>Nom :</strong> StudentPassport
            <br />
            <strong>Forme juridique :</strong> [Ex : Micro-entreprise, SAS, SARL]
            <br />
            <strong>N° SIRET :</strong> [Votre numéro de SIRET]
            <br />
            <strong>Adresse du siège social :</strong> [Votre adresse complète]
            <br />
            <strong>Adresse e-mail :</strong> [Votre adresse email de contact]
            <br />
            <strong>Numéro de téléphone :</strong> [Votre numéro de téléphone]
          </p>
          <h2 className="text-xl font-semibold mt-8 mb-4">2. Directeur de la publication</h2>
          <p className="mb-4">
            <strong>Nom :</strong> Martin Lemaire
            <br />
            <strong>Contact :</strong> [Votre adresse e-mail ou votre numéro de téléphone]
          </p>
          <h2 className="text-xl font-semibold mt-8 mb-4">3. Hébergeur du Site</h2>
          <p className="mb-4">
            <strong>Nom :</strong> Vercel Inc.
            <br />
            <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA
            <br />
            <strong>Contact :</strong> [Contact de l'hébergeur, si applicable]
          </p>
          <h2 className="text-xl font-semibold mt-8 mb-4">4. Propriété Intellectuelle</h2>
          <p className="mb-4">
            L'ensemble du site <strong>StudentPassport</strong>, y compris les textes, graphismes, logos, images et vidéos, est la propriété exclusive de l'éditeur, sauf mention contraire. Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de l'éditeur.
          </p>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-6">Legal Notice</h1>
          <p className="mb-4">
            In accordance with the provisions of French law n° 2004-575 of 21 June 2004 on confidence in the digital economy (<strong>LCEN</strong>), users of the <strong>StudentPassport</strong> website are informed of the identity of the various parties involved in its creation and monitoring.
          </p>
          <h2 className="text-xl font-semibold mt-8 mb-4">1. Website Publisher</h2>
          <p className="mb-4">
            <strong>Name:</strong> StudentPassport
            <br />
            <strong>Legal form:</strong> [e.g., Sole proprietor, SAS, SARL]
            <br />
            <strong>SIRET No.:</strong> [Your SIRET number]
            <br />
            <strong>Registered office:</strong> [Your full address]
            <br />
            <strong>Email address:</strong> [Your contact email address]
            <br />
            <strong>Phone number:</strong> [Your phone number]
          </p>
          <h2 className="text-xl font-semibold mt-8 mb-4">2. Publication Director</h2>
          <p className="mb-4">
            <strong>Name:</strong> Martin Lemaire
            <br />
            <strong>Contact:</strong> [Your email address or phone number]
          </p>
          <h2 className="text-xl font-semibold mt-8 mb-4">3. Website Host</h2>
          <p className="mb-4">
            <strong>Name:</strong> Vercel Inc.
            <br />
            <strong>Address:</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA
            <br />
            <strong>Contact:</strong> [Host contact, if applicable]
          </p>
          <h2 className="text-xl font-semibold mt-8 mb-4">4. Intellectual Property</h2>
          <p className="mb-4">
            The entire <strong>StudentPassport</strong> website, including texts, graphics, logos, images, and videos, is the exclusive property of the publisher, unless otherwise stated. Any reproduction, representation, modification, publication, or adaptation of all or part of the elements of the site, regardless of the means or process used, is prohibited without the publisher's prior written authorization.
          </p>
        </>
      )}
    </div>
  );
}