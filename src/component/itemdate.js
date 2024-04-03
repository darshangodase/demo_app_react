
import './itemdate.css'

function Itemdate(props)
    {
        const date=props.day;;
        const day=props.month ;
        const year=props.year;
        return (
            <div className="items">
               <span>{date} </span>
               <span>{day}</span>
               <span>{year}</span>

            </div>
        )
    }
export default Itemdate;
