// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getFilteredList = () => {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const filterList = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return filterList
  }

  render() {
    const {searchInput} = this.state
    const filteredList = this.getFilteredList()
    console.log(filteredList)

    return (
      <div className="app-container">
        <div className="destination-container">
          <h1 className="heading">Destination Search</h1>
          <div className="search-container">
            <input
              type="search"
              className="search"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
          <ul className="images-container">
            {filteredList.map(eachObj => (
              <DestinationItem key={eachObj.id} eachObj={eachObj} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
