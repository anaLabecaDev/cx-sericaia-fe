import { Text, RichText, Field, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import styles from './heroBanner.module.scss';

export type HeroBannerProps = {
  fields: {
    title: Field<string>;
    content: Field<string>;
    image: ImageField;
  };
};

const HeroBanner = ({ fields }: HeroBannerProps): JSX.Element => {
  const bgImageHeroBanner = {
    backgroundImage: `url(${fields.image?.value?.src})`,
  };

  return (
    <section className={styles.hero_container} style={bgImageHeroBanner}>
      <div className="">
        <div className="">
          <Text field={fields.title} tag="h1" className="" />
          <RichText field={fields.content} tag="h2" className="" />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
