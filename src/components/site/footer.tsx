// src/components/site/footer.tsx
import Link from "next/link";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="border-t border-[#E2E0DA]/70 bg-[#F8F7F4]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-6">
        <Logo />
        <div className="space-y-2 text-[11px] text-[#6B7280]">
          <p>Quiroz Marble and Granite</p>
          <p>
            Premium stone fabrication and installation for kitchens, bathrooms,
            fireplaces, and commercial spaces.
          </p>
        </div>
        <div className="flex flex-col items-start gap-2 text-[11px] text-[#6B7280] md:items-end">
          <Link
            href="/estimate"
            className="underline underline-offset-4 hover:text-[#1F2933]"
          >
            Book a Free Estimate
          </Link>
          <p>
            © {new Date().getFullYear()} Quiroz Marble and Granite. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
