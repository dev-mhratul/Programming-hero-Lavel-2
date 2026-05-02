import { blogService } from '@/services/blog.service'
import React from 'react'

export default async function about() {
  const {data}= await blogService.getBlogPost()
  console.log(data)
  return (
    <div>about</div>
  )
}
