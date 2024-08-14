import { useState } from "react";
import toast from "react-hot-toast";
import s from "./SearchCountries.module.css";
import { FiSearch } from "react-icons/fi";

const regions = [
  { id: "africa", value: "africa", name: "Africa" },
  { id: "america", value: "america", name: "America" },
  { id: "asia", value: "asia", name: "Asia" },
  { id: "europe", value: "europe", name: "Europe" },
  { id: "oceania", value: "oceania", name: "Oceania" },
];

export const SearchCountries = () => {
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
    console.log(region);
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
          <option className={s.defaultValue} value="default">
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
