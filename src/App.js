import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserLogin from './web/volv_dashboard/components/auth/login/index';
import ArticleList from './web/volv_dashboard/components/ArticleList';
import ArticleCreate from './web/volv_dashboard/components/ArticleCreate';

function App() {
  return (
    <Router>
    <Routes>
      <Route path = "/" element={<UserLogin/>} />
      <Route path = "/articles" element={<ArticleList/>} />
      <Route path = "/article_create" element={<ArticleCreate/>} />
      {/*
      <Route exact path = "/article/edit/:id" component={ArticleEdit} />
      <Route exact path = "/article/:id" component={ArticleDetails} />
      <Route component={NotFound} /> */}
    </Routes>
  </Router>

  );
}

export default App;
