import { StyleService } from '@ui-kitten/components';

const styles = StyleService.create({
  container: {
    alignItems: 'center',
    width: 100,
    marginRight: 10,
  },
  profileContainer: {
    borderRadius: 10,
    marginBottom: 10,
    width: 100,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: 'color-gray-scale-100',
  },
  name: {
    flexWrap: 'wrap',
  },
});

export default styles;
