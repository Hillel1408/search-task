import { Oval } from "react-loader-spinner";

export function Spinner() {
  return (
    <Oval
      height={24}
      width={24}
      color="#f0ffff"
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#7a7a7a"
      strokeWidth={4}
      strokeWidthSecondary={4}
    />
  );
}
