import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  outerContainer: { position: 'relative', height: 150 },
  container: { position: 'absolute', top: -40, left: 0, right: 0, padding: 0 },
  information: { paddingHorizontal: 10, alignItems: 'flex-start', flex: 1 },
  title: { marginBottom: 7, flexWrap: 'wrap' },
  label: { marginRight: 5 },
});

export default styles;
