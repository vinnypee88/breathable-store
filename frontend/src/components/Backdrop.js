import "./Backdrop.css";

const Backdrop = ({ show, click }) => {
  // if show is true then div
  return show && <div className="backdrop" onClick={click}></div>;
};

export default Backdrop;
