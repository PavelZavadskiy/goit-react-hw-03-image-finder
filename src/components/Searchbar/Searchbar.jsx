import { Component } from 'react';
import { Formik } from 'formik';
import { AiOutlineSearch } from 'react-icons/ai';
import { object, string } from 'yup';
import { SearchForm, Button, Input, Wraper } from './Searchbar.styled';

let schema = object({
  searchString: string().required(),
});

export class Searchbar extends Component {
  handleSubmit = (values, actions) => {
    this.props.onSearch(values.searchString.trim());
  };

  render() {
    return (
      <Formik initialValues={{ searchString: '' }} onSubmit={this.handleSubmit} validationSchema={schema}>
        <SearchForm>
          <Wraper>
            <Button type="submit">
              <AiOutlineSearch />
            </Button>
            <Input type="text" name="searchString" placeholder="Search images and photos" />
          </Wraper>
        </SearchForm>
      </Formik>
    );
  }
}
