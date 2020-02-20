import React from 'react';
import { string } from 'prop-types';

import { Tag } from 'components/ui/qualifiers';

const Genre = ({ name }) => <Tag>{name}</Tag>;

Genre.propTypes = { name: string.isRequired };

export default Genre;
