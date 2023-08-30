import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { getImages } from 'components/search-api/search-api';
import { Loader } from './Loader/Loader';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const COUNT_IN_PAGE = 12;

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export class App extends Component {
  state = {
    searchString: '',
    items: [],
    error: null,
    page: 1,
    totalCount: 0,
    item: null,
    status: Status.IDLE,
  };

  handleSetSearchString = searchString => {
    this.setState({
      searchString: searchString,
      items: [],
      error: null,
      page: 1,
      totalCount: 0,
      item: null,
      status: Status.IDLE,
    });
  };

  handleCloseModal = () => {
    this.setState({ item: null });
  };

  handleIncreasePage = () => {
    this.setState(prev => {
      return { page: prev.page + 1 };
    });
  };

  handleResetPage = () => {
    this.setState({ page: 1 });
  };

  handleSetTotalCount = totalCount => {
    this.setState({ totalCount: totalCount });
  };

  handleSetError = error => {
    this.setState({ error });
  };

  handleSetItem = item => {
    this.setState({ item });
  };

  componentDidUpdate(prevProp, prevState) {
    if (prevState.searchString !== this.state.searchString || prevState.page !== this.state.page) {
      this.setState({ status: Status.PENDING });

      getImages(this.state.searchString, this.state.page, COUNT_IN_PAGE)
        .then(resp => {
          if (resp.data.totalHits === 0) return Promise.reject(new Error('No data for this search'));

          this.setState(prev => {
            return {
              items: [...prev.items, ...resp.data.hits],
              totalCount: resp.data.totalHits,
              status: Status.RESOLVED,
            };
          });
        })
        .catch(error => {
          this.setState({ status: Status.IDLE });
          NotificationManager.error(error.message, 'Click me!', 3000, () => {
            // alert('callback');
          });
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
    return (
      <div
        style={{
          padding: '0 0 32px',
        }}
      >
        <Searchbar onSearch={this.handleSetSearchString} />

        <ImageGallery items={this.state.items} onClick={this.handleSetItem} />

        {this.state.status === Status.RESOLVED &&
          this.state.totalCount > COUNT_IN_PAGE &&
          this.state.page * COUNT_IN_PAGE < this.state.totalCount && <Button onClick={this.handleIncreasePage} />}

        {this.state.status === Status.PENDING && <Loader />}

        {this.state.item && this.state.status === Status.RESOLVED && (
          <Modal onClose={this.handleCloseModal} item={this.state.item} />
        )}

        <NotificationContainer />
      </div>
    );
  }
}
