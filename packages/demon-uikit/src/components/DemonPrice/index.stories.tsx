import React from "react";
import { DemonPrice, DemonPriceProps } from ".";
import { Flex } from "../Box";

export default {
  title: "Components/DemonPrice",
  component: DemonPrice,
};

const Template: React.FC<DemonPriceProps> = ({ ...args }) => {
  return (
    <Flex p="10px">
      <DemonPrice {...args} />
    </Flex>
  );
};

export const Default = Template.bind({});
Default.args = {
  cakePriceUsd: 20.0,
};
