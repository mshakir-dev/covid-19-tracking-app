import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Cards, Chart, CountryPicker, Header } from './components';
import { fetchData } from './api';


class App extends Component {
  state = {
    data: {},
    country: '',
  }
  async componentDidMount () {
    const fetchedData = await fetchData();
    this.setState( { data: fetchedData } );
  }

  handleCountryChange = async(country) => {
    const fetchedData = await fetchData(country);
    console.log(fetchedData);
    this.setState( { data: fetchedData, country: country } );
  } 
  
  render () {
    const {data, country} = this.state;
    return (
      <div>
        <Header />
        <Cards data={ data }/>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;