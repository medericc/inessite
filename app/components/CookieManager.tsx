
"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const CONSENT_KEY = "idrecovery-cookie-consent";
const CONSENT_VERSION = "2";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

type Consent = {
  version: string;
  analytics: boolean;
  maps: boolean;
  date: string;
};

function getStoredConsent(): Consent | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const saved = window.localStorage.getItem(CONSENT_KEY);

    if (!saved) {
      return null;
    }

    const parsed: unknown = JSON.parse(saved);

    if (
      parsed &&
      typeof parsed === "object" &&
      "version" in parsed &&
      "analytics" in parsed &&
      "maps" in parsed &&
      (parsed as { version: unknown }).version === CONSENT_VERSION &&
      typeof (parsed as { analytics: unknown }).analytics === "boolean" &&
      typeof (parsed as { maps: unknown }).maps === "boolean"
    ) {
      return parsed as Consent;
    }

    return null;
  } catch {
    return null;
  }
}

function disableGoogleAnalytics() {
  if (!GA_ID || typeof window === "undefined") {
    return;
  }

  window[`ga-disable-${GA_ID}`] = true;

  const cookies = document.cookie.split(";");

  for (const cookie of cookies) {
    const name = cookie.split("=")[0]?.trim();

    if (name === "_ga" || name?.startsWith("_ga_")) {
      document.cookie = `${name}=; Max-Age=0; path=/`;
      document.cookie = `${name}=; Max-Age=0; path=/; domain=${window.location.hostname}`;
    }
  }
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    [key: `ga-disable-${string}`]: boolean;
  }
}

export default function CookieManager() {
  /*
   * Consentement enregistré
   */
  const [consent, setConsent] = useState<Consent | null>(null);

  /*
   * Permet d'attendre que le navigateur ait lu localStorage.
   */
  const [isReady, setIsReady] = useState(false);

  /*
   * Fenêtre des préférences
   */
  const [showPreferences, setShowPreferences] = useState(false);

  /*
   * Choix temporaires dans la fenêtre
   */
  const [analyticsPreference, setAnalyticsPreference] = useState(false);
  const [mapsPreference, setMapsPreference] = useState(false);

  /*
   * ============================================================
   * LECTURE DU CONSENTEMENT AU CHARGEMENT
   * ============================================================
   */
  useEffect(() => {
    const initializeConsent = () => {
      const storedConsent = getStoredConsent();

      setConsent(storedConsent);
      setIsReady(true);
    };

    /*
     * On laisse l'effect terminer avant de modifier le state.
     * Cela évite le warning React "Calling setState synchronously
     * within an effect can trigger cascading renders".
     */
    queueMicrotask(initializeConsent);
  }, []);

  /*
   * ============================================================
   * ÉCOUTE DES CHANGEMENTS
   * ============================================================
   */
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key !== CONSENT_KEY) {
        return;
      }

      setConsent(getStoredConsent());
    };

    const handleConsentUpdate = () => {
      setConsent(getStoredConsent());
    };

    const handleOpenSettings = () => {
      const currentConsent = getStoredConsent();

      setAnalyticsPreference(
        currentConsent ? currentConsent.analytics : false
      );

      setMapsPreference(
        currentConsent ? currentConsent.maps : false
      );

      setShowPreferences(true);
    };

    window.addEventListener("storage", handleStorageChange);

    window.addEventListener(
      "idrecovery-consent-updated",
      handleConsentUpdate
    );

    window.addEventListener(
      "open-cookie-settings",
      handleOpenSettings
    );

    return () => {
      window.removeEventListener(
        "storage",
        handleStorageChange
      );

      window.removeEventListener(
        "idrecovery-consent-updated",
        handleConsentUpdate
      );

      window.removeEventListener(
        "open-cookie-settings",
        handleOpenSettings
      );
    };
  }, []);

  /*
   * ============================================================
   * ENREGISTRER LES CHOIX
   * ============================================================
   */
  const saveConsent = (
    analytics: boolean,
    maps: boolean
  ) => {
    const newConsent: Consent = {
      version: CONSENT_VERSION,
      analytics,
      maps,
      date: new Date().toISOString(),
    };

    window.localStorage.setItem(
      CONSENT_KEY,
      JSON.stringify(newConsent)
    );

    setConsent(newConsent);
    setAnalyticsPreference(analytics);
    setMapsPreference(maps);
    setShowPreferences(false);

    /*
     * Informe GoogleMapConsent que le consentement
     * vient de changer.
     */
    window.dispatchEvent(
      new Event("idrecovery-consent-updated")
    );

    /*
     * Google Analytics
     */
    if (!GA_ID) {
      return;
    }

    window[`ga-disable-${GA_ID}`] = !analytics;

    if (!analytics) {
      disableGoogleAnalytics();
      return;
    }

    if (typeof window.gtag === "function") {
      window.gtag("config", GA_ID);
    }
  };

  /*
   * ============================================================
   * NE RIEN AFFICHER AVANT LE CHARGEMENT DE LOCALSTORAGE
   * ============================================================
   */
  if (!isReady) {
    return null;
  }

  /*
   * ============================================================
   * CONDITIONS
   * ============================================================
   */
