import type { Metadata } from "next";
import { CheckCircle, AlertCircle, Ban } from "lucide-react";
import { siteConfig } from "@/config/site";
import WhatsAppFab from "@/components/ui/WhatsAppFab";

export const metadata: Metadata = {
  title: "Refund Policy — Rentastic Homes",
  description: "Understand our refund policy, eligibility criteria, and processing times.",
};

export default function RefundPolicyPage() {
  return (
    <>
      <section className="flex-grow py-xl px-gutter max-w-3xl mx-auto w-full">
        <div className="mb-lg text-center">
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-md">
            Refund Policy
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Last updated: October 26, 2024</p>
        </div>

        <div className="bg-surface-container-lowest rounded-xl p-lg md:p-xl shadow-warm border border-outline-variant/30 space-y-lg">
          {/* Eligibility Section */}
          <section>
            <h2 className="font-headline-sm text-headline-sm text-on-surface mb-sm flex items-center gap-xs">
              <CheckCircle size={20} className="text-primary" />
              Eligibility for Refunds
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-md">
              Refunds are subject to the terms agreed upon during the booking process. Generally, you may be eligible for a refund
              under the following circumstances:
            </p>
            <ul className="list-disc pl-md font-body-md text-body-md text-on-surface-variant space-y-sm">
              <li>Cancellations made within the free cancellation window.</li>
              <li>Significant misrepresentation of the property upon move-in.</li>
              <li>Unresolved critical maintenance issues within the first 48 hours of occupancy.</li>
            </ul>
          </section>

          <div className="h-px bg-outline-variant/30 w-full"></div>

          {/* Processing Times Section */}
          <section>
            <h2 className="font-headline-sm text-headline-sm text-on-surface mb-sm flex items-center gap-xs">
              <AlertCircle size={20} className="text-secondary" />
              Processing Times
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-md">
              Once a refund is approved, we initiate the transfer immediately. However, processing times vary based on your payment
              method:
            </p>
            <div className="bg-surface-container rounded-lg p-md grid grid-cols-1 md:grid-cols-2 gap-md">
              <div>
                <h3 className="font-label-caps text-label-caps text-primary mb-xs">CREDIT/DEBIT CARDS</h3>
                <p className="font-body-sm text-body-sm text-on-surface">5-10 business days</p>
              </div>
              <div>
                <h3 className="font-label-caps text-label-caps text-primary mb-xs">BANK TRANSFERS</h3>
                <p className="font-body-sm text-body-sm text-on-surface">7-14 business days</p>
              </div>
            </div>
          </section>

          <div className="h-px bg-outline-variant/30 w-full"></div>

          {/* Non-Refundable Deposits Section */}
          <section>
            <h2 className="font-headline-sm text-headline-sm text-on-surface mb-sm flex items-center gap-xs">
              <Ban size={20} className="text-error" />
              Non-Refundable Deposits
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Please note that certain fees are strictly non-refundable to cover administrative costs and property holding periods.
              These include application fees, background check fees, and the initial booking holding deposit if cancelled outside the
              grace period.
            </p>
          </section>
        </div>

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
