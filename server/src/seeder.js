const seeder = [
  {
    name: 'Bash',
    creator: 'Brian Fox',
    year: 1989,
    website: 'https://www.gnu.org/software/bash/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Gnu-bash-logo.svg'
  },
  {
    name: 'Common Lisp',
    creator:
      'Scott Fahlman, Richard P. Gabriel, David A. Moon, Kent Pitman, Guy Steele, Dan Weinreb',
    year: 1984,
    website: 'https://common-lisp.net/',
    logo: 'https://common-lisp.net/static/imgs/lisplogo.png'
  },
  {
    name: 'Ada',
    creator: 'Jean Ichbiah, Tucker Taft',
    year: 1980,
    website: 'http://www.adaic.org/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Ada_Mascot_with_slogan.svg'
  },
  {
    name: 'Dart',
    creator: 'Lars Bak, Kasper Lund',
    year: 2011,
    website: 'https://dart.dev/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Dart_programming_language_logo.svg'
  },
  {
    name: 'Visual Basic',
    creator: 'Microsoft',
    year: 2001,
    website: 'https://docs.microsoft.com/dotnet/visual-basic/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/40/VB.NET_Logo.svg'
  },
  {
    name: 'Swift',
    creator: 'Chris Lattner, Doug Gregor, John McCall, Ted Kremenek, Joe Groff, Apple Inc.',
    year: 2014,
    website: 'https://www.swift.org/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg'
  },
  {
    name: 'Rust',
    creator: 'Graydon Hoare',
    year: 2010,
    website: 'https://www.rust-lang.org/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg'
  },
  {
    name: 'Ruby',
    creator: 'Yukihiro Matsumoto',
    year: 1995,
    website: 'https://www.ruby-lang.org/en/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg'
  },
  {
    name: 'R',
    creator: 'Ross Ihaka, Robert Gentleman',
    year: 1993,
    website: 'https://www.r-project.org/',
    logo: 'https://www.r-project.org/logo/Rlogo.svg'
  },
  {
    name: 'Python',
    creator: 'Guido van Rossum',
    year: 1991,
    website: 'https://www.python.org/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg'
  },
  {
    name: 'PHP',
    creator: 'Rasmus Lerdorf',
    year: 1991,
    website: 'https://www.php.net/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg'
  },
  {
    name: 'Perl',
    creator: 'Larry Wall',
    year: 1987,
    website: 'https://www.perl.org/',
    logo: 'https://cdn.perl.org/perlweb/images/icons/header_camel.png'
  },
  {
    name: 'Lua',
    creator: 'Roberto Ierusalimschy, Waldemar Celes, Luiz Henrique de Figueiredo',
    year: 1993,
    website: 'https://www.lua.org/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Lua-Logo.svg'
  },
  {
    name: 'Kotlin',
    creator: 'JetBrains',
    year: 2011,
    website: 'https://kotlinlang.org/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Kotlin_logo_2021.svg'
  },
  {
    name: 'Julia',
    creator: 'Jeff Bezanson, Alan Edelman, Stefan Karpinski, Viral B. Shah',
    year: 2012,
    website: 'https://julialang.org/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Julia_Programming_Language_Logo.svg'
  },
  {
    name: 'JavaScript',
    creator: 'Brendan Eich',
    year: 1995,
    website: 'http://www.ecma-international.org/publications-and-standards/standards/ecma-262/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg'
  },
  {
    name: 'Java',
    creator: 'James Gosling',
    year: 1995,
    website: 'https://www.java.com/en/',
    logo: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg'
  },
  {
    name: 'Go',
    creator: 'Robert Griesemer, Rob Pike, Ken Thompson',
    year: 2009,
    website: 'https://go.dev',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg'
  },
  {
    name: 'Fortran',
    creator: 'John Backus',
    year: 1957,
    website: 'https://fortran-lang.org/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Fortran_logo.svg'
  },
  {
    name: 'Elixir',
    creator: 'José Valim',
    year: 2012,
    website: 'https://elixir-lang.org/',
    logo: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Elixir_programming_language_logo.png'
  },
  {
    name: 'D',
    creator: 'Walter Bright, Andrei Alexandrescu',
    year: 2001,
    website: 'https://dlang.org/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/D_Programming_Language_logo.svg'
  },
  {
    name: 'Clojure',
    creator: 'Rich Hickey',
    year: 2007,
    website: 'https://clojure.org/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Clojure_logo.svg'
  },
  {
    name: 'C#',
    creator: 'Anders Hejlsberg',
    year: 2000,
    website: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/C_Sharp_wordmark.svg'
  },
  {
    name: 'C++',
    creator: 'Bjarne Stroustrup',
    year: 1985,
    website: 'https://isocpp.org/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg'
  },
  {
    name: 'C',
    creator: 'Dennis Ritchie',
    year: 1972,
    website: 'https://www.iso.org/standard/74528.html',
    logo: 'https://www.clipartmax.com/png/full/351-3515666_c-language-global-or-external-variables-with-examples-c-programming-logo.png'
  },
  {
    name: 'Scala',
    creator: 'Martin Odersky',
    year: 2004,
    website: 'https://www.scala-lang.org/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Scala-full-color.svg'
  }
]

module.exports = seeder
