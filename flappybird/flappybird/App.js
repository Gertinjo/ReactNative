import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, TouchableWithoutFeedback, Image } from 'react-native';
import Bird from './src/component/Bird';
import Obstacle from './src/component/Obstacle'; 
import { use } from 'react';

export default function App() {
  const screenWidth = Dimensions.get('screen').width
  const screenHeight = Dimensions.get('screen').height
  const birdLeft = screenWidth / 2
  const [birdBottom, setBirdBottom] = useState(screenHeight / 2)
  const [obstacleLeft, setObstacleLeft] = useState(screenWidth)
  const [obstacleLeftTwo, setObstacleLeftTwo] = useState(screenWidth + screenWidth / 2 + 30)
  const [obstacleNegHeight, setObstacleNegHeight] = useState(0)
  const [obstacleNegHeightTwo, setObstacleNegHeightTwo] = useState(0)
  const [isGameOver, setIsGameOver] = useState(false)
  const gravity = 3
  let obstacleWidth = 60
  let obstacleHeight = 300
  let gap = 200
  let gameTimerId
  let obstacleTimerId

  useEffect(() => {
    if(birdBottom > 0){
      gameTimerId = setInterval(()=> {
        setBirdBottom(birdBottom => birdBottom -3)
      }, 30)
      return () => {
        clearInterval(gameTimerId)
      }
    }
  } , [birdBottom])

  useEffect(() => {
    if(obstacleLeft > -60){
      obstacleTimerId = setInterval(() => {
        setObstacleLeft(obstacleLeft => obstacleLeft - 5)
      }, 30)
      return () => {
        clearInterval(obstacleTimerId)
      }
    }else{
      setScore(score => + 1)
      setObstacleLeft(screenWidth)
      setObsstacleNegHeight(- Math.random() * 100)
    }
  } , [obstacleLeft])

  useEffect(() => {
    if(obstacleLeftTwo > -60){
      obstacleTimerId = setInterval(() => {
        setObstacleLeftTwo(obstacleLeftTwo => obstacleLeftTwo - 5)
      }, 30)
      return () => {
        clearInterval(obstacleTimerId)
      }
    }else{
      setScore(score => + 1)
      setObstacleLeftTwo(screenWidth)
      setObsstacleNegHeightTwo(- Math.random() * 100)
    }
  } , [obstacleLeftTwo])
  
  const jump = () => {
    if(!isGameOver && (birdBottom < screenHeight)){
      setBirdBottom(birdBottom => birdBottom + 50)
      console.log('jumped')
    }
  }

  useEffect(() => {
    if(
      (birdBottom < (obstacleNegHeight + obstacleHeight + 30) || 
      birdBottom > (obstacleNegHeight + obstacleHeight + gap - 30)) &&
      (obstacleLeft > screenWidth / 2 - 30 && obstacleLeft < screenWidth / 2 + 30)
    ){
      gameOver()
    }
})


}