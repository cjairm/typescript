# Description

Given two strings, write a function to determine if the second string is an anagramof the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as, "cinema" formed from "iceman".

# Example Output

| Input                 | Output        |
|:---------------------:|:-------------:|
| "", ""                | True          |
|                       |               |
| "aaz", "zza"          | False         |
|                       |               |
| "anagram", "nagaram"  | True          |
|                       |               |
| "awesome", "awesom"   | False         |

# Pseudo code

This was my thinking before resolve the problem.
```
create function called "isAnagramValid"

    if both strings has the same length... we continue

    if both strings are the same... We stop

    Iterate first string and save how many letters exists

    Iterate second string and save how many letter exists

    Iterate first new array/object created

        if the letter exists. Continue

        If number of characters exists. Continue

    Return true
```

# How to use it

* Download the files
* Save them in some folder
* Execute `npm install -g typescript`
* Execute `tsc index.ts`
* Run in your preferred browser the index.html
    * If you want to run the tests.
    * Execute `npm i`
    * To run test run `npm run test`

# Author

Carlos Mendez

## Why 0(n)?

This is just to obtain vizually how fast is the program, and is called Big O notation.

### Created at 

Jun 24, 2020

### Same algorithm, different languages

* [Golang](https://github.com/cjairm/go/tree/master/Algorithms-Go/001_anagram)
* [Python](https://github.com/cjairm/python/tree/master/Algoritms-Py/001_anagram)
* [JavaScript](https://github.com/cjairm/javascript/tree/master/Algorithms-JS/001_anagram)
* [C++(Arduino)](https://github.com/cjairm/arduino/tree/master/Algorithms-Cpp/001_anagram)