import React from 'react';
import { Button, View } from 'react-native';

export function NavButton({ style, children, color, navigateTo, ...rest }) {
  return (
    <View>
      <Button color={color} title={children} onPress={() => navigation.navigate({ navigateTo })} />
    </View>
  );
}
