import React from 'react'

class BadgeInputs extends React.Component{
    constructor(){
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            placeOfBirth: '',
            phone: '',
            favFood: '',
            aboutYou: 'Tell us about yourself.'
        }
    }

    handleChange = (e) => {
        const target = e.target
        const value = e.target.value
        const name = target.name
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.props.handleSubmit(e, this.state)}>
                    <div>
                        <input
                            onChange={this.handleChange}
                            type="text"
                            name="firstName"
                            value={this.state.firstName}
                            placeholder="First Name"
                            required
                            />
                        <input
                            onChange={this.handleChange}
                            type="text"
                            name="lastName"
                            value={this.state.lastName}
                            placeholder="Last Name"
                            required
                            />
                            <br></br>
                        <input
                            onChange={this.handleChange}
                            type="email"
                            name="email"
                            value={this.state.email}
                            placeholder="Email"
                            required
                            />
                        <input
                            onChange={this.handleChange}
                            type="text"
                            name="placeOfBirth"
                            value={this.props.placeOfBirth}
                            placeholder="Place of Birth"
                            required
                            />
                            <br></br>
                        <input
                            onChange={this.handleChange}
                            type="number"
                            name="phone"
                            value={this.state.phone}
                            placeholder="Phone"
                            required
                            />
                        <input
                            onChange={this.handleChange}
                            type="text"
                            name="favFood"
                            value={this.state.favFood}
                            placeholder="Favorite Food"
                            required
                            />
                    </div>
                    <div>
                        <textArea
                            onChange={this.handleChange}
                            name="aboutYou"
                            value={this.state.aboutYou}
                            placeholder="Tell us about yourself."
                            required
                        >
                        </textArea>
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default BadgeInputs;