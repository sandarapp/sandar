"use client";

import { useRouter } from "next/navigation";
import * as React from "react";
import { createAccountHref } from "@/lib/site";

export default function SignUpRedirectPage() {
  const router = useRouter();

  // Accounts are created in the Sandar web app; keep old /sign-up links
  // working by sending visitors there. Client redirect so the route still
  // exists in a static export.
  React.useEffect(() => {
    if (createAccountHref.startsWith("http")) window.location.replace(createAccountHref);
    else router.replace(createAccountHref);
  }, [router]);

  return null;
}
