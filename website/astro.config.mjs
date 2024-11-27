import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE ? process.env.SITE : undefined,
  base: process.env.BASE ? process.env.BASE : undefined,
  integrations: [
    starlight({
      title: 'Society of Iowa Rugby Refs',
      favicon: 'favicon.ico',
      logo: {
        light: './src/assets/seal.png',
        dark: './src/assets/seal-w.png',
      },
      social: {
        facebook: 'https://www.facebook.com/iowarugbyrefs',
      },
      sidebar: [
        {
          label: 'Assignments',
          link: '/assignments'
        },
        {
          label: 'Policies',
          items: [
            { label: 'Policy Information', link: '/policies/policy-information', },
            { label: 'Request a Referee', link: '/policies/request-a-referee', },
            { label: 'Fees', link: '/policies/fees', },
            { label: 'Tournaments', link: '/policies/tournaments', },
          ]
        },
        {
          label: 'Processes',
          items: [
            { label: 'Contact Process', link: '/processes/contact-process', },
            { label: 'Payment Process', link: '/processes/payment-process', },
          ],
        },
        {
          label: 'Bulletins',
          items: [
            { label: 'Law 3 and Replacements', link: '/bulletins/law-3-and-replacements', },
          ]
        },
        {
          label: 'Referee Resources',
          items: [
            { label: 'Register', link: '/referee-resources/register', },
            { label: 'Book Senior and Collegiate Matches', link: '/referee-resources/book-senior-and-collegiate-matches', },
            { label: 'Book High School Matches', link: '/referee-resources/book-high-school-matches', },
            { label: 'Discipline Reports', link: '/referee-resources/discipline-reports', },
            { label: 'World Rugby Resources', link: '/referee-resources/world-rugby-info', },
            { label: 'USA Rugby Resources', link: '/referee-resources/usa-rugby-resources', },
            {
              label: 'Continuing Eduction', items: [
                { label: 'Tackle Height Variation', link: '/referee-resources/continuing-education/tackle-height-variation', },
                { label: 'Head Contact Process', link: '/referee-resources/continuing-education/head-contact-process', },
                { label: 'Positioning', link: '/referee-resources/continuing-education/positioning', },
                {
                  label: 'Tackle/Ruck',
                  items: [
                    { label: 'Breakdown Overview', link: '/referee-resources/continuing-education/tackle-ruck/breakdown', },
                    {
                      label: 'Decision Methodology',
                      link: '/referee-resources/continuing-education/tackle-ruck/decision-methodology',
                    },
                  ]
                },
                {
                  label: 'Scrum',
                  items: [
                    { label: 'Overview', link: '/referee-resources/continuing-education/scrum/overview', },
                    { label: 'Setup', link: '/referee-resources/continuing-education/scrum/setup', },
                    { label: 'Engagement', link: '/referee-resources/continuing-education/scrum/engagement', },
                    { label: 'Dominance', link: '/referee-resources/continuing-education/scrum/dominance', },
                    { label: 'Shapes', link: '/referee-resources/continuing-education/scrum/shapes', },
                  ]
                },
                { label: '7s', link: '/referee-resources/continuing-education/7s', },
                { label: 'Assistant Refereeing', link: '/referee-resources/continuing-education/ar', },
                { label: 'Contextual Refereeing', link: '/referee-resources/continuing-education/contextual-refereeing', },
              ]
            },
            {
              label: 'Coaching', items: [
                { label: 'Coaching Overview', link: '/referee-resources/coaching/coaching-overview', },
                { label: 'Being Coached', link: '/referee-resources/coaching/being-coached', },
                { label: 'Coaching Referees', link: '/referee-resources/coaching/coaching-referees', },
              ]
            }
          ]
        },
        {
          label: 'Society Kit',
          link: '/society-kit',
        },
        {
          label: 'Society Information',
          link: '/society-info',
        },
      ],
    }),
  ],
});
