import { useState } from "react";

const users = [
  { name: "Sarah", age: 20 },
  { name: "Alex", age: 20 },
  { name: "Michael", age: 35 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<{name: string, age:number} | undefined>()

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });

   setUser(foundUser)
  };

  return (
    <div>
      <h3>User Search</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Find User</button>

      <h3>{user && user.name}</h3>
      <h3>{user && user.age}</h3>
    </div>
  );
};

export default UserSearch;
