import type { MetadataRoute } from "next"
import { brand } from "@/lib/data/profile"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: brand.fullName,
    short_name: brand.name,
    description: brand.intro,
    start_url: "/",
    display: "standalone",
    background_color: "#09081e",
    theme_color: "#09081e",
    icons: [
      {
        src: "/images/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/images/kryo-k-logo.png",
        sizes: "800x800",
        type: "image/png",
      },
    ],
  }
}
