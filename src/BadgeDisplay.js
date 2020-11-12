import React from 'react'
import './style.css'

class BadgeDisplay extends React.Component{
    render() {
        const mappedBadges = this.props.info.nameBadges.map(badge => {
            return (
                <div className="badge">
                    <h1 className="badgeTag">Badge:</h1>
                    <div className="name"> Name: {badge.firstName + ' ' + badge.lastName}</div>
                    <div className="placeOfBirth"> Place of Birth: {badge.placeOfBirth}</div>
                    <div className="email"> Email: {badge.email}</div>
                    <div className="phone"> Phone: {'(' + badge.phone.slice(0, 3) + ') ' + badge.phone.slice(3, 6) + '-' + badge.phone.slice(6)}</div>
                    <div className="favFood"> Favorite food: {badge.favFood}</div>
                    <div className="aboutYou">{badge.aboutYou}</div>
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