"use client";

import * as React from "react";

export type Locale = "en" | "id";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = React.createContext<LocaleContextValue | null>(null);

const STORAGE_KEY = "sandar-locale";
const listeners = new Set<() => void>();
// Keeps the choice for this visit when localStorage is unavailable.
let sessionLocale: Locale | null = null;

function readLocale(): Locale | null {
  if (sessionLocale) return sessionLocale;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "en" || stored === "id" ? stored : null;
  } catch {
    return null;
  }
}

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  window.addEventListener("storage", onChange);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onChange);
  };
}

function writeLocale(nextLocale: Locale) {
  sessionLocale = nextLocale;
  try {
    window.localStorage.setItem(STORAGE_KEY, nextLocale);
  } catch {
    // Ignore: sessionLocale still applies for this visit.
  }
  listeners.forEach((notify) => notify());
}

export function LocaleProvider({
  children,
  defaultLocale = "en",
}: {
  children: React.ReactNode;
  defaultLocale?: Locale;
}) {
  // The server snapshot is the default, so static HTML and hydration match;
  // React then re-renders with the stored preference.
  const locale = React.useSyncExternalStore(
    subscribe,
    () => readLocale() ?? defaultLocale,
    () => defaultLocale
  );

  React.useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = React.useCallback((nextLocale: Locale) => {
    writeLocale(nextLocale);
  }, []);

  const value = React.useMemo(() => ({ locale, setLocale }), [locale, setLocale]);

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = React.useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider.");
  }

  return context;
}
