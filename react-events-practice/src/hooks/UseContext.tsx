import { UserContext } from "./UserContext";

const UseContext = () => {
  return (
    <UserContext.Provider value="Akshay">
      <Profile />
    </UserContext.Provider>
  );
};

const Profile = () => {
  return <User />;
};

const User = () => {
  return <Welcome />;
};

const Welcome = () => {
  return <h2>Hello</h2>;
};

export default UseContext;
