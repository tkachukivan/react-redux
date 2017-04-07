import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Root from './containers/root';
import Home from './containers/home';
import BooksList from './containers/books-list';
import BookPage from './containers/book-page';
import NotFound from './containers/not-found';

export default (
  <Route path="/" component={Root}>
    <IndexRoute component={Home} />
    <Route path="/books" component={BooksList} />
    <Route path="/book/:id" component={BookPage} />
    <Route path="*" component={NotFound} />
  </Route>
);
