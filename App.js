import { StyleSheet } from 'react-native';
import FileScreen from './src/screens/FileScreen';
import { GlobalProvider } from './src/logic/GlobalContext';

export default function App() {
  return (
    <GlobalProvider>
      <FileScreen />
    </GlobalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
