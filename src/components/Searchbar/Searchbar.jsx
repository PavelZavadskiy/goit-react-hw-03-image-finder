import { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { AiOutlineSearch } from 'react-icons/ai';
import { object, string } from 'yup';

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
        <Form>
          <button type="submit">
            <AiOutlineSearch />
          </button>
          <Field type="text" name="searchString" placeholder="Search images and photos" />
          <ErrorMessage name="searchString">{() => <p>Enter search string</p>}</ErrorMessage>
        </Form>
      </Formik>
    );
  }
}
