"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { CreatePhoneNumberDto } from "./models/phone-number/create-phone-number.dto";
import { PhoneNumberDTO } from "./models/phone-number/phone-number.dto";
import { API_URL } from "./consts/apiURL";
import SearchInput from "./components/Search/Search";
import "./globals.scss";

export default function Page() {
  const router = useRouter();

  async function searchPhone(inputValue: string) {
    try {
      const dto: CreatePhoneNumberDto = {
        phoneNumberData: {
          number: inputValue,
        },
      };
      await axios
        .post<PhoneNumberDTO>(API_URL + "phone-numbers/createPhoneNumber", dto)
        .then((response) => {
          const { data } = response;
          router.push(`/result/${data.id}`);
        });
    } catch (error) {
      console.error("Error searching phone number:", error);
    }
  }
  return (
    <div>
      <h1>Search for suspisois number</h1>
      <SearchInput
        onSearch={(inputValue) => searchPhone(inputValue)}
      ></SearchInput>
    </div>
  );
}
