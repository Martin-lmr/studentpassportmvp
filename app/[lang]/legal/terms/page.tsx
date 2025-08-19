import { Lang } from "@/lib/dictionaries";

export default function Terms({ params }: { params: { lang: Lang } }) {
  const { lang } = params;
  return (
    <div className="container py-10 text-neutral-200">
      {lang === "fr" ? (
        <>
          <h1 className="text-3xl font-bold mb-6">
            Conditions Générales d’Utilisation et de Vente (CGUV)
          </h1>
          <p className="mb-4">
            Les présentes Conditions Générales d’Utilisation et de Vente (ci-après les <strong>"CGUV"</strong>) régissent l'accès et l'utilisation du site web <strong>StudentPassport</strong> et de l'ensemble des services et produits qui y sont proposés.
          </p>
          <p className="mb-4">
            En accédant au Site, en l'utilisant ou en souscrivant à un abonnement ou un achat, vous reconnaissez avoir pris connaissance, compris et accepté sans réserve l'intégralité des présentes CGUV.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">1. Mentions Légales</h2>
          <p className="mb-4">
            <strong>Nom de l'entreprise :</strong> [Nom de votre société]
            <br />
            <strong>Forme juridique :</strong> [Ex : SAS, SARL, Micro-entreprise]
            <br />
            <strong>Siège social :</strong> [Votre adresse complète]
            <br />
            <strong>Numéro de SIRET :</strong> [Votre numéro de SIRET]
            <br />
            <strong>Numéro de TVA intracommunautaire :</strong> [Votre numéro de TVA, si applicable]
            <br />
            <strong>Adresse email :</strong> [Votre adresse email]
            <br />
            <strong>Directeur de la publication :</strong> [Nom du dirigeant]
            <br />
            <strong>Hébergeur du Site :</strong> [Nom de l'hébergeur] - [Adresse de l'hébergeur]
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">2. Objet et Description des Services</h2>
          <p className="mb-4">
            <strong>StudentPassport</strong> propose un service d'accompagnement numérique aux étudiants pour leur installation dans une nouvelle ville. Ce service peut inclure des guides pratiques, des conseils personnalisés et l'accès à une communauté. <strong>StudentPassport</strong> propose également une boutique en ligne d'articles physiques destinés aux étudiants.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">3. Prix, Paiement et Abonnement</h2>
          <p className="mb-4">
            Les prix des services et produits sont indiqués en euros (€), toutes taxes comprises (TTC). Le paiement est sécurisé via la plateforme <strong>Stripe</strong>.
          </p>
          <p className="mb-4">
            Les abonnements sont renouvelés tacitement chaque mois ou chaque année. Vous pouvez les résilier à tout moment depuis votre espace personnel. La résiliation prendra effet à la fin de la période d'abonnement en cours.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">4. Droit de Rétractation</h2>
          <p className="mb-4">
            <strong>Biens matériels :</strong> Conformément à l’article L. 221-18 du Code de la consommation, vous disposez d'un délai de quatorze (14) jours à compter de la réception pour exercer votre droit de rétractation. Les frais de retour restent à votre charge.
          </p>
          <p className="mb-4">
            <strong>Services et contenus numériques :</strong> Le droit de rétractation ne s'applique pas aux contenus numériques fournis immédiatement après achat (ex: accès immédiat aux guides et ressources), conformément à l’article L. 221-28 du Code de la consommation.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">5. Propriété Intellectuelle</h2>
          <p className="mb-4">
            Le contenu du Site (textes, images, vidéos, marques, logos, etc.) est la propriété exclusive de <strong>StudentPassport</strong>. Toute reproduction ou utilisation, totale ou partielle, est strictement interdite sans notre autorisation écrite préalable.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">6. Protection des Données Personnelles (RGPD)</h2>
          <p className="mb-4">
            Nous nous engageons à protéger vos données personnelles conformément au Règlement Général sur la Protection des Données (<strong>RGPD</strong>). Les données collectées sont utilisées pour la gestion des services et l'amélioration de l'expérience utilisateur. Vous disposez d’un droit d’accès, de rectification, de suppression et d’opposition au traitement de vos données. Pour plus de détails, veuillez consulter notre <strong>Politique de Confidentialité</strong>.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">7. Responsabilité</h2>
          <p className="mb-4">
            <strong>StudentPassport</strong> met tout en œuvre pour assurer l'exactitude des informations et la disponibilité du Site. Cependant, nous ne pouvons être tenus responsables des erreurs, omissions ou d'une indisponibilité temporaire du service. L'utilisation du Site se fait sous votre seule responsabilité.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">8. Droit Applicable et Litiges</h2>
          <p className="mb-4">
            Les présentes CGUV sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
          </p>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-6">
            General Terms and Conditions of Use and Sale (GTCUS)
          </h1>
          <p className="mb-4">
            These General Terms and Conditions of Use and Sale (hereinafter the <strong>"GTCUS"</strong>) govern the access and use of the <strong>StudentPassport</strong> website and all services and products offered therein.
          </p>
          <p className="mb-4">
            By accessing or using the Site, or by subscribing or making a purchase, you acknowledge that you have read, understood, and fully and unreservedly accepted these GTCUS.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">1. Legal Notice</h2>
          <p className="mb-4">
            <strong>Company Name:</strong> [Your Company Name]
            <br />
            <strong>Legal form:</strong> [e.g., SAS, SARL]
            <br />
            <strong>Head Office:</strong> [Your full address]
            <br />
            <strong>Registration Number (SIRET):</strong> [Your SIRET number]
            <br />
            <strong>Intra-community VAT number:</strong> [Your VAT number, if applicable]
            <br />
            <strong>Email address:</strong> [Your email address]
            <br />
            <strong>Publication Director:</strong> [Name of the director]
            <br />
            <strong>Website Host:</strong> [Host Name] - [Host Address]
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">2. Purpose and Description of Services</h2>
          <p className="mb-4">
            <strong>StudentPassport</strong> provides digital relocation assistance services for students moving to a new city. This service may include practical guides, personalized advice, and access to a community. <strong>StudentPassport</strong> also offers an online shop with physical products for students.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">3. Pricing, Payment, and Subscription</h2>
          <p className="mb-4">
            Prices for services and products are indicated in euros (€), all taxes included (TTC). Payment is securely processed via the <strong>Stripe</strong> platform.
          </p>
          <p className="mb-4">
            Subscriptions are automatically renewed monthly or annually. You can cancel them at any time from your personal space. The cancellation will take effect at the end of the current subscription period.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">4. Right of Withdrawal</h2>
          <p className="mb-4">
            <strong>Physical goods:</strong> In accordance with EU Directive 2011/83/EU, you have a period of fourteen (14) days from the receipt to exercise your right of withdrawal. Return shipping costs are at your expense.
          </p>
          <p className="mb-4">
            <strong>Digital services and content:</strong> The right of withdrawal does not apply to digital content delivered immediately after purchase (e.g., immediate access to guides and resources), in accordance with EU Directive 2011/83/EU.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">5. Intellectual Property</h2>
          <p className="mb-4">
            The content of the Site (texts, images, videos, trademarks, logos, etc.) is the exclusive property of <strong>StudentPassport</strong>. Any reproduction or use, in whole or in part, is strictly prohibited without our prior written authorization.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">6. Personal Data Protection (GDPR)</h2>
          <p className="mb-4">
            We are committed to protecting your personal data in accordance with the General Data Protection Regulation (<strong>GDPR</strong>). The collected data is used for managing services and improving the user experience. You have the right to access, rectify, delete, and object to the processing of your data. For more details, please consult our <strong>Privacy Policy</strong>.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">7. Liability</h2>
          <p className="mb-4">
            <strong>StudentPassport</strong> makes every effort to ensure the accuracy of the information and the availability of the Site. However, we cannot be held liable for any errors, omissions, or temporary unavailability of the service. The use of the Site is at your sole risk.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">8. Applicable Law and Disputes</h2>
          <p className="mb-4">
            These GTCUS are governed by French law. In the event of a dispute, the French courts will have sole jurisdiction.
          </p>
        </>
      )}
    </div>
  );
}