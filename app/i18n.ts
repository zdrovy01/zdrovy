export const locales = ["en", "pl"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Prefixes a site path with the active locale. */
export function path(locale: Locale, to: string): string {
  return to === "/" ? `/${locale}` : `/${locale}${to}`;
}

/** What each locale calls itself, for the language switch. */
export const localeLabel: Record<Locale, string> = {
  pl: "Polski",
  en: "English",
};

const en = {
  nav: { main: "Products", business: "For Business", contact: "Contact" },
  footer: { rights: "All rights reserved." },
  home: {
    title: "Zdrovy",
    heading: "Know why you feel like this.",
    cta: "Get early access",
    secondary: "Follow along",
    phoneAlt: "The Zdrovy app asking what to track today",
    divider: "Three things it does.",
    features: [
      {
        title: "Read your day",
        items: [
          "Log four things: sleep, water, food and movement",
          "A plain-language read of your day",
          "What caused it, not just what happened",
          "One thing to change tomorrow",
        ],
        alt: "The four things you log: food, sleep, water and movement",
      },
      {
        title: "Cook it step by step",
        items: [
          "Recipes built into the app",
          "One step at a time, hands-free",
        ],
        alt: "Pancakes cooking in a pan",
      },
      {
        title: "Bring your coach",
        items: [
          "A trainer follows your days in the app",
          "Replies by text",
          "Or by video",
        ],
        alt: "Someone training, seen through a fence",
      },
    ],
    closing: "Still building it. Come in early.",
    closingSecondary: "Run a Żabka? See MyShop",
  },

  business: {
    title: "For Żabka",
    heading: "Assign tasks to your team online.",
    text: "Every task done, with proof. From your phone.",
    cta: "Start free",
    secondary: "Talk to us",
    screenAlt: "The MyShop task list open in a browser",
    problem: "You can’t be in the store all day.",
    solution: "So the list checks itself off.",
    steps: [
      {
        title: "Write the list",
        items: [
          "Write it once, it repeats itself",
          "Daily, weekly or one-off",
          "From your phone or laptop",
        ],
        alt: "A task list in the MyShop dashboard",
      },
      {
        title: "Hang the QR",
        items: [
          "One code for the whole store",
          "Staff scan it — no app to install",
          "A PIN for each employee",
        ],
        alt: "The QR code staff scan to open their task list",
      },
      {
        title: "See it done",
        items: [
          "A photo with every task",
          "Who did it and when",
          "Hours logged at scan-in",
          "Full history, searchable",
        ],
        alt: "Photos of restocked shelves submitted with completed tasks",
      },
    ],
    pricing: "Pricing",
    priceUnit: "per store / month",
    priceNote: "First month free. Cancel anytime.",
    closing: "Set it up before the next shift.",
  },

  contact: {
    title: "Contact",
    heading: "Contact",
    labels: { email: "Email", phone: "Phone", instagram: "Instagram", telegram: "Telegram" },
  },
};

export type Dictionary = typeof en;

const pl: Dictionary = {
  nav: { main: "Produkty", business: "Dla biznesu", contact: "Kontakt" },
  footer: { rights: "Wszelkie prawa zastrzeżone." },
  home: {
    title: "Zdrovy",
    heading: "Dowiedz się, dlaczego tak się czujesz.",
    cta: "Wczesny dostęp",
    secondary: "Obserwuj",
    phoneAlt: "Aplikacja Zdrovy pyta, co dziś zapisać",
    divider: "Trzy rzeczy, które robi.",
    features: [
      {
        title: "Przeczytaj swój dzień",
        items: [
          "Zapisujesz cztery rzeczy: sen, wodę, jedzenie i ruch",
          "Twój dzień opisany zwykłym językiem",
          "Co to spowodowało, a nie tylko co się stało",
          "Jedna rzecz do zmiany jutro",
        ],
        alt: "Cztery rzeczy, które zapisujesz: jedzenie, sen, woda i ruch",
      },
      {
        title: "Gotuj krok po kroku",
        items: [
          "Przepisy w aplikacji",
          "Jeden krok na raz, bez dotykania telefonu",
        ],
        alt: "Naleśniki smażące się na patelni",
      },
      {
        title: "Dodaj trenera",
        items: [
          "Trener widzi twoje dni w aplikacji",
          "Odpowiada tekstem",
          "Albo wideo",
        ],
        alt: "Trening widziany przez siatkę",
      },
    ],
    closing: "Wciąż ją budujemy. Wejdź wcześniej.",
    closingSecondary: "Prowadzisz Żabkę? Zobacz MyShop",
  },

  business: {
    title: "Dla Żabki",
    heading: "Rozdzielaj zadania zespołowi online.",
    text: "Każde zadanie zrobione, z dowodem. Z twojego telefonu.",
    cta: "Zacznij za darmo",
    secondary: "Napisz do nas",
    screenAlt: "Lista zadań MyShop otwarta w przeglądarce",
    problem: "Nie możesz być w sklepie cały dzień.",
    solution: "Więc lista odhacza się sama.",
    steps: [
      {
        title: "Napisz listę",
        items: [
          "Ustaw raz, powtarza się sama",
          "Codziennie, co tydzień lub raz",
          "Z telefonu albo laptopa",
        ],
        alt: "Lista zadań w panelu MyShop",
      },
      {
        title: "Powieś kod QR",
        items: [
          "Jeden kod na cały sklep",
          "Zespół skanuje — nic do instalowania",
          "PIN dla każdego pracownika",
        ],
        alt: "Kod QR, który pracownicy skanują, żeby otworzyć listę zadań",
      },
      {
        title: "Zobacz, że zrobione",
        items: [
          "Zdjęcie przy każdym zadaniu",
          "Kto zrobił i o której",
          "Godziny liczone od zeskanowania",
          "Pełna historia z wyszukiwaniem",
        ],
        alt: "Zdjęcia uzupełnionych półek dołączone do wykonanych zadań",
      },
    ],
    pricing: "Cennik",
    priceUnit: "za sklep / miesiąc",
    priceNote: "Pierwszy miesiąc gratis. Anuluj kiedy chcesz.",
    closing: "Ustaw to przed następną zmianą.",
  },

  contact: {
    title: "Kontakt",
    heading: "Kontakt",
    labels: { email: "E-mail", phone: "Telefon", instagram: "Instagram", telegram: "Telegram" },
  },
};

const dictionaries: Record<Locale, Dictionary> = { en, pl };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
