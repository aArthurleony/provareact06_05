import './Div.css'
import TextoCentral from './TextoCentral/TextoCentral'
import Button from "../Button/Button"
import Submit from '../Submit/Submit'



const Div = ()=>{
    return(
        <>
        <div className='Div_central'>
            <div className='box1'>
                <img src="./images/icon-star.svg" alt="" className='star' />
            </div>
            <div className='box2'>
                <TextoCentral/>
                
            </div>
            <div className='box3'>
            <Button numero={1}/>
            <Button numero={2}/>
            <Button numero={3}/>
            <Button numero={4}/>
            <Button numero={5}/>
            <Submit/>
            </div>
        </div>
        </>
    )
}

export default Div