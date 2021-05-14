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
import { defaultBoard, checkForWinner } from './gameLogic.js';

const App = () => {
  const [ turn, setTurn ] = useState(true);
  const [ numberOfMoves, setNumberOfMoves ] = useState(0);
  const [ winner, setWinner ] = useState(null);
  const [ gameState, setGameState ] = useState(defaultBoard());

  useEffect(() => {
    if (numberOfMoves === 9 && !winner) {
      alert("tie game")
    }
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
      alert("invalid move!");
    }
  };

  const newGame = () => {
    setGameState(defaultBoard());
    setWinner(null);
    setTurn(true);
    setNumberOfMoves(0);
  };

  const buildBoard = (board) => {
    const rows = board.map((rowArray, y) => {
      const spaces = rowArray.map((value, x) => {
        return <Space yPosition={y} xPosition={x} value={value} updateGame={updateGame}/>
      });

      return (
        <Row>
          {spaces}
        </Row>
      )
    });
    return rows;
  };

  return (
    <SafeAreaView>  
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View style={styles.gameContainer}>
          <Text>Tic Tac Toe</Text>
          <Button title="New Game" onPress={() => newGame()}/>
          <Board>
            {buildBoard(gameState)}
          </Board>
          <Text> {turn ? 'X' : 'O'}'s... turn</Text>
          {winner && (
            <Text>{winner} wins</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  gameContainer: {
    alignItems: 'center',
  }
});

export default App;
