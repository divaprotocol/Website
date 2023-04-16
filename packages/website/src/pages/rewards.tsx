import { useCallback, useEffect, useMemo, useState } from "react";
import { Alert, AlertIcon, Button, Stack } from "@chakra-ui/react";
import { BigNumber, ethers } from "ethers";
import { isAddress, parseUnits } from "ethers/lib/utils";

import ClaimDivaLinearVestingABI from "../abi/ClaimDivaLinearVestingABI.json";
import { config, DIVA_TOKEN_DECIMALS, ZERO_BIGNUMBER } from "../constants";
import { useAppSelector } from "../redux/hooks";
import { selectUserAddress } from "../redux/appSlice";
import { useConnectionContext } from "../hooks/useConnectionContext";
import { toStringFixed } from "../util/bn";

/**
 * TODO: load rewards via ajax
 */
import PageLayout from "../components/pageLayout/PageLayout";
import { ConnectWalletButton } from "../components/ConnectWalletButton";
import { Heading } from "../components/typography/Heading";
import { Paragraph } from "../components/typography/Paragraph";
import { Highlight } from "../components/typography/Highlight";

const RewardPageBlobs = () => (
  <>
    <div
      style={{
        position: "absolute",
        width: "726px",
        height: "594px",
        left: "1304px",
        top: "calc(50% - 594px/2 + 46px)",
        background:
          "linear-gradient(116.38deg, rgba(0, 56, 255, 0.2) 6.37%, rgba(22, 227, 216, 0.2) 89.66%)",
        filter: "blur(131.902px)",
        transform: "matrix(-1, 0, 0, 1, 0, 0)",
      }}
      className="hidden md:block"
    ></div>
    <div
      style={{
        position: "absolute",
        width: "402px",
        height: "329px",
        left: "0px",
        top: "calc(50% - 329px/2 + 93.5px)",
        background:
          "linear-gradient(116.38deg, rgba(0, 56, 255, 0.3) 6.37%, rgba(22, 227, 216, 0.3) 89.66%)",
        filter: "blur(131.902px)",
        transform: "matrix(-1, 0, 0, 1, 0, 0)",
      }}
    ></div>
    <div
      style={{
        position: "absolute",
        width: "402px",
        height: "329px",
        left: "821px",
        top: "calc(50% - 329px/2 - 179.5px)",
        background:
          "linear-gradient(116.38deg, rgba(0, 56, 255, 0.3) 6.37%, rgba(22, 227, 216, 0.3) 89.66%)",
        filter: "blur(131.902px)",
        transform: "matrix(-1, 0, 0, 1, 0, 0)",
      }}
      className="hidden md:block"
    ></div>
  </>
);

