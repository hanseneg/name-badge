import React from 'react'
import BadgeInputs from './BadgeInputs'
import BadgeDisplay from './BadgeDisplay.js'

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            aboutYou: 'Tell us about yourself.',
            nameBadges: [],
            count: 0
        }
    }

    handleSubmit = (e, formData) => {
        e.preventDefault();
        if(formData.firstName.length < 3 || formData.lastName.length < 3 || formData.phone.length < 3 || formData.email.length < 3 || formData.favFood.length < 3 || formData.placeOfBirth.length < 3 || formData.aboutYou.length < 3){
            alert("Your entries must have at least 3 characters.")
        } else {
            if(formData.phone.length !== 10 || !Number(formData.phone)){
                alert("Your phone number must have at least 10 digits.")
            } else {
                let newNameBadge = formData
                this.setState(prevState => ({
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