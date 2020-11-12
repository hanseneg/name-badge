import React from 'react'
import BadgeInputs from './BadgeInputs'
import BadgeDisplay from './BadgeDisplay.js'

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            placeOfBirth: '',
            phone: '',
            favFood: '',
            aboutYou: 'Tell us about yourself.',
            nameBadges: [],
            count: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        const target = e.target
        const value = e.target.value
        const name = target.name
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        if(this.state.firstName.length < 3 || this.state.lastName.length < 3 || this.state.phone.length < 3 || this.state.email.length < 3 || this.state.favFood.length < 3 || this.state.placeOfBirth.length < 3 || this.state.aboutYou.length < 3){
            alert("Your entries must have at least 3 characters.")
        } else {
            if(this.state.phone.length !== 10 || !Number(this.state.phone)){
                alert("Your phone number must have at least 10 digits.")
            } else {
                let newNameBadge = this.state
                this.setState(prevState => ({
                    firstName: '',
                    lastName: '',
                    email: '',
                    placeOfBirth: '',
                    phone: '',
                    favFood: '',
                    aboutYou: '',
                    nameBadges: [...prevState.nameBadges, newNameBadge],
                    count: prevState.count + 1
                }))
            }
        }
    }

    render(){
        return (
            <div>
                <div>
                    <BadgeInputs
                        handleSubmit={this.handleSubmit}
                        value={this.state}
                        handleChange={this.handleChange}
                    />
                </div>
                <div>
                    <BadgeDisplay
                        info={this.state}/>
                </div>
            </div>
        )
    }
}

export default App