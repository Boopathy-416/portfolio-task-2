import "../skill section/Skillslist.css";

function Skillslist({ id, title, active, setSelected }) {
  return (
    <div>
      <li
        className={active ? "Skillslist active" : "Skillslist"}
        onClick={() => setSelected(id)}
      >
        {title}
      </li>
    </div>
  );
}

export default Skillslist;
