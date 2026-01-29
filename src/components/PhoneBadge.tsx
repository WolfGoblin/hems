import Link from "next/link";
import { Phone } from "lucide-react";

export default function PhoneBadge() {
  return (
    <Link
      href="tel:591"
      className="inline-flex items-center gap-2 bg-hems-action/10 text-hems-action px-4 py-2 rounded-full font-bold hover:bg-hems-action hover:text-white transition-colors duration-300"
    >
      <Phone className="w-4 h-4 fill-current" />
      <span>Emergency: 591</span>
    </Link>
  );
}
