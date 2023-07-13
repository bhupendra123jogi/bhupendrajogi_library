'use client'

import { createStyles, Header, Autocomplete, Group, Burger, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBook, IconBook2, IconBooks, IconHomeSearch, IconList, IconSearch, IconSortAscendingLetters } from '@tabler/icons-react';
import { list } from '../../public/list.json';

const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    backgroundColor: '#212f4d',
    boxShadow: '0 1px 10px rgba(0, 0, 0, 1)',
    position: 'fixed',
  },

  inner: {
    height: rem(56),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  search: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
    width: '300px',
  },
}));

interface HeaderSearchProps {
  links: { link: string; label: string }[];
}

export function HeaderSearch() {
  const { classes } = useStyles();
  const [value, setValue] = useState('');
  // const data = list.map((book) => book.name.split(/(?=[A-Z])/))
  //   .map((book) => book.map((word) => word.split(/(?=[A-Z])/).join(' ')))
  //   .map((book) => book.join(' '));

  // const data = list.map((book) => splitCombinedWords(book.name))
  const data = list.map(book => book.name)
  data.sort();

  useEffect(() => {
    if (value) {
      const book = list.find((book) => book.name.toLowerCase() == value.split(' ').join('').toLowerCase());
      if (book) {
        window.open(book.name);
      }
    }
    console.log(value);
  }, [value]);

  return (
    <Header height={56} className={classes.header} mb={120}>
      <div className={classes.inner}>
        <Group style={{
          fontSize: '1.1rem',
          fontWeight: '700',
        }}>
          <IconBooks size="1.5rem" />
          Koding Books
        </Group>

        <Group>
          <Autocomplete
            className={classes.search}
            placeholder="Search"
            icon={<IconSearch size="1rem" stroke={1.5} />}
            data={data}
            limit={10}
            value={value}
            onChange={setValue}
            radius={15}
            bg={'#212f4d'}
            rightSection={<div className='kbd kbd-sm'>/</div>}
          />
        </Group>
      </div>
    </Header>
  );
}

import _ from 'lodash';
import { MutableRefObject, useEffect, useState } from 'react';

function splitCombinedWords(str: string) {
  var words = str.split(/(?=[A-Z])/);  // Split at uppercase letters

  var result = _.map(words, function (word: string, index: number) {
    if (index > 0 && word === word.toUpperCase()) {
      return ' ' + word;
    }
    return _.startCase(word.toLowerCase());
  });

  return result.join(' ');
}