const Rewards = () => {
  const userAddress = useAppSelector(selectUserAddress);
  const { provider, chainId } = useConnectionContext();
  const [rewardInfo, setRewardInfo] = useState<any>({});
  const [proof, setProof] = useState<string[]>([]);
  const [isClaiming, setIsClaiming] = useState<boolean>(false);
  const [trigger, setTrigger] = useState<boolean>(false);
  const [claimedAmount, setClaimedAmount] = useState<BigNumber>(
    BigNumber.from(-1)
  );
  const [availableDrawDownAmount, setAvailableDrawDownAmount] =
    useState<BigNumber>(ZERO_BIGNUMBER);
  const [claimPeriodStarts, setClaimPeriodStarts] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    setCount((count) => count + 1);
    const interval = setInterval(() => {
      setCount((count) => count + 1);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const claimDivaLinearVesting = useMemo(
    () =>
      provider && chainId && config[chainId]?.claimDivaLinearVestingAddress
        ? new ethers.Contract(
            config[chainId]?.claimDivaLinearVestingAddress,
            ClaimDivaLinearVestingABI,
            isAddress(userAddress) ? provider?.getSigner() : provider
          )
        : null,
    [chainId, provider, userAddress]
  );

  const rewardBN = useMemo(
    () =>
      rewardInfo && rewardInfo.reward
        ? parseUnits(rewardInfo.reward.toString() || "0", DIVA_TOKEN_DECIMALS)
        : ZERO_BIGNUMBER,
    [rewardInfo]
  );

  const immediateClaimableAmount = useMemo(
    () => rewardBN?.mul(40).div(100),
    [rewardBN]
  );

  const currentTimestamp = useMemo(() => Math.floor(+new Date() / 1000), []);

  const claimableAmount = useMemo(
    () =>
      currentTimestamp <= claimPeriodStarts
        ? ZERO_BIGNUMBER
        : currentTimestamp > claimPeriodStarts + rewardInfo.time
        ? rewardBN?.sub(claimedAmount)
        : claimedAmount.gt(0)
        ? availableDrawDownAmount
        : claimedAmount.eq(0)
        ? immediateClaimableAmount?.add(availableDrawDownAmount)
        : ZERO_BIGNUMBER,
    [
      availableDrawDownAmount,
      immediateClaimableAmount,
      claimedAmount,
      currentTimestamp,
      claimPeriodStarts,
      rewardBN,
      rewardInfo,
    ]
  );

  const claimable = useMemo(
    () =>
      rewardBN &&
      claimDivaLinearVesting &&
      trigger &&
      claimPeriodStarts &&
      currentTimestamp &&
      currentTimestamp > claimPeriodStarts,
    [
      rewardBN,
      claimDivaLinearVesting,
      trigger,
      claimPeriodStarts,
      currentTimestamp,
    ]
  );

  useEffect(() => {
    const get = async () => {
      const res = await fetch(`/api/rewards/${userAddress}`, {
        method: "GET",
      });
      if (res.status === 200) {
        const json = await res.json();
        setRewardInfo(json.userReward);
        setProof(json.proof);
      }
    };
    if (isAddress(userAddress)) {
      get();
    }
  }, [userAddress]);

  useEffect(() => {
    const getTrigger = async () => {
      setTrigger(await claimDivaLinearVesting.trigger());
    };
    const getClaimPeriodStarts = async () => {
      setClaimPeriodStarts(
        (await claimDivaLinearVesting.claimPeriodStarts()).toNumber()
      );
    };
    if (claimDivaLinearVesting) {
      Promise.all([getTrigger(), getClaimPeriodStarts()]);
    }
  }, [claimDivaLinearVesting, count]);

  useEffect(() => {
    const getClaimedAmount = async () => {
      setClaimedAmount(
        await claimDivaLinearVesting.claimedAmount(userAddress)
      );
    };
    if (claimDivaLinearVesting && userAddress) {
      getClaimedAmount();
    }
  }, [claimDivaLinearVesting, userAddress, count]);

  useEffect(() => {
    const getAvailableDrawDownAmount = async () => {
      setAvailableDrawDownAmount(
        await claimDivaLinearVesting.availableDrawDownAmount(
          rewardBN,
          rewardBN.sub(immediateClaimableAmount),
          rewardInfo.time,
          userAddress
        )
      );
    };
    if (
      claimDivaLinearVesting &&
      userAddress &&
      rewardBN.gt(0) &&
      immediateClaimableAmount
    ) {
      getAvailableDrawDownAmount();
    }
  }, [
    claimDivaLinearVesting,
    userAddress,
    rewardBN,
    immediateClaimableAmount,
    count,
    rewardInfo,
  ]);

  const claim = useCallback(async () => {
    if (claimable && claimableAmount.gt(0)) {
      setIsClaiming(true);
      try {
        console.log(rewardBN);
        console.log(rewardInfo.time);
        console.log(proof);
        const tx = await claimDivaLinearVesting.claimTokens(
          rewardBN,
          rewardInfo.time,
          proof
        );
        await tx.wait();
        setCount((count) => count + 1);
      } catch (error) {
        alert("Failed to claim.");
        console.error(error);
      }
      setIsClaiming(false);
    }
  }, [
    rewardBN,
    claimDivaLinearVesting,
    claimable,
    proof,
    claimableAmount,
    rewardInfo,
  ]);

  return (
    <PageLayout>
      <Stack
        style={{
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          color: "white",
          textAlign: "center",
          zIndex: 10,
        }}
        height={["80vh"]}
        spacing={8}
        className="overflow-hidden"
      >
        <div>
          <Heading as="h2" size="lg">
            $DIVA Token
            <Highlight> Claim</Highlight>
          </Heading>
          <Paragraph className="mt-8">
            $DIVA is the governance token for DIVA Protocol.
          </Paragraph>
        </div>
        {userAddress === undefined && (
          <>
            <Paragraph>
              Connect your wallet to determine your eligibility.
            </Paragraph>
          </>
        )}
        {userAddress !== undefined && rewardInfo == null && (
          <div>
            <Alert
              status="error"
              variant="subtle"
              className="text-black rounded-xl"
            >
              <AlertIcon />
              Connected account was not registered for the testnet
            </Alert>
          </div>
        )}
        {userAddress !== undefined &&
          rewardInfo.reward !== undefined &&
          rewardInfo.reward !== "" && (
            <div>
              <Alert
                status="success"
                variant="subtle"
                className="text-black rounded-xl"
              >
                <AlertIcon />
                You are eligible for token claim, below are the details of your
                participation.
              </Alert>
            </div>
          )}

        {userAddress !== undefined && rewardInfo.reward === "" && (
          <div>
            <Alert
              status="error"
              variant="subtle"
              className="text-black rounded-xl"
            >
              <AlertIcon />
              {"You are not eligible. Reason: " + rewardInfo.comment}
            </Alert>
          </div>
        )}
        {userAddress !== undefined &&
          rewardInfo.reward !== undefined &&
          rewardInfo.reward !== "" && (
            <div>
              <div>
                <div>
                  <div>
                    <Paragraph>Total Testnet Points</Paragraph>
                    <Paragraph>{rewardInfo.points}</Paragraph>
                  </div>
                  <div>
                    <Paragraph>Your $DIVA token reward</Paragraph>
                    <Paragraph>
                      {Number(rewardInfo.reward).toFixed(1)}
                    </Paragraph>
                  </div>
                  {claimedAmount.gt(0) && (
                    <div>
                      <Paragraph>You already claimed:</Paragraph>
                      <Paragraph>
                        {toStringFixed(claimedAmount, DIVA_TOKEN_DECIMALS, 4)}
                      </Paragraph>
                    </div>
                  )}
                  <div>
                    <Paragraph>Claimable amount:</Paragraph>
                    <Paragraph>
                      {toStringFixed(claimableAmount, DIVA_TOKEN_DECIMALS, 4)}
                    </Paragraph>
                  </div>
                </div>
              </div>
            </div>
          )}
        {userAddress !== undefined &&
          rewardInfo.reward !== undefined &&
          rewardInfo.reward !== "" &&
          (claimable ? (
            <div>
              <Button
                variant="outline"
                isLoading={isClaiming}
                disabled={claimableAmount.eq(0)}
                type="submit"
                value="Submit"
                sx={{
                  width: "120px",
                  _hover: {
                    background: "white",
                    color: "black",
                  },
                }}
                onClick={() => claim()}
              >
                Claim
              </Button>
            </div>
          ) : (
            <div>
              <Alert
                status="info"
                variant="subtle"
                className="text-black rounded-xl"
              >
                <AlertIcon />
                You will be able to claim your rewards once the token launches
              </Alert>
            </div>
          ))}
        {userAddress !== undefined && rewardInfo.reward === undefined && (
          <div>
            <Alert
              status="error"
              variant="subtle"
              className="text-black rounded-xl"
            >
              <AlertIcon />
              <Paragraph>You were not registered</Paragraph>
            </Alert>
          </div>
        )}

        <div className="z-10">
          <ConnectWalletButton />
        </div>
      </Stack>
      <RewardPageBlobs />
    </PageLayout>
  );
};

export default Rewards;
