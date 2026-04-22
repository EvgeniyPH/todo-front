import { createSlice, createSelector } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Tag } from '@/types/Todo'

interface TagsState {
  list: Tag[] // Array of todos
}

const initialState: TagsState = {
  list: [],
}

export const tagSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    addTags: (state, action: PayloadAction<Tag[]>) => {
      state.list = state.list.concat(action.payload.filter(tag => !state.list.includes(tag)))
    },

    deleteTag: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter(tag => tag !== action.payload)
    },
  },
  selectors: {
    selectTagList: state => state,
    selectFindByTag: (state, tag: string) => tag,
  },
})

export const selectFilterTags = createSelector(
  [tagSlice.selectors.selectTagList, tagSlice.selectors.selectFindByTag],
  (tags, tag) =>
    tags.list.filter(tagItem => {
      return tagItem.toLowerCase().includes(tag.toLowerCase())
    }),
)

export const { addTags, deleteTag } = tagSlice.actions

export default tagSlice.reducer
