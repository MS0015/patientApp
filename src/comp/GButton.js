import {Text} from 'native-base';
import PropTypes from 'prop-types';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function GButton({label, color, onPress, w}) {
  return (
    <LinearGradient
      style={{borderRadius: 5, width: w, padding: 13, marginVertical: 3}}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={color}>
      <TouchableOpacity
        onPress={onPress}
        style={{width: '100%', alignItems: 'center'}}>
        <Text variant="mainTitle" color="white">
          {label}
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

GButton.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  onPress: PropTypes.func,
  w: PropTypes.string,
};
GButton.defaultProps = {
  label: '',
  color: ['#0452E5', '#01B7EB'],
  onPress: () => {},
  w: '80%',
};
