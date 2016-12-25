import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.jsx';

import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import LegalPage from './pages/LegalPage.jsx';
import SharePage from './pages/SharePage.jsx';
import ReviewsPage from './pages/ReviewsPage.jsx';
import BlogPage from './pages/BlogPage.jsx';

FlowRouter.route("/", {
  action() {
    mount(MainLayout, {
        content: (<HomePage/>)
    });
  }
});
FlowRouter.route("/services", {
  action() {
    mount(MainLayout, {
        content: (<ServicesPage/>)
    });
  }
});
FlowRouter.route("/about", {
  action() {
    mount(MainLayout, {
        content: (<AboutPage/>)
    });
  }
});
FlowRouter.route("/contact", {
  action() {
    mount(MainLayout, {
        content: (<ContactPage/>)
    });
  }
});
FlowRouter.route("/legal", {
  action() {
    mount(MainLayout, {
        content: (<LegalPage/>)
    });
  }
});
FlowRouter.route("/share", {
  action() {
    mount(MainLayout, {
        content: (<SharePage/>)
    });
  }
});
FlowRouter.route("/reviews", {
  action() {
    mount(MainLayout, {
        content: (<ReviewsPage/>)
    });
  }
});
FlowRouter.route("/blog", {
  action() {
    mount(MainLayout, {
        content: (<BlogPage/>)
    });
  }
});