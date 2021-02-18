import './Heading.css';

function Heading(props) {
  return (
    <div className="heading-container">
      <h2>{props.title}</h2>
      <div className='separator' />
      <p className='heading-description'>{props.description}</p>
    </div>
  );
}

export default Heading;
