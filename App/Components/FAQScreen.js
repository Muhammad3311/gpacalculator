import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

class FAQScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{flex: 1, width: '90%', margin: 10}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
            1. GPA:
          </Text>
          <Text style={{color: 'black', fontSize: 16, marginLeft: 10}}>
            Grade Point Average
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 5}}>
          <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
            2. CGPA:
          </Text>
          <Text style={{color: 'black', fontSize: 16, marginLeft: 10}}>
            Cumulative Grade Point Average
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 5}}>
          <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
            3. SGP:
          </Text>
          <Text style={{color: 'black', fontSize: 16, marginLeft: 10}}>
            Semester Grade Point
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 5}}>
          <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
            4. SCH:
          </Text>
          <Text style={{color: 'black', fontSize: 16, marginLeft: 10}}>
            Semester Credit Hour
          </Text>
        </View>
        <View style={{marginTop: 5}}>
          <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
            5. What is GPA?
          </Text>
          <Text style={{color: 'black', fontSize: 16, marginLeft: 15}}>
            Grade Point Average (GPA) is an average of all the grade points you
            have earned over the course of your degree program.
          </Text>
        </View>
        <View style={{marginTop: 5}}>
          <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
            6. Quality Points?
          </Text>
          <Text style={{color: 'black', fontSize: 16, marginLeft: 15}}>
            Quality Points mean the value assigned to coursework by multiplying
            the number of credit hours a course is worth by the grade points
            earned for the course.
          </Text>
        </View>
        <View style={{marginTop: 5}}>
          <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
            7. Credit Hours?
          </Text>
          <Text style={{color: 'black', fontSize: 16, marginLeft: 15}}>
            Credit Hours indicate the sum of all hours in each semester.
          </Text>
        </View>
        <View style={{marginTop: 5}}>
          <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
            8. Duration of Studies?
          </Text>
          <View style={{marginTop: 5}}>
            <Image
              source={require('../Assets/images/dur.jpg')}
              resizeMode="stretch"
              style={{width: '100%', height: 200}}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default FAQScreen;
