import { useAppSelector } from "../redux/hooks";
import { selectUserAddress } from "../redux/appSlice";
import { useEffect, useState } from "react";
import { Alert, AlertIcon, Stack } from "@chakra-ui/react";

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
  const [rewardInfo, setRewardInfo] = useState<any>({});
  const [rewards, setRewards] = useState<any[]>([]);
  useEffect(() => {
    const get = async () => {
      const res = await fetch(`/api/rewards/${userAddress}`, {
        method: "GET",
      });
      const json = await res.json();
      setRewardInfo(json.userReward);
    };
    if (userAddress) {
      get();
    }
  }, [userAddress]);
  useEffect(() => {
    (rewards as any[]).forEach((reward) => {
      if (
        userAddress &&
        reward.address.toLowerCase() === userAddress.toLowerCase()
      ) {
        setRewardInfo(reward);
      }
    });
  }, [rewards, userAddress]);
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
                </div>
              </div>
            </div>
          )}
        {userAddress !== undefined &&
          rewardInfo.reward !== undefined &&
          rewardInfo.reward !== "" && (
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
          )}
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
