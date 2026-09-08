"use client";

export default function CookieSettingsButton() {
  return (
    <button
      type="button"
      className="mt-4 bg-[#5C3D2E] text-[#F5EFE6] px-6 py-3 rounded-full hover:bg-[#8C6D58] transition"
      onClick={() => {
        window.dispatchEvent(new Event("open-cookie-settings"));
      }}
    >
      Modifier mes préférences
    </button>
  );
}