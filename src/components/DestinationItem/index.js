// Write your code here
import './index.css'

const DestinationItem = props => {
  const {eachObj} = props
  const {name, imgUrl} = eachObj

  return (
    <li className="item-container">
      <img src={imgUrl} alt={name} className="image" />
      <p className="name">{name}</p>
    </li>
  )
}

export default DestinationItem
