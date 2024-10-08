import styled from 'styled-components';
import { media, theme } from '../../../styles/theme/theme';

export const FooterWrapper = styled.footer`
  padding-block: 40px;

  ${media.xl`
      padding-block: 40px;   
   `};
  ${media.lg`
      padding-block: 30px;   
   `};
  ${media.sm`
      padding-block: 20px;   
   `};

  .footer-top {
    margin-bottom: 60px;

    ${media.lg`
      padding-bottom:40px;   
   `};

    .footer-list {
      grid-template-columns: repeat(6, 1fr);
      gap: 20px;

      ${media.xl`
      grid-template-columns: repeat(3, 1fr);
      `};
      ${media.sm`
      grid-template-columns: repeat(2, 1fr);
      `};
      ${media.xs`
      grid-template-columns: 100%;
      text-align:center;
      `};
    }
  }

  .footer-bottom {
    gap: 16px 40px;
    padding-top: 24px;
    border-top: 1px solid ${theme.colors.black15};

    ${media.lg`
      flex-direction:column;
    `};

    .bottom-links {
      ${media.sm`
            justify-content: center;
         `}
      .bottom-link {
        padding-inline: 20px;
        display: inline-flex;
        justify-content: center;
        border-right: 1px solid ${theme.colors.black15};

        ${media.sm`
         padding-inline: 12px;
        `}
      }

      li {
        &:last-child {
          .bottom-link {
            border-right: 0;
            padding-right: 0;
          }
        }

        &:first-child {
          .bottom-link {
            ${media.lg`
               padding-left:0;
            `}
          }
        }
      }

      a {
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export const FooterItemWrapper = styled.div`
  .item-title {
    margin-bottom: 20px;
  }
  .item-text-links {
    display: grid;
    row-gap: 12px;

    a {
      display: inline-flex;

      &:hover {
        text-decoration: underline;
      }
    }
  }
  .item-icons-links {
    column-gap: 12px;

    ${media.xs`
      justify-content:center;
   `};
    .item-icon-link {
      border-radius: 8px;
      border: 1px solid ${theme.colors.black15};
      width: 48px;
      height: 48px;
      img {
        width: 24px;
      }
    }
  }
`;
