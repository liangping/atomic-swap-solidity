import { JsonRpcProvider } from "@ethersproject/providers";
import { ethers } from "ethers";
import { keccak256 } from "ethers/lib/utils";

export function newAtomicSwapOrderID(sender: string, swapOrderCounter: number): string {
  const id = keccak256(ethers.utils.defaultAbiCoder.encode(["address", "uint256"], [sender, swapOrderCounter]));
  return id;
}

export class BlockTimer {
  protected provider: JsonRpcProvider;
  constructor(providerUrl: string) {
    this.provider = new ethers.providers.JsonRpcProvider(providerUrl);
  }
  async Now() {
    const blockNumber = await this.provider.getBlockNumber();
    return (await this.provider.getBlock(blockNumber)).timestamp;
  }
  async BeforeSeconds(sec: number) {
    const blockNumber = await this.provider.getBlockNumber();
    const now = (await this.provider.getBlock(blockNumber)).timestamp;
    return now - sec;
  }
  async AfterSeconds(sec: number) {
    const blockNumber = await this.provider.getBlockNumber();
    const now = (await this.provider.getBlock(blockNumber)).timestamp;
    return now + sec;
  }
  Delay(sec: number) {
    return new Promise((resolve) => setTimeout(resolve, sec));
  }
}
