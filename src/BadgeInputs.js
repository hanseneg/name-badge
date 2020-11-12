import React from 'react'

class BadgeInputs extends React.Component{
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <div>
                        <input
                            onChange={this.props.handleChange}
                            type="text"
                            name="firstName"
                            value={this.props.firstName}
                            placeholder="First Name"
                            required
                            />
                        <input
                            onChange={this.props.handleChange}
                            type="text"
                            name="lastName"
                            value={this.props.lastName}
                            placeholder="Last Name"
                            required
                            />
                        <input
                            onChange={this.props.handleChange}
                            type="email"
                            name="email"
                            value={this.props.value.email}
                            placeholder="Email"
                            required
                            />
                        <input
                            onChange={this.props.handleChange}
                            type="text"
                            name="placeOfBirth"
                            value={this.props.value.placeOfBirth}
                            placeholder="Place of Birth"
                            required
                            />
                        <input
                            onChange={this.props.handleChange}
                            type="number"
                            name="phone"
                            value={this.props.value.phone}
                            placeholder="Phone"
                            required
                            />
                        <input
                            onChange={this.props.handleChange}
                            type="text"
                            name="favFood"
                            value={this.props.value.favFood}
                            placeholder="Favorite Food"
                            required
                            />
                    </div>
                    <div>
                        <textArea
                            onChange={this.props.handleChange}
                            name="aboutYou"
                            value={this.props.value.aboutYou}
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