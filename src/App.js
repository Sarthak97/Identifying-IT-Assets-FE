import React, { Component } from 'react';
import Title from './components/Title';
import Card from './components/Card';
import { seed } from './seed';
import './App.css';
import 'tachyons';

class App extends Component {
  render() {
    return (
      <div>
        <Title />
        {/*<SearchBox />*/}
        <div>
          <Card name = {seed[0].name} ip = {seed[0].IP}/>
          <Card name = {seed[1].name} ip = {seed[1].IP}/>
          <Card name = {seed[2].name} ip = {seed[2].IP}/>
          <Card name = {seed[3].name} ip = {seed[3].IP}/>
          <Card name = {seed[4].name} ip = {seed[4].IP}/>
        </div>
      </div>
    );
  }
}

export default App;
