import { Lang } from "@/lib/dictionaries";

export default function Cookies({ params }: { params: { lang: Lang } }) {
  const { lang } = params;
  return (
    <div className="container py-10 text-neutral-200">
      {lang === "fr" ? (
        <>
          <h1 className="text-3xl font-bold mb-6">Politique relative aux Cookies</h1>
          <p className="mb-4">
            Pour assurer le bon fonctionnement de notre site web et améliorer votre expérience de navigation, nous utilisons des cookies et autres traceurs. Cette politique explique ce que sont les cookies, comment nous les utilisons et comment vous pouvez les gérer.
          </p>
          <p className="mb-4">
            En naviguant sur notre site, vous acceptez notre utilisation de cookies essentiels, et vous donnez votre consentement pour les cookies facultatifs via notre bannière de cookies.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">1. Qu'est-ce qu'un cookie ?</h2>
          <p className="mb-4">
            Un cookie est un petit fichier texte déposé sur votre disque dur par le serveur du site que vous visitez. Il contient des informations (comme un identifiant unique) qui permettent au site de vous reconnaître lors de vos prochaines visites. Les cookies ne peuvent pas contenir de virus ni installer de logiciels malveillants sur votre appareil.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">2. Types de cookies utilisés</h2>
          <p className="mb-4">
            Nous utilisons plusieurs types de cookies pour différentes finalités :
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Cookies nécessaires :</strong> Ces cookies sont indispensables au bon fonctionnement du site. Ils permettent des fonctionnalités de base comme l'authentification, la gestion du panier d'achat, ou la mémorisation de vos préférences de consentement. Ils ne peuvent pas être désactivés.</li>
            <li className="mb-2"><strong>Cookies de performance et d'analyse :</strong> Ces cookies nous aident à comprendre comment les visiteurs interagissent avec notre site, en collectant des informations de manière anonyme. Ils nous permettent de mesurer l'audience et d'améliorer la performance du site.</li>
            <li className="mb-2"><strong>Cookies marketing et publicitaires :</strong> Ces cookies sont utilisés pour suivre les visiteurs sur différents sites web afin de leur proposer des publicités ciblées et pertinentes. Ils peuvent être utilisés par nos partenaires publicitaires pour créer un profil de vos intérêts.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">3. Gestion des cookies</h2>
          <p className="mb-4">
            Conformément à la réglementation, nous vous demandons votre consentement avant de déposer des cookies facultatifs. Vous avez le contrôle total sur les cookies.
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Bannière de consentement :</strong> Lors de votre première visite, une bannière de cookies vous permet d'accepter ou de refuser les cookies non nécessaires.</li>
            <li className="mb-2"><strong>Paramètres du navigateur :</strong> Vous pouvez à tout moment modifier vos choix en configurant votre navigateur. La plupart des navigateurs vous permettent de refuser ou de supprimer tous les cookies. Toutefois, si vous refusez les cookies nécessaires, certaines fonctionnalités du site pourraient ne plus fonctionner correctement.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">4. Durée de conservation</h2>
          <p className="mb-4">
            La durée de vie d'un cookie varie en fonction de son type. Les cookies de session sont supprimés lorsque vous fermez votre navigateur, tandis que les cookies persistants restent sur votre appareil pour une durée déterminée ou jusqu'à ce que vous les supprimiez manuellement. La durée de conservation des cookies de consentement est de <strong>13 mois</strong> maximum, conformément à la réglementation.
          </p>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-6">Cookies Policy</h1>
          <p className="mb-4">
            To ensure our website functions correctly and to improve your browsing experience, we use cookies and other trackers. This policy explains what cookies are, how we use them, and how you can manage them.
          </p>
          <p className="mb-4">
            By browsing our site, you agree to our use of essential cookies, and you provide your consent for optional cookies via our cookie banner.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">1. What is a cookie?</h2>
          <p className="mb-4">
            A cookie is a small text file placed on your hard drive by the server of the website you visit. It contains information (like a unique identifier) that allows the site to recognize you on subsequent visits. Cookies cannot contain viruses or install malware on your device.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">2. Types of cookies used</h2>
          <p className="mb-4">
            We use several types of cookies for different purposes:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Necessary cookies:</strong> These cookies are essential for the proper functioning of the site. They enable basic functionalities such as authentication, shopping cart management, or remembering your consent preferences. They cannot be disabled.</li>
            <li className="mb-2"><strong>Performance and analytics cookies:</strong> These cookies help us understand how visitors interact with our site by collecting information anonymously. They allow us to measure audience and improve site performance.</li>
            <li className="mb-2"><strong>Marketing and advertising cookies:</strong> These cookies are used to track visitors across different websites to serve targeted and relevant advertisements. They may be used by our advertising partners to build a profile of your interests.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">3. Managing cookies</h2>
          <p className="mb-4">
            In accordance with regulations, we ask for your consent before placing optional cookies. You have full control over cookies.
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Consent banner:</strong> On your first visit, a cookie banner allows you to accept or refuse non-essential cookies.</li>
            <li className="mb-2"><strong>Browser settings:</strong> You can change your choices at any time by configuring your browser. Most browsers allow you to refuse or delete all cookies. However, if you refuse necessary cookies, some site features may not function correctly.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">4. Data retention period</h2>
          <p className="mb-4">
            The lifespan of a cookie varies depending on its type. Session cookies are deleted when you close your browser, while persistent cookies remain on your device for a set period or until you delete them manually. The retention period for consent cookies is a maximum of <strong>13 months</strong>, in accordance with regulations.
          </p>
        </>
      )}
    </div>
  );
}