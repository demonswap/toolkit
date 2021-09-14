import addresses from "../constants/contracts";
import { MAINNET_CHAIN_ID, TESTNET_CHAIN_ID } from "../constants/common";
import { getDemonProfileAddress } from "./addressHelpers";

describe("addressHelpers", () => {
  it("getAddress returns correct mainnet address", () => {
    const profileAddress = getDemonProfileAddress(MAINNET_CHAIN_ID);
    expect(profileAddress).toBe(addresses.demonProfile[MAINNET_CHAIN_ID]);
  });
  it("getAddress returns correct testnet address", () => {
    const profileAddress = getDemonProfileAddress(TESTNET_CHAIN_ID);
    expect(profileAddress).toBe(addresses.demonProfile[TESTNET_CHAIN_ID]);
  });
});
