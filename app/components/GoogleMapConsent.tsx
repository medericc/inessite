"use client";

import {
  useEffect,
  useSyncExternalStore,
} from "react";

const CONSENT_KEY = "idrecovery-cookie-consent";
const CONSENT_VERSION = "2";

interface Consent {
  version: string;
  analytics: boolean;
  maps: boolean;
  date: string;
}

/**
 * ============================================================
 * LECTURE DU CONSENTEMENT
 * ============================================================
 */

function readMapsConsent(): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  try {
    const saved = window.localStorage.getItem(
      CONSENT_KEY
    );

    if (!saved) {
      return false;
    }

    const parsed: unknown = JSON.parse(saved);

    if (
      typeof parsed === "object" &&
      parsed !== null &&
      "version" in parsed &&
      "maps" in parsed &&
      typeof parsed.version === "string" &&
      parsed.version === CONSENT_VERSION &&
      typeof parsed.maps === "boolean"
    ) {
      return parsed.maps;
    }

    return false;
  } catch {
    return false;
  }
}

/**
 * ============================================================
 * ABONNEMENT AUX CHANGEMENTS
 * ============================================================
 */

const listeners = new Set<() => void>();

function subscribe(
  callback: () => void
): () => void {
  listeners.add(callback);

  return () => {
    listeners.delete(callback);
  };
}

function notifyConsentChange(): void {
  listeners.forEach((listener) => {
    listener();
  });
}

function handleStorageChange(
  event: StorageEvent
): void {
  if (event.key === CONSENT_KEY) {
    notifyConsentChange();
  }
}

/**
 * ============================================================
 * COMPOSANT
 * ============================================================
 */

export default function GoogleMapConsent() {
  const mapConsent = useSyncExternalStore(
    subscribe,
    readMapsConsent,
    () => false
  );

  /**
   * Écoute les changements provenant :
   * - d'un autre onglet
   * - du CookieManager dans le même onglet
   */
  useEffect(() => {
    const handleCustomConsentChange = () => {
      notifyConsentChange();
    };

    window.addEventListener(
      "storage",
      handleStorageChange
    );

    window.addEventListener(
      "idrecovery-consent-updated",
      handleCustomConsentChange
    );

    return () => {
      window.removeEventListener(
        "storage",
        handleStorageChange
      );

      window.removeEventListener(
        "idrecovery-consent-updated",
        handleCustomConsentChange
      );
    };
  }, []);

  /**
   * ==========================================================
   * AUTORISER GOOGLE MAPS
   * ==========================================================
   */

  const acceptMaps = () => {
    try {
      const saved =
        window.localStorage.getItem(CONSENT_KEY);

      let currentConsent: Consent = {
        version: CONSENT_VERSION,
        analytics: false,
        maps: true,
        date: new Date().toISOString(),
      };

      if (saved) {
        const parsed: unknown = JSON.parse(saved);

        if (
          typeof parsed === "object" &&
          parsed !== null &&
          "analytics" in parsed &&
          typeof parsed.analytics === "boolean"
        ) {
          currentConsent = {
            version: CONSENT_VERSION,
            analytics: parsed.analytics,
            maps: true,
            date: new Date().toISOString(),
          };
        }
      }

      window.localStorage.setItem(
        CONSENT_KEY,
        JSON.stringify(currentConsent)
      );

      /**
       * Mise à jour immédiate du GoogleMapConsent
       * et du CookieManager.
       */
      notifyConsentChange();

      window.dispatchEvent(
        new Event("idrecovery-consent-updated")
      );
    } catch (error) {
      console.error(
        "Impossible d'enregistrer le consentement Google Maps",
        error
      );
    }
  };

  /**
   * ==========================================================
   * AFFICHAGE
   * ==========================================================
   */

  return (
    <div className="w-full h-[400px] rounded-[2rem] overflow-hidden shadow-xl bg-[#F5EFE6]">
      {mapConsent ? (
        <iframe
          src="https://www.google.com/maps?q=Geispolsheim%2C%2067118%2C%20France&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          title="Localisation ID RECOVERY à Geispolsheim"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center p-8 text-center">
          <div>
            <p className="font-semibold text-[#5C3D2E]">
              Afficher Google Maps
            </p>

            <p className="mt-2 text-sm text-[#684735]">
              L’affichage de cette carte nécessite
              l’activation du service Google Maps.
            </p>

            <button
              type="button"
              onClick={acceptMaps}
              className="mt-5 bg-[#5C3D2E] text-[#F5EFE6] px-6 py-3 rounded-full hover:bg-[#8C6D58] transition"
            >
              Autoriser Google Maps
            </button>
          </div>
        </div>
      )}
    </div>
  );
}