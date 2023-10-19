import './Card.css'


function Card(props){
	return (
		<div className={classes}>{props.children}</div>
	)
}
export default Card
