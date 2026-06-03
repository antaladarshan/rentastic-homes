import { siteConfig } from "@/config/site";

export interface EnquiryRequest {
  name?:       string;
  phone?:      string;
  email?:      string;
  enquiryFor?: string;
  property?:   string;
  location?:   string;
  roomType?:   string;
}

// overridePhone — pass a property-specific number (digits only, with country code)
export function buildWhatsAppLink(req: EnquiryRequest = {}, overridePhone?: string): string {
  const lines = ["Hi Rentastic Homes! I'm interested in your PG / co-living spaces."];
  if (req.name)       lines.push(`Name: ${req.name}`);
  if (req.phone)      lines.push(`Phone: ${req.phone}`);
  if (req.email)      lines.push(`Email: ${req.email}`);
  if (req.enquiryFor) lines.push(`Looking for: ${req.enquiryFor}`);
  if (req.property)   lines.push(`Property: ${req.property}`);
  if (req.location)   lines.push(`Location: ${req.location}`);
  if (req.roomType)   lines.push(`Room type: ${req.roomType}`);
  lines.push("Please get in touch. Thank you!");

  const num = (overridePhone ?? siteConfig.whatsapp).replace(/\D/g, "");
  return `https://wa.me/${num}?text=${encodeURIComponent(lines.join("\n"))}`;
}
