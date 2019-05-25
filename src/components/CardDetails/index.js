import React, {Component} from 'react';
import { connect } from 'react-redux';
import './_CardDetails.scss'
import Header from '../Header';

export class CardDetails extends Component {
  constructor() {
    super();
    this.state={

    }
  }

  handleClick = () => {
    this.deleteCard(this.props.id)
  }

  deleteCard = (id) => {
    const url = `http://localhost:3001/api/v1/cardList/${id}`
    fetch(url, {
      method: 'DELETE'
    })
    this.props.deleteCard(id)
  }

  render() {
    const { title, content, id } = this.props
    console.log('CardDetails', title);
    return(
      <div>
        <Header />
        <main>
        <article className="big-card">
          <section className="Card__header">
            <h4>{title}</h4>
            <button onClick={this.handleClick} className="Card__trash">X</button>
          </section>
          <div></div>
          <ul>

            <li>Test String 1</li>
            <li>
              <input type="checkbox" value="Test Checkbox" />
            </li>
          </ul>
        </article>
        </main>
      </div>
    )
  }
} 


export const mapStateToProps = (state) => ({
  cardList: state.cardList
})

export default connect(mapStateToProps)(CardDetails)