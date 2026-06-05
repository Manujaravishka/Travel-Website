"use client";

type IconName = "instagram" | "facebook" | "youtube" | "compass";

const paths: Record<IconName, React.ReactNode> = {
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
    </>
  ),
  facebook: (
    <path
      d="M14 9h2.5V6H14c-1.9 0-3.5 1.6-3.5 3.5V12H8v3h2.5v6h3v-6H16l.5-3H13.5V9.5c0-.3.2-.5.5-.5z"
      fill="currentColor"
    />
  ),
  youtube: (
    <>
      <rect x="2.5" y="6" width="19" height="12" rx="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10.5 9.5l4 2.5-4 2.5z" fill="currentColor" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M15.5 8.5l-2 5-5 2 2-5z" fill="currentColor" />
    </>
  ),
};

export function SocialIcon({
  icon,
  className,
}: {
  icon: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
    >
      {paths[icon as IconName] ?? paths.compass}
    </svg>
  );
}
