import { StyleSheet, Text, View } from 'react-native';
import Lista from './components/lista'

export default function App() {
  return (
    <View style={styles.container}>
      <Lista/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

