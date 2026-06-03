import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import WhatsAppFab from "@/components/ui/WhatsAppFab";

export const metadata: Metadata = {
  title: "Terms & Conditions — Rentastic Homes",
  description: "Read our terms and conditions governing the use of Rentastic Homes services.",
};

export default function TermsConditionsPage() {
  const sections = [
    {
      number: "1",
      title: "Introduction",
      content: `Welcome to Rentastic Homes. These Terms & Conditions govern your use of our premium co-living spaces and related services. By signing a residency agreement or utilizing our platforms, you agree to comply with these terms, designed to ensure a harmonious, secure, and approachably premium experience for all residents.

Please read these terms carefully. They constitute a legally binding agreement between you and Rentastic Homes.`,
    },
    {
      number: "2",
      title: "User Responsibilities",
      content: `As a resident of Rentastic Homes, you are expected to maintain the standard of living that defines our community. This includes:

• Respecting the quiet enjoyment of fellow residents.
• Maintaining the cleanliness and integrity of personal and shared spaces.
• Promptly reporting any maintenance issues via our dedicated concierge channels.
• Refraining from unauthorized alterations to the property or its furnishings.`,
    },
    {
      number: "3",
      title: "Residency Rules",
      content: `Our co-living spaces are designed to blend the sophistication of a hotel with the warmth of a home. To preserve this environment, the following rules apply:

Guest Policy: Guests are welcome but must be registered if staying overnight. Residents are entirely responsible for the conduct of their guests.

Pet Policy: While we love animals, pets are only permitted in designated pet-friendly residences subject to prior written approval and applicable fees.`,
    },
    {
      number: "4",
      title: "Liability & Insurance",
      content: `Rentastic Homes is committed to providing a secure environment ("Checked In, Worries Out!"). However, residents are responsible for their personal belongings.

We strongly recommend that all residents obtain comprehensive renter's insurance to cover personal property against loss, damage, or theft. Rentastic Homes' liability is limited strictly to structural maintenance and gross negligence on the part of our staff.`,
    },
    {
      number: "5",
      title: "Termination",
      content: `Violations of these Terms & Conditions may result in immediate termination of the residency agreement. In such events, the resident remains liable for outstanding fees and potential damages as outlined in their specific lease contract.`,
    },
  ];

  return (
    <>
      <section className="max-w-[800px] mx-auto px-gutter py-xl flex-grow">
        <header className="text-center mb-xl">
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-sm">
            Terms & Conditions
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Last Updated: October 24, 2024</p>
        </header>

        <article className="bg-surface-container-lowest rounded-xl shadow-warm p-lg md:p-xl space-y-lg text-on-surface-variant font-body-md text-body-md border border-outline-variant/30">
          {sections.map((section, index) => (
            <div key={section.number}>
              {index > 0 && <hr className="border-t border-outline-variant/30 my-lg" />}
              <section className="space-y-sm">
                <h2 className="font-headline-md text-headline-md text-primary">
                  {section.number}. {section.title}
                </h2>
                <div className="space-y-sm whitespace-pre-wrap text-on-surface-variant">
                  {section.content.split("\n\n").map((paragraph, i) => (
                    <p key={i} className="font-body-md text-body-md">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            </div>
          ))}
        </article>

        {/* CTA */}
        <div className="mt-xl flex justify-center md:justify-end">
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-tertiary-container text-on-tertiary-container px-lg py-sm rounded-full hover:bg-tertiary hover:text-on-tertiary transition-colors shadow-warm font-label-caps text-label-caps group"
          >
            <span className="material-symbols-outlined mr-xs text-[18px]">chat</span>
            Contact Support
          </a>
        </div>
      </section>
      <WhatsAppFab />
    </>
  );
}
