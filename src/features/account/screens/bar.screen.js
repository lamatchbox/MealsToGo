import React, { useState, useContext } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  ErrorContainer,
  AreYouReady,
  BarOwner
} from "../components/account.styles";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

export const BarFormScreen = ({ navigation }) => {
  const [numberOfShotz, setNumberOfShotz] = useState("100");


  return (
    <AccountBackground>
      <AccountCover />
        <AreYouReady> How many shotz would you like to use for promotions?</AreYouReady>
      <AccountContainer>
        <AuthInput
          label="Number Of Shotz"
          value={numberOfShotz}
          textContentType="emailAddress"
          keyboardType="numeric"
          autoCapitalize="none"
          onChangeText={(e) => setNumberOfShotz(e)}
        />
        <Spacer size="large">
        <BarOwner mode="contained" onPress={() => navigation.goBack()}>
          Submit
        </BarOwner>
      </Spacer>
      </AccountContainer>
      <Spacer size="large">
      <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
        </Spacer>
    </AccountBackground>
  );
};
