import React from 'react';
import { View } from 'react-native';
import { Copyright } from '../Copyright';

import { feedbackTypes } from '../../utils/feedbackTypes';
import { styles } from './styles';

export function Options() {
  return (
    <View style={styles.container}>
        <View style={styles.options}>
          {
          Object
            .entries(feedbackTypes)
            .map(([key, value]) => (
               
            ))
          }
        </View>
        <Copyright/>
    </View>
  );
}