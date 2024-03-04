import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import React from 'react';
import { ScrollView } from "react-native";
import Albumdata from "./Albumdata";
import albumdata from "../json/albumdata.json";
const Albumlist=()=>{
    return (
        <ScrollView>
          <Albumdata album = {albumdata[0]} />
          <Albumdata album = {albumdata[1]} />
          <Albumdata album = {albumdata[2]} />
          <Albumdata album = {albumdata[3]} />
        </ScrollView>
      );
  };
  export default Albumlist;