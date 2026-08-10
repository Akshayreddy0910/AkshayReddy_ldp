type User = {
  name: string;
  email: string;
};

type ProfileProps = {
  user: User;
};

const Profile = ({ user }: ProfileProps) => {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
};

const ObjectProps = () => {
  const user = {
    name: "Akshay",
    email: "akshay@example.com",
  };

  return <Profile user={user} />;
};

export default ObjectProps;