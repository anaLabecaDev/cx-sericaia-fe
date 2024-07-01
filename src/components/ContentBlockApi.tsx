import {
  Field,
  GetStaticComponentProps,
  useComponentProps,
  ComponentRendering,
} from '@sitecore-jss/sitecore-jss-nextjs';

type PostEntity = {
  title: string;
  body: string;
};

type ContentBlockApiProps = {
  rendering: ComponentRendering;
  fields: {
    heading: Field<string>;
    content: Field<string>;
  };
};

const ContentBlockApi = ({ fields, rendering }: ContentBlockApiProps): JSX.Element => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const externalData = rendering.uid ? useComponentProps<PostEntity>(rendering.uid) : undefined;

  console.log('fields:', fields);
  console.log('rendering:', rendering);
  console.log('externalData:', externalData);

  return (
    <>
      {externalData && (
        <div>
          <h1>{externalData?.title}</h1>
          <p>{externalData?.body}</p>
        </div>
      )}
    </>
  );
};

const fetchPost = () =>
  fetch('https://jsonplaceholder.typicode.com/posts/1').then((res) => res.json());

export const getStaticProps: GetStaticComponentProps = async (rendering, layoutData, context) => {
  console.log('params: ', rendering, layoutData, context);
  const post = await fetchPost();
  console.log('POST DATA: ', post);

  return post;
};

export default ContentBlockApi;
