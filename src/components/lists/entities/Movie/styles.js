import { StyleService } from '@ui-kitten/components';

const WIDTH = 100;
const HEIGHT = 150;

const styles = StyleService.create({
  container: {
    borderRadius: 10,
    marginBottom: 10,
    marginRight: 10,
    width: WIDTH,
    height: HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: 'color-gray-scale-100',
  },
  profile: { width: WIDTH, height: HEIGHT },
});

export default styles;
