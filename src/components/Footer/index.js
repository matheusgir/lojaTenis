import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Shoes from '../Shoes'

export default function Footer() {
 return (
   <View>
        <Text style={styles.title}>VOCÊ TAMBEM PODE GOSTAR</Text>
        <View style={{flexDirection: 'row'}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{marginHorizontal: 10}}>
                    <Shoes img={require('../../assets/1.png')} cost="110,90">
                        Nike Downshifter 10
                    </Shoes>
                </View>

                <View style={{marginHorizontal: 10}}>
                    <Shoes img={require('../../assets/4.png')} cost="260,90">
                        Nike Epic React Flyknit
                    </Shoes>
                </View>

                <View style={{marginHorizontal: 10}}>
                    <Shoes img={require('../../assets/5.png')} cost="510,90">
                        Nike Joyride Run Flyknit
                    </Shoes>
                </View>
            </ScrollView>
        </View>
   </View>
  );
}

const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        fontFamily: 'Anton_400Regular',
        marginVertical: '2%',
        paddingHorizontal: '2%',
    }
})