import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    searchString: '',
    showModal: false,
  };

  handleSetSearchString = searchString => {
    this.setState({ searchString: searchString });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  // handleIncreasePage = () => {
  //   this.setState(prev => {
  //     return { page: prev.page + 1 };
  //   });
  // };

  // handleResetPage = () => {
  //   this.setState({ page: 1 });
  // };

  // handleSetTotalCount = totalCount => {
  //   this.setState({ totalCount: totalCount });
  // };

  render() {
    return (
      <>
        <Searchbar onSearch={this.handleSetSearchString} />
        <ImageGallery
          searchString={this.state.searchString}
          // countInPage={COUNT_IN_PAGE}
          // page={this.state.page}
          // onTotalCount={this.handleSetTotalCount}
          // onResetPage={this.handleResetPage}
        />
        {this.state.showModal && <Modal onClose={this.toggleModal} />}
      </>
    );
  }
}
