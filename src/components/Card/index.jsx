import './Card.css'

export const Card = (props) =>{
    return(
        <div className="main-card">
            {props.icon}
            <h1 style={props.styleH1}>{props.h1}</h1>
            <p style={props.styleP}>{props.p}</p>
        </div>
    )
}


