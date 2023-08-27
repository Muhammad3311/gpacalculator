import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, Alert} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Button} from 'react-native-paper';

class Cumulative extends Component {
  firstInputRefs = [];
  constructor(props) {
    super(props);
    this.state = {
      marksCrHrsArray: [],
      evenArray: [],
      oddArray: [],
      totalSgpPoints: 0,
      totalChPoints: 0,
      totalSum: (0.0).toFixed(2),
    };
    for (let i = 0; i < 8; i++) {
      this.firstInputRefs[i] = React.createRef();
    }
  }
  convertGradePoints(x) {
    let store_gpa = 0.0;
    if (x < 50.0) {
      store_gpa = 0.0;
    } else if (x == 50.0) {
      store_gpa = 1.0;
    } else if (x == 50.5) {
      store_gpa = 1.0;
    } else if (x == 51.0) {
      store_gpa = 1.08;
    } else if (x == 51.5) {
      store_gpa = 1.08;
    } else if (x == 52.0) {
      store_gpa = 1.17;
    } else if (x == 52.5) {
      store_gpa = 1.17;
    } else if (x == 53.0) {
      store_gpa = 1.25;
    } else if (x == 53.5) {
      store_gpa = 1.25;
    } else if (x == 54.0) {
      store_gpa = 1.33;
    } else if (x == 54.5) {
      store_gpa = 1.33;
    } else if (x == 55.0) {
      store_gpa = 1.42;
    } else if (x == 55.5) {
      store_gpa = 1.42;
    } else if (x == 56.0) {
      store_gpa = 1.5;
    } else if (x == 56.5) {
      store_gpa = 1.5;
    } else if (x == 57.0) {
      store_gpa = 1.58;
    } else if (x == 57.5) {
      store_gpa = 1.58;
    } else if (x == 58.0) {
      store_gpa = 1.67;
    } else if (x == 58.5) {
      store_gpa = 1.67;
    } else if (x == 59.0) {
      store_gpa = 1.75;
    } else if (x == 59.5) {
      store_gpa = 1.75;
    } else if (x == 60.0) {
      store_gpa = 1.83;
    } else if (x == 60.5) {
      store_gpa = 1.83;
    } else if (x == 61.0) {
      store_gpa = 1.92;
    } else if (x == 61.5) {
      store_gpa = 1.92;
    } else if (x == 62.0) {
      store_gpa = 2.0;
    } else if (x == 62.5) {
      store_gpa = 2.0;
    } else if (x == 63.0) {
      store_gpa = 2.08;
    } else if (x == 63.5) {
      store_gpa = 2.08;
    } else if (x == 64.0) {
      store_gpa = 2.17;
    } else if (x == 64.5) {
      store_gpa = 2.17;
    } else if (x == 65.0) {
      store_gpa = 2.25;
    } else if (x == 65.5) {
      store_gpa = 2.25;
    } else if (x == 66.0) {
      store_gpa = 2.33;
    } else if (x == 66.5) {
      store_gpa = 2.33;
    } else if (x == 67.0) {
      store_gpa = 2.42;
    } else if (x == 67.5) {
      store_gpa = 2.42;
    } else if (x == 68.0) {
      store_gpa = 2.5;
    } else if (x == 68.5) {
      store_gpa = 2.5;
    } else if (x == 69.0) {
      store_gpa = 2.58;
    } else if (x == 69.5) {
      store_gpa = 2.58;
    } else if (x == 70.0) {
      store_gpa = 2.67;
    } else if (x == 70.5) {
      store_gpa = 2.67;
    } else if (x == 71.0) {
      store_gpa = 2.75;
    } else if (x == 71.5) {
      store_gpa = 2.75;
    } else if (x == 72.0) {
      store_gpa = 2.83;
    } else if (x == 72.5) {
      store_gpa = 2.83;
    } else if (x == 73.0) {
      store_gpa = 2.92;
    } else if (x == 73.5) {
      store_gpa = 2.92;
    } else if (x == 74.0) {
      store_gpa = 3.0;
    } else if (x == 74.5) {
      store_gpa = 3.0;
    } else if (x == 75.0) {
      store_gpa = 3.08;
    } else if (x == 75.5) {
      store_gpa = 3.08;
    } else if (x == 76.0) {
      store_gpa = 3.17;
    } else if (x == 76.5) {
      store_gpa = 3.17;
    } else if (x == 77.0) {
      store_gpa = 3.25;
    } else if (x == 77.5) {
      store_gpa = 3.25;
    } else if (x == 78.0) {
      store_gpa = 3.33;
    } else if (x == 78.5) {
      store_gpa = 3.33;
    } else if (x == 79.0) {
      store_gpa = 3.42;
    } else if (x == 79.5) {
      store_gpa = 3.42;
    } else if (x == 80.0) {
      store_gpa = 3.5;
    } else if (x == 80.5) {
      store_gpa = 3.5;
    } else if (x == 81.0) {
      store_gpa = 3.58;
    } else if (x == 81.5) {
      store_gpa = 3.58;
    } else if (x == 82.0) {
      store_gpa = 3.67;
    } else if (x == 82.5) {
      store_gpa = 3.67;
    } else if (x == 83.0) {
      store_gpa = 3.75;
    } else if (x == 83.5) {
      store_gpa = 3.75;
    } else if (x == 84.0) {
      store_gpa = 3.83;
    } else if (x == 84.5) {
      store_gpa = 3.83;
    } else if (x == 85.0) {
      store_gpa = 3.92;
    } else if (x == 85.5) {
      store_gpa = 3.92;
    } else if (x >= 86.0 || x <= 100.0) {
      store_gpa = 4.0;
    }
    return store_gpa;
  }

