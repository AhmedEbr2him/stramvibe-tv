import { Container, HeadingTitle, Paragraph } from '../../../styles/global/default';
import { BaseLinkPrimary } from '../../../styles/theme/components/Button';
import { FreeTrailWrapper } from './FreeTrail.styles';

const FreeTrail = () => {
  return (
    <FreeTrailWrapper className='section-py'>
      <Container>
        <div className='free-trail-content bg-black06 flex items-center justify-between flex-wrap'>
          <div>
            <HeadingTitle>Start your free trail today! </HeadingTitle>
            <Paragraph>
              This is a clear and concise call to action that encourages users to sign up for a free
              trial of StreamVibe.
            </Paragraph>
          </div>
          <BaseLinkPrimary>Start a Free Trail</BaseLinkPrimary>
        </div>
      </Container>
    </FreeTrailWrapper>
  );
};
export default FreeTrail;