const showBanner =
  consent === null && !showPreferences;

const currentAnalytics = consent
  ? consent.analytics
  : false;

const currentMaps = consent
  ? consent.maps
  : false;

const analyticsEnabled = currentAnalytics;
  /*
   * ============================================================
   * RENDU
   * ============================================================
   */
  return (
    <>
      {/* ======================================================
          GOOGLE ANALYTICS
      ====================================================== */}

      {analyticsEnabled && GA_ID && (
        <>
          <Script
            id="google-analytics"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />

          <Script
            id="google-analytics-config"
            strategy="afterInteractive"
          >
            {`
              window.dataLayer = window.dataLayer || [];

              function gtag() {
                window.dataLayer.push(arguments);
              }

              window.gtag = gtag;

              gtag('js', new Date());

              gtag('config', '${GA_ID}', {
                anonymize_ip: true
              });
            `}
          </Script>
        </>
      )}

      {/* ======================================================
          BANDEAU COOKIES
      ====================================================== */}

      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4">
          <div className="max-w-5xl mx-auto bg-[#F5EFE6] border border-[#D8C3A5] rounded-3xl shadow-2xl p-6">
            <div className="flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="font-serif text-xl font-bold text-[#5C3D2E]">
                  Votre confidentialité
                </h2>

                <p className="mt-2 text-sm text-[#684735] leading-relaxed">
                  ID RECOVERY utilise des traceurs
                  nécessaires au fonctionnement du site.
                  Avec votre accord, Google Analytics peut
                  également être utilisé pour mesurer la
                  fréquentation du site.
                </p>

                <p className="mt-2 text-sm text-[#684735]">
                  Vous pouvez modifier votre choix à tout
                  moment.
                </p>

                <a
                  href="/gestion-cookies"
                  className="inline-block mt-2 text-sm underline font-medium hover:text-[#8C6D58]"
                >
                  En savoir plus sur les cookies
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => saveConsent(false, false)}
                  className="px-5 py-3 rounded-full border-2 border-[#5C3D2E] text-[#5C3D2E] hover:bg-[#5C3D2E] hover:text-[#F5EFE6] transition"
                >
                  Tout refuser
                </button>

                <button
                  type="button"
                  onClick={() => {
                  setAnalyticsPreference(currentAnalytics);
setMapsPreference(currentMaps);

                    setShowPreferences(true);
                  }}
                  className="px-5 py-3 rounded-full border-2 border-[#8C6D58] text-[#5C3D2E] hover:bg-[#D8C3A5] transition"
                >
                  Personnaliser
                </button>

                <button
                  type="button"
                  onClick={() => saveConsent(true, true)}
                  className="px-5 py-3 rounded-full bg-[#5C3D2E] text-[#F5EFE6] hover:bg-[#8C6D58] transition"
                >
                  Tout accepter
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================
          FENÊTRE DES PRÉFÉRENCES
      ====================================================== */}

      {showPreferences && (
        <div
          className="fixed inset-0 z-[10000] bg-black/50 flex items-center justify-center p-4"
          onClick={() => setShowPreferences(false)}
        >
          <div
            className="w-full max-w-lg bg-[#F5EFE6] rounded-3xl shadow-2xl p-7"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex justify-between items-start gap-4">
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#5C3D2E]">
                  Gestion des cookies
                </h2>

                <p className="mt-2 text-sm text-[#684735]">
                  Choisissez les catégories de traceurs
                  que vous souhaitez autoriser.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowPreferences(false)}
                aria-label="Fermer"
                className="text-2xl text-[#5C3D2E]"
              >
                ×
              </button>
            </div>

            <div className="mt-6 space-y-4">
              {/* Nécessaires */}
              <div className="bg-white rounded-2xl p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-[#5C3D2E]">
                      Traceurs nécessaires
                    </h3>

                    <p className="text-sm text-[#684735] mt-1">
                      Nécessaires au fonctionnement du site
                      et à la mémorisation de vos choix.
                    </p>
                  </div>

                  <span className="text-sm font-medium text-[#8C6D58]">
                    Toujours actifs
                  </span>
                </div>
              </div>

              {/* Google Analytics */}
              <div className="bg-white rounded-2xl p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-[#5C3D2E]">
                      Mesure d’audience
                    </h3>

                    <p className="text-sm text-[#684735] mt-1">
                      Google Analytics permet de mesurer
                      la fréquentation et l’utilisation
                      du site.
                    </p>
                  </div>

                  <button
                    type="button"
                    role="switch"
                    aria-checked={analyticsPreference}
                    aria-label="Autoriser Google Analytics"
                    onClick={() =>
                      setAnalyticsPreference(
                        (current) => !current
                      )
                    }
                    className={`relative shrink-0 w-12 h-7 rounded-full transition ${
                      analyticsPreference
                        ? "bg-[#5C3D2E]"
                        : "bg-[#D8C3A5]"
                    }`}
                  >
                    <span
                      className={`absolute top-1 w-5 h-5 rounded-full bg-white transition ${
                        analyticsPreference
                          ? "left-6"
                          : "left-1"
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Google Maps */}
              <div className="bg-white rounded-2xl p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-[#5C3D2E]">
                      Google Maps
                    </h3>

                    <p className="text-sm text-[#684735] mt-1">
                      Permet d’afficher la localisation
                      d’ID RECOVERY à Geispolsheim.
                    </p>
                  </div>

                  <button
                    type="button"
                    role="switch"
                    aria-checked={mapsPreference}
                    aria-label="Autoriser Google Maps"
                    onClick={() =>
                      setMapsPreference(
                        (current) => !current
                      )
                    }
                    className={`relative shrink-0 w-12 h-7 rounded-full transition ${
                      mapsPreference
                        ? "bg-[#5C3D2E]"
                        : "bg-[#D8C3A5]"
                    }`}
                  >
                    <span
                      className={`absolute top-1 w-5 h-5 rounded-full bg-white transition ${
                        mapsPreference
                          ? "left-6"
                          : "left-1"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Boutons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => saveConsent(false, false)}
                className="flex-1 px-5 py-3 rounded-full border-2 border-[#5C3D2E] text-[#5C3D2E] hover:bg-[#5C3D2E] hover:text-[#F5EFE6] transition"
              >
                Tout refuser
              </button>

              <button
                type="button"
                onClick={() =>
                  saveConsent(
                    analyticsPreference,
                    mapsPreference
                  )
                }
                className="flex-1 px-5 py-3 rounded-full bg-[#5C3D2E] text-[#F5EFE6] hover:bg-[#8C6D58] transition"
              >
                Enregistrer mes choix
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================
          BOUTON COOKIE PERMANENT
      ====================================================== */}

      {consent !== null && !showPreferences && (
        <button
          type="button"
          onClick={() => {
            setAnalyticsPreference(consent.analytics);
            setMapsPreference(consent.maps);
            setShowPreferences(true);
          }}
          className="fixed bottom-4 left-4 z-[9998] w-12 h-12 rounded-full bg-[#5C3D2E] text-[#F5EFE6] shadow-lg hover:bg-[#8C6D58] transition"
          aria-label="Gérer mes cookies"
          title="Gérer mes cookies"
        >
          🍪
        </button>
      )}
    </>
  );
}
