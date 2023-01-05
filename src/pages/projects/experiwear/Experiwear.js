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
import styles from './Experiwear.module.css';

const title = 'Full Stack Developer';
const description =
  'I worked as the UI/UXdesigner. My role was a full stack developer and  developed the whole website.';
const roles = ['Front End Development', 'UI/UX Design', 'Back End Development'];

export const Experiwear = () => {
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
          url="https://experiwear.com/"
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
