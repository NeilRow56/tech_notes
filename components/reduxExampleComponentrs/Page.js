import Link from "next/link";
import Users from "./Users";
import AddCount from "./IncrementCounter";

const Page = (props) => {
  return (
    <div>
      <h1 className="text-3xl font-bold "     style={{backgroundColor: "#ddd"}}>{props.title}</h1>
      <Users/>
      <AddCount />
      <br/>
      <nav>
        <Link href={props.linkTo}>
          <a>Navigate</a>
        </Link>
      </nav>
    </div>
  );
};

export default Page;