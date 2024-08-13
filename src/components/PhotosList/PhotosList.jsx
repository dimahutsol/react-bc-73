import s from "./PhotoList.module.css";

export const PhotosList = ({ photos, handleOpenModal }) => {
  return (
    <ul className={s.list}>
      {photos.map(({ alt, id, src }) => (
        <li className={s.item} key={id}>
          <img
            onClick={() => handleOpenModal({ url: src.large, alt })}
            src={src.small}
            alt={alt}
          />
        </li>
      ))}
    </ul>
  );
};
