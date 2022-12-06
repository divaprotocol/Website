import path from "path";
import { promises as fs } from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import { getAddress, parseUnits } from "ethers/lib/utils";
import MerkleGenerator from "../../../util/merkleGeneratorVesting";
import { DIVA_TOKEN_DECIMALS, LINEAR_VESTING_TIME } from "../../../constants";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { address } = req.query;
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), "public");
  // //Read the json data file data.json
  const fileContents = await fs.readFile(
    jsonDirectory + "/rewards.json",
    "utf8"
  );

  const allRewards = JSON.parse(fileContents);
  const userReward = allRewards.find(
    (v) => v.address.toLowerCase() === (address as string).toLowerCase()
  );

  if (!userReward) {
    res.status(204).send("not registered account");
  }

  const tokenClaimables = allRewards.map((object: any) => {
    return {
      address: getAddress(object.address),
      amount: parseUnits(
        object.reward.toString() || "0",
        DIVA_TOKEN_DECIMALS
      ).toString(),
      time: LINEAR_VESTING_TIME,
    };
  });

  const generator = new MerkleGenerator(tokenClaimables);
  const { merkleTree } = await generator.process();
  const leaf: Buffer = generator.generateLeaf(
    getAddress(userReward.address),
    parseUnits(
      (userReward.reward || "0").toString(),
      DIVA_TOKEN_DECIMALS
    ).toString(),
    LINEAR_VESTING_TIME.toString()
  );
  // Generate proof
  const proof: string[] = merkleTree.getHexProof(leaf);

  //Return the content of the data file in json format
  res.status(200).json({ userReward, proof });
}
