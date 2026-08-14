interface PropsComponentProps {
  name: string;
  age: number;
}
const PropsComponent = ({ name, age }: PropsComponentProps) => {
  return (
    <div>
      <h2>2. Props Component</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default PropsComponent;
