import axios from "axios";
import { API_URL } from "@/app/consts/apiURL";
import { PhoneNumberDTO } from "../models/phone-number/phone-number.dto";
import Link from "next/link";

export default async function Page() {
  const { data } = await axios.get<PhoneNumberDTO[]>(
    API_URL + "phone-numbers/all"
  );

  return (
    <div>
      <h1>OUR PHONE NUMBERS</h1>
      {data.map((value) => {
        return (
          <div key={value.number}>
            Number:
            <Link
              href={{
                pathname: `result/${value.id}`,
              }}
            >
              {value.number}
            </Link>
            , times seen: {value.numberOfSearches}{" "}
          </div>
        );
      })}
    </div>
  );
}
