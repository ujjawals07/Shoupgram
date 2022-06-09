import React from "react";

class Search extends React.Component {
  state = { term: "" };

  oninputchange = (e) => {
    this.setState({ term: e.target.value });
  };
  submits = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <React.Fragment>
        <div className="search-bar" onSubmit={this.submits}>
          <input
            type="text"
            value={this.state.term}
            onChange={this.oninputchange}
            className="search-input i o"
          />
          <label
            onSubmit={this.submits}
            className="fas fa-search search-label"
          ></label>
        </div>
      </React.Fragment>
    );
  }
}

export default Search;
