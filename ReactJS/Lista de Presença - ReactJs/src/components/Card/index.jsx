import './style.css'


export function Card(props){  {/*Card({name,time}) */}
    return(
        <div className="card">
            <strong>{props.name}</strong>        {/*quando o metodo comentado acima for usado, não é preciso usar o ""props."*/}
            <small>{props.time}</small>          {/*é só digitar o que quer, ex: name ou time*/}
        </div>
    );
}