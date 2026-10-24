/**
 * Sandar "sunset" design tokens, shared with the member app and Admin CMS.
 *
 * Values match Sandar-App (`apps/mobile/src/foundation/FoundationApp.tsx`,
 * `apps/web/app/styles.css`). Primary #B65031 gives white text 5.02:1 contrast;
 * keep it in sync with globals.css when changing anything here.
 */
export const colors = {
  bg: "#FFFAF4",
  surface: "#F8EFE7",
  surface2: "#FFEDDF",
  card: "#FFFDF8",
  border: "#EAD6C5",
  borderStrong: "#E8CFBC",
  fg: "#3B241B",
  muted: "#68594F",
  subtle: "#756359",
  primary: "#B65031",
  primary600: "#984632",
  primary200: "#FCE6D4",
  success: "#3F6244",
  successBg: "#EDF2E7",
  danger: "#8F3425",
  dangerBg: "#FBE8DF",
  warning: "#6B4400",
  warningBg: "#FFF3D6",
  ink: "#2E1D17",
} as const;
