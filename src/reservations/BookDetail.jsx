import { useParams } from "react-router";

export default function BookDetail() {
  const { id } = useParams();
  console.log(id);
  return <h1>BookDetail</h1>;
}
