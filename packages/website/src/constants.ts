import { BigNumber } from "ethers";

export const POSTS_PATH = "/_posts/";
export const IMAGE_PATH = "/images/posts/";
export const HOME = "https://diva.finance";
export const DIVA_TOKEN_DECIMALS = 18;
export const ZERO_BIGNUMBER = BigNumber.from(0);


export enum SupportedChainId {
  MAINNET = 1,
  SEPOLIA = 11155111,
}

export const config = {
  [SupportedChainId.MAINNET]: {
    claimDivaLinearVestingAddress: "0x0EA38F96D25FD7eaEe04E5Be0CDD1E196FEa312C",
    divaToken: '0x4B7fFCB2b92fB4890f22f62a52Fb7A180eaB818e'

  },
  [SupportedChainId.SEPOLIA]: {
    claimDivaLinearVestingAddress:
      "0x703c35da76f9B5bB0ca1BB55B9C22b2F41bAB252",
    divaToken: '0x4B7fFCB2b92fB4890f22f62a52Fb7A180eaB818e'
  },
};