import "../index.css";

const Event = ({ title, type, image, link }) => {
  return (
    <div className="card">
      {/* Image */}
      <img src={image} alt={title} className="card-img-top" />

      {/* Card Body */}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{type}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Watch Live
        </a>
      </div>
    </div>
  );
};

export default Event;

