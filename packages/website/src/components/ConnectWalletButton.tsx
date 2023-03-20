import { useCallback } from "react";
import { Button } from "@chakra-ui/react";

import { useConnectionContext } from "../hooks/useConnectionContext";
import { selectChainId, selectUserAddress } from "../redux/appSlice";
import { useAppSelector } from "../redux/hooks";
import { getShortenedAddress } from "../util/getShortenedAddress";
import { INSTALL_METAMASK_LINK } from "../constants";

export function ConnectWalletButton() {
  const { provider, isConnected, disconnect, connect } =
    useConnectionContext();
  const userAddress = useAppSelector(selectUserAddress);
  const chainId = useAppSelector(selectChainId);

  const inestallMetaMask = useCallback(() => {
    window.open(INSTALL_METAMASK_LINK, "_blank").focus();
  }, []);

  return (
    <Button
      variant="outline"
      isLoading={chainId == null}
      type="submit"
      value="Submit"
      sx={{
        marginLeft: "10px",
        _hover: {
          background: "white",
          color: "black",
        },
      }}
      onClick={() =>
        !provider
          ? inestallMetaMask()
          : isConnected && userAddress
          ? disconnect()
          : connect()
      }
    >
      {!provider
        ? "Install MetaMask"
        : isConnected && userAddress
        ? getShortenedAddress(userAddress)
        : "Connect Wallet"}
    </Button>
  );
}
