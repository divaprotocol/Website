import { BigNumber } from "ethers";
import { formatUnits } from "ethers/lib/utils";

export const toStringFixed = (
  bn: BigNumber,
  decimals: number = 18,
  toFixed: number = 1
): string => {
  return Number(formatUnits(bn, decimals)).toFixed(toFixed);
};

export function addThousandSeparators(num: number | string): string {
  const parsedNum = typeof num === "string" ? parseFloat(num) : num;
  const [integerPart, decimalPart] = parsedNum.toFixed(1).toString().split(".");
  const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return decimalPart !== undefined ? `${formattedIntegerPart}.${decimalPart}` : formattedIntegerPart;
}

