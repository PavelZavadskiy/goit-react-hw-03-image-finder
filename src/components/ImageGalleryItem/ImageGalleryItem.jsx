import { Component } from 'react';
import { ListItem, Image } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  render() {
    return (
      <>
        <ListItem className="gallery-item">
          <Image src={this.props.item.previewURL} alt={this.props.item.tags} />
        </ListItem>
      </>
    );
  }
}
