import styled from 'styled-components';
import { theme } from '../../../styles/theme/theme';

export const ShowCastWrapper = styled.div`
  width: 100%;
  overflow: hidden;

  .show-cast-item {
    padding-inline: 8px;

    .item-content {
      width: 80px;
      min-width: 80px;
      height: 90px;
      border-radius: 8px;
      overflow: hidden;
      border: 1px solid ${theme.colors.black15};
    }
  }

  .custom-prev-arrow,
  .custom-next-arrow {
    width: 40px;
    height: 40px;
    border-radius: 100%;
  }
  .custom-prev-arrow {
    left: 8px;
  }
  .custom-next-arrow {
    right: 8px;
  }
`;
