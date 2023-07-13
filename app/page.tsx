'use client'

import { HeaderSearch as Navbar } from './components/Navbar'
import { CardsCarousel as Carousel } from './components/Carousel'

import { list } from '../public/list.json'

export default function Home() {

  return (
    <>
      <Navbar />

      <div style={{ marginTop: 'calc(100vh/5)' }}>
        {/* <Carousel data={list} /> */}
        <ArticlesCardsGrid />
      </div>
    </>
  )
}


import { createStyles, SimpleGrid, Card, Image, Text, Container, AspectRatio, Grid, Flex, Button, Group } from '@mantine/core';
import { useRef } from 'react'

const useStyles = createStyles((theme) => ({
  card: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',

    '&:hover': {
      transform: 'scale(1.01)',
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
  },
}));

function ArticlesCardsGrid() {
  const { classes } = useStyles();

  const cards = list.map((book) => (
    <Flex key={book.name} direction="column" align="center" justify="center">
      <Card key={book.name} p="md" radius="md" component="a" className={classes.card} id={book.name.toLowerCase()}>
        <AspectRatio w={300} ratio={350 / 495}>
          <Image src={book.image} alt={book.name.toLowerCase()} />
        </AspectRatio>
        <div className="btn-group mt-5 w-[164px]">
          <button className="btn hover:btn-active w-11/12" onClick={() => { window.open(book.link) }}>Download</button>
          <button className="btn hover:btn-active w-11/12" onClick={() => { window.open(book.name) }}>Read</button>
        </div>

      </Card>
    </Flex >
  ));

  return (
    <SimpleGrid cols={4} spacing={50} mt={10} mx="auto" style={{ maxWidth: 1500, overflow: 'hidden' }}>
      {cards}
    </SimpleGrid>
  );
}