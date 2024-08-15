import { useState } from "react";
import toast from "react-hot-toast";
import s from "./SearchCountriesForm.module.css";
import { FiSearch } from "react-icons/fi";

const regions = [
  { id: "africa", value: "africa", name: "Africa" },
  { id: "america", value: "america", name: "America" },
  { id: "asia", value: "asia", name: "Asia" },
  { id: "europe", value: "europe", name: "Europe" },
  { id: "oceania", value: "oceania", name: "Oceania" },
];

export const SearchCountriesForm = ({ onSubmit }) => {
  const [region, setRegion] = useState("");

  const handleChange = (e) => {
    setRegion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!region) {
      toast.error("Please select region");
      return;
    }
    onSubmit(region);
  };

  return (
    <div>
      <form className={s.form} onSubmit={handleSubmit}>
        <select
          className={s.select}
          defaultValue="default"
          name="region"
          onChange={handleChange}
        >
          <option disabled value="default">
            Select a region
          </option>
          {regions.map((region) => {
            return (
              <option key={region.id} value={region.value}>
                {region.name}
              </option>
            );
          })}
        </select>
        <button className={s.btn} type="submit">
          <FiSearch />
        </button>
      </form>
    </div>
  );
};
