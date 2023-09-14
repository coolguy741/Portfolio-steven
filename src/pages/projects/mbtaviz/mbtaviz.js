import backgroundSprLarge from 'assets/spr-background-large.jpg';
import backgroundSprPlaceholder from 'assets/spr-background-placeholder.jpg';
import backgroundSpr from 'assets/spr-background.jpg';
import imageMbtavizDarkLarge from 'assets/mbtaviz-large.jpg';
import imageMbtavizDarkPlaceholder from 'assets/mbtaviz-placeholder.jpg';
import imageMbtavizDark from 'assets/mbtaviz.jpg';
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
import styles from './Mbtaviz.module.css';

const title = 'UX/UI Designer / Full Stack Developer';
const description =
  'I built this to help people in Boston better understand the trains, how people use the trains, and how the people and trains interact with each other. It was very helpful to analyze the train system.';
const roles = [
  'Data Visualization Specialist',
  'Front End Development',
  'Back End Development',
  'Python Developer',
];

export const Mbtaviz = () => {
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
          url="https://coolguy741.github.io/D3.js-data-visualization/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={themeId}
              srcSet={[imageMbtavizDark, imageMbtavizDarkLarge]}
              placeholder={imageMbtavizDarkPlaceholder}
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
