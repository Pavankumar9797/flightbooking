import React from 'react';
import PropTypes from 'prop-types';

export default class QtySelector extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectValue: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.generateOptions = this.generateOptions.bind(this);
    }

    //componentWillMount() {
    //    this.setState({ selectValue: (this.props.currentValue || '1') });
    //}

    handleChange(e) {
        this.setState({ selectValue: e.target.value });
        this.props.callbackParent(e.target.value);
    }

    generateOptions() {
        let options = [];
        for (let i = 1; i <= 10; i++) {
            options.push(<option key={`qty-${i}`} value={`${i}`}>{i}</option>);
        }
        return options;
    }

    render() {
        return (
            <div className="qty-selector">

                <select
                    value={this.state.selectValue}
                    onChange={this.handleChange} style={{ 'padding': '12px 16px', 'margin-right': '8px', 'border-radius': '6px', 'border': '1px solid #ccc' }}
                >
                    <option value="" disabled selected hidden>Passengers</option>
                    {
                        this.generateOptions()
                    }
                </select>
            </div>
        );
    }
}
