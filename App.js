import React, {Component} from 'react';
import {ImageBackground, View, StyleSheet, Text, Button} from 'react-native';

export default class PrimeiroProjeto extends Component {
  constructor(props) {
    super(props);
    this.state = {consumido: 0, status: 'Ruim', pct: 0};

    this.addCopo = this.addCopo.bind(this);
    this.atualizar = this.atualizar.bind(this);
  }

  atualizar() {
    let s = this.state;
    s.pct = Math.floor((s.consumido / 2000) * 100);

    if (s.pct >= 100) {
      s.status = 'Bom';
    } else {
      s.status = 'Ruim';
    }

    this.setState(s);
  }

  addCopo() {
    let s = this.state;
    s.consumido += 200;
    this.setState(s);

    this.atualizar();
  }

  render() {
    return (
      <View style={styles.body}>
        <ImageBackground
          source={require('./images/agua2.jpg')}
          style={styles.bgimage}
        />
        <View>
          <View style={styles.pcArea}>
            <Text style={styles.pctText}>{this.state.pct}%</Text>
          </View>
          <View style={styles.btnArea}>
            <Button
              color="#006400"
              title="Beber 200ml"
              onPress={this.addCopo}
            />
          </View>
          <View style={styles.InfoArea}>
            <View style={styles.area}>
              <Text style={styles.areaTitulo}>Meta</Text>
              <Text style={styles.areaDado}>2000 ml</Text>
            </View>
            <View style={styles.area}>
              <Text style={styles.areaTitulo}>Consumido</Text>
              <Text style={styles.areaDado}>{this.state.consumido}ml</Text>
            </View>
            <View style={styles.area}>
              <Text style={styles.areaTitulo}>Status</Text>
              <Text style={styles.areaDado}>{this.state.status}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingTop: 20,
  },
  bgimage: {
    flex: 1,
    width: null,
  },
  InfoArea: {
    flex: 1,
    flexDirection: 'row',
    marginTop: -560,
  },
  area: {
    flex: 1,
    alignItems: 'center',
  },
  areaTitulo: {
    color: '#006400',
    fontSize: 20,
  },
  areaDado: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  pcArea: {
    marginTop: -300,
    alignItems: 'center',
  },
  pctText: {
    fontSize: 70,
    color: '#000',
  },
  btnArea: {
    marginTop: -120,
    width: 150,
    color: '#000',
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 100,
    left: 105,
  },
});
