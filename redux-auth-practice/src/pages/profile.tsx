import { useAppSelector } from "../app/hooks";

function Profile() {
  const user = useAppSelector(
    (state) => state.auth.user
  );

  return (
    <div className="page">
      <h1>Profile</h1>

      <p>
        <strong>ID:</strong>{" "}
        {user?.id}
      </p>

      <p>
        <strong>Name:</strong>{" "}
        {user?.name}
      </p>

      <p>
        <strong>Email:</strong>{" "}
        {user?.email}
      </p>
    </div>
  );
}

export default Profile;