  // Inside the handleInputChange function:
  handleInputChange = (index, text) => {
    if (
      /^\d{0,3}$/.test(text) &&
      ((index % 2 === 1 && parseInt(text) <= 30) ||
        (index % 2 === 0 && parseInt(text) <= 120))
    ) {
      this.setState(prevState => {
        const marksCrHrsArray = [...prevState.marksCrHrsArray];
        marksCrHrsArray[index] = text.trim(); // Store the text as a string without leading/trailing spaces
        return {marksCrHrsArray};
      });
    }
  };

  handleBackspacePress = index => {
    if (index === 0) {
      this.setState(prevState => {
        const marksCrHrsArray = [...prevState.marksCrHrsArray];
        marksCrHrsArray[0] = '';
        return {marksCrHrsArray};
      });
    } else if (index % 2 === 1) {
      this.setState(prevState => {
        const marksCrHrsArray = [...prevState.marksCrHrsArray];
        marksCrHrsArray[index] = marksCrHrsArray[index].slice(0, -1);
        return {marksCrHrsArray};
      });
    }
  };
  // same handleInputChange but here we apply limit to it
  // handleInputChange = (index, text) => {
  //   const numericValue = parseInt(text, 10);

  //   if (isNaN(numericValue)) {
  //     // Not a valid number
  //     return;
  //   }

  //   let min = 0;
  //   let max = 200;

  //   if (index % 2 !== 0) {
  //     // Second text input
  //     max = 30;
  //   }

  //   if (numericValue < min || numericValue > max) {
  //     // Out of range
  //     if (numericValue > max) {
  //       numericValue = max; // Set the value to the maximum allowed value
  //     } else {
  //       numericValue = min; // Set the value to the minimum allowed value
  //     }
  //   }

  //   this.setState(prevState => {
  //     const marksCrHrsArray = [...prevState.marksCrHrsArray];
  //     marksCrHrsArray[index] = numericValue;
  //     return {marksCrHrsArray};
  //   });
  // };

  calculateCGPA() {
    const {marksCrHrsArray, marksSgpPointsArray} = this.state;
    // writing code for setting the range/limit for textinput

    const oddArray = marksCrHrsArray.filter((_, index) => index % 2 === 0);
    const evenArray = marksCrHrsArray.filter((_, index) => index % 2 !== 0);

    const convertedGrades = oddArray.map(grade =>
      this.convertGradePoints(Number(grade)),
    );

    const combineArraySum = oddArray.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    );
    // console.log('array sum ', combineArraySum);

    const combineArraySumed = evenArray.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    );
    this.setState({oddArray: combineArraySum, evenArray: combineArraySumed});
    this.setState({totalSum: (combineArraySum / combineArraySumed).toFixed(2)});
  }

  renderGrid() {
    const {marksCrHrsArray} = this.state;

    const gridItems = [];
    for (let i = 0; i < 24; i += 2) {
      // marksCrHrsArray[i] === '' || marksCrHrsArray[i + 1] === '';
      marksCrHrsArray[i];

      gridItems.push(
        <View key={i} style={styles.row}>
          <View style={styles.inputContainer}>
            <TextInput
              ref={this.firstInputRefs[i / 2]}
              style={styles.input}
              value={marksCrHrsArray[i]}
              onChangeText={text => this.handleInputChange(i, text)}
              keyboardType="numeric"
              placeholder="Marks"
              maxLength={3}
              onKeyPress={({nativeEvent}) => {
                if (nativeEvent.key === 'Backspace') {
                  this.handleBackspacePress(i);
                }
              }}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={marksCrHrsArray[i + 1]}
              onChangeText={text => this.handleInputChange(i + 1, text)}
              keyboardType="numeric"
              placeholder="Cr Hours"
              maxLength={2}
              onKeyPress={({nativeEvent}) => {
                if (nativeEvent.key === 'Backspace') {
                  this.handleBackspacePress(i + 1);
                }
              }}
            />
          </View>
        </View>,
      );
    }

    return gridItems;
  }

  handleReset() {
    const emptyArray = Array(24).fill('');
    this.setState(
      {
        marksCrHrsArray: emptyArray,
        totalSgpPoints: 0,
        totalChPoints: 0,
        totalSum: (0.0).toFixed(2),
      },
      () => {
        // Set focus on the first TextInput of the first set
        if (this.firstInputRefs[0] && this.firstInputRefs[0].current) {
          this.firstInputRefs[0].current.focus();
        }
      },
    );
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          alignSelf: 'center',
          // justifyContent: 'center',
        }}>
        <View style={styles.container}>
          <View style={styles.rowText}>
            <Text style={styles.tag}>T. Semester Quality Points</Text>
            <Text style={{...styles.tag, paddingLeft: 30}}>
              T. Semester Credit Hours
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>{this.renderGrid()}</View>
          <View style={{alignItems: 'flex-end', marginTop: 10}}>
            <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
              {`Your CGPA is ${this.state.totalSum}`}
            </Text>
          </View>

          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginVertical: 10,
            }}>
            <Button
              onPress={() => this.calculateCGPA()}
              rippleColor="transparent"
              labelStyle={{color: 'white', fontSize: 16}}
              style={{
                backgroundColor: '#41916c',
                width: '40%',
                justifyContent: 'center',
                height: 40,
              }}>
              Calculate CGPA
            </Button>
            <Button
              onPress={() => this.handleReset()}
              rippleColor="transparent"
              labelStyle={{color: 'white', fontSize: 16}}
              style={{
                backgroundColor: '#41916c',
                width: '40%',
                marginLeft: 10,
                justifyContent: 'center',
                height: 40,
              }}>
              Reset
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    marginTop: 20,
    // padding: 10,
    // width: '90%',
  },
  tag: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  rowContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginHorizontal: 10,
    marginLeft: 20,
    paddingVertical: 5,
    width: '100%',
  },
  rowText: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    // alignSelf: 'center',
    justifyContent: 'space-between',
    // marginHorizontal: 10,
    marginLeft: 20,
    paddingRight: 30,
    paddingVertical: 5,
    width: '100%',
  },
  inputContainer: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    width: '50%',
    backgroundColor: '#D8f3dc',
    borderRadius: 10,
    borderWidth: 0,
    height: 30,
    padding: 5,
  },
  resultContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // width: '100%',
  },
  result: {
    color: 'black',
    fontWeight: 'bold',
    // width: '100%',
  },
});

export default Cumulative;
