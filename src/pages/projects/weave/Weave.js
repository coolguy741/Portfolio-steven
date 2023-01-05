import backgroundSprLarge from 'assets/spr-background-large.jpg';
import backgroundSprPlaceholder from 'assets/spr-background-placeholder.jpg';
import backgroundSpr from 'assets/spr-background.jpg';
import imageWeaveDarkLarge from 'assets/weave-dark-large.jpg';
import imageWeaveDarkPlaceholder from 'assets/weave-dark-placeholder.jpg';
import imageWeaveDark from 'assets/weave-dark.jpg';
import imageWeaveLightLarge from 'assets/weave-light-large.jpg';
import imageWeaveLightPlaceholder from 'assets/weave-light-placeholder.jpg';
import imageWeaveLight from 'assets/weave-light.jpg';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { useTheme } from 'components/ThemeProvider';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionContent,
} from 'layouts/Project';
import { Fragment } from 'react';
import { media } from 'utils/style';
import styles from './Weave.module.css';

const title = 'Front End / Blockchain Developer';
const description =
  'I worked as the lead on the front-end team of Weave development. I made an improvement on SEO with Next.js, resulting rise of token price up to 240% by demands of mass users. Also trained 2 trainee members of team with Next.js framework and Blockchain technology.';
const roles = [
  'Front End Lead',
  'Back End Development',
  'Blockchain Development',
  'Front End Trainer',
];

export const Weave = () => {
  const { themeId } = useTheme();

  const isDark = themeId === 'dark';

  return (
    <Fragment>
      <ProjectContainer className="spr">
        <Meta title={title} prefix="Projects" description={description} />
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundSpr}
          srcSet={`${backgroundSpr.src} 1080w, ${backgroundSprLarge.src} 2160w`}
          placeholder={backgroundSprPlaceholder}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://weave.financial/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [imageWeaveDark, imageWeaveDarkLarge]
                  : [imageWeaveLight, imageWeaveLightLarge]
              }
              placeholder={
                isDark ? imageWeaveDarkPlaceholder : imageWeaveLightPlaceholder
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="The aero lesson builder app dragging an audio component into a screen about plant cells."
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
