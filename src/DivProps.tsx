interface Props {
  children: React.ReactNode;
}

const Child = ({ children }: Props) => {
  return <div className="border">{children}</div>;
};
export default Child