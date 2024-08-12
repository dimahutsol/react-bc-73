import s from './PhotoList.module.css';

export const PhotosList = ({ photos }) => {
  return (
    <ul className={s.list}>
      {photos.map(({ alt, id, src }) => (
        <li className={s.item} key={id}>
          <img src={src.small} alt={alt} />
        </li>
      ))}
    </ul>
  );
};
