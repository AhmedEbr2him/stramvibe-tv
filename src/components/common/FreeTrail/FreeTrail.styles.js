import styled from 'styled-components';
import { Images } from '../../../assets/images';
import { media } from '../../../styles/theme/theme';
export const FreeTrailWrapper = styled.section`
  .free-trail-content {
    column-gap: 40px;
    row-gap: 20px;
    border-radius: 12px;
    border: 1px solid #262626;
    padding: 100px 40px;
    background: url(${Images.TrialBanner});

    ${media.xl`
      padding: 60px 30px;
    `};
    ${media.lg`
      padding: 60px 30px;;
    `}
    ${media.sm`
      padding: 20px 16px;
    `}
  }
`;
