import "./styles.css";
import { UserCard } from "./components/UserCard";

const user = {
  id: 1,
  name: "taeyong",
  email: "aaa@gmail.com",
  address: "hogehuga"
};

export default function App() {
  return (
    <div className="App">
      <UserCard user={user} />
    </div>
  );
}
