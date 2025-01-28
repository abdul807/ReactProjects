import { useState , React} from "react"


const ToggleMessage = () => {
    const [isVisible, setIsVisible ] = useState(true)

    const toggleVisibility = () =>{
        
        setIsVisible(!isVisible)
        
    }
  return (
    <div>

        <h2>Toggling messages</h2>

        <button type="button" onClick = {toggleVisibility}>{isVisible ? 'Hide Message' : 'show message'}</button>
        {isVisible && <p>Message is visible</p>}
      
    </div>
  )
}

export default ToggleMessage
