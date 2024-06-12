#!/bin/bash

add_deps() {
  cd ./example/
  yarn add @react-navigation/native @react-navigation/native-stack @react-navigation/routers @react-navigation/stack react-native-mmkv react-native-vector-icons
  yarn add -D react-native-gesture-handler react-native-reanimated react-native-safe-area-context react-native-screens
  cd ios && pod install && cd ..
}

add_deps
