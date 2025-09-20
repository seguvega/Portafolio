import RowComponent from "./RowComponent";

const ListComponent = ({List}) =>
{
    return(
       <div>
        {List.map((Data, Index) => (< RowComponent key={Index} item={Data} />))}
       </div>
    );
}

export default ListComponent;