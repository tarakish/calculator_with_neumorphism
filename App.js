import { StatusBar } from 'expo-status-bar';
import {Component} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from "./style"
export default class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      leftNum: 0,
      mark: '?',
      rightNum: 0,
    }
  }
  onNum(input){
    // console.log(input);
    // this.setState({ leftNum: input["i"] })
    if (this.state.mark == "?"){
      const num = Number(String(this.state.leftNum) + String(input["i"]))
      this.setState({ leftNum: num })
    } else {
      let num = Number(String(this.state.rightNum) + String(input["i"]))
      this.setState({ rightNum: num })
    }
  }

  onMark(input){
    if (input == "plus"){
      this.setState({ mark: "+" })
    } else if (input == "minus") {
      this.setState({ mark: "-" })
    } else if (input == "times") {
      this.setState({ mark: "x" })
    } else if (input == "divide") {
      this.setState({ mark: "÷" })
    }
  }

  onReset(){
    this.setState({ leftNum: 0, mark: '?', rightNum: 0, result: 0 })
  }

  onEqual(){
    if (this.state.mark == "+") {
      this.setState({ result: this.state.leftNum + this.state.rightNum })
    } else if (this.state.mark == "-") {
      this.setState({ result: this.state.leftNum - this.state.rightNum })
    } else if (this.state.mark == "x") {
      this.setState({ result: this.state.leftNum * this.state.rightNum })
    } else if (this.state.mark == "÷") {
      this.setState({ result: this.state.leftNum / this.state.rightNum })
    }
  }


  render() {
    return (
      <View>
        <View style={styles.countArea}>
          <Text style={styles.value}> {this.state.leftNum}  {this.state.mark}  {this.state.rightNum}  =  {this.state.result}</Text>
        </View>

        <View style={styles.buttonArea}>
          <View style={{flexDirection: 'row'}}>
            {ZeroToFour.map(i => (
                <TouchableOpacity style={[styles.topbutton, styles.buttonNum]} key={i} onPress={() => this.onNum({i})}>
                  <Text style={styles.buttonText}> {i} </Text>
                </TouchableOpacity>
            ))}
          </View>
          <View style={{ flexDirection: 'row'}}>
            {FiveToNine.map(i => (
                <TouchableOpacity style={[styles.topbutton, styles.buttonNum]} key={i} onPress={() => this.onNum({i})}>
                  <Text style={styles.buttonText}> {i} </Text>
                </TouchableOpacity>
            ))}
          </View>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={[styles.button, styles.buttonUpText]} onPress={() => this.onMark("plus")}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.buttonMinus]} onPress={() => this.onMark("minus")}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.buttonTimes]} onPress={() => this.onMark("times")}>
              <Text style={styles.buttonText}>x</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.buttonDivide]} onPress={() => this.onMark("divide")}>
              <Text style={styles.buttonText}>÷</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.buttonEqual]} onPress={() => this.onEqual()}>
              <Text style={styles.buttonText}>=</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.buttonReset]} onPress={() => this.onReset()}>
              <Text style={[styles.buttonResetText]}>リセット</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
};

const ZeroToFour = [];
for (let i = 0; i< 5; i++) {
  ZeroToFour[i] = i
};

const FiveToNine = [];
for (let i = 5; i< 10; i++) {
  FiveToNine[i] = i
};
