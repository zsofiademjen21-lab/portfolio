import type { ReactElement } from "react";

export interface ContactItem {
  icon: ReactElement;
  label: string;
  href?: string;
}

export interface SocialLink {
  icon: ReactElement;
  label: string;
  href: string;
}
