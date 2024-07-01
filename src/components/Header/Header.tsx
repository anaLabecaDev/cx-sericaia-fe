import { NextImage, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import styles from './header.module.scss';

export type HeaderProps = {
  fields: {
    image: ImageField;
  };
};

const Header = ({ fields }: HeaderProps): JSX.Element => {
  return (
    <div className={styles.header_container}>
      <NextImage field={fields.image} width="126" height="52" />
    </div>
  );
};

export default Header;
