import React, { Component } from 'react';

export default class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      term: ''
    }

    this.onInputChange = this.onInputChange.bind(this);

  }

  onInputChange(event) {
    this.setState({
      term: event.target.value
    });
  }

  render() {
    return (
      <div>
        <from className="input-group">
          <input vlaue
            placeholder="Auburn, WA"
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Submit</button>
          </span>
        </from>
      </div>
    );
  }
}