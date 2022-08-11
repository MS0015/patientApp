import { Text } from 'native-base';
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import AppointmentsCard from '../comp/AppointmentsCard';

export default function Appointments() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Text>Appointments</Text>
        <AppointmentsCard label="Fever consultation" />
        <AppointmentsCard label="Fever consultation" />
        <AppointmentsCard label="Fever consultation" />
        <AppointmentsCard label="Fever consultation" />
        <AppointmentsCard label="Fever consultation" />
        <AppointmentsCard label="Fever consultation" />
        <AppointmentsCard label="Fever consultation" />
        <AppointmentsCard label="Fever consultation" />
        <AppointmentsCard label="Fever consultation " />
      </ScrollView>
    </SafeAreaView>
  );
}
