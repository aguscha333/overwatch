import { StyleService } from '@ui-kitten/components';

const WIDTH = 100;
const HEIGHT = 150;

const styles = StyleService.create({
  container: {
    alignItems: 'center',
    width: WIDTH,
    marginRight: 10,
  },
  profileContainer: {
    borderRadius: 10,
    marginBottom: 10,
    width: WIDTH,
    height: HEIGHT,
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
