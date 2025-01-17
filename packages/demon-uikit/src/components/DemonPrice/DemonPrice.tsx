import React from "react";
import styled from "styled-components";
import { DemonRoundIcon } from "../Svg";
import Text from "../Text/Text";
import Skeleton from "../Skeleton/Skeleton";
import { Colors } from "../../theme";

export interface Props {
  color?: keyof Colors;
  demonPriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const DemonPrice: React.FC<Props> = ({ demonPriceUsd, color = "textSubtle" }) => {
  return demonPriceUsd ? (
    <PriceLink
      href="https://demonswap.fi/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"
      target="_blank"
    >
      <DemonRoundIcon width="24px" mr="8px" />
      <Text color={color} bold>{`$${demonPriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(DemonPrice);
