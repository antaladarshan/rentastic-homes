import type { Metadata } from "next";
import Image from "next/image";
import { Heart, Eye, Home, Shield, Sparkles, CheckCheck, Users } from "lucide-react";
import AboutEnquiryForm from "@/components/ui/AboutEnquiryForm";
import WhatsAppFab from "@/components/ui/WhatsAppFab";

export const metadata: Metadata = {
  title: "About Rentastic Homes — Our Story",
  description: "Rentastic Homes - Premium PG and co-living in Ahmedabad built to redefine student living. Checked In, Worries Out!",
};

const values = [
  { icon: <Home size={32} />,        title: "Stability",              body: "A reliable foundation you can count on every day." },
  { icon: <Shield size={32} />,      title: "Safety",                 body: "Secure environments for total peace of mind." },
  { icon: <Sparkles size={32} />,    title: "Clean Spaces",           body: "Meticulously maintained, spotless living areas." },
  { icon: <CheckCheck size={32} />,  title: "Dependable Daily Living",body: "Seamless routines supported by attentive service." },
  { icon: <Heart size={32} />,       title: "Comfort",                body: "Premium furnishings designed for relaxation." },
  { icon: <Users size={32} />,       title: "Community & Privacy",    body: "The perfect balance of social engagement and personal space." },
];

export default function AboutPage() {
  return (
    <>
      <main>
        {/* Hero */}
        <section className="relative min-h-[614px] flex items-center justify-center text-center px-gutter py-xl pt-24 md:pt-xl overflow-hidden">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDN_KNqjKjP1N4F6puO8QHhIT1NLkNA4rw48_tdWypiNUybdHM2ZtiTGdHszNi2ih-x66qGa32OfyyvIBnquQGbyHmyC-GD8Op0kBslZI6zaPW6dXW7nm1QEQyo-q8Zm09DQtC6M0eAnKfM90CZwqqYWQdxogTgjhEpkvhtCpcu785vyubjipnx8uxcbhKaqnr3Sy-UTodZBZGfc0qoPediLtfHDNYPFiP5s8Xo_4EZPgO-r6vV2eJgcNmGDf2Id-2nXDCyZcdQGJiF"
            alt="Students relaxing in a warm co-living common area"
            fill priority className="object-cover object-center -z-10"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-on-surface/40 -z-10" />
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col gap-md">
            <h1 className="text-display-lg-mobile md:text-display-lg text-white">Feels Like Home</h1>
            <p className="text-body-lg text-white/90">Checked In, Worries Out!</p>
          </div>
        </section>

        {/* Where It Started */}
        <section className="py-xl px-gutter max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-2 gap-xl items-center">
            <div className="flex flex-col gap-md">
              <h2 className="text-headline-md text-on-surface">Where It Started. Where It&apos;s Going.</h2>
              <p className="text-body-md text-on-surface-variant">
                Founded in 2021 by Yash Patel, Rentastic Homes began with a simple observation: finding quality, dependable housing for students and young professionals was harder than it should be. The market was fragmented, lacking a standard of care that respected residents&apos; need for both comfort and community. We set out to change that by building a brand focused on meticulous service, transparent communication, and thoughtfully designed spaces. Today, we&apos;re growing across key locations in Ahmedabad, carrying that original promise forward.
              </p>
              <div className="flex flex-col gap-sm">
                <p className="text-label-caps text-on-surface font-semibold">Founded by</p>
                <div className="px-md py-sm bg-secondary-container/20 rounded-full border border-secondary/30 inline-block">
                  <span className="text-body-sm font-semibold text-on-surface">Yash Patel</span>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-warm">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCd39xtUdlXwIQIYF_GQxlVygnUGqzK_jQXtwrHl6JxbB-KeVs-9lZc5Spxi5tTVrfP5hoeNkA5pRdzja8i33s1_cjntCcgG1ss6i_8EYq3Ypf1wXqLvRhGNh8Wj8EqaVaMoH8uMJL1_2K8MFeS40HseOEEddecxto1Bz_YWMIx3Z0VlOGZKPXnnKwbU2TC1e4ISstj6hx_blKaqmHp4EKWSt5s3GkznPIskJe4Q31nDHclHTqPxhQBdljeNe2UUDvMGo-MAeQxu7Vl"
                alt="Modern co-living property exterior"
                width={700} height={500} className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* Consistency */}
        <section className="bg-surface-container-low py-xl px-gutter">
          <div className="max-w-3xl mx-auto text-center flex flex-col gap-md">
            <h2 className="text-headline-md text-on-surface">When Consistency Became Our Foundation</h2>
            <p className="text-body-lg text-on-surface-variant">
              As we expanded, we realised that scale shouldn&apos;t mean compromise. Every new residence became an
              opportunity to refine our operations, ensuring that the warm welcome and dependable maintenance experienced
              at our very first location was replicated seamlessly everywhere. This dedication to operational excellence
              is the bedrock of Rentastic Homes — allowing us to grow rapidly while maintaining the experience our
              residents trust.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-xl px-gutter max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-2 gap-lg">
            {[
              { icon: <Heart size={24} />, title: "Our Mission",  body: "To provide premium, fully-managed, safe living spaces for students and young professionals with a focus on community, comfort, and peace of mind. We handle the complexities of daily life so our residents can focus entirely on their studies and personal growth." },
              { icon: <Eye   size={24} />, title: "Our Vision",   body: "To be the most trusted co-living brand in India, delivering 'Checked In, Worries Out!' living experiences that combine premium amenities with genuine community care and unwavering safety standards." },
            ].map((item) => (
              <div key={item.title} className="bg-surface-container-lowest p-lg rounded-xl shadow-warm border border-outline-variant/30 flex flex-col gap-md">
                <div className="w-12 h-12 bg-secondary-container text-on-secondary-container rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-headline-sm text-on-surface">{item.title}</h3>
                <p className="text-body-md text-on-surface-variant">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Values grid */}
        <section className="bg-surface-container py-xl px-gutter">
          <div className="max-w-[1280px] mx-auto flex flex-col gap-xl">
            <h2 className="text-headline-md text-on-surface text-center">What Matters When You&apos;re Away From Home</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-lg">
              {values.map((v) => (
                <div key={v.title} className="bg-surface-container-lowest p-md rounded-xl shadow-warm flex flex-col items-center text-center gap-sm">
                  <span className="text-primary-container">{v.icon}</span>
                  <h4 className="text-headline-sm text-on-surface">{v.title}</h4>
                  <p className="text-body-sm text-on-surface-variant">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing band */}
        <section className="bg-surface-container-high py-xl px-gutter text-center">
          <h2 className="text-display-lg-mobile md:text-display-lg text-on-surface max-w-4xl mx-auto">
            Because every detail matters when you&apos;re away from home.
          </h2>
        </section>

        {/* Enquiry form */}
        <AboutEnquiryForm />
      </main>
      <WhatsAppFab />
    </>
  );
}
