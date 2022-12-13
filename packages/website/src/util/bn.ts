import { BigNumber } from "ethers";
import { formatUnits } from "ethers/lib/utils";

export const toStringFixed = (
  bn: BigNumber,
  decimals: number = 18,
  toFixed: number = 1
): string => {
  return Number(formatUnits(bn, decimals)).toFixed(toFixed);
};
