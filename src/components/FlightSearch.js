import React, {PureComponent} from 'react';
import './FlightSearch.css';
import {FormGroup, FormControl, Button} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import QtySelector from './QtySelector';
import moment from 'moment';

export default class extends PureComponent {
    constructor(props) {
        super(props);
       
        this.state = {
            origin: '',
            destination: '',
            departureDate: null,
            returnDate: null,
            name: 'One-Way',
            passengers : ''
        };

        this.onOriginChange = this.onOriginChange.bind(this);
        this.onDestinationChange = this.onDestinationChange.bind(this);
        this.departureDateChange = this.departureDateChange.bind(this);
        this.returnDateChange = this.returnDateChange.bind(this);
        this.onSearchFlights = this.onSearchFlights.bind(this);
        this.handlechange = this.handlechange.bind(this);
        this.selectedPassengers = this.selectedPassengers.bind(this);
       
    }

    onOriginChange(e) {
        this.setState({
            origin: e.target.value
        });
    }

    onDestinationChange(e) {
        this.setState({
            destination: e.target.value
        });
    }

    departureDateChange(date) {
        this.setState({
            departureDate: date
        });
    }

    returnDateChange(date) {
        this.setState({
            returnDate: date
        });
    }

    handlechange(e) {
        this.setState({
            name: e.target.value
        });

    }
    selectedPassengers(value) {
        
        this.setState({
            passengers: value
        });
    }


    //validateInputs() {
    //    if (this.state.origin.length === 0) {
    //        return false;
    //    }
    //    if (this.state.destination.length === 0) {
    //        return false;
    //    }
    //    if (!this.state.departureDate) {
    //        return false;
    //    }
    //    if (!this.state.returnDate) {
    //        return false;
    //    }

    //    return true;
    //}

    onSearchFlights() {
        console.log(this.state.origin);
        console.log(this.state.destination);
        console.log(this.state.passengers);
        console.log(this.state.departureDate);
        console.log(this.state.returnDate);
        
        this.props.parentCallback(
            this.state.origin,
            this.state.destination,
            this.state.departureDate,
            this.state.returnDate,
            this.state.passengers
        );

     //setType()
     //   {
     //       console.log('hi');
     //   }
    }
    render() {
        return (
            <div>
                <div>
                    <input type="radio" id="Flightbook1" checked={this.state.name === "One-Way"} value="One-Way" onChange={this.handlechange} /><label> One-Way </label>
                    <input type="radio" id="Flightbook2" checked={this.state.name === "Round-Trip"} value="Round-Trip" onChange={this.handlechange} /><label> Round-Trip </label>
                </div>
            <div className="fs-container">
               
                <FormGroup controlId="origin" >
                    {/*<select name="origin" title="origin">*/}
                    {/*    {Object.keys(this.props.data).map(element => <option key={element} value={this.props.data[element]}>{element}</option>)}*/}
                    {/*</select>*/}
                        <select className='form-select' onChange={this.onOriginChange} style={{ 'margin-left' : '33px'}} >
                        <option value="" disabled selected hidden>Origin</option>
                        {
                        this.props.data.map((obj) => {
                            return <option value={obj.name}>{obj.name}</option>
                        })
                    }</select>
                    
                    </FormGroup>
                <FormGroup controlId="destination" >
                        <select className='form-select' onChange={this.onDestinationChange}>
                        <option value="" disabled selected hidden>Destination</option>
                        {
                            this.props.data.map((obj) => {
                                return <option value={obj.name}>{obj.name}</option>
                            })
                        }</select>
                </FormGroup>
                    
                    <DatePicker placeholderText="Departure date" name="Departuredate" dateFormat="MM/dd/yyyy" selected={this.state.departureDate} onChange={this.departureDateChange}/>
                    {this.state.name === "Round-Trip" ? <DatePicker placeholderText="Return date" name="Returndate" dateFormat="MM/dd/yyyy" selected={this.state.returnDate} onChange={this.returnDateChange} /> : null}
                    <QtySelector label="Passengers" callbackParent={this.selectedPassengers} />
                    <Button style={{ 'height': '40px', 'margin-left': '45px' }} onClick={this.onSearchFlights}>{'Search'}</Button>
                </div>
                </div>
        );
    }
}



