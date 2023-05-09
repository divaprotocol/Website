import { BigNumber } from "ethers";

export const POSTS_PATH = "/_posts/";
export const IMAGE_PATH = "/images/posts/";
export const HOME = "https://diva.finance";
export const DIVA_TOKEN_DECIMALS = 18;
export const ZERO_BIGNUMBER = BigNumber.from(0);


export enum SupportedChainId {
  MAINNET = 1,
  GOERLI = 5,
}

export const config = {
  [SupportedChainId.MAINNET]: {
    claimDivaLinearVestingAddress: "",
    divaToken: ''

  },
  [SupportedChainId.GOERLI]: {
    claimDivaLinearVestingAddress:
      "0x2758f311a61e84A3b4305962E10C9393d89128C8",
    divaToken: '0xcA68992Db9d413eAd58Bd73e84E4997537C879F9'
  },
};