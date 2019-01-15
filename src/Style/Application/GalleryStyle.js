import styled from 'styled-components';
import { SecondaryColor } from '../Colors';

export const GalleryContainer = styled.div`
  position: relative;

  #modal-header {
    border-bottom: none;
  }
`;

export const GalleryItemWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: .5em;

  img {
    height: 5em;
    width: 5em;
    object-fit: cover;
    cursor: pointer;
  }
`;

export const GalleryItem = styled.div`
  position: relative;

  ${({ imageLeft }) => {
    if (imageLeft !== 0) {
      return `
        &:last-child:after {
          content: '+${imageLeft}';
          position: absolute;
          top: 0;
          left: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          color: ${SecondaryColor.blue};
          height: 100%;
          width: 100%;
          font-size: 18px;
          background: rgba(255, 255, 255, 0.75);
          cursor: pointer;
        }
      `;
    }
  }}
`;

export const GalleryImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 50vh;
    width: auto;
    object-fit: contain;
  }
`;

export const GalleryThumbnailWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 4em;
    width: 4em;
    object-fit: cover;
    cursor: pointer;
    margin: .3em;

    &.active {
      border: 1px solid ${SecondaryColor.white};
    }
  }
`;
