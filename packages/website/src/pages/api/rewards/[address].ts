import path from "path";
import { promises as fs } from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import { getAddress, parseUnits } from "ethers/lib/utils";
import MerkleGenerator from "../../../util/merkleGeneratorVesting";
import { DIVA_TOKEN_DECIMALS } from "../../../constants";
import { toStringFixed } from '../../../util/bn'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { address } = req.query;
  // Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), "public");
  // Read the json data file data.json
  const fileContents = await fs.readFile(
    jsonDirectory + "/rewards.json",
    "utf8"
  );

  const allRewards = JSON.parse(fileContents);
  const userReward = allRewards.filter(
    (v) => v.address.toLowerCase() === (address as string).toLowerCase()
  );


  if (!userReward) {
    res.status(204).send("not registered account");
    return
  }

  // Read the json data from vestingToken.json
  const vestingTokenFileContents = await fs.readFile(
    jsonDirectory + "/vestingToken.json",
    "utf8"
  );

  const tokenClaimables = JSON.parse(vestingTokenFileContents).map(
    (object: any) => {
      return {
        address: getAddress(object.address),
        amount: parseUnits(
          object.amount.toString() || "0",
          DIVA_TOKEN_DECIMALS
        ).toString(),
        time: object.time,
      };
    }
  );
  const userTokenClaim = tokenClaimables.find(
    (v) => v.address.toLowerCase() === (address as string).toLowerCase()
  );




  if (!userTokenClaim) {
    res
      .status(200)
      .json({
        userReward: {
          ...userReward[0],
          detailUserReward: [
            ...userReward
          ],
          time: 0
        }, proof: []
      });
    return;
  }


  const generator = new MerkleGenerator(tokenClaimables);
  const { merkleTree } = await generator.process();
  const leaf: Buffer = generator.generateLeaf(
    userTokenClaim.address,
    userTokenClaim.amount,
    userTokenClaim.time
  );
  // Generate proof
  const proof: string[] = merkleTree.getHexProof(leaf);

  const resUserReward = {
    address: userTokenClaim.address,
    reward:
      Number(toStringFixed(userTokenClaim.amount, DIVA_TOKEN_DECIMALS, 8)),
    time: userTokenClaim.time
  }

  //Return the content of the data file in json format\
  res
    .status(200)
    .json({
      userReward: {
        ...resUserReward,
        detailUserReward: [
          ...userReward
        ], time: userTokenClaim.time
      }, proof
    });
}
