import path from "path";
import { promises as fs } from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import { getAddress, parseUnits } from "ethers/lib/utils";
import { generateLeaf } from "../../../util/merkle";
import MerkleGenerator from "../../../util/merkleGenerator";

const DIVA_TOKEN_DECIMALS = 18;

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
    res.status(204);
  }

  const airdrop: Record<string, string> = {};

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // `reward` is converted into an integer with 18 decimals inside `merkleGenerator.ts` file
  allRewards.forEach((Object: any) => {
    const formattedAddress = getAddress(Object.address);

    airdrop[formattedAddress] = Object.reward.toString() || "0";
  });

  // Create the generate & process it
  const generator = new MerkleGenerator(DIVA_TOKEN_DECIMALS, airdrop);
  const { merkleRoot, merkleTree } = await generator.process();
  const leaf: Buffer = generateLeaf(
    getAddress(userReward.address),
    parseUnits(
      (userReward.reward || "0").toString(),
      DIVA_TOKEN_DECIMALS
    ).toString()
  );
  // Generate proof
  const proof: string[] = merkleTree.getHexProof(leaf);

  //Return the content of the data file in json format
  res.status(200).json({ userReward, proof });
}
