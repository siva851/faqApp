// Write your code here.
import FaqItem from '../FaqItem'
import {Component} from 'react'

import './index.css'
class Faqs extends Component {

//const Faqs = props => {
  render(){
  const {faqsList} = this.props

  return (
    <div className="app-container">
      <div className="faqs-container">
        <h1 className="heading">FAQs</h1>
        <ul className="faqs-list">
          {faqsList.map(eachFaq => (
            <FaqItem key={eachFaq.id} faqDetails={eachFaq} />
          ))}
        </ul>
      </div>
    </div>
  )
}
}
export default Faqs
