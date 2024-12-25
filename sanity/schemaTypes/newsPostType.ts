import { defineType, defineField } from 'sanity'

export const newsPostType = defineType({
  name: 'newsPost',
  title: 'News Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required().max(100)
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }]
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime'
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    }),
    defineField({
      name: 'verificationStatus',
      title: 'Verification Status',
      type: 'reference',
      to: [{ type: 'verificationStatus' }]
    }),
    defineField({
      name: 'sources',
      title: 'Sources',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'source' } }]
    }),
    defineField({
      name: 'views',
      title: 'View Count',
      type: 'number',
      initialValue: 0
    }),
    defineField({
      name: 'factCheckSummary',
      title: 'Fact Check Summary',
      type: 'array',
      of: [{ type: 'block' }]
    })
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
      status: 'verificationStatus.title'
    },
    prepare(selection) {
      const { author, status } = selection
      return {
        ...selection,
        subtitle: `${status} | By ${author}`
      }
    }
  }
})