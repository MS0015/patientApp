import React from 'react';
import { Avatar, Text, VStack } from 'native-base';
import PropTypes from 'prop-types';

export default function CategoryCard({ imgUrl, label }) {
  return (
    <VStack alignItems="center">
      <Avatar
        shadow={2}
        mx={2}
        size="lg"
        bg="white"
        p={1}
        source={{
          uri: imgUrl,
        }}
      >
        {label}
      </Avatar>

      <Text variant="desc">{label}</Text>
    </VStack>
  );
}
CategoryCard.propTypes = {
  label: PropTypes.string,
  imgUrl: PropTypes.node,
};
CategoryCard.defaultProps = {
  label: '',
  imgUrl: '',
};
