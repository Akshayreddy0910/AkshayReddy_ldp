type UserProps = {
  name: string;
  age: number;
  isStudent: boolean;
};

const User = ({ name, age, isStudent }: UserProps) => {
  return (
    <div>
      <h3>Name: {name}</h3>
      <p>Age: {age}</p>
      <p>Student: {isStudent ? "Yes" : "No"}</p>
    </div>
  );
};

const BasicProps = () => {
  return <User name="Akshay" age={21} isStudent={true} />;
};

export default BasicProps;