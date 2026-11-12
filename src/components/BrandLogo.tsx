import Image from "next/image";
import Link from "next/link";

interface BrandLogoProps {
  variant?: "light" | "dark";
}

export function BrandLogo({ variant = "light" }: BrandLogoProps) {
  const isDark = variant === "dark";

  return (
    <Link
      href="/"
      className="inline-flex items-center gap-3 shrink-0 group focus:outline-none"
      aria-label="Trident Academy of Technology Home"
    >
      <Image
        src="/images/trident-logo.png"
        alt="Trident Academy of Technology Logo"
        width={isDark ? 42 : 54}
        height={isDark ? 42 : 54}
        priority={!isDark}
        className={
          isDark
            ? "w-10 h-10 rounded-full object-contain shrink-0"
            : "w-12 h-12 sm:w-[54px] sm:h-[54px] rounded-full object-contain shrink-0"
        }
      />
      <div className="flex flex-col justify-center">
        <span
          className={
            isDark
              ? "font-serif font-bold text-[19px] leading-none tracking-[0.04em] text-white uppercase"
              : "font-serif font-bold text-[23px] sm:text-[26px] leading-none tracking-[0.03em] text-[#3a3a3a] uppercase"
          }
        >
          TRIDENT
        </span>
        <span
          className={
            isDark
              ? "block h-px w-full bg-white/30 my-[4px]"
              : "block h-px w-full bg-[#7c90b0]/70 my-[4px]"
          }
          aria-hidden="true"
        />
        <span
          className={
            isDark
              ? "font-sans font-bold text-[8px] leading-none tracking-[0.14em] text-neutral-200 uppercase whitespace-nowrap"
              : "font-sans font-bold text-[9px] sm:text-[10px] leading-none tracking-[0.13em] text-[#1f3b7c] uppercase whitespace-nowrap"
          }
        >
          ACADEMY OF TECHNOLOGY
        </span>
      </div>
    </Link>
  );
}

