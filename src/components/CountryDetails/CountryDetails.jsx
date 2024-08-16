import styles from "./CountryDetails.module.css";

export const CountryDetails = ({ countryInfo }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.flag}>
        <img
          className={styles.img}
          src={countryInfo.flags.png}
          alt={countryInfo.flags.alt}
        />
      </div>
      <div className={styles.box}>
        <h3 className={styles.capital}>
          Capital: <span className={styles.accent}>{countryInfo.capital}</span>
        </h3>

        <h1 className={styles.title}>
          {countryInfo.name.common === "Russian Federation"
            ? "MORDOR"
            : countryInfo.name.common}
        </h1>

        <p className={styles.details}>
          Population:{" "}
          <span className={styles.accent}>{countryInfo.population}</span>
        </p>

        <p className={styles.details}>
          Languages:
          <span className={styles.accent}>
            {Object.values(countryInfo.languages).join(", ")}
          </span>
        </p>
      </div>
    </div>
  );
};
