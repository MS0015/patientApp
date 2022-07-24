import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HStack, ScrollView, Text, VStack } from 'native-base';
import UserMainHeader from '../comp/UserMainHeader';
import CategoryCard from '../comp/CategoryCard';
import DoctorCard from '../comp/DoctorCard';

export default function Feature() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <UserMainHeader />
      <ScrollView bg="gray.100">
        <VStack m={2} space={3}>
          <Text variant="mainTitle">Categories</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <CategoryCard
              label="Heart"
              imgUrl="https://firebasestorage.googleapis.com/v0/b/patientapp-3debf.appspot.com/o/patientApp%2Fhearr.png?alt=media&token=58ca73e1-1fe6-4b7f-80c2-aca3f593ed55"
            />
            <CategoryCard
              label="Heart"
              imgUrl="https://firebasestorage.googleapis.com/v0/b/patientapp-3debf.appspot.com/o/patientApp%2Feye.png?alt=media&token=2bd24701-5c6d-4884-8319-a0ed98d64761"
            />
            <CategoryCard
              label="Heart"
              imgUrl="https://firebasestorage.googleapis.com/v0/b/patientapp-3debf.appspot.com/o/patientApp%2Fear.png?alt=media&token=d4316d28-4365-44e1-94e3-e2ecae2fe477"
            />
            <CategoryCard
              label="Heart"
              imgUrl="https://firebasestorage.googleapis.com/v0/b/patientapp-3debf.appspot.com/o/patientApp%2Flungs.png?alt=media&token=625721ca-b9bb-486d-86af-075e50fccae4"
            />
            <CategoryCard
              label="Heart"
              imgUrl="https://firebasestorage.googleapis.com/v0/b/patientapp-3debf.appspot.com/o/patientApp%2Fbrain.png?alt=media&token=fa319d3c-e191-45e0-979d-61b3b859280a"
            />
            <CategoryCard
              label="Heart"
              imgUrl="https://firebasestorage.googleapis.com/v0/b/patientapp-3debf.appspot.com/o/patientApp%2Fbrain.png?alt=media&token=fa319d3c-e191-45e0-979d-61b3b859280a"
            />
            <CategoryCard
              label="Heart"
              imgUrl="https://firebasestorage.googleapis.com/v0/b/patientapp-3debf.appspot.com/o/patientApp%2Fbrain.png?alt=media&token=fa319d3c-e191-45e0-979d-61b3b859280a"
            />
          </ScrollView>
        </VStack>

        <VStack m={2} space={3}>
          <HStack justifyContent="space-between" alignItems="center">
            <Text variant="mainTitle">Feature Doctor</Text>
            <Text variant="desc" color="gray.400">
              See all{'>'}{' '}
            </Text>
          </HStack>
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}
