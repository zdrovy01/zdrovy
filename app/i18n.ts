export const locales = ["en", "pl", "uk"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Prefixes a site path with the active locale. */
export function path(locale: Locale, to: string): string {
  return to === "/" ? `/${locale}` : `/${locale}${to}`;
}

/** The flag shown for each locale, and the language it is labelled with. */
export const localeFlag: Record<Locale, { country: "pl" | "ua" | "us"; label: string }> = {
  pl: { country: "pl", label: "Polski" },
  uk: { country: "ua", label: "Українська" },
  en: { country: "us", label: "English" },
};

const en = {
  nav: { main: "Main", business: "For Żabka", contact: "Contact us" },
  chrome: { start: "Start" },

  home: {
    title: "Zdrovy",
    eyebrow: "Zdrovy App — in development",
    heading: "Know why you feel like this.",
    cta: "Get early access",
    secondary: "Follow along",
    phoneAlt: "The Zdrovy app asking what to track today",
    divider: "Three things it does.",
    features: [
      {
        title: "Read your day",
        text: "Log four things. Get a sentence back, not a dashboard.",
        items: [
          "Sleep, water, food and movement",
          "A plain-language read of your day",
          "What caused it, not just what happened",
          "One thing to change tomorrow",
        ],
        alt: "The four things you log: food, sleep, water and movement",
      },
      {
        title: "Cook it step by step",
        text: "Recipes that walk you through one step at a time.",
        items: ["Recipes built into the app", "Step-by-step cooking mode"],
        alt: "Pancakes cooking in a pan",
      },
      {
        title: "Bring your coach",
        text: "A trainer can follow your days and answer in the app.",
        items: ["Your coach sees what you log", "Replies by text", "Or by video"],
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
        text: "Once. It repeats itself.",
        items: ["Daily, weekly or one-off", "Set it once, it repeats", "From your phone or laptop"],
        alt: "A task list in the MyShop dashboard",
      },
      {
        title: "Hang the QR",
        text: "Team scans. No app.",
        items: ["One code for the whole store", "Nothing to install", "A PIN for each employee"],
        alt: "The QR code staff scan to open their task list",
      },
      {
        title: "See it done",
        text: "Photo, time, name.",
        items: ["A photo with every task", "Hours logged at scan-in", "Full history, searchable"],
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
  nav: { main: "Główna", business: "Dla Żabki", contact: "Kontakt" },
  chrome: { start: "Start" },

  home: {
    title: "Zdrovy",
    eyebrow: "Aplikacja Zdrovy — w budowie",
    heading: "Dowiedz się, dlaczego tak się czujesz.",
    cta: "Wczesny dostęp",
    secondary: "Obserwuj",
    phoneAlt: "Aplikacja Zdrovy pyta, co dziś zapisać",
    divider: "Trzy rzeczy, które robi.",
    features: [
      {
        title: "Przeczytaj swój dzień",
        text: "Zapisz cztery rzeczy. W odpowiedzi dostajesz zdanie, nie pulpit.",
        items: [
          "Sen, woda, jedzenie i ruch",
          "Twój dzień opisany zwykłym językiem",
          "Co to spowodowało, a nie tylko co się stało",
          "Jedna rzecz do zmiany jutro",
        ],
        alt: "Cztery rzeczy, które zapisujesz: jedzenie, sen, woda i ruch",
      },
      {
        title: "Gotuj krok po kroku",
        text: "Przepisy, które prowadzą cię krok po kroku.",
        items: ["Przepisy w aplikacji", "Tryb gotowania krok po kroku"],
        alt: "Naleśniki smażące się na patelni",
      },
      {
        title: "Dodaj trenera",
        text: "Trener widzi twoje dni i odpowiada w aplikacji.",
        items: ["Trener widzi, co zapisujesz", "Odpowiada tekstem", "Albo wideo"],
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
        text: "Raz. Powtarza się sama.",
        items: ["Codziennie, co tydzień lub raz", "Ustaw raz, powtarza się", "Z telefonu albo laptopa"],
        alt: "Lista zadań w panelu MyShop",
      },
      {
        title: "Powieś kod QR",
        text: "Zespół skanuje. Bez aplikacji.",
        items: ["Jeden kod na cały sklep", "Nic do instalowania", "PIN dla każdego pracownika"],
        alt: "Kod QR, który pracownicy skanują, żeby otworzyć listę zadań",
      },
      {
        title: "Zobacz, że zrobione",
        text: "Zdjęcie, czas, imię.",
        items: ["Zdjęcie przy każdym zadaniu", "Godziny liczone od zeskanowania", "Pełna historia z wyszukiwaniem"],
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

const uk: Dictionary = {
  nav: { main: "Головна", business: "Для Żabka", contact: "Контакти" },
  chrome: { start: "Почати" },

  home: {
    title: "Zdrovy",
    eyebrow: "Застосунок Zdrovy — у розробці",
    heading: "Дізнайся, чому ти так почуваєшся.",
    cta: "Ранній доступ",
    secondary: "Стежити",
    phoneAlt: "Застосунок Zdrovy запитує, що записати сьогодні",
    divider: "Три речі, які він робить.",
    features: [
      {
        title: "Прочитай свій день",
        text: "Запиши чотири речі. У відповідь — речення, а не панель із цифрами.",
        items: [
          "Сон, вода, їжа і рух",
          "Твій день звичайною мовою",
          "Що це спричинило, а не лише що сталося",
          "Одна річ, яку змінити завтра",
        ],
        alt: "Чотири речі, які ти записуєш: їжа, сон, вода і рух",
      },
      {
        title: "Готуй крок за кроком",
        text: "Рецепти, які ведуть тебе крок за кроком.",
        items: ["Рецепти в застосунку", "Покроковий режим готування"],
        alt: "Млинці смажаться на сковороді",
      },
      {
        title: "Додай тренера",
        text: "Тренер бачить твої дні й відповідає в застосунку.",
        items: ["Тренер бачить, що ти записуєш", "Відповідає текстом", "Або відео"],
        alt: "Тренування, зняте крізь сітку",
      },
    ],
    closing: "Ще будуємо. Заходь раніше.",
    closingSecondary: "Маєш Żabkę? Дивись MyShop",
  },

  business: {
    title: "Для Żabka",
    heading: "Давай завдання команді онлайн.",
    text: "Кожне завдання виконане, з доказом. З твого телефона.",
    cta: "Почати безкоштовно",
    secondary: "Написати нам",
    screenAlt: "Список завдань MyShop у браузері",
    problem: "Ти не можеш бути в магазині цілий день.",
    solution: "Тож список закривається сам.",
    steps: [
      {
        title: "Напиши список",
        text: "Один раз. Далі повторюється сам.",
        items: ["Щодня, щотижня або разово", "Налаштуй раз — повторюється", "З телефона або ноутбука"],
        alt: "Список завдань у панелі MyShop",
      },
      {
        title: "Повісь QR-код",
        text: "Команда сканує. Без застосунку.",
        items: ["Один код на весь магазин", "Нічого встановлювати", "PIN для кожного працівника"],
        alt: "QR-код, який працівники сканують, щоб відкрити список завдань",
      },
      {
        title: "Побач, що зроблено",
        text: "Фото, час, імʼя.",
        items: ["Фото до кожного завдання", "Години від моменту сканування", "Повна історія з пошуком"],
        alt: "Фото поповнених полиць, додані до виконаних завдань",
      },
    ],
    pricing: "Ціна",
    priceUnit: "за магазин / місяць",
    priceNote: "Перший місяць безкоштовно. Скасувати будь-коли.",
    closing: "Налаштуй до наступної зміни.",
  },

  contact: {
    title: "Контакти",
    heading: "Контакти",
    labels: { email: "Пошта", phone: "Телефон", instagram: "Instagram", telegram: "Telegram" },
  },
};

const dictionaries: Record<Locale, Dictionary> = { en, pl, uk };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
