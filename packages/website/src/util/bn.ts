import { BigNumber } from "ethers";

export const toStringFixed = (
  bn: BigNumber,
  decimals: number = 18,
  toFixed: number = 1
): string => {
  return bn.div(BigNumber.from(10).pow(decimals)).toNumber().toFixed(toFixed);
};
