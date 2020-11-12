import React from 'react'

class BadgeDisplay extends React.Component{
    render() {
        const mappedBadges = this.props.info.nameBadges.map(badge => {
            return (
                <div>
                <h1>Badge:</h1>
                    <div> Name: {this.props.firstName + ' ' + this.props.lastName}</div>
                    <div> Place of Birth: {this.props.placeOfBirth}</div>
                    <div> Email: {this.props.email}</div>
                    <div> Phone: {this.props.phone}</div>
                    <div> Favorite food: {this.props.favFood}</div>
                    <div>{this.props.aboutYou}</div>
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

// 
// function (props){
//     const mappedBadges = props.info.nameBadges.map(badge => {
//         return (
//             <Badge
//                 firstName={badge.firstName}
//                 lastName={badge.lastName}
//                 phone={badge.phone}
//                 placeOfBirth={badge.placeOfBirth}
//                 favFood={badge.favFood}
//                 email={badge.email}
//                 aboutYou={badge.aboutYou}
//                 count={badge.count}
//             />
//         )
//     })

//     return (
//         <div>
//             {mappedBadges}
//         </div>
//     )
// }
// {'(' + this.props.phone.slice(0, 3) + ') ' + this.props.phone.slice(3, 6) + '-' + this.props.phone.slice(6)}