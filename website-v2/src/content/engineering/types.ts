export interface EngineeringIntro {
  title: string;
  description: string;
  eyebrow: string;
}

export interface EngineeringSection {
  id: string;
  title: string;
  text?: string;
  layout: 'cards' | 'steps' | 'checklist';
  items: readonly (readonly [title: string, description: string])[];
  link?: { href: string; label: string };
}

export interface EngineeringContact {
  title: string;
  text: string;
}
