import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ID Recovery",
    short_name: "IDR",
    description: "ID Recovery",
    start_url: "/admin",
    display: "standalone",
    background_color: "#F5EFE6",
    theme_color: "#5C3D2E",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}