import { ChangeEvent, FC, useState, useCallback, useEffect } from "react";

import "./style.css";

interface Props {
  invites: string[];
  onAdd: (name: string) => void;
}

export const Invites: FC<Props> = ({ invites, onAdd }) => {
  const [name, setName] = useState("");

  const handleChangeName = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => { // <--- any
      setName(event.target.value);
    },
    [setName]
  );

  const handleSubmit = useCallback(() => {
    onAdd(name);
  }, [name, onAdd]);

  useEffect(() => {
    setName("");
  }, [invites.length]); // <--- (2)

  return (
    <div className="invites">
      <div className="invites--form">
        <input
          className="invites--form-input"
          onChange={handleChangeName}
          type="text"
          value={name}
        />
        <button className="invites--form-submit" onClick={handleSubmit}>
          Invite
        </button>
      </div>
      <div className="invites--delimiter" />
      <ul className="invites--items">
        {invites.map((name, idx) => (
          <li key={idx} className="invites--item">{name}</li>
        ))}
      </ul>
    </div>
  );
};
