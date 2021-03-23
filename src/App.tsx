import "./styles.css";
import { UserCard } from "./components/UserCard";
import { userAllUsers } from "./hooks/useAllusers";

export default function App() {
  const { getUsers, userProfile, loading, error } = userAllUsers();
  const onclickFetchUser = () => getUsers();

  return (
    <div className="App">
      <button onClick={onclickFetchUser}>データ取得</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データの取得に失敗しました</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userProfile.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}
