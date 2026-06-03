import Image from "next/image";
import { BedDouble, Wind, Wifi, BookOpen, Droplets, Tv2, ArrowRight } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import type { RoomData } from "@/data/properties";

const ICONS = [
  <BedDouble size={18} key="bed" />,
  <Wind      size={18} key="ac"  />,
  <Wifi      size={18} key="wifi"/>,
  <BookOpen  size={18} key="desk"/>,
  <Droplets  size={18} key="hot" />,
  <Tv2       size={18} key="tv"  />,
];

interface RoomCardsProps {
  rooms:           RoomData[];
  propertyName:    string;
  whatsappNumber:  string;
}

export default function RoomCards({ rooms, propertyName, whatsappNumber }: RoomCardsProps) {
  return (
    <section>
      <h2 className="text-headline-md text-on-background mb-md">
        Choose Your <span className="text-primary">Room</span>
      </h2>
      <div className="flex flex-col gap-md">
        {rooms.map((room) => {
          const waHref = buildWhatsAppLink({ property: propertyName, roomType: room.name }, whatsappNumber);
          return (
            <div key={room.id} className="bg-surface-container-lowest rounded-xl p-sm flex flex-col md:flex-row gap-md border border-outline-variant/20 shadow-[0_4px_20px_rgba(59,36,18,0.06)]">
              {/* Image */}
              <div className="w-full md:w-1/3 h-48 relative rounded-lg overflow-hidden shrink-0">
                <Image src={room.imageSrc} alt={room.imageAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                {room.remaining && (
                  <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded text-[10px] font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-error" /> Only {room.remaining} Remaining
                  </div>
                )}
              </div>

              {/* Details */}
              <div className="flex-1 flex flex-col justify-between p-sm md:p-0">
                <div>
                  <h3 className="text-headline-sm text-on-surface mb-xs">{room.name}</h3>
                  <p className="text-body-sm text-on-surface-variant mb-sm">{room.description}</p>
                  <div className="flex flex-wrap gap-sm text-on-surface-variant/60">
                    {ICONS.slice(0, room.id === "double" ? 6 : 5).map((icon) => icon)}
                  </div>
                </div>
                <div className="flex items-end justify-between mt-md">
                  <div>
                    <span className="text-body-sm text-secondary">Starting from</span>
                    <div className="text-headline-sm text-primary">
                      ₹{room.price.toLocaleString("en-IN")}
                      <span className="text-body-sm font-normal text-on-surface-variant">/mo</span>
                    </div>
                  </div>
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary text-label-caps px-md py-sm rounded-full transition-all duration-300 shadow-sm flex items-center gap-xs"
                  >
                    Enquire Now <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
