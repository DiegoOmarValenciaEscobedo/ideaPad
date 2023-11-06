import { StyleSheet } from 'react-native';
import MainScreen from './src/screens/MainScreen';
import { GlobalProvider } from './src/logic/GlobalContext';

export default function App() {
  return (
    <GlobalProvider>
      <MainScreen />
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
