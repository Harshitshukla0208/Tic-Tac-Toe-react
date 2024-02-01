import Icon from '../icon/Icon'
import './Card.css' 

function Card({iconName}) {
    return(
        <div className="card">
            <div className='card1'>
                <Icon name={iconName}/>
            </div>
            <div className='card2'>
                <Icon name={iconName}/>
            </div>
            <div className='card3'>
                <Icon name={iconName}/>
            </div>
            <div className='card4'>
                <Icon name={iconName}/>
            </div>
            <div className='card5'>
                <Icon name={iconName}/>
            </div>
            <div className='card6'>
                <Icon name={iconName}/>
            </div>
            <div className='card7'>
                <Icon name={iconName}/>
            </div>
            <div className='card8'>
                <Icon name={iconName}/>
            </div>
            <div className='card9'>
                <Icon name={iconName}/>
            </div>
        </div>
    )
}

export default Card;