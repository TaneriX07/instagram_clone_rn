import { ActivityIndicator, StyleSheet, View } from "react-native";

const LoadingIndicator = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="#FFF" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#000",
  },
});

export default LoadingIndicator;
