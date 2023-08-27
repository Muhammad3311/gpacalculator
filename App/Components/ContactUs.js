import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          marginTop: 30,
          width: '90%',
          marginHorizontal: '5%',
        }}>
        <View style={{borderRadius: 100, overflow: 'hidden'}}>
          <Image
            source={require('../Assets/images/SirFaiz.jpg')}
            resizeMode="cover"
            style={{height: 100, width: 100, borderRadius: 100}}
          />
        </View>
        <View style={{marginTop: 5}}>
          <Text style={{color: 'black', fontSize: 16}}>Project Supervisor</Text>
        </View>
        <View style={{marginTop: 2}}>
          <Text style={{color: 'black', fontSize: 16}}>
            Prof. Faiz Ur Rehman
          </Text>
        </View>
        <View style={{marginTop: 2}}>
          <Text style={{color: 'black', fontSize: 16}}>
            Lecturer in Computer Science
          </Text>
        </View>
        <View style={{marginTop: 2}}>
          <Text style={{color: 'black', fontSize: 16}}>
            Government Post Graduate College Kohat
          </Text>
        </View>
        <View style={{borderRadius: 100, overflow: 'hidden', marginTop: 20}}>
          <Image
            source={require('../Assets/images/Md.jpg')}
            resizeMode="cover"
            style={{height: 100, width: 100, borderRadius: 100}}
          />
        </View>
        <View style={{marginTop: 5}}>
          <Text style={{color: 'black', fontSize: 16}}>Project Member</Text>
        </View>
        <View style={{marginTop: 2}}>
          <Text style={{color: 'black', fontSize: 16}}>Muhammad Khan</Text>
        </View>
        <View style={{marginTop: 2}}>
          <Text style={{color: 'black', fontSize: 16}}>
            Government Post Graduate College Kohat
          </Text>
        </View>
        <View style={{borderRadius: 100, overflow: 'hidden', marginTop: 20}}>
          <Image
            source={require('../Assets/images/oo.jpg')}
            resizeMode="cover"
            style={{height: 100, width: 100, borderRadius: 100}}
          />
        </View>
        <View style={{marginTop: 5}}>
          <Text style={{color: 'black', fontSize: 16}}>Project Member</Text>
        </View>
        <View style={{marginTop: 2}}>
          <Text style={{color: 'black', fontSize: 16}}>Kashif Ullah</Text>
        </View>
        <View style={{marginTop: 2}}>
          <Text style={{color: 'black', fontSize: 16}}>
            Government Post Graduate College Kohat
          </Text>
        </View>
      </View>
    );
  }
}

export default ContactUs;
