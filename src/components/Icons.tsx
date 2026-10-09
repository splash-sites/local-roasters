type P = { className?: string };
const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

export const CartIcon = ({ className = "size-5" }: P) => (
  <svg {...base} className={className}>
    <path d="M5 7h14l-1.2 12.1a2 2 0 0 1-2 1.9H8.2a2 2 0 0 1-2-1.9L5 7z" />
    <path d="M9 7a3 3 0 0 1 6 0" />
  </svg>
);
export const UserIcon = ({ className = "size-5" }: P) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" />
  </svg>
);
export const MenuIcon = ({ className = "size-6" }: P) => (
  <svg {...base} className={className}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);
export const CloseIcon = ({ className = "size-6" }: P) => (
  <svg {...base} className={className}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);
export const ArrowIcon = ({ className = "size-[18px]" }: P) => (
  <svg {...base} strokeWidth={2} className={className}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
export const ChevronLeft = ({ className = "size-6" }: P) => (
  <svg {...base} strokeWidth={2} className={className}>
    <path d="M15 6l-6 6 6 6" />
  </svg>
);
export const PinIcon = ({ className = "size-[18px]" }: P) => (
  <svg {...base} className={className}>
    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);
export const TruckIcon = ({ className = "size-5" }: P) => (
  <svg {...base} className={className}>
    <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z" />
    <circle cx="7" cy="18" r="1.8" />
    <circle cx="17.5" cy="18" r="1.8" />
  </svg>
);
export const ChatIcon = ({ className = "size-5" }: P) => (
  <svg {...base} className={className}>
    <path d="M4 20l1.3-3.9A8 8 0 1 1 8 19z" />
  </svg>
);
