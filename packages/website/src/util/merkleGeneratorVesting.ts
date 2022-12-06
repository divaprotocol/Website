/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import MerkleTree from "merkletreejs"; // MerkleTree.js
import { getAddress, keccak256, solidityKeccak256 } from "ethers/lib/utils"; // Ethers utils

// Airdrop recipient addresses and scaled token values
type AirdropRecipient = {
  // Recipient address
  address: string;
  // Scaled-to-decimals token value
  value: string;
  // time in seconds
  time: string;
};

export default class Generator {
  // Airdrop recipients
  recipients: AirdropRecipient[] = [];

  constructor(airdrop: any) {
    // For each airdrop entry
    airdrop.map((object) => {
      // Push:
      this.recipients.push({
        // Checksum address
        address: getAddress(object.address),
        // Number of tokens claimable by recipient; scaling is done in ClaimDIVALinearVesting.test.ts
        value: object.amount.toString(),

        time: object.time.toString(),
      });
    });
  }

  /**
   * Generate Merkle Tree leaf from address, value and vesting time
   * @param {string} address of airdrop claimee
   * @param {string} value of airdrop tokens to claimee
   * @param {string} time vesting period in seconds
   * @returns {Buffer} Merkle Tree node
   */
  generateLeaf(address: string, value: string, time: string): Buffer {
    return Buffer.from(
      // Hash in appropriate Merkle format
      solidityKeccak256(
        ["address", "uint256", "uint256"],
        [address, value, time]
      ).slice(2),
      "hex"
    );
  }

  async process(): Promise<{ merkleRoot: string; merkleTree: MerkleTree }> {
    console.info("Generating Merkle tree.");

    // Generate merkle tree
    const merkleTree = new MerkleTree(
      // Generate leafs
      this.recipients.map(({ address, value, time }) =>
        this.generateLeaf(address, value, time)
      ),
      // Hashing function
      keccak256,
      { sortPairs: true }
    );

    // Collect and log merkle root
    const merkleRoot: string = merkleTree.getHexRoot();

    return {
      merkleRoot,
      merkleTree,
    };
  }
}
