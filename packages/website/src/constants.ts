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
    name: "Ethereum",
    divaAddress: "",
    divaAddressNew: "",
    balanceCheckAddress: "",
    exchangeProxy: "",
    whitelistAddress: "",
    divaSubgraph: "",
    whitelistSubgraph: "",
    allOrders: "",
    order: "",
    orderbook: "",
    explorer: "https://etherscan.io/",
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    isSupported: false,
  },
  [SupportedChainId.GOERLI]: {
    divaAddress: "0x8f138cfC5de71FCde7FdeCd87EAC6Aa6A536Bf85",
    divaAddressNew: "0x6cDEc9b70431bf650f3A0DDD0e246368a4C4F1E1",
    divaTokenAddress: "0xcA68992Db9d413eAd58Bd73e84E4997537C879F9",
    claimDivaLinearVestingAddress:
      "0x0bA350467a397A1aC133cbFe73BF5050E6Bee12b",
    balanceCheckAddress: "0x9293ff9733AC7666A8251564C083191c3DA8BE19",
    exchangeProxy: "0xdef1c0ded9bec7f1a1670819833240f027b25eff",
    whitelistAddress: "0x017aA6E15e406b85b8b1dF322e39444D819C8F43",
    divaSubgraph:
      "https://api.thegraph.com/subgraphs/name/divaprotocol/diva-goerli",
    whitelistSubgraph:
      "https://api.thegraph.com/subgraphs/name/divaprotocol/diva-whitelist-goerli",
    allOrders: "https://eip712api.xyz/orderbook/v1/orders/",
    order: "https://eip712api.xyz/orderbook/v1/order/",
    orderbook: "https://eip712api.xyz/orderbook/v1",
    explorer: "https://goerli.etherscan.io/",
    name: "Görli",
    nativeCurrency: { name: "Görli Ether", symbol: "görETH", decimals: 18 },
    isSupported: true,
  },
};