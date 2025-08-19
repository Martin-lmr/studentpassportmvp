import { Lang } from "@/lib/dictionaries";

export default function Privacy({ params }: { params: { lang: Lang } }) {
  const { lang } = params;
  return (
    <div className="container py-10 text-neutral-200">
      {lang === "fr" ? (
        <>
          <h1 className="text-3xl font-bold mb-6">
            Politique de Confidentialité (RGPD)
          </h1>
          <p className="mb-4">
            La présente politique de confidentialité décrit comment <strong>StudentPassport</strong> collecte, utilise et protège vos données personnelles, en stricte conformité avec le Règlement Général sur la Protection des Données (<strong>RGPD</strong>).
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">1. Responsable du Traitement</h2>
          <p className="mb-4">
            Le responsable du traitement de vos données personnelles est :
            <br />
            <strong>[Nom de votre société]</strong>
            <br />
            <strong>[Adresse de votre siège social]</strong>
            <br />
            <strong>[Adresse email : privacy@studentpassport.com]</strong>
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">2. Données Collectées et Finalités</h2>
          <p className="mb-4">
            Nous collectons différentes catégories de données pour les finalités suivantes :
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Données d'identification :</strong> Nom, prénom, adresse email. Elles sont utilisées pour la création et la gestion de votre compte utilisateur.</li>
            <li className="mb-2"><strong>Données de paiement :</strong> Informations de carte bancaire, traitées de manière sécurisée par notre sous-traitant <strong>Stripe</strong>. Nous n'avons jamais accès à vos numéros de carte. Ces données servent à gérer vos abonnements et commandes.</li>
            <li className="mb-2"><strong>Données de navigation et d'utilisation :</strong> Pages visitées, adresse IP, type de navigateur. Elles sont collectées pour améliorer l'expérience utilisateur, analyser les performances du site et prévenir les fraudes.</li>
            <li className="mb-2"><strong>Préférences de service :</strong> Choix d'abonnement, préférences de notifications. Elles servent à personnaliser votre utilisation de notre service.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">3. Destinataires et Sous-traitants</h2>
          <p className="mb-4">
            Vos données peuvent être partagées avec des prestataires de services tiers agissant en tant que sous-traitants. Nous nous assurons que ces sous-traitants respectent pleinement la législation en vigueur sur la protection des données.
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Stripe :</strong> Pour le traitement sécurisé des paiements.</li>
            <li className="mb-2"><strong>Supabase :</strong> Pour l'authentification et la gestion des données de votre compte.</li>
            <li className="mb-2"><strong>[Nom d'un autre service si applicable, ex: Sendgrid pour les emails, Vercel pour l'hébergement]</strong></li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">4. Durée de Conservation des Données</h2>
          <p className="mb-4">
            Vos données personnelles sont conservées pendant la durée de votre abonnement et jusqu'à un maximum de <strong>trois (3) ans</strong> après la fin de notre relation commerciale ou votre dernière connexion. Cette période permet de répondre à d'éventuelles obligations légales et de litiges.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">5. Vos Droits</h2>
          <p className="mb-4">
            Conformément au <strong>RGPD</strong>, vous disposez des droits suivants concernant vos données :
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Droit d'accès et de rectification :</strong> Vous pouvez demander une copie de vos données et les faire corriger.</li>
            <li className="mb-2"><strong>Droit à l'effacement ("droit à l'oubli") :</strong> Vous pouvez demander la suppression de vos données.</li>
            <li className="mb-2"><strong>Droit à la limitation du traitement :</strong> Vous pouvez demander à ce que le traitement de vos données soit limité.</li>
            <li className="mb-2"><strong>Droit à la portabilité des données :</strong> Vous pouvez récupérer vos données dans un format structuré.</li>
            <li className="mb-2"><strong>Droit d'opposition :</strong> Vous pouvez vous opposer au traitement de vos données.</li>
          </ul>
          <p className="mb-4">
            Pour exercer ces droits, veuillez nous contacter à l'adresse email : <strong>privacy@studentpassport.com</strong>.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">6. Cookies</h2>
          <p className="mb-4">
            Nous utilisons des cookies pour améliorer votre expérience sur le Site. Certains sont essentiels au bon fonctionnement, d'autres servent à l'analyse de l'utilisation. Une bannière de cookies vous permet d'accepter ou de refuser leur utilisation.
          </p>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-6">
            Privacy Policy (GDPR)
          </h1>
          <p className="mb-4">
            This privacy policy describes how <strong>StudentPassport</strong> collects, uses, and protects your personal data, in strict compliance with the General Data Protection Regulation (<strong>GDPR</strong>).
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">1. Data Controller</h2>
          <p className="mb-4">
            The data controller for your personal data is:
            <br />
            <strong>[Your Company Name]</strong>
            <br />
            <strong>[Your Head Office Address]</strong>
            <br />
            <strong>[Email address: privacy@studentpassport.com]</strong>
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">2. Data Collected and Purposes</h2>
          <p className="mb-4">
            We collect different categories of data for the following purposes:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Identification Data:</strong> Name, email address. Used for creating and managing your user account.</li>
            <li className="mb-2"><strong>Payment Data:</strong> Credit card information, securely processed by our sub-processor <strong>Stripe</strong>. We never have access to your card numbers. This data is used to manage your subscriptions and orders.</li>
            <li className="mb-2"><strong>Browsing and Usage Data:</strong> Pages visited, IP address, browser type. Collected to improve the user experience, analyze site performance, and prevent fraud.</li>
            <li className="mb-2"><strong>Service Preferences:</strong> Subscription choices, notification preferences. Used to personalize your use of our service.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">3. Recipients and Sub-processors</h2>
          <p className="mb-4">
            Your data may be shared with third-party service providers acting as sub-processors. We ensure that these sub-processors fully comply with current data protection legislation.
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Stripe:</strong> For secure payment processing.</li>
            <li className="mb-2"><strong>Supabase:</strong> For authentication and management of your account data.</li>
            <li className="mb-2"><strong>[Name of another service if applicable, e.g., Sendgrid for emails, Vercel for hosting]</strong></li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">4. Data Retention Period</h2>
          <p className="mb-4">
            Your personal data is retained for the duration of your subscription and for a maximum of <strong>three (3) years</strong> after the end of our commercial relationship or your last login. This period allows us to meet potential legal obligations and handle disputes.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">5. Your Rights</h2>
          <p className="mb-4">
            In accordance with the <strong>GDPR</strong>, you have the following rights regarding your data:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Right to Access and Rectification:</strong> You can request a copy of your data and have it corrected.</li>
            <li className="mb-2"><strong>Right to Erasure ("right to be forgotten"):</strong> You can request the deletion of your data.</li>
            <li className="mb-2"><strong>Right to Restriction of Processing:</strong> You can request that the processing of your data be limited.</li>
            <li className="mb-2"><strong>Right to Data Portability:</strong> You can retrieve your data in a structured format.</li>
            <li className="mb-2"><strong>Right to Object:</strong> You can object to the processing of your data.</li>
          </ul>
          <p className="mb-4">
            To exercise these rights, please contact us at the email address: <strong>privacy@studentpassport.com</strong>.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">6. Cookies</h2>
          <p className="mb-4">
            We use cookies to improve your experience on the Site. Some are essential for proper functioning, while others are used for usage analysis. A cookie banner allows you to accept or refuse their use.
          </p>
        </>
      )}
    </div>
  );
}