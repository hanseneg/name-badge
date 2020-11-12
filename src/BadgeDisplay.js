import React from 'react'
import './style.css'

class BadgeDisplay extends React.Component{
    render() {
        const mappedBadges = this.props.info.nameBadges.map(badge => {
            return (
                <div className="badgeContainer">
                <h1 className='h1'>Badge:</h1>
                    <div className="badgeLeft1"> Name: {badge.firstName + ' ' + badge.lastName}</div>
                    <div className="badgeLeft2"> Place of Birth: {badge.placeOfBirth}</div>
                    <div className="badgeLeft3"> Email: {badge.email}</div>
                    <div className="badgeRight1"> Phone: {'(' + badge.phone.slice(0, 3) + ') ' + badge.phone.slice(3, 6) + '-' + badge.phone.slice(6)}</div>
                    <div className="badgeRight2"> Favorite food: {badge.favFood}</div>
                    <div className="aboutYouDisplay">{badge.aboutYou}</div>
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