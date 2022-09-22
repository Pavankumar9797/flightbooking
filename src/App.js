import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import FlightSearch from './components/FlightSearch';
import moment from 'moment';



class App extends Component {

    constructor() {
        super();
        
        this.state = {
            data: [],
            origin : '',
            destination:'',
            departureDate:null,
            returnDate: null,
            passengers:''
        };

        this.handleCallback = this.handleCallback.bind(this);
    }

    handleCallback(origin, destination, departureDate, returnDate, passengers){
        console.log("parent call back was sucessfull");
        this.setState({ origin: origin });
        this.setState({ destination: destination });
        this.setState({ departureDate: departureDate });
        this.setState({ returnDate: returnDate });
        this.setState({ passengers: passengers });
    }
    componentDidMount() {

        const obj = '{"airports": [{"name": "Hyderabad","code": "Hyd","currency": "INR","countryCode": "100","connections": [{"name": "Bangalore","code": "BNG","currency": "INR","countryCode": "100"}]},{"name": "Bangalore","code": "BNG","currency": "INR","countryCode": "200","connections": [{"name": "Bangalore","code": "BNG","currency": "INR","countryCode": "100"}]},{"name": "Chennai","code": "CNI","currency": "INR","countryCode": "300","connections": [{"name": "Bangalore","code": "BNG","currency": "INR","countryCode": "100"}]},{"name": "Noida","code": "NIO","currency": "INR","countryCode": "400","connections": [{"name": "Bangalore","code": "BNG","currency": "INR","countryCode": "100"}]}]}';
        const results = JSON.parse(obj);
        this.setState({ data: results.airports });
    //    fetch('https://api-uat-ezycommerce.ezyflight.se/api/v1/Airport/OriginsWithConnections/en-us', {
    //        method: 'GET',
    //        mode: 'no-cors',
    //        headers: {
    //            'Accept': 'application/json',
    //            'Tenant-Identifier': '9d7d6eeb25cd6083e0df323a0fff258e59398a702fac09131275b6b1911e202d'
    //        }
    //    })
    //        .then(results => results.json())
    //        .then(data => this.setState({ data: data }))
       
    };
 
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Flight Search</h1>
                </header>
                <div className="App-content">
                    <FlightSearch data={this.state.data} parentCallback={this.handleCallback} />
                </div>

                <div style={{ 'margin-right': '50px', 'margin-top': '25px'}}>
                    <label>origin :</label> <span>{this.state.origin}</span>
                    <br/>
                    <label>destination : </label> <span>{this.state.destination}</span>
                    <br />
                    <label>Number of Passengers : </label> <span>{this.state.passengers}</span>
                    <br />
                    <label>departureDate :</label> <span>{moment(this.state.departureDate).format('MMMM Do YYYY, h:mm:ss a')}</span>
                    <br />
                    <label>returnDate</label> <span>{moment(this.state.returnDate).format('MMMM Do YYYY, h:mm:ss a')}</span>
                </div>
            </div>
        );
    }
}

export default App;
