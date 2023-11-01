import React, { Component } from 'react';
import axios from 'axios';
import './index.css'; // Import your CSS file for styling
import ResponsiveAppBar from '../layouts/appBar';
// import './layouts/header/index'

class ArticleCreate extends Component {
  constructor() {
    super();
    this.state = {
      publishers: '',
      articleHeading: '',
      notificationText: '',
      newsType: [],
      articleBit: '',
      contentType: 'Interesting Content',
      mainSource: '',
      additionalSource: '',
      republishable: 'Yes',
      articleImageUrl: '',
      articleVideoUrl: '',
      categories: [],
      subCategories: [],
      readMoreText: 'Read More',
      keywords: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    const updatedNewsType = checked
      ? [...this.state.newsType, name]
      : this.state.newsType.filter((type) => type !== name);
    this.setState({ newsType: updatedNewsType });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Send data using Axios here
    const formData = { ...this.state };
    axios.post('/api/submit-article', formData)
      .then((response) => {
        // Handle success
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };
  

  render() {
  console.log(this.state.publishers);

    return (
      <>
        <ResponsiveAppBar></ResponsiveAppBar>
        <br></br>
        <h3><center>Create Article</center></h3>


        <div className="form-card">
          <form onSubmit={this.handleSubmit}>

          <div className='formHolder'>
        <div className="article-form">
               
                  <div className='leftData'>
                  <div className="form-group">
                    <label>Publishers</label>
                    <select
                      name="publishers"
                      value={this.state.publishers}
                      onChange={this.handleInputChange}
                    >
                      <option value="">Select Publisher</option>
                      <option value="publisher1">Publisher 1</option>
                      <option value="publisher2">Publisher 2</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Article Heading</label>
                    <input
                      type="text"
                      name="articleHeading"
                      value={this.state.articleHeading}
                      onChange={this.handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Notification Text</label>
                    <textarea
                      name="notificationText"
                      value={this.state.notificationText}
                      onChange={this.handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>News Type</label>
                    <div>
                      <label>
                        <input
                          type="checkbox"
                          name="Breaking News"
                          checked={this.state.newsType.includes('Breaking News')}
                          onChange={this.handleCheckboxChange}
                        />
                        Breaking News
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          type="checkbox"
                          name="Trending News"
                          checked={this.state.newsType.includes('Trending News')}
                          onChange={this.handleCheckboxChange}
                        />
                        Trending News
                      </label>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label>Article Bit</label>
                    <textarea
                      name="articleBit"
                      value={this.state.articleBit}
                      onChange={this.handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Content Type</label>
                    <div>
                      <label className='radio-container'>
                        <input
                          type="radio"
                          name="contentType"
                          value="Interesting Content"
                          checked={this.state.contentType === 'Interesting Content'}
                          onChange={this.handleInputChange}
                        />
                        Interesting Content
                      </label>
                    </div>
                    <div>
                      <label className='radio-container'>
                        {/* <input
                          type="radio"
                          name="contentType"
                          value="Serious Content"
                          checked={this.state.contentType === 'Serious Content'}
                          onChange={this.handleInputChange}
                        /> */}
                        <input type="radio" name="radio-group"/>
                          {/* <span class="radio-label">Option 1</span> */}
                        Latest News
                      </label>
                    </div>
                    <div>
                      <label className='radio-container'>
                        <input
                          type="radio"
                          name="contentType"
                          value="Serious Content"
                          checked={this.state.contentType === 'Serious Content'}
                          onChange={this.handleInputChange}
                        />
                        Both
                      </label>
                    </div>
                  </div>

                  
                  <div className="form-group">
                    <label>Main Source of Article</label>
                    <input
                      type="text"
                      name="mainSource"
                      value={this.state.mainSource}
                      onChange={this.handleInputChange}
                    />
                  </div>

                  {/* <div className="form-group">
                    <label>Additional Source of Article</label>
                    <input
                      type="text"
                      name="additionalSource"
                      value={this.state.additionalSource}
                      onChange={this.handleInputChange}
                    />
                  </div> */}

                  </div>
                  <div className='leftData'>

                  {/* <div className="form-group">
                    <label>Is this article republishable?</label>
                    <div>
                      <label>
                        <input
                          type="radio"
                          name="republishable"
                          value="Yes"
                          checked={this.state.republishable === 'Yes'}
                          onChange={this.handleInputChange}
                        />
                        Yes
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          type="radio"
                          name="republishable"
                          value="No"
                          checked={this.state.republishable === 'No'}
                          onChange={this.handleInputChange}
                        />
                        No
                      </label>
                    </div>
                  </div> */}

                  <div className="form-group">
                    <label>Article Image URL</label>
                    <input
                      type="text"
                      name="articleImageUrl"
                      value={this.state.articleImageUrl}
                      onChange={this.handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Browse Image </label>
                    <input
                      type="file"
                      name="browsImage"
                      value={this.state.articleImageUrl}
                      onChange={this.handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Article Video URL</label>
                    <input
                      type="text"
                      name="articleVideoUrl"
                      value={this.state.articleImageUrl}
                      onChange={this.handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Categories</label>
                    <input
                      type="text"
                      name="categories"
                      value={this.state.articleImageUrl}
                      onChange={this.handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Timeline hashtag</label>
                    <input
                      type="text"
                      name="subCategories"
                      value={this.state.articleImageUrl}
                      onChange={this.handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Read more Text</label>
                    <select
                      name="readMore"
                      value={this.state.publishers}
                      onChange={this.handleInputChange}
                    >
                      <option value="">Check it out</option>
                      <option value="check_out_the_post">Check out the Post</option>
                      <option value="check_out_the_video">Check out the Video</option>
                      <option value="check_out_the_insta">Check out the Insta</option>
                      <option value="check_out_the_newsletter">Check out Newsletter</option>
                      <option value="check_out_the_tiktok">Check out TikTok</option>
                    </select>
                  </div>

                  {/* <div className="form-group">
                    <label>Keywords</label>
                    <textarea
                      name="KeywordsText"
                      value={this.state.notificationText}
                      onChange={this.handleInputChange}
                    />
                  </div> */}

                  </div>                  
      
          </div>
          <button type="submit">Submit</button>
          </div>
          </form>
        </div>
      </>
    );
  }
}

export default ArticleCreate;
