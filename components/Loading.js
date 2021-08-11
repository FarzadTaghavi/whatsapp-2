import { Circle } from "better-react-spinkit";
import Image from "next/image";
import ws from "../images/whatsapp.png";

function Loading() {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <Image
          src={ws}
          alt="whatsapp"
          height={200}
          width={200}
          style={{ marginBottom: 10 }}
        />
        <Circle color="#3CBC28" size={60} />
      </div>
    </center>
  );
}

export default Loading;
