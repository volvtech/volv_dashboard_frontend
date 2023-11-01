import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';


import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


import './index.css';
import SearchLoader from '../../common/searchLoader';
 
import ResponsiveAppBar from '../layouts/appBar';
import BasicDateRangePicker from '../atom/daterangePicker';


const windowHeight = window.innerHeight;

const ArticleList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [filterConditions, setFilterConditions] = useState({
    "article_publisher": 1,
    "article_author": "Naman Trivedi",
    "article_status": "Published",
    "article_category": "Pop Culture"
  });
  const [filterOptions, setFilterOptions] = useState({
    "publisher_filters": [],
    "author_filters": [],
    "status_filters": [],
    "category_filters": []
  });

  const pageSize = 10; // Number of items to load per page

  const dispatch = useDispatch();

  const loadMoreData = () => {
    console.log("welcomemmm")
    setLoading(true);
    const options = {
      headers: {
        "X-API-KEY": 1234567890,
        "Access-Control-Allow-Origin": "*",
      }
    };

    axios.post(`/articles/${page}`, filterConditions)
      .then(response => {
        // Handle the successful response here
        console.log('dataaaaa', response.data['data']);
        const newData = response.data['data']
        setData([...data, ...newData]);
        setLoading(false);
        let page_no = page + 1
        console.log('page_no', page_no);

        setPage(page_no);
      })
      .catch(error => {
        // Handle any errors that occurred during the request
        console.error('Error:', error);
      });
  };


  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const fetchArticleFilterOptions = () => {
    axios.get(`/articles_filters/`)
      .then(response => {
        // Handle the successful response here
        console.log('fetchArticleFilterOptions===>', response.data['data']);
        setFilterOptions({...filterOptions, ...response.data['data']});
      })
      .catch(error => {
        // Handle any errors that occurred during the request
        console.error('Error:', error);
      });    
  }
  
  useEffect(() => {
    loadMoreData();
    fetchArticleFilterOptions();
  }, []);

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target;
    let offset = Math.floor(scrollHeight - scrollTop)
    console.log("offset", offset)
    console.log("clientHeight", clientHeight)


    console.log("flag", offset == clientHeight)
    console.log("loading", loading)

    if (offset == clientHeight && !loading) {
      loadMoreData();
    }
  };

  const getFilterLabel = (filterKey) => {
    const filterLabelMapping = {
      "author_filters": "Filter by Author",
      "publisher_filters": "Filter by Publisher",
      "category_filters": "Filter by Category",
      "status_filters": "Filter by Status"
    }
    return filterLabelMapping[filterKey];
  }

  const handleFilterChange = (event) => {
    console.log("value", event.target.value)
    let filterValue = event.target.value
    let filterValuesArray = filterValue.split("-")
    console.log("filterValuesArray", filterValuesArray)
    if (filterValuesArray[1] === 'author_filters') {
      setFilterOptions({...filterOptions.author_filters, ...filterValuesArray[1]});
    }
    console.log("filterValuesArray", filterValuesArray)
    if (filterValuesArray[1] === 'publisher_filters') {
      setFilterOptions({...filterOptions.publisher_filters, ...filterValuesArray[1]});
    }
    console.log("filterValuesArray", filterValuesArray)
    if (filterValuesArray[1] === 'status_filters') {
      setFilterOptions({...filterOptions.author_filters, ...filterValuesArray[1]});
    }
    console.log("filterValuesArray", filterValuesArray)
    if (filterValuesArray[1] === 'author_filters') {
      setFilterOptions({...filterOptions.author_filters, ...filterValuesArray[1]});
    }

    fetchArticleFilterOptions();

  }

  return (
    <>
    <ResponsiveAppBar></ResponsiveAppBar>
    <div>

      <center><h2>All Articles</h2></center>
      <br />
      <Grid container spacing={1}>
      {filterOptions.author_filters && Object.keys(filterOptions).map((item) => (
        <Grid item xs={3}>
        <Item>
          <Box>
            <FormControl fullWidth>
              <InputLabel variant="normal" htmlFor="uncontrolled-native">
              {getFilterLabel(item)}
              </InputLabel>
              <NativeSelect
                defaultValue={10}
                inputProps={{
                  // name: filterOption[0],
                  id: 'uncontrolled-native',
                }}
                onChange={handleFilterChange}
              >
                {
                  filterOptions[item].map((filterOption) => {
                    return <option value={filterOption[0]+"-"+item}>{filterOption[1]}</option>
                   })
                }
              </NativeSelect>
            </FormControl>
          </Box>

        </Item>
      </Grid>      
      ))}


<Grid item xs={3}>
  <Item>
    <Box>
      <FormControl fullWidth>
        {/* <InputLabel variant="normal" htmlFor="uncontrolled-native">
          Filter by Publishers
        </InputLabel> */}
        <TextField id="outlined-basic" label="Seach Anything here..." variant="outlined" />

      </FormControl>
    </Box>

  </Item>
</Grid>
<Grid item xs={3}>
  <Item>
    <Box>
      <FormControl fullWidth>
        {/* <InputLabel variant="normal" htmlFor="uncontrolled-native">
          Filter by Publishers
        </InputLabel> */}
        {/* <DatePicker label="Basic date picker" /> */}
        <BasicDateRangePicker></BasicDateRangePicker>

      </FormControl>
    </Box>

  </Item>
</Grid>

        {/* 
        <Grid item xs={3}>
          <Item>
            <Box>
              <FormControl fullWidth>
                <InputLabel variant="normal" htmlFor="uncontrolled-native">
                  Filter by Publishers
                </InputLabel>
                <NativeSelect
                  defaultValue={10}
                  inputProps={{
                    name: 'age',
                    id: 'uncontrolled-native',
                  }}
                >
                  <option value={10}>KnowHow Capital</option>
                  <option value={10}>Buzzing Stocks</option>
                  <option value={10}>Swaggy Stocks</option>
                  <option value={10}>Finance Simplified</option>
                  <option value={10}>DCDX</option>
                  <option value={10}>SPAC Track</option>
                  <option value={10}>X</option>
                </NativeSelect>
              </FormControl>
            </Box>

          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <Box>
              <FormControl fullWidth>
                <InputLabel variant="normal" htmlFor="uncontrolled-native">
                  Filter by Authors
                </InputLabel>
                <NativeSelect
                  defaultValue={10}
                  inputProps={{
                    name: 'age',
                    id: 'uncontrolled-native',
                  }}
                >
                  <option value={10}>Shannon Almeida</option>
                  <option value={10}>Priyanka Vazirani</option>
                  <option value={10}>Ishita</option>
                  <option value={10}>Naman</option>
                  <option value={10}>Aritradutta Gupta</option>
                  <option value={10}>Shreya B</option>
                </NativeSelect>
              </FormControl>
            </Box>

          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <Box>
              <FormControl fullWidth>
                <InputLabel variant="normal" htmlFor="uncontrolled-native">
                  Filter by Status
                </InputLabel>
                <NativeSelect
                  defaultValue={10}
                  inputProps={{
                    name: 'age',
                    id: 'uncontrolled-native',
                  }}
                >
                  <option value={10}>In Progress</option>
                  <option value={10}>Published</option>
                  <option value={10}>Needs Review</option>
                  <option value={10}>Rollback</option>
                  <option value={10}>Rejected</option>
                  <option value={10}>Weekend</option>
                  <option value={10}>Edited</option>
                  <option value={10}>Republished</option>
                </NativeSelect>
              </FormControl>
            </Box>

          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <Box>
              <FormControl fullWidth>
                <InputLabel variant="normal" htmlFor="uncontrolled-native">
                  Filter by Category
                </InputLabel>
                <NativeSelect
                  defaultValue={10}
                  inputProps={{
                    name: 'age',
                    id: 'uncontrolled-native',
                  }}
                >
                  <option value={10}>US News</option>
                  <option value={10}>Biz & Finance</option>
                  <option value={10}>Important Updates</option>
                  <option value={10}>Interesting Digs</option>
                  <option value={10}>Pop Culture</option>
                  <option value={10}>Science & Tech</option>
                  <option value={10}>2020 US Elections</option>
                  <option value={10}>Sports</option>
                  <option value={10}>Crypto</option>
                  <option value={10}>Fashion</option>
                  <option value={10}>Lifestyle</option>
                </NativeSelect>
              </FormControl>
            </Box>

          </Item>
        </Grid> */}

      </Grid>

      <br />
      <br />
        
      <div style={{ height: windowHeight, overflowY: 'scroll' }} onScroll={handleScroll}>
        <table>
          <thead className='tableHead'>
            <tr>
              <th>Article Image</th>
              <th>Article Categories</th>
              <th>Articles</th>
              <th>Author</th>
              <th>Last Updated</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr className='tableRow'>
                <td className='articleImage'>
                  <img src={item?.article_image} alt="Article Image"/>
                </td>
                <td>{item.article_category}</td>
                <td>
                  <div className='articleHeading' htmlFor="">{ item?.article_heading }</div>
                  <br />
                  <br />
                  <div className='articleSummary'>{item?.article_summary}</div>
                </td>
                <td>
                  <label htmlFor="">{item?.article_author}</label>
                </td>
                <td>
                  <label htmlFor="">{item?.created_at}</label>
                </td>
                <td>
                  <label htmlFor="">{item?.article_status}</label>
                </td>
                <td>
                  <button><RemoveRedEyeIcon/></button>
                  <button><EditIcon></EditIcon></button>
                  <button><DeleteIcon></DeleteIcon></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {loading && <SearchLoader/>}
      </div>

    </div>
    </>
  );
};

export default ArticleList;
