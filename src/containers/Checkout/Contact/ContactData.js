import React from 'react';
import Button from '../../../components/UI/ButtonStyle/ButtonStyle';
import classes from './ContactData.module.css';



class ContactData extends React.Component{
    state={
        name:'',
        email:'',
        address:{
            postalcode:'',
            city:'',
            street:'',
            number:''
        }
    }
    render(){
        return(
        <div className={classes.ContactData}>
            <h4>Enter your information here</h4>
            <form>
                <input type="text" className={classes.input} name="name" placeholder="Your name"/>
                <input type="email" className={classes.input}  name="email" placeholder="Your email"/>
                <input type="text" className={classes.input}  name="postalcode" placeholder="Postalcode"/>
                <input type="text" className={classes.input} name="city" placeholder="City"/>
                <input type="text" className={classes.input} name="street" placeholder="Street"/>
                <input type="text" className={classes.input} name="number" placeholder="House number"/>
            </form>
            <Button btnType="Success">Order</Button>
        </div>
        )}
}

export default ContactData;