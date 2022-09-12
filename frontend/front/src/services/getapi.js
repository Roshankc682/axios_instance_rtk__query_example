import { buildCreateApi, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const getapi = createApi({
  baseQuery: fetchBaseQuery({baseUrl:"http://localhost:8000"}),
  endpoints: ( builder ) => ({
    fullnamedata: builder.query({
      query:() => ({
        url:'/api/',
      }),
    }),
    postdata: builder.mutation({
      query: (senddata2server) => ({
        url :'/api/',
        method: 'POST',
        body: senddata2server
      })
    }),
    updatedata: builder.mutation({
      query: (updateData) => ({
        url : `/api/${updateData.id}`,
        method: 'PATCH',
        body: updateData
      })
    }),
    deletedata: builder.mutation({
      query: ({id}) => ({
        url: `/api/${id}`,
        method: 'DELETE',
        body: id
      })
    }),
  }),
})

export const {
  useFullnamedataQuery,
  usePostdataMutation,
  useUpdatedataMutation,
  useDeletedataMutation
} = getapi

