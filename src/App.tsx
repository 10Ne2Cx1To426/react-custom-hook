import "./styles.css";
import { UserCard } from "./components/UserCard";
import axios from "axios";
import { User } from "./types/api/user";
import { useState } from "react";
import { UserProfile } from "./types/userProfile";

const user = {
  id: 1,
  name: "taeyong",
  email: "aaa@gmail.com",
  address: "hogehuga"
};

export default function App() {
  const [userProfile, setUserProfile] = useState<Array<UserProfile>>([]);
  const onclickFetchUser = () => {
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const data = res.data.map((user) => ({
          id: user.id,
          name: `${user.name}(${user.username})`,
          email: user.email,
          address: `${user.address.city}${user.address.suite}${user.address.street}`
        }));
        setUserProfile(data);
      });
  };
  return (
    <div className="App">
      <button onClick={onclickFetchUser}>データ取得</button>
      {userProfile.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
      <UserCard user={user} />
    </div>
  );
}
