/* app/resources/page.tsx */
export const metadata = { title: "Support Resources – Air India 171" };
const resources = [
  { name: "Air India Hotline (domestic)", href: "tel:1800-5691-444" },
  { name: "Air India Hotline (international)", href: "tel:+91-806-277-9200" },
  { name: "Ministry of Civil Aviation Control Room 1", href: "tel:+91-11-24610843"},
  { name: "Ministry of Civil Aviation Control Room 2", href: "tel:+91-96503-91859"},
  { name: "National Disaster Helpline (domestic)", href: "tel:+91-1078" },
  { name: "UK Foreign Emergency Helpline (UK)", href: "tel:+44-20-7008-5000" },
  { name: "UK Foreign Emergency Helpline (India)", href: "tel:+91-11-2419-2100" }
];
export default function Resources() {
  return (
    <section className="max-w-3xl mx-auto p-6 space-y-4">
      <h2 className="text-3xl font-medium">Immediate Support</h2>
      <ul className="list-disc list-inside">
        {resources.map((r) => (
          <li key={r.name}>
            <a
              className="underline"
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {r.name}
            </a>
          </li>
        ))}
      </ul>
      <p className="text-sm opacity-75">
        Please verify any charity before donating.
      </p>
    </section>
  );
}
