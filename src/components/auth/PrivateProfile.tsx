export type ProfileProps = {
  name: string;
};
const PrivateProfile = ({ name }: ProfileProps) => {
  return <div>Private Profile Component. Name is {name}</div>;
};

export default PrivateProfile;
