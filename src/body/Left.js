import React from 'react'
import styles from './style.module.css'
import Checkbox from'./Checkbox'
import Text from './Text'

const Left = () => {
    return (
        <div>
            <Checkbox 
                headding="Delevary" 
                optionOne="get it by tommrrow" 
                optionTwo="get it in 2 days "
            />

            <Checkbox 
                headding="Deals" 
                optionOne="Todays deal" 
                optionTwo="Tommrrow deal"
            />
            <Checkbox 
                headding="brands" 
                optionOne="nokia" 
                optionTwo="Moto"
            />
            <Checkbox 
                headding="Offers" 
                optionOne="50%" 
                optionTwo="30%"
            />
            <Checkbox 
                headding="oprating system" 
                optionOne="android" 
                optionTwo="ios"
            />
            <Checkbox 
                headding="price" 
                optionOne="10,000" 
                optionTwo="30,000"
            />
            <Checkbox 
                headding="features" 
                optionOne="keypad" 
                optionTwo="touch screen"
            />
            
            <Text
                headding="New arrivels" 
                optionOne="30 days" 
                optionTwo="60 days"
            />
            <Text
                headding="item condtion" 
                optionOne="new" 
                optionTwo="Renew"
            />
            <Text
                headding="depatment" 
                optionOne="Electronic" 
                optionTwo="smartphone"
            />
            
        </div>
    )
}

export default Left
