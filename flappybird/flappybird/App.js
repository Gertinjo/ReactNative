import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, TouchableWithoutFeedback, Image } from 'react-native';
import Bird from './src/component/Bird';
import Obstacle from './src/component/Obstacle'; 

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
  })