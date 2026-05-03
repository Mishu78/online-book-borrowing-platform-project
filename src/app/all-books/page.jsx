"use client";

import React, { useEffect, useState } from "react";
import BookCard from "@/components/BookCard";

const AllBookPage = () => {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");

  
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  
  const categories = ["All"];
  books.forEach((book) => {
    if (!categories.includes(book.category)) {
      categories.push(book.category);
    }
  });


  let filteredBooks = books;

  
  if (selectedCategory !== "All") {
    filteredBooks = filteredBooks.filter(
      (book) => book.category === selectedCategory
    );
  }


  if (searchText !== "") {
    filteredBooks = filteredBooks.filter((book) =>
      book.title.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">


      <div className="mb-6">
        <input
          type="text"
          placeholder="🔍 Search books..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full px-4 py-3 border rounded-xl"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">


        <div className="md:col-span-3">
          <div className="bg-white border rounded-xl p-4">

            <h2 className="text-lg font-bold mb-3">
              Categories
            </h2>

            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`block w-full text-left p-2 rounded mb-2
                  ${selectedCategory === cat ? "bg-blue-600 text-white" : "bg-gray-100"}
                `}
              >
                {cat}
              </button>
            ))}

          </div>
        </div>


        <div className="md:col-span-9">

          <h1 className="text-2xl font-bold mb-4">
            {selectedCategory} Books
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};

export default AllBookPage;