import React from 'react';
import { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';

export class ImageGallery extends Component {
  render() {
    return (
      <div>
        <List className="gallery">
          {this.props.items.map(item => (
            <ImageGalleryItem item={item} key={item.id} onClick={this.props.onClick} />
          ))}
        </List>
      </div>
    );
  }
}
