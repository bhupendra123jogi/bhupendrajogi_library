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

  let autocomplete: any[];
  // set the data for the autocomplete to search for tags and names
  autocomplete = list.map(book => book.tags)
  autocomplete = autocomplete.flat()
  autocomplete = autocomplete.map(tag => splitCombinedWords(tag))
  autocomplete = autocomplete.concat(list.map(book => book.name))
  autocomplete = autocomplete.sort()
  autocomplete = autocomplete.filter((item, index) => autocomplete.indexOf(item) === index)


  const data = list.map(book => book.name)
  data.sort();

  useEffect(() => {
    let search

    if (value) {
      search = list.filter(book => book.name.toLowerCase().includes(value.toLowerCase()))
      if (search.length === 0) {
        search = list.filter(book => book.tags.some(tag => tag.toLowerCase().includes(value.toLowerCase())))
        if (search.length === 0) {
          console.log("no books found")
        }
      }

      // redirect /search with the search results on enter

      // listen for enter
      document.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
          window.location.href = `/search?query=${value}`
        }
      });

      // window.location.href = `/search?query=${value}&results=${JSON.stringify(results)}`
    }
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
            data={autocomplete}
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
import { Hash } from 'crypto';

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
