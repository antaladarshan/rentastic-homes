import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import WhatsAppFab from "@/components/ui/WhatsAppFab";

export const metadata: Metadata = {
  title: "Privacy Policy — Rentastic Homes",
  description: "Our privacy policy explains how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="flex-grow flex flex-col items-center justify-center py-xl px-gutter">
        <div className="bg-surface-container-lowest rounded-xl shadow-warm p-lg md:p-xl max-w-3xl w-full border border-outline-variant/30">
          <h1 className="font-display-lg-mobile md:font-display-lg text-primary text-center mb-xl">Privacy Policy</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg text-center">
            Last updated: October 2023. Welcome to Rentastic Homes. This Privacy Policy outlines how we collect, use, and protect
            your information when you use our services.
          </p>

          <div className="space-y-lg">
            {/* Data Collection */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-md">Data Collection</h2>
              <div className="space-y-sm text-on-surface-variant font-body-md">
                <p>
                  We may collect personal information that you voluntarily provide to us when you express an interest in obtaining
                  information about us or our products and Services, when you participate in activities on the Services, or otherwise
                  when you contact us.
                </p>
                <p>
                  The personal information that we collect depends on the context of your interactions with us and the Services, the
                  choices you make, and the products and features you use.
                </p>
              </div>
            </section>

            <div className="h-px w-full bg-outline-variant/30"></div>

            {/* How We Use Your Information */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-md">How We Use Your Information</h2>
              <div className="space-y-sm text-on-surface-variant font-body-md">
                <p>
                  We use personal information collected via our Services for a variety of business purposes described below. We
                  process your personal information for these purposes in reliance on our legitimate business interests, in order to
                  enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
                </p>
                <ul className="list-disc pl-md space-y-xs">
                  <li>To facilitate account creation and logon process.</li>
                  <li>To send administrative information to you.</li>
                  <li>To fulfill and manage your orders.</li>
                  <li>To post testimonials.</li>
                </ul>
              </div>
            </section>

            <div className="h-px w-full bg-outline-variant/30"></div>

            {/* Cookies */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-md">Cookies</h2>
              <div className="space-y-sm text-on-surface-variant font-body-md">
                <p>
                  We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information.
                  Specific information about how we use such technologies and how you can refuse certain cookies is set out in our
                  Cookie Notice.
                </p>
              </div>
            </section>
          </div>

          {/* Return to Home */}
          <div className="mt-xl text-center">
            <a
              href="/"
              className="inline-flex items-center justify-center font-label-caps text-label-caps bg-primary-container text-on-primary-container py-sm px-lg rounded-full hover:bg-primary hover:text-on-primary transition-colors shadow-warm group"
            >
              <span className="material-symbols-outlined mr-xs group-hover:translate-x-[-4px] transition-transform">arrow_back</span>
              Return to Home
            </a>
          </div>
        </div>
      </section>
      <WhatsAppFab />
    </>
  );
}
