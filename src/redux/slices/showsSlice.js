import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import showsServices from '../services/showsServices';
import errorConstants from '../../constant/errorConstants';

// error handling utils
const handleErrorResponse = ({ error, thunkAPI }) => {
  if (error.response) {
    const { state, data } = error.response;
    let code = null;

    if (state === 404) {
      code = errorConstants.ERR_404;
    } else if (state === 429) {
      code = errorConstants.ERR_429;

      return thunkAPI.rejectedWithValue({
        code,
        message: data.message || 'Server Error',
      });
    } else if (error.request) {
      return thunkAPI.rejectedWithValue({
        code: error.code,
        message: 'Network Error',
      });
    }
  }

  return thunkAPI.rejectedWithValue({
    code: 'ERR_GENERIC',
    message: 'Error',
  });
};

export const fetchAllShows = createAsyncThunk('shows/fetch/all', async (_, thunkAPI) => {
  try {
    return await showsServices.fetchAllShows();
  } catch (error) {
    return handleErrorResponse(error, thunkAPI);
  }
});

export const fetchSearchResults = createAsyncThunk(
  'shows/fetch/search',
  async (query, thunkAPI) => {
    try {
      return await showsServices.fetchSearchResults(query);
    } catch (error) {
      return handleErrorResponse(error, thunkAPI);
    }
  }
);

export const fetchShowDetail = createAsyncThunk('shows/fetch/detail', async (showId, thunkAPI) => {
  try {
    thunkAPI.dispatch(showsSlice.actions.resetShowDetail());
    return await showsServices.fetchShowDetail(showId);
  } catch (error) {
    return handleErrorResponse(error, thunkAPI);
  }
});
const initialState = {
  shows: [],
  searchResults: [],
  showDetail: [],
  isLoading: {
    fetchAllShows: false,
    fetchSearchResults: false,
    fetchShowDetail: false,
  },
  isError: {
    fetchAllShows: false,
    fetchSearchResults: false,
    fetchShowDetail: false,
  },
  isSuccess: {
    fetchAllShows: false,
    fetchSearchResults: false,
    fetchShowDetail: false,
  },
  error: null,
};
const showsSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {
    resetSearchResults: state => {
      state.searchResults = [];
    },
    resetShowDetail: state => {
      state.showDetail = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAllShows.pending, state => {
        state.isLoading.fetchAllShows = true;
        state.isSuccess.fetchAllShows = false;
        state.isError.fetchAllShows = false;
      })
      .addCase(fetchAllShows.fulfilled, (state, action) => {
        state.shows = action.payload;
        state.isLoading.fetchAllShows = false;
        state.isSuccess.fetchAllShows = true;
        state.isError.fetchAllShows = false;
      })
      .addCase(fetchAllShows.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading.fetchAllShows = false;
        state.isError.fetchAllShows = true;
        state.isSuccess.fetchAllShows = false;
      })
      .addCase(fetchSearchResults.pending, state => {
        state.isLoading.fetchSearchResults = true;
        state.isSuccess.fetchSearchResults = false;
        state.isError.fetchSearchResults = false;
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.searchResults = action.payload;
        state.isLoading.fetchSearchResults = false;
        state.isSuccess.fetchSearchResults = true;
        state.isError.fetchSearchResults = false;
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading.fetchSearchResults = false;
        state.isError.fetchSearchResults = true;
        state.isSuccess.fetchSearchResults = false;
      })
      .addCase(fetchShowDetail.pending, state => {
        state.isLoading.fetchShowDetail = true;
        state.isSuccess.fetchShowDetail = false;
        state.isError.fetchShowDetail = false;
      })
      .addCase(fetchShowDetail.fulfilled, (state, action) => {
        state.showDetail = action.payload;
        state.isLoading.fetchShowDetail = false;
        state.isSuccess.fetchShowDetail = true;
        state.isError.fetchShowDetail = false;
      })
      .addCase(fetchShowDetail.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading.fetchShowDetail = false;
        state.isError.fetchShowDetail = true;
        state.isSuccess.fetchShowDetail = false;
      });
  },
});

export default showsSlice.reducer;
export const { resetSearchResults } = showsSlice.actions;
