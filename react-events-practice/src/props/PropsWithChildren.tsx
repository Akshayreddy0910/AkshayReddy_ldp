type CardProps = {
  title: string;
  children: React.ReactNode;
};

const Card = ({ title, children }: CardProps) => {
  return (
    <div>
      <h3>{title}</h3>
      {children}
    </div>
  );
};

const PropsWithChildren = () => {
  return (
    <Card title="User Details">
      <p>Name: Akshay</p>
      <p>Role: Developer</p>
    </Card>
  );
};

export default PropsWithChildren;