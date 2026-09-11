"use client";

import { useRouter } from "next/navigation";
import * as React from "react";

export default function CommunitiesRedirectPage() {
  const router = useRouter();

  // Kept as a client redirect so the route still exists in a static export.
  React.useEffect(() => {
    router.replace("/for-partners");
  }, [router]);

  return null;
}
