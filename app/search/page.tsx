"use client";

import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { list } from "../../public/list.json";
import { conformsTo } from "lodash";
import { Flex, SimpleGrid } from "@mantine/core";

export default function SearchPage() {
  let [query, setQuery] = useState("");
  let [cols, setCols] = useState(4);
  let [maxWidth, setMaxWidth] = useState(1800);
  // get the query and results from the url

  // put the query in a variable in useeffect
  useEffect(() => {
    let q = window.location.href.split("?query=")[1];
    setQuery(q.split("&")[0]);

    // set the number of columns
    let cols = 4,
      maxWidth = 1800;
    if (window.innerWidth < 1800) {
      cols = 3;
      maxWidth = 1200;
    }
    if (window.innerWidth < 1200) {
      cols = 2;
      maxWidth = 800;
    }
    if (window.innerWidth < 800) {
      cols = 1;
      maxWidth = 400;
    }
    setCols(cols);
    setMaxWidth(maxWidth);
  }, []);

  // filter the results for name and tags and return the book
  let results = list.filter(
    (book) =>
      query.toLowerCase() == book.name.toLowerCase() ||
      book.name.toLowerCase().includes(query.toLowerCase()) ||
      book.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()) || query.toLowerCase() == tag.toLowerCase())
  );

  // set the title
  useEffect(() => {
    document.title = `Search Results for ${query} | Koding Books`;
  }, []);

  return (
    <div className="bg-base-100">
      {/* floating button to back to homepage */}
      <div
        className="fixed top-5 left-5 z-50 tooltip tooltip-right"
        data-tip={"Back to Homepage"}
      >
        <button
          className="btn btn-primary btn-circle btn-lg"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-arrow-narrow-left"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <line x1="5" y1="12" x2="19" y2="12" />
            <line x1="5" y1="12" x2="9" y2="16" />
            <line x1="5" y1="12" x2="9" y2="8" />
          </svg>
        </button>
      </div>

      <div className="container mx-auto bg-base-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mt-10">
            Search Results for {query}
          </h1>
          <p className="text-xl mt-5">Found {results.length} results</p>
        </div>

        <SimpleGrid
          cols={cols}
          spacing={100}
          mt={10}
          mx="auto"
          style={{ maxWidth: maxWidth, marginTop: "2.5rem" }}
          className="bg-base-100"
        >
          {results.map(
            (book: { name: any; image: any; link: any; tags: any }) => (
              <Flex
                key={book.name}
                direction="column"
                align="center"
                justify="center"
              >
                <Card
                  key={book.name}
                  image={book.image}
                  link={book.link}
                  name={book.name}
                  tags={book.tags}
                />
              </Flex>
            )
          )}
        </SimpleGrid>
      </div>
    </div>
  );
}
