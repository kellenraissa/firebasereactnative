import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface MyViewProps extends ViewProps {}

function MyView({ children, style, ...rest }: MyViewProps) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]} {...rest}>
        {children}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  view: {
    flex: 1,
  },
});

export default MyView;
