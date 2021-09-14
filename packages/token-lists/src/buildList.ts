import fs from "fs";
import path from "path";
import { TokenList } from "@uniswap/token-lists";
import { version as demonswapDefaultVersion } from "../lists/demonswap-default.json";
import { version as demonswapExtendedVersion } from "../lists/demonswap-extended.json";
import { version as demonswapTop15Version } from "../lists/demonswap-top-15.json";
import { version as demonswapTop100Version } from "../lists/demonswap-top-100.json";
import demonswapDefault from "./tokens/demonswap-default.json";
import demonswapExtended from "./tokens/demonswap-extended.json";
import demonswapTop100 from "./tokens/demonswap-top-100.json";
import demonswapTop15 from "./tokens/demonswap-top-15.json";

export enum VersionBump {
  "major" = "major",
  "minor" = "minor",
  "patch" = "patch",
}

type Version = {
  major: number;
  minor: number;
  patch: number;
};

const lists = {
  "demonswap-default": {
    list: demonswapDefault,
    name: "PancakeSwap Default",
    keywords: ["demonswap", "default"],
    logoURI:
      "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png",
    sort: false,
    currentVersion: demonswapDefaultVersion,
  },
  "demonswap-extended": {
    list: demonswapExtended,
    name: "PancakeSwap Extended",
    keywords: ["demonswap", "extended"],
    logoURI:
      "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png",
    sort: true,
    currentVersion: demonswapExtendedVersion,
  },
  "demonswap-top-100": {
    list: demonswapTop100,
    name: "PancakeSwap Top 100",
    keywords: ["demonswap", "top 100"],
    logoURI:
      "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png",
    sort: true,
    currentVersion: demonswapTop100Version,
  },
  "demonswap-top-15": {
    list: demonswapTop15,
    name: "PancakeSwap Top 15",
    keywords: ["demonswap", "top 15"],
    logoURI:
      "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png",
    sort: true,
    currentVersion: demonswapTop15Version,
  },
};

const getNextVersion = (currentVersion: Version, versionBump?: VersionBump) => {
  const { major, minor, patch } = currentVersion;
  switch (versionBump) {
    case VersionBump.major:
      return { major: major + 1, minor, patch };
    case VersionBump.minor:
      return { major, minor: minor + 1, patch };
    case VersionBump.patch:
    default:
      return { major, minor, patch: patch + 1 };
  }
};

export const buildList = (listName: string, versionBump?: VersionBump): TokenList => {
  const { list, name, keywords, logoURI, sort, currentVersion } = lists[listName];
  const version = getNextVersion(currentVersion, versionBump);
  return {
    name,
    timestamp: new Date().toISOString(),
    version,
    logoURI,
    keywords,
    // sort them by symbol for easy readability (not applied to default list)
    tokens: sort
      ? list.sort((t1, t2) => {
          if (t1.chainId === t2.chainId) {
            // CAKE first in extended list
            if ((t1.symbol === "CAKE") !== (t2.symbol === "CAKE")) {
              return t1.symbol === "CAKE" ? -1 : 1;
            }
            return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
          }
          return t1.chainId < t2.chainId ? -1 : 1;
        })
      : list,
  };
};

export const saveList = (tokenList: TokenList, listName: string): void => {
  const tokenListPath = `${path.resolve()}/lists/${listName}.json`;
  const stringifiedList = JSON.stringify(tokenList, null, 2);
  fs.writeFileSync(tokenListPath, stringifiedList);
  console.info("Token list saved to ", tokenListPath);
};
