import './Problems.scss'
import list from '../assets/data.jsx'

export default function List() {
    return (
        list.map(item => {
            return (
                <div className="pb">
                    {item.text}
                </div>
            )
        })
    )
    
}