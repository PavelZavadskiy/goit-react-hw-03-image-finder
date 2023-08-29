import React from 'react';
import { Component } from 'react';
import { getImages } from 'components/search-api/search-api';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';
import { Button } from 'components/Button/Button';
import { ThreeDots } from 'react-loader-spinner';

const COUNT_IN_PAGE = 12;

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export class ImageGallery extends Component {
  state = {
    items: [],
    status: Status.IDLE,
    error: null,
    page: 1,
    totalCount: 0,
  };

  handleIncreasePage = () => {
    this.setState(prev => {
      return { page: prev.page + 1 };
    });
  };

  handleResetPage = () => {
    this.setState({ page: 1 });
  };

  handleIdle() {
    return <></>;
  }

  handlePending() {
    return (
      <>
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#4fa94d"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </>
    );
  }

  handleResolved() {
    console.log('handleResolved');
    return (
      // ref={this.myRef}
      <div>
        <List className="gallery">
          {this.state.items.map(item => (
            <ImageGalleryItem item={item} key={item.id} />
          ))}
        </List>
        {this.state.totalCount > COUNT_IN_PAGE && this.state.page * COUNT_IN_PAGE < this.state.totalCount && (
          <Button onClick={this.handleIncreasePage} />
        )}
      </div>
    );
  }

  handleRejected() {
    return <p>{this.state.error.message}</p>;
  }

  componentDidUpdate(prevProp, prevState) {
    console.log('componentDidUpdate');

    if (prevProp.searchString !== this.props.searchString) {
      this.setState({ page: 1, totalCount: 0, items: [] });
    }

    if (prevProp.searchString !== this.props.searchString || prevState.page !== this.state.page) {
      this.setState({ status: Status.PENDING });

      getImages(this.props.searchString, this.state.page, COUNT_IN_PAGE)
        .then(res => {
          this.setState(prev => {
            return {
              items: [...prev.items, ...res.data.hits],
              status: Status.RESOLVED,
              totalCount: res.data.totalHits,
            };
          });
        })
        .catch(error => {
          console.log(error);
          this.setState({ error: error, status: Status.REJECTED });
        });
    }

    const height = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );
    window.scrollTo(0, height);
  }

  render() {
    console.log('ImageGallery _ render');

    if (this.state.status === Status.IDLE) return this.handleIdle();

    if (this.state.status === Status.PENDING) return this.handlePending();

    if (this.state.status === Status.RESOLVED) return this.handleResolved();

    if (this.state.status === Status.RESOLVED) return this.handleResolved();

    return <></>;
  }
}
