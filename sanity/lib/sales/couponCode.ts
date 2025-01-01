export const COUPONCODES = {
  BFRIDAY24: "BFRIDAY24",
  XMAS2024: "SMAS2024",
  NY2022: "NY2022",
} as const;

export type CouponCode = keyof typeof COUPONCODES;
