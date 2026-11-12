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
      className="inline-flex items-center gap-2.5 sm:gap-3 shrink-0 group focus:outline-none max-w-full"
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
            ? "w-9 h-9 sm:w-10 sm:h-10 rounded-full object-contain shrink-0"
            : "w-11 h-11 sm:w-12 sm:h-12 md:w-[54px] md:h-[54px] rounded-full object-contain shrink-0 transition-transform duration-200 group-hover:scale-105"
        }
      />
      <div className="flex flex-col justify-center min-w-0">
        <span
          className={
            isDark
              ? "font-serif font-bold text-[17px] sm:text-[19px] leading-none tracking-[0.04em] text-white uppercase truncate"
              : "font-serif font-bold text-[20px] sm:text-[23px] md:text-[26px] leading-none tracking-[0.03em] text-[#3a3a3a] uppercase truncate"
          }
        >
          TRIDENT
        </span>
        <span
          className={
            isDark
              ? "block h-px w-full bg-white/30 my-[3px] sm:my-[4px]"
              : "block h-px w-full bg-[#7c90b0]/70 my-[3px] sm:my-[4px]"
          }
          aria-hidden="true"
        />
        <span
          className={
            isDark
              ? "font-sans font-bold text-[7.5px] sm:text-[8px] leading-none tracking-[0.14em] text-neutral-200 uppercase whitespace-nowrap"
              : "font-sans font-bold text-[7.5px] sm:text-[9px] md:text-[10px] leading-none tracking-[0.12em] sm:tracking-[0.13em] text-[#1f3b7c] uppercase whitespace-nowrap"
          }
        >
          ACADEMY OF TECHNOLOGY
        </span>
      </div>
    </Link>
  );
}
