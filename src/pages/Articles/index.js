import React, { Suspense, Fragment } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import posts from 'posts';
import Post from 'pages/Post';
import Image from 'components/Image';
import './index.css';
import { useScrollRestore } from 'hooks';
import Section from 'components/Section';

const ArticlesPost = ({
  path,
  title,
  description,
  banner,
  bannerVideo,
  bannerPlaceholder,
  bannerAlt,
  date,
}) => {
  return (
    <article className="articles__post">
      <Link className="articles__post-content" to={`/articles${path}`}>
        <div className="articles__post-image-wrapper">
          <Image
            className="articles__post-image"
            srcSet={banner ? require(`posts/assets/${banner}`) : undefined}
            videoSrc={bannerVideo ? require(`posts/assets/${bannerVideo}`) : undefined}
            placeholder={require(`posts/assets/${bannerPlaceholder}`)}
            alt={bannerAlt}
          />
          <div className="articles__post-image-tag">K256</div>
        </div>
        <div className="articles__post-text">
          <span className="articles__post-date">
            {new Date(date).toLocaleDateString('default', {
              year: 'numeric',
              month: 'long',
            })}
          </span>
          <h2 className="articles__post-title">{title}</h2>
          <p className="articles__post-description">{description}</p>
        </div>
      </Link>
    </article>
  );
};

const Articles = () => {
  useScrollRestore();

  return (
    <div className="articles">
      <Helmet>
        <title>{`Articles | Hamish Williams Designer`}</title>
        <meta
          name="description"
          content="A collection of technical design and development articles."
        />
      </Helmet>
      <Section className="articles__content">
        <div className="articles__column">
          {posts.map(({ path, ...post }, index) => (
            <Fragment>
              {index !== 0 && <hr className="articles__divider" />}
              <ArticlesPost key={path} path={path} {...post} />
            </Fragment>
          ))}
        </div>
      </Section>
    </div>
  );
};

const ArticlesRouter = () => {
  return (
    <Post>
      <Suspense fallback={Fragment}>
        <Switch>
          {posts.map(({ content: PostComp, path, ...rest }) => (
            <Route
              key={path}
              path={`/articles${path}`}
              render={() => <PostComp {...rest} />}
            />
          ))}
          <Route component={Articles} />
        </Switch>
      </Suspense>
    </Post>
  );
};

export default ArticlesRouter;

// const PostListWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const PostListContent = styled.div`
//   max-width: var(--maxWidthL);
//   width: 100%;
//   display: grid;
//   grid-template-columns: 144px 1fr;
//   gap: 20px;
//   padding: 80px 0;
//   position: relative;

//   @media (max-width: ${media.mobile}px) {
//     padding-top: 100px;
//   }
// `;

// const ArticlesPostWrapper = styled.article`
//   display: flex;
//   justify-content: center;
//   ${sectionPadding}
// `;

// const PostTitleWrapper = styled.div`
//   display: flex;
//   align-items: flex-start;
// `;

// const PostListColumn = styled.div`
//   display: grid;
//   grid-template-columns: 100%;
//   gap: 60px;
// `;

// const PostListTitle = styled.h1`
//   font-size: 120px;
//   margin: 0;
//   writing-mode: vertical-rl;
//   transform: rotate(180deg);
//   position: relative;
// `;

// const PostContent = styled(Link)`
//   width: 100%;
//   display: grid;
//   grid-template-columns: 300px 1fr;
//   gap: 0 40px;
//   text-decoration: none;
//   transition: background-color var(--durationM) ease;

//   @media (max-width: ${media.tablet}px) {
//     grid-template-columns: 100%;
//     max-width: 440px;
//   }
// `;

// const PostText = styled.div`
//   grid-column: 2;
//   padding: 60px 0;

//   @media (max-width: ${media.tablet}px) {
//     grid-column: 1;
//     padding: 30px 0;
//   }
// `;

// const PostDate = styled.span`
//   display: block;
//   margin-bottom: 8px;
//   color: var(--colorTextLight);
// `;

// const PostTitle = styled.h2`
//   margin: 0;
//   font-size: 36px;
//   font-weight: var(--fontWeightMedium);
//   line-height: 1.2;
//   color: var(--colorTextTitle);
//   display: inline;
//   background: linear-gradient(var(--colorTextBody), var(--colorTextBody)) no-repeat 100%
//     100% / 0 2px;
//   transition: background-size var(--durationM) var(--bezierFastoutSlowin);
//   padding-bottom: 2px;

//   &:hover,
//   &:focus {
//     background: linear-gradient(var(--colorTextBody), var(--colorTextBody)) no-repeat 0
//       100% / 100% 2px;
//   }

//   @media (max-width: ${media.mobile}px) {
//     font-size: 30px;
//   }
// `;

// const PostDescription = styled.p`
//   font-size: 20px;
//   line-height: 1.5;
//   color: var(--colorTextBody);
//   margin: 20px 0 0;

//   @media (max-width: ${media.mobile}px) {
//     font-size: 18px;
//   }
// `;

// const PostImage = styled(ProgressiveImage)`
//   height: 100%;
//   clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 100%, 70% calc(100% - 14px), calc(70% - 60px) calc(100% - 14px), calc(70% - 60px) 100%, 28px 100%, 0 calc(100% - 28px));

//   img,
//   video {
//     height: 100%;
//     width: 100%;
//     object-fit: cover;
//     transition: transform 0.5s var(--bezierFastoutSlowin);
//   }

//   ${/* sc-selector */ PostContent}:hover & img,
//   ${/* sc-selector */ PostContent}:hover & video {
//     transform: scale3d(1.1, 1.1, 1);
//   }
// `;

// const PostImageWrapper = styled.div`
//   position: relative;
//   background: rgba(255, 255, 255, 0.1);
// `;

// const PostImageTag = styled.div`
//   position: absolute;
//   bottom: -10px;
//   left: calc(70% - 60px);
//   padding: 0 10px;
//   text-align: center;
//   width: 60px;
//   font-size: 14px;
//   font-weight: var(--fontWeightMedium);
//   color: var(--colorTextLight);
// `;
