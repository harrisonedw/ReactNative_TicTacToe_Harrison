import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import Board from './components/Board';
import Row from './components/Row';
import Space from './components/Space';
import { defaultBoard, checkForWinner, gameSize } from './gameLogic.js';

const App = () => {
  const [ turn, setTurn ] = useState(true);
  const [ numberOfMoves, setNumberOfMoves ] = useState(0);
  const [ winner, setWinner ] = useState(null);
  const [ gameState, setGameState ] = useState(defaultBoard(gameSize));

  useEffect(() => {
    if (numberOfMoves === gameSize * gameSize && !winner) {
      alert('Tie Game');
    }
    if (winner) alert(`${winner} wins!`);
  }, [numberOfMoves]);

  const updateGame = (x, y) => {
    if (!gameState[y][x]) {
      const val = turn ? 'X' : 'O';
      const newMove = gameState;
      newMove[y][x] = val;
      setGameState(newMove);
      setTurn(prev => !prev);
      setNumberOfMoves(prev => prev + 1);
      checkForWinner(gameState, x, y, (val) => {setWinner(val)});
    } else {
      alert('invalid move!');
    }
  };

  const newGame = () => {
    setGameState(defaultBoard(gameSize));
    setWinner(null);
    setTurn(true);
    setNumberOfMoves(0);
  };

  const buildBoard = (board) => {
    const rows = board.map((rowArray, y) => {
      const spaces = rowArray.map((value, x) => {
        return <Space key={`space${x}${y}`}yPosition={y} xPosition={x} value={value} updateGame={updateGame}/>
      });

      return (
        <Row key={`row${y}`}>
          {spaces}
        </Row>
      )
    });
    return rows;
  };

  return (
    <SafeAreaView>  
      <ScrollView>
        <View style={styles.gameContainer}>
          <Text style={styles.titleStyle}>Tic Tac Toe</Text>
          <Board>
            {buildBoard(gameState)}
          </Board>
          {!winner && (
            <Text style={styles.textStyle}> {turn ? 'X' : 'O'}'s turn</Text>
            )}
          {winner && (
            <Text style={styles.textStyle}>{winner} is the winner!</Text>
            )}
          <View style={styles.buttonBorder}>
            <Button title='New Game' onPress={() => newGame()}/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  gameContainer: {
    alignItems: 'center',
  },
  titleStyle: {
    color: '#2f5173',
    fontSize: 30,
    marginBottom: 25,
  },
  textStyle: {
    fontSize: 50,
    marginTop: 100,
    color: '#2f5173',
  },
  buttonBorder: {
    borderWidth: 2,
    borderRadius: 10,
    width: 100,
    marginTop: 100,
  }
});

export default App;
