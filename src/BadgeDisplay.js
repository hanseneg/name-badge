import React from 'react'

class BadgeDisplay extends React.Component{
    render() {
        const mappedBadges = this.props.info.nameBadges.map(badge => {
            return (
                <div>
                <h1>Badge:</h1>
                    <div> Name: {badge.firstName + ' ' + badge.lastName}</div>
                    <div> Place of Birth: {badge.placeOfBirth}</div>
                    <div> Email: {badge.email}</div>
                    <div> Phone: {'(' + badge.phone.slice(0, 3) + ') ' + badge.phone.slice(3, 6) + '-' + badge.phone.slice(6)}</div>
                    <div> Favorite food: {badge.favFood}</div>
                    <div>{badge.aboutYou}</div>
                </div>
            )
        })  
            return (
                <div>
                    {mappedBadges}
                </div>
        )  
    }
}

export default BadgeDisplay