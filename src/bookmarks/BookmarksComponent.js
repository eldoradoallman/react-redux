import React from 'react';

import API from '../_api';
import ScrollToTopOnMount from '../common/scrolltotop/ScrollToTopOnMount';
import LatestNews from '../common/latestnews/LatestNews';

const BookmarksComponent = ({
    searchParams,
  }) => (
  <div id="search" className="page-content-wrapper">
    <ScrollToTopOnMount />
    <div id="title-search-wrapper">
      <h1 className="bookmarks-title">Bookmarks</h1>
    </div>
    <div className="search-content-wrapper">
      <LatestNews url={`${API.SEARCH}`} searchParams={searchParams} />
    </div>
  </div>
);

export default BookmarksComponent;