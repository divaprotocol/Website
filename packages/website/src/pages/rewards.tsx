import { useAppSelector } from "../redux/hooks";
import { selectUserAddress } from "../redux/appSlice";
import { useEffect, useState } from "react";
import { AlertIcon } from "@chakra-ui/react";

/**
 * TODO: load rewards via ajax
 */
import PageLayout from "../components/pageLayout/PageLayout";
import { ConnectWalletButton } from "../components/ConnectWalletButton";
import { Heading } from "../components/typography/Heading";
import { Paragraph } from "../components/typography/Paragraph";

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
      setRewards(json);
    };
    get();
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
      <div>
        <div>
          <Heading as="h1" size="lg">
            $DIVA Token Claim
          </Heading>
          <Paragraph>
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
            <AlertIcon />
            Connected account was not registered for the testnet
          </div>
        )}
        {userAddress !== undefined &&
          rewardInfo.reward !== undefined &&
          rewardInfo.reward !== "" && (
            <div>
              <AlertIcon />
              You are eligible for token claim, below are the details of your
              participation.
            </div>
          )}

        {userAddress !== undefined && rewardInfo.reward === "" && (
          <div>
            <AlertIcon />
            {"You are not eligible. Reason: " + rewardInfo.comment}
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
              <AlertIcon />
              You will be able to claim your rewards once the token launches
            </div>
          )}
        {userAddress !== undefined && rewardInfo.reward === undefined && (
          <div>
            <AlertIcon />
            <Paragraph>You were not registered</Paragraph>
          </div>
        )}

        <div>
          <ConnectWalletButton />
        </div>
      </div>
    </PageLayout>
  );
};

export default Rewards;
