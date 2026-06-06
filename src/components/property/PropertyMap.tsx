interface PropertyMapProps {
  address: string;
  name: string;
  mapLink?: string;
}

export default function PropertyMap({ address, name, mapLink }: PropertyMapProps) {
  const q = encodeURIComponent(address);
  const mapsUrl = mapLink ?? `https://www.google.com/maps/search/?api=1&query=${q}`;

  return (
    <section>
      <h2 className="text-headline-md text-on-background mb-md">Location</h2>
      <div className="rounded-2xl overflow-hidden border border-outline-variant/20 shadow-sm">
        <iframe
          title={`Map for ${name}`}
          src={`https://www.google.com/maps?q=${q}&output=embed`}
          width="100%"
          height="320"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block w-full"
          style={{ border: 0 }}
          allowFullScreen
        />
      </div>
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-xs mt-sm text-primary text-body-sm font-medium hover:underline"
      >
        Open in Google Maps →
      </a>
    </section>
  );
}
