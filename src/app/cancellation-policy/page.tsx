import type { Metadata } from "next";
import { CheckCircle, AlertCircle, XCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import WhatsAppFab from "@/components/ui/WhatsAppFab";

export const metadata: Metadata = {
  title: "Cancellation Policy — Rentastic Homes",
  description: "Learn about our flexible cancellation policy and the refund timeline for cancellations.",
};

export default function CancellationPolicyPage() {
  const cancellationTiers = [
    {
      icon: CheckCircle,
      timeline: "More than 30 days before check-in",
      refund: "Full refund of the deposit, minus a small administrative processing fee.",
      color: "text-tertiary",
    },
    {
      icon: AlertCircle,
      timeline: "15 to 30 days before check-in",
      refund: "50% refund of the total booking cost.",
      color: "text-secondary",
    },
    {
      icon: XCircle,
      timeline: "Less than 15 days before check-in",
      refund: "No refund will be issued. The full booking amount is retained.",
      color: "text-error",
    },
  ];

  return (
    <>
      <section className="max-w-3xl mx-auto px-gutter py-xl flex-grow">
        {/* Header Section */}
        <div className="mb-lg border-b border-outline-variant/30 pb-md text-center md:text-left">
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-xs">
            Cancellation Policy
          </h1>
          <p className="font-body-sm text-body-sm text-on-surface-variant">Last updated: June 2024</p>
        </div>

        {/* Content Section */}
        <article className="space-y-lg text-on-surface">
          {/* Section 1: Introduction */}
          <section>
            <h2 className="font-headline-sm text-headline-sm text-on-background mb-sm">1. Introduction</h2>
            <p className="font-body-md text-body-md">
              At Rentastic Homes, we strive to provide a flexible and transparent booking experience. We understand that plans can
              change. This Cancellation Policy outlines the conditions under which you can cancel your reservation and any applicable
              refunds or fees.
            </p>
          </section>

          {/* Section 2: Booking Confirmation */}
          <section>
            <h2 className="font-headline-sm text-headline-sm text-on-background mb-sm">2. Booking Confirmation</h2>
            <p className="font-body-md text-body-md">
              A booking is considered confirmed once the initial deposit or full payment has been received and you have been issued a
              booking reference number. Until this point, the reservation is provisional.
            </p>
          </section>

          {/* Section 3: Cancellation Timeline & Refunds */}
          <section>
            <h2 className="font-headline-sm text-headline-sm text-on-background mb-sm">3. Cancellation Timeline & Refunds</h2>
            <div className="space-y-sm">
              {cancellationTiers.map((tier) => {
                const Icon = tier.icon;
                return (
                  <div key={tier.timeline} className="bg-surface-container-lowest p-md rounded-xl shadow-warm border border-outline-variant/20 flex items-start gap-sm">
                    <Icon size={20} className={`${tier.color} mt-1 shrink-0`} />
                    <div className="flex-grow">
                      <h3 className="font-headline-sm text-headline-sm text-on-background mb-xs">{tier.timeline}</h3>
                      <p className="font-body-md text-body-md text-on-surface-variant">{tier.refund}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Section 4: No-Shows & Early Departures */}
          <section>
            <h2 className="font-headline-sm text-headline-sm text-on-background mb-sm">4. No-Shows & Early Departures</h2>
            <p className="font-body-md text-body-md">
              In the event of a no-show (failure to arrive on the scheduled check-in date without prior notification) or an early
              departure after check-in, no refunds will be provided for the unused portion of the stay.
            </p>
          </section>

          {/* Section 5: Exceptional Circumstances */}
          <section>
            <h2 className="font-headline-sm text-headline-sm text-on-background mb-sm">5. Exceptional Circumstances</h2>
            <p className="font-body-md text-body-md">
              We review cancellations due to exceptional circumstances (e.g., severe illness, travel restrictions) on a case-by-case
              basis. Please contact our support team immediately if such an event occurs, providing relevant documentation.
            </p>
          </section>
        </article>

        {/* CTA Section */}
        <div className="mt-xl flex justify-center md:justify-end">
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-tertiary-container text-on-tertiary-container px-lg py-sm rounded-full hover:bg-tertiary hover:text-on-tertiary transition-colors shadow-warm font-label-caps text-label-caps group"
          >
            <span className="material-symbols-outlined mr-xs text-[18px] group-hover:scale-110 transition-transform">forum</span>
            Questions? Chat on WhatsApp
          </a>
        </div>
      </section>
      <WhatsAppFab />
    </>
  );
}
