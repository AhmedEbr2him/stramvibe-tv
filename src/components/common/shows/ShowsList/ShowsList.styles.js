import styled from 'styled-components';
import { media, theme } from '../../../../styles/theme/theme';

export const PaginationWrapper = styled.div`
  margin-top: 40px;

  ${media.sm`
      column-gap:8px;
   `};

  li {
    &:hover {
      .paginate-btn {
        border-color: ${theme.colors.primary};
      }
    }
  }

  .paginate-btn {
    width: 48px;
    height: 48px;
    border-radius: 0;
    border: 1px solid ${theme.colors.black15};
    background: ${theme.colors.secondary};
    transition: ${theme.transitions.allEaseInOut};
    &.active {
      background: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary};
    }
    &:disabled {
      opacity: 0.5;
      cursor: default;
    }
  }

  .paginate-prev,
  .paginate-next {
    img {
      width: 20px;
    }
    ${media.sm`
      border-radius:6px;
    `}
  }
  .paginate-prev {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  .paginate-next {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  .paginate-num {
    ${media.sm`
      display:none;
   `}
  }
`;

export const ShowsListWrapper = styled.div`
  .shows-list {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    row-gap: 20px;
  }
`;
