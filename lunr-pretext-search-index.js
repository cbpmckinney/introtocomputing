var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "front-preface",
  "level": "1",
  "url": "front-preface.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " Preface  This book is an evolving set of notes for CSC-101 at Wabash College, a course that introduces computer science as a discipline its big ideas, its history, and its way of thinking before students move on to an introductory course in Python programming.   "
},
{
  "id": "sec-what-is-computer-science",
  "level": "1",
  "url": "sec-what-is-computer-science.html",
  "type": "Section",
  "number": "1.1",
  "title": "Computation, Broadly Construed",
  "body": " Computation, Broadly Construed   Placeholder text.  "
},
{
  "id": "sec-bits-and-binary",
  "level": "1",
  "url": "sec-bits-and-binary.html",
  "type": "Section",
  "number": "2.1",
  "title": "Bits and Binary",
  "body": " Bits and Binary   Placeholder text.  "
},
{
  "id": "sec-what-is-an-algorithm",
  "level": "1",
  "url": "sec-what-is-an-algorithm.html",
  "type": "Section",
  "number": "3.1",
  "title": "What Is an Algorithm?",
  "body": " What Is an Algorithm?   Placeholder text.  "
},
{
  "id": "sec-logic-gates",
  "level": "1",
  "url": "sec-logic-gates.html",
  "type": "Section",
  "number": "4.1",
  "title": "Logic Gates and Circuits",
  "body": " Logic Gates and Circuits   Placeholder text.  "
},
{
  "id": "sec-privacy-and-data",
  "level": "1",
  "url": "sec-privacy-and-data.html",
  "type": "Section",
  "number": "5.1",
  "title": "Privacy and Data",
  "body": " Privacy and Data   Placeholder text.  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
