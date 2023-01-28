/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function Banner(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1367px"
      height="947px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Banner")}
      {...rest}
    >
      <Image
        width="100%"
        height="100%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "Image")}
      ></Image>
      <Flex
        gap="60px"
        direction="column"
        width="763px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="calc(50% - 95px - 28.5px)"
        left="22.68%"
        right="21.51%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 2")}
      >
        <Text
          fontFamily="Inter"
          fontSize="48px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="72px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Daryl D’Souza"
          {...getOverrideProps(overrides, "Daryl D\u2019Souza")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="40px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="60px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="58px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Software Engineer, Effective Altruist, and Virtual Egirl"
          {...getOverrideProps(
            overrides,
            "Software Engineer, Effective Altruist, and Virtual Egirl"
          )}
        ></Text>
      </Flex>
    </View>
  );
}
