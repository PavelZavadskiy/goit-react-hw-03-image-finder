import { Component } from 'react';
import { ListItem, Image } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  render() {
    return (
      <>
        <ListItem className="gallery-item" onClick={() => this.props.onClick(this.props.item)}>
          <Image src={this.props.item.webformatURL} alt={this.props.item.tags} />
        </ListItem>
      </>
    );
  }
}
