import { useParams } from "react-router-dom";
import { users } from "../../db";

function User() {
  const { userId } = useParams();

  return (
    <h1>
      Users with it {userId} is named:{users[Number(userId) - 1].name}
    </h1>
  );
}
export default User;
