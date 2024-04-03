import './item.css';
function Item(props)
{
     const itemName=props.name;
     return (
     <div>
     <p className="item">{itemName}</p>
       {props.children}
      </div>
     );
}
export default Item